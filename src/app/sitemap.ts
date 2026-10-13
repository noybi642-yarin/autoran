import type { MetadataRoute } from "next";
import { publishedLegalPages } from "@/content/legal";
import { site } from "@/content/site";

/**
 * Only routes that exist are listed. Add each page here as it ships
 * (brands, cars, financing… arrive in Phases 1C–1E).
 */
const liveRoutes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...liveRoutes, ...publishedLegalPages.map((p) => p.href)].map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
