import type { Brand, BrandSlug } from "./types";

/**
 * The five brands sold by AUTORAN.
 * Taglines follow the approved homepage design (spelling corrected).
 * Logos and tile imagery are resolved from /public — see src/content/assets.ts.
 */
export const brands: Brand[] = [
  {
    slug: "hyundai",
    name: "Hyundai",
    nameHe: "יונדאי",
    tagline: "טכנולוגיה לחיים טובים יותר",
    tileTone: "dark",
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    nameHe: "מיצובישי",
    tagline: "אמינות שמובילה קדימה",
    tileTone: "dark",
  },
  {
    slug: "jaecoo",
    name: "JAECOO",
    nameHe: "ג׳ייקו",
    tagline: "לאלה שמחפשים יותר",
    tileTone: "dark",
  },
  {
    slug: "omoda",
    name: "OMODA",
    nameHe: "אומודה",
    tagline: "עיצוב וחדשנות",
    tileTone: "dark",
  },
  {
    slug: "ora",
    name: "ORA",
    nameHe: "אורה",
    tagline: "סטייל לכל דרך",
    tileTone: "light",
  },
];

export function getBrand(slug: BrandSlug): Brand {
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) throw new Error(`Unknown brand: ${slug}`);
  return brand;
}
