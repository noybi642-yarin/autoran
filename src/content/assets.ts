import fs from "node:fs";
import path from "node:path";
import type { BrandSlug, ImageAsset } from "./types";

/**
 * Asset conventions.
 *
 * Authorised files are dropped into /public at the paths below and picked up
 * automatically at build time — no code change needed. When a file is absent,
 * components render a clearly labelled placeholder instead of a substitute.
 *
 * Accepted extensions are tried in order. Full list: docs/ASSETS.md.
 */
const EXTENSIONS = [".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

function resolve(base: string, alt: string): ImageAsset | undefined {
  for (const ext of EXTENSIONS) {
    const rel = `${base}${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, rel))) return { src: `/${rel}`, alt };
  }
  return undefined;
}

export const assetPaths = {
  siteLogo: "brand/autoran-logo",
  /** Optional light version for the dark footer. Falls back to siteLogo. */
  siteLogoOnDark: "brand/autoran-logo-light",
  brandLogo: (slug: BrandSlug) => `brands/${slug}/logo`,
  brandTile: (slug: BrandSlug) => `brands/${slug}/tile`,
  /** Wide (≈16:7) photo for the hero carousel. Sky/space on the right for the headline. */
  vehicleHero: (slug: string) => `vehicles/${slug}/hero`,
  /** Card photo (≈16:9) for listings. */
  vehicleCard: (slug: string) => `vehicles/${slug}/card`,
  /** Optional decorative photo behind "איך תרצו להתקדם?". */
  purchaseBackground: "home/purchase-background",
} as const;

export function getSiteLogo(onDark = false): ImageAsset | undefined {
  const alt = "אוטורן — מרכז מכירה ושירות";
  return (onDark && resolve(assetPaths.siteLogoOnDark, alt)) || resolve(assetPaths.siteLogo, alt);
}

export function getBrandLogo(slug: BrandSlug, name: string): ImageAsset | undefined {
  return resolve(assetPaths.brandLogo(slug), name);
}

export function getBrandTile(slug: BrandSlug, alt: string): ImageAsset | undefined {
  return resolve(assetPaths.brandTile(slug), alt);
}

export function getVehicleImage(
  slug: string,
  kind: "hero" | "card",
  alt: string,
): ImageAsset | undefined {
  const base = kind === "hero" ? assetPaths.vehicleHero(slug) : assetPaths.vehicleCard(slug);
  // A card can fall back to the hero shot, never the other way round.
  return resolve(base, alt) ?? (kind === "card" ? resolve(assetPaths.vehicleHero(slug), alt) : undefined);
}

export function getPurchaseBackground(): ImageAsset | undefined {
  return resolve(assetPaths.purchaseBackground, "");
}
