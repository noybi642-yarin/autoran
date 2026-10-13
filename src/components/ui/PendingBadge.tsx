import { cx } from "@/lib/cx";

/**
 * Marks content that is intentionally missing until verified/approved.
 * Visible to everyone — the site never hides gaps behind invented content.
 */
export function PendingBadge({
  children = "ממתין לאישור",
  tone = "light",
  className,
}: {
  children?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "dark"
          ? "border-white/25 bg-white/10 text-white"
          : "border-line-strong bg-surface/90 text-ink-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}
