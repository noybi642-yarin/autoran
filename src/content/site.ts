import type { ImageAsset, NavItem } from "./types";

export const site = {
  name: "אוטורן",
  nameLatin: "AUTORAN",
  /** Production origin. Used for canonical URLs, sitemap and structured data. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.autoran.co.il",
  description:
    "אוטורן — סוכנות רכב רב־מותגית: יונדאי, מיצובישי, JAECOO, OMODA ו־ORA. אולמות תצוגה ברעננה ובהרצליה ומרכז שירות מורשה ברעננה.",
  /** Independence notice — AUTORAN is not the importer's corporate website. */
  independenceNotice:
    "אוטורן היא סוכנות רכב עצמאית. שמות המותגים, הדגמים והסימנים המסחריים שייכים לבעליהם.",
  /**
   * Original AUTORAN logo. Set once the supplied asset is placed in
   * /public/brand/. Until then <Logo /> renders a clearly marked placeholder.
   */
  logo: null as ImageAsset | null,
} as const;

/** Desktop header — kept short on purpose. */
export const primaryNav: NavItem[] = [
  { label: "מותגים ודגמים", href: "/brands" },
  { label: "מימון וליסינג", href: "/financing" },
  { label: "טרייד־אין", href: "/trade-in" },
  { label: "מרכז שירות", href: "/authorized-service" },
  { label: "סניפים", href: "/locations" },
];

/** Shown in the mobile menu and footer in addition to the primary nav. */
export const secondaryNav: NavItem[] = [
  { label: "אודות", href: "/about" },
  { label: "צרו קשר", href: "/contact" },
];

export const testDriveCta: NavItem = { label: "נסיעת מבחן", href: "/test-drive" };

/** The single vehicle featured in the homepage hero. Awaiting client approval. */
export const heroVehicleSlug = "jaecoo-j7";

/** Three featured vehicles on the homepage. Awaiting client approval. */
export const featuredVehicleSlugs = ["jaecoo-j7", "mitsubishi-outlander", "omoda-9"];
