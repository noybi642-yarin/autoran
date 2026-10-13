/**
 * Content model for the AUTORAN site.
 *
 * Every business fact carries a `verification` status so that unverified
 * content is never presented as confirmed. Components must not invent
 * fallbacks for missing data — they render a clearly marked "pending" state.
 */

/** `verified` = confirmed against a primary source and approved for publishing. */
export type Verification = "verified" | "pending";

export type BrandSlug = "hyundai" | "mitsubishi" | "jaecoo" | "omoda" | "ora";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Who supplied/authorised the image (e.g. importer media kit). */
  credit?: string;
}

export interface Brand {
  slug: BrandSlug;
  /** Display name, always the manufacturer's Latin wordmark text. */
  name: string;
  /** Hebrew name, used in running text and for screen readers. */
  nameHe: string;
  /** Short Hebrew positioning line. Marketing copy — awaiting client approval. */
  tagline: string;
  /** Visual atmosphere tokens for the brand experience (see globals.css). */
  theme: {
    /** CSS custom property suffix, e.g. "hyundai" -> var(--brand-hyundai) */
    token: BrandSlug;
  };
  /** Official brand logo, only when an authorised asset is supplied. */
  logo?: ImageAsset;
}

export interface Vehicle {
  slug: string;
  brand: BrandSlug;
  /** Model name exactly as marketed, e.g. "Outlander", "J7". */
  model: string;
  verification: Verification;
  /** Short, accurate Hebrew introduction. `null` until verified copy is supplied. */
  intro: string | null;
  /** Authorised official imagery. Empty until supplied. */
  images: ImageAsset[];
  /** Location ids where this model is sold. Empty until verified. */
  soldAt: string[];
}

export type LocationKind = "showroom" | "service";

export interface Location {
  id: string;
  kind: LocationKind;
  name: string;
  address: {
    street: string;
    city: string;
    /** Extra context such as "אזור התעשייה". */
    area?: string;
  };
  phone: string;
  parking?: string;
  brands: BrandSlug[];
  /** Brand list may be partial until confirmed with the client. */
  brandsVerification: Verification;
  hours?: { label: string; value: string }[];
  hoursVerification: Verification;
  verification: Verification;
  /** Where the details were cross-checked. Internal — not rendered. */
  sources: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
