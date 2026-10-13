import type { BrandSlug, Vehicle } from "./types";

/**
 * Vehicle catalog — the single source of truth for models, kept apart from UI.
 *
 * No specifications, prices, trims or offers are entered until they are
 * verified against the Israeli importer's current data. Taglines come from
 * the approved homepage design. Imagery is resolved from /public by slug —
 * see src/content/assets.ts.
 */
/**
 * Hyundai line-up: model names as listed on Hyundai Israel's 2026 range page
 * (hyundaimotors.co.il/future-2026, read via search index, October 2026 — the
 * site itself was not reachable from the build environment). Every entry stays
 * `pending` until the client confirms the current Israeli catalogue.
 * IONIQ 9 is listed there as "coming soon" and is deliberately not included.
 */
const hyundai = (slug: string, model: string, extra: Partial<Vehicle> = {}): Vehicle => ({
  slug: `hyundai-${slug}`,
  brand: "hyundai",
  model,
  verification: "pending",
  intro: null,
  soldAt: ["herzliya-hyundai"],
  ...extra,
});

export const vehicles: Vehicle[] = [
  // First: the approved homepage/hero model. Listed by the importer as "Tucson Hybrid";
  // the approved design uses "Tucson".
  hyundai("tucson", "Tucson", { tagline: "עוצמה בכל דרך" }),
  hyundai("venue", "Venue"),
  hyundai("kona-hybrid", "Kona Hybrid"),
  hyundai("kona-electric", "Kona Electric"),
  hyundai("santa-fe-hybrid", "Santa Fe Hybrid"),
  hyundai("palisade-hybrid", "Palisade Hybrid"),
  hyundai("elantra", "Elantra"),
  hyundai("sonata", "Sonata"),
  hyundai("ioniq-5", "IONIQ 5"),
  hyundai("ioniq-5-n", "IONIQ 5 N"),
  hyundai("ioniq-6", "IONIQ 6"),
  {
    slug: "mitsubishi-outlander",
    brand: "mitsubishi",
    model: "Outlander",
    verification: "pending",
    intro: null,
    soldAt: ["raanana-showroom"],
  },
  {
    slug: "jaecoo-5",
    brand: "jaecoo",
    model: "J5",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
  {
    slug: "jaecoo-7",
    brand: "jaecoo",
    model: "7",
    displayName: "JAECOO 7",
    tagline: "SUV ללא גבולות",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
  {
    slug: "jaecoo-8",
    brand: "jaecoo",
    model: "J8",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
  {
    slug: "omoda-7",
    brand: "omoda",
    model: "OMODA 7",
    displayName: "OMODA 7",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
  {
    slug: "omoda-9",
    brand: "omoda",
    model: "OMODA 9",
    displayName: "OMODA 9",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
  {
    slug: "ora-5",
    brand: "ora",
    model: "5",
    displayName: "ORA 5",
    tagline: "סטייל לכל דרך",
    verification: "pending",
    intro: null,
    soldAt: [],
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehiclesByBrand(brand: BrandSlug): Vehicle[] {
  return vehicles.filter((v) => v.brand === brand);
}

/** "Hyundai Tucson", "JAECOO 7", "ORA 5" … */
export function vehicleName(vehicle: Vehicle, brandName: string): string {
  return vehicle.displayName ?? `${brandName} ${vehicle.model}`;
}
