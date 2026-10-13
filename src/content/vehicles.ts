import type { BrandSlug, Vehicle } from "./types";

/**
 * Vehicle catalog — the single source of truth for models, kept apart from UI.
 *
 * No specifications, prices, trims or offers are entered until they are
 * verified against the Israeli importer's current data. Taglines come from
 * the approved homepage design. Imagery is resolved from /public by slug —
 * see src/content/assets.ts.
 */
export const vehicles: Vehicle[] = [
  {
    slug: "hyundai-tucson",
    brand: "hyundai",
    model: "Tucson",
    tagline: "עוצמה בכל דרך",
    verification: "pending",
    intro: null,
    soldAt: ["herzliya-hyundai"],
  },
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
