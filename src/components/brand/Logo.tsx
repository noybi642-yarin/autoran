import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cx } from "@/lib/cx";

/**
 * AUTORAN logo.
 * Renders the ORIGINAL supplied logo from `site.logo`. Until that asset is
 * provided, shows the business name in plain type inside a dashed frame so
 * it is obvious the real logo is still missing — this is not a redesign.
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label={`${site.name} ${site.nameLatin} — לדף הבית`}
      className={cx("inline-flex shrink-0 items-center", className)}
    >
      {site.logo ? (
        <Image
          src={site.logo.src}
          alt=""
          width={site.logo.width}
          height={site.logo.height}
          priority
          className="h-9 w-auto sm:h-10"
        />
      ) : (
        <span
          data-placeholder="logo"
          title="הלוגו המקורי של אוטורן ממתין להעלאה"
          className={cx(
            "flex items-baseline gap-2 rounded-md border border-dashed px-2.5 py-1",
            dark ? "border-white/35 text-white" : "border-line-strong text-forest-900",
          )}
        >
          <span className="text-xl font-extrabold leading-none">{site.name}</span>
          <span lang="en" className="text-[0.6875rem] font-semibold tracking-[0.18em] opacity-80">
            {site.nameLatin}
          </span>
        </span>
      )}
    </Link>
  );
}
