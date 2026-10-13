import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

interface SectionHeaderProps {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional "see all" link shown at the end of the row. */
  link?: { href: string; label: string };
  className?: string;
}

/** Title on the right, optional "see all" link on the left — as in the approved design. */
export function SectionHeader({ id, title, description, link, className }: SectionHeaderProps) {
  return (
    <div className={cx("flex items-end justify-between gap-4", className)}>
      <div>
        <h2 id={id} className="text-headline font-extrabold text-balance text-forest-950">
          {title}
        </h2>
        {description && <p className="mt-1.5 text-ink-muted">{description}</p>}
      </div>
      {link && (
        <Link
          href={link.href}
          className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-[0.9375rem] font-semibold text-forest-700 underline-offset-4 hover:underline"
        >
          {link.label}
          <ArrowLeft aria-hidden="true" className="size-4" />
        </Link>
      )}
    </div>
  );
}
