import type { Brand, BrandSlug } from "./types";

/**
 * The five brands sold by AUTORAN.
 * Taglines are positioning copy written for this rebuild and await client approval.
 * Official logos are deliberately omitted until authorised assets are supplied.
 */
export const brands: Brand[] = [
  {
    slug: "hyundai",
    name: "Hyundai",
    nameHe: "יונדאי",
    tagline: "טכנולוגיה נקייה לחיי היומיום",
    theme: { token: "hyundai" },
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    nameHe: "מיצובישי",
    tagline: "עמידות ואמינות לכל דרך",
    theme: { token: "mitsubishi" },
  },
  {
    slug: "jaecoo",
    name: "JAECOO",
    nameHe: "ג׳ייקו",
    tagline: "רכבי פנאי־שטח עם נוכחות פרימיום",
    theme: { token: "jaecoo" },
  },
  {
    slug: "omoda",
    name: "OMODA",
    nameHe: "אומודה",
    tagline: "עיצוב עירוני נועז ומבט קדימה",
    theme: { token: "omoda" },
  },
  {
    slug: "ora",
    name: "ORA",
    nameHe: "אורה",
    tagline: "סגנון עכשווי עם הרבה אופי",
    theme: { token: "ora" },
  },
];

export function getBrand(slug: BrandSlug): Brand {
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) throw new Error(`Unknown brand: ${slug}`);
  return brand;
}
