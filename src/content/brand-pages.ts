import type { BrandSlug } from "./types";

/**
 * Per-brand page configuration.
 *
 * Each brand page composes shared sections (hero, catalog, benefits, contact,
 * location) but owns its copy, colour atmosphere and hero art direction, so
 * Mitsubishi, JAECOO, OMODA and ORA can each get a distinct treatment without
 * forking the AUTORAN design system.
 */
export interface BrandTheme {
  /** Brand identity accent (eyebrows, icons, small details). Never the primary CTA. */
  accent: string;
  /** Very light tint of the accent for surfaces. */
  accentSoft: string;
  /** Hero backdrop / scrim colour behind the headline. */
  heroSurface: string;
  /** Dark brand surface for the assistance panel. */
  panel: string;
}

export interface BrandPageConfig {
  slug: BrandSlug;
  theme: BrandTheme;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    /** Vehicle whose hero photo is used. */
    vehicleSlug: string;
  };
  catalog: {
    title: string;
    text: string;
    /** Shown while any listed model is still pending verification. */
    pendingNotice?: string;
  };
  /** Showroom location ids for this brand. */
  locationIds: string[];
}

export const brandPages: Partial<Record<BrandSlug, BrandPageConfig>> = {
  hyundai: {
    slug: "hyundai",
    theme: {
      accent: "#0b2a5b",
      accentSoft: "#eaf0f7",
      heroSurface: "#f3f6fa",
      panel: "#0b2a5b",
    },
    hero: {
      eyebrow: "יונדאי באוטורן",
      title: "היונדאי הבאה שלכם מתחילה כאן",
      text: "מגלים את דגמי יונדאי, בוחרים את הרכב שמתאים לכם ומתקדמים לנסיעת מבחן.",
      vehicleSlug: "hyundai-tucson",
    },
    catalog: {
      title: "מגלים את דגמי יונדאי",
      text: "הכירו את מגוון הדגמים ובחרו את הרכב שמתאים לכם.",
      pendingNotice: "רשימת הדגמים מבוססת על אתר יבואן יונדאי בישראל ומתעדכנת בהתאם לזמינות.",
    },
    locationIds: ["herzliya-hyundai"],
  },
};

export function getBrandPage(slug: BrandSlug): BrandPageConfig {
  const config = brandPages[slug];
  if (!config) throw new Error(`No brand page configured for ${slug}`);
  return config;
}

/** Internal links that carry brand/model context for future forms. */
export const brandLinks = {
  testDrive: (brand: BrandSlug, model?: string) =>
    `/test-drive?brand=${brand}${model ? `&model=${encodeURIComponent(model)}` : ""}`,
  contact: (brand: BrandSlug) => `/contact?brand=${brand}`,
  model: (slug: string) => `/cars/${slug}`,
};
