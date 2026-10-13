import type { CSSProperties, ReactNode } from "react";
import type { BrandTheme } from "@/content/brand-pages";

/** Exposes a brand's theme as CSS custom properties for everything inside it. */
export function BrandThemeScope({ theme, children }: { theme: BrandTheme; children: ReactNode }) {
  const style = {
    "--brand-accent": theme.accent,
    "--brand-accent-soft": theme.accentSoft,
    "--brand-hero-surface": theme.heroSurface,
    "--brand-panel": theme.panel,
  } as CSSProperties;
  return <div style={style}>{children}</div>;
}
