import type { NavItem } from "./types";

/**
 * Legal / policy pages.
 *
 * Links are always shown in the footer (as the approved design requires).
 * `published` controls the sitemap and is flipped once the client supplies
 * the content — none of it is drafted by the build.
 */
export interface LegalPage extends NavItem {
  published: boolean;
}

export const legalPages: LegalPage[] = [
  { label: "מדיניות פרטיות", href: "/privacy", published: false },
  { label: "תנאי שימוש", href: "/terms", published: false },
  { label: "הצהרת נגישות", href: "/accessibility", published: false },
  { label: "מדיניות עוגיות", href: "/cookies", published: false },
];

export const publishedLegalPages = legalPages.filter((p) => p.published);
