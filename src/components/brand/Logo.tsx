import Image from "next/image";
import Link from "next/link";
import { getSiteLogo } from "@/content/assets";
import { site } from "@/content/site";
import { cx } from "@/lib/cx";

/**
 * AUTORAN logo — the supplied file only (see src/content/assets.ts).
 * The logo is never recreated in type or CSS. If no file exists this renders
 * an empty, explicitly labelled slot of the same footprint.
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  const logo = getSiteLogo(dark);
  return (
    <Link
      href="/"
      aria-label={`${site.name} — לדף הבית`}
      className={cx("relative block shrink-0", className)}
    >
      {logo ? (
        <span
          className="relative block h-11 sm:h-12 xl:h-[3.75rem]"
          style={{ aspectRatio: logo.frame?.aspectRatio ?? "149 / 54" }}
        >
          <Image
            src={logo.src}
            alt=""
            fill
            priority={!dark}
            sizes="180px"
            unoptimized={logo.src.endsWith(".svg")}
            style={{ objectPosition: logo.frame?.objectPosition }}
            className={cx(
              logo.frame ? "object-cover" : "object-contain object-right",
              // Lets the off-white crop background disappear into the white header.
              !dark && "mix-blend-multiply",
            )}
          />
        </span>
      ) : (
        <span
          data-missing-asset="autoran-logo"
          className={cx(
            "flex h-11 w-[9.5rem] items-center justify-center rounded-md border border-dashed text-center text-[0.6875rem] leading-tight font-medium sm:h-12 sm:w-[10.5rem]",
            dark ? "border-white/35 text-white/75" : "border-line-strong text-ink-subtle",
          )}
        >
          לוגו אוטורן
          <br />
          ממתין לקובץ המקורי
        </span>
      )}
    </Link>
  );
}
