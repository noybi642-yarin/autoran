import type { BrandSlug, Vehicle } from "./types";

/**
 * Vehicle catalog — the single source of truth for models, kept apart from UI.
 *
 * Phase 1 rule: no specifications, prices, trims or offers are entered here
 * until they are verified against the Israeli importer's current data.
 * Hyundai models are intentionally absent until the current Israeli line-up
 * is verified (Phase 1C).
 */
export const vehicles: Vehicle[] = [
  {
    slug: "mitsubishi-outlander",
    brand: "mitsubishi",
    model: "Outlander",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: ["raanana-showroom"],
  },
  {
    slug: "jaecoo-j5",
    brand: "jaecoo",
    model: "J5",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
  {
    slug: "jaecoo-j7",
    brand: "jaecoo",
    model: "J7",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
  {
    slug: "jaecoo-j8",
    brand: "jaecoo",
    model: "J8",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
  {
    slug: "omoda-7",
    brand: "omoda",
    model: "OMODA 7",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
  {
    slug: "omoda-9",
    brand: "omoda",
    model: "OMODA 9",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
  {
    slug: "ora-5",
    brand: "ora",
    model: "ORA 5",
    verification: "pending",
    intro: null,
    images: [],
    soldAt: [],
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehiclesByBrand(brand: BrandSlug): Vehicle[] {
  return vehicles.filter((v) => v.brand === brand);
}
