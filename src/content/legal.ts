import type { NavItem } from "./types";

/**
 * Legal / policy pages infrastructure.
 *
 * Pages are listed here ahead of time so routes, footer links and the sitemap
 * pick them up automatically once `published` is flipped. Content must come
 * from the client (accessibility statement contact person, privacy policy
 * wording, cookie usage) — none of it is drafted by the build.
 */
export interface LegalPage extends NavItem {
  published: boolean;
}

export const legalPages: LegalPage[] = [
  { label: "הצהרת נגישות", href: "/accessibility", published: false },
  { label: "מדיניות פרטיות", href: "/privacy", published: false },
  { label: "מדיניות עוגיות", href: "/cookies", published: false },
];

export const publishedLegalPages = legalPages.filter((p) => p.published);
