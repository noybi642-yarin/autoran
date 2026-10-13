import fs from "node:fs";
import path from "node:path";
import type { BrandSlug, ImageAsset } from "./types";

/**
 * Asset manifest.
 *
 * Each slot lists candidate files in priority order: first the prototype
 * assets supplied under /public/images (cropped from the approved mockup),
 * then the production conventions from docs/ASSETS.md. Dropping a production
 * file at a convention path does NOT override a prototype file — remove the
 * prototype entry here when final assets arrive.
 *
 * `includesText` marks images with text baked in (captions, logos, CTAs) so
 * components don't render the same text again on top.
 */
const EXTENSIONS = [".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

interface Candidate {
  /** Path under /public, with or without extension. */
  file: string;
  includesText?: boolean;
  frame?: ImageAsset["frame"];
}

function resolve(candidates: Candidate[], alt: string): ImageAsset | undefined {
  for (const { file, includesText, frame } of candidates) {
    const names = path.extname(file) ? [file] : EXTENSIONS.map((ext) => file + ext);
    for (const name of names) {
      if (fs.existsSync(path.join(PUBLIC_DIR, name))) {
        return { src: `/${name}`, alt, includesText, frame };
      }
    }
  }
  return undefined;
}

/** Prototype files supplied for the homepage (commit 8750be7). */
const prototype = {
  siteLogo: "images/logos/autoran-logo-preview.png",
  siteLogoOnDark: "images/logos/autoran-footer-logo-preview.png",
  brandTile: (slug: BrandSlug) => `images/brands/${slug}-tile-preview.jpg`,
  vehicleHero: { "hyundai-tucson": "images/hero/hero-tucson-car-preview.jpg" } as Record<string, string>,
  vehicleCard: {
    "hyundai-tucson": "images/cars/tucson-card-preview.jpg",
    "jaecoo-7": "images/cars/jaecoo-7-card-preview.jpg",
    "ora-5": "images/cars/ora-5-card-preview.jpg",
  } as Record<string, string>,
  purchaseBackground: "images/sections/next-steps-car-left-preview.jpg",
};

/** Production conventions — see docs/ASSETS.md. */
export const assetPaths = {
  siteLogo: "brand/autoran-logo",
  siteLogoOnDark: "brand/autoran-logo-light",
  brandLogo: (slug: BrandSlug) => `brands/${slug}/logo`,
  brandTile: (slug: BrandSlug) => `brands/${slug}/tile`,
  vehicleHero: (slug: string) => `vehicles/${slug}/hero`,
  vehicleCard: (slug: string) => `vehicles/${slug}/card`,
  purchaseBackground: "home/purchase-background",
} as const;

const optional = (file: string | undefined, includesText = false): Candidate[] =>
  file ? [{ file, includesText }] : [];

export function getSiteLogo(onDark = false): ImageAsset | undefined {
  const alt = "אוטורן — מרכז מכירה ושירות";
  const light = [{ file: prototype.siteLogo }, { file: assetPaths.siteLogo }];
  return onDark
    ? resolve(
        [
          // The supplied footer crop cuts the subtitle in half: frame rows 26–66 of 73
          // (wordmark only) so no sliced text shows.
          { file: prototype.siteLogoOnDark, frame: { aspectRatio: "175 / 40", objectPosition: "50% 79%" } },
          { file: assetPaths.siteLogoOnDark },
          ...light,
        ],
        alt,
      )
    : resolve(light, alt);
}

export function getBrandLogo(slug: BrandSlug, name: string): ImageAsset | undefined {
  return resolve([{ file: assetPaths.brandLogo(slug) }], name);
}

/** Prototype tiles are full tile renders: brand logo, tagline and CTA are in the image. */
export function getBrandTile(slug: BrandSlug, alt: string): ImageAsset | undefined {
  return resolve(
    [{ file: prototype.brandTile(slug), includesText: true }, { file: assetPaths.brandTile(slug) }],
    alt,
  );
}

export function getVehicleImage(
  slug: string,
  kind: "hero" | "card",
  alt: string,
): ImageAsset | undefined {
  // The prototype hero carries the "HYUNDAI TUCSON / עוצמה בכל דרך" caption.
  const hero = [...optional(prototype.vehicleHero[slug], true), { file: assetPaths.vehicleHero(slug) }];
  if (kind === "hero") return resolve(hero, alt);
  // A card can fall back to a clean hero shot, never the other way round.
  return resolve(
    [...optional(prototype.vehicleCard[slug]), { file: assetPaths.vehicleCard(slug) }, { file: assetPaths.vehicleHero(slug) }],
    alt,
  );
}

export function getPurchaseBackground(): ImageAsset | undefined {
  return resolve([{ file: prototype.purchaseBackground }, { file: assetPaths.purchaseBackground }], "");
}
