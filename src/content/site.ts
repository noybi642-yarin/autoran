import type { NavItem } from "./types";

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
} as const;

export interface NavEntry extends NavItem {
  /** Optional sub-menu (desktop dropdown / mobile nested list). */
  children?: NavItem[];
}

/** Header navigation, as specified for the approved design. */
export const primaryNav: NavEntry[] = [
  {
    label: "הרכבים שלנו",
    href: "/brands",
    children: [
      { label: "Hyundai", href: "/brands/hyundai" },
      { label: "Mitsubishi", href: "/brands/mitsubishi" },
      { label: "JAECOO", href: "/brands/jaecoo" },
      { label: "OMODA", href: "/brands/omoda" },
      { label: "ORA", href: "/brands/ora" },
    ],
  },
  { label: "מימון וליסינג", href: "/financing" },
  { label: "טרייד אין", href: "/trade-in" },
  { label: "מרכז שירות מורשה", href: "/authorized-service" },
  { label: "סניפים", href: "/locations" },
  { label: "אודות", href: "/about" },
];

/** Footer-only links. */
export const secondaryNav: NavItem[] = [{ label: "צרו קשר", href: "/contact" }];

export const testDriveCta: NavItem = { label: "קביעת נסיעת מבחן", href: "/test-drive" };

/** Hero carousel — one vehicle per slide. Order as approved. */
export const heroVehicleSlugs = ["hyundai-tucson", "jaecoo-7", "ora-5"];

/** "הדגמים הפופולריים" — three featured vehicles, as approved. */
export const featuredVehicleSlugs = ["jaecoo-7", "hyundai-tucson", "ora-5"];
