import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

interface SectionHeaderProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Consistent section heading. `id` is referenced by the section's aria-labelledby. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p
            className={cx(
              "mb-3 text-sm font-semibold tracking-wide",
              dark ? "text-forest-200" : "text-forest-700",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className={cx("text-headline font-bold text-balance", dark ? "text-white" : "text-ink")}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cx(
              "mt-4 text-lead text-pretty",
              dark ? "text-forest-100" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
