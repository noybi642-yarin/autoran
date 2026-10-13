import Image from "next/image";
import Link from "next/link";
import { getSiteLogo } from "@/content/assets";
import { site } from "@/content/site";
import { cx } from "@/lib/cx";

/**
 * AUTORAN logo — the ORIGINAL supplied file only (see docs/ASSETS.md).
 * The logo is never recreated in type or CSS. Until the file is supplied this
 * renders an empty, explicitly labelled slot of the same footprint.
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const logo = getSiteLogo(tone === "dark");
  return (
    <Link
      href="/"
      aria-label={`${site.name} — לדף הבית`}
      className={cx("relative block h-11 w-[9.5rem] shrink-0 sm:h-12 sm:w-[10.5rem]", className)}
    >
      {logo ? (
        <Image
          src={logo.src}
          alt=""
          fill
          priority
          sizes="168px"
          unoptimized={logo.src.endsWith(".svg")}
          className="object-contain object-right"
        />
      ) : (
        <span
          data-missing-asset="autoran-logo"
          className={cx(
            "flex h-full w-full items-center justify-center rounded-md border border-dashed text-center text-[0.6875rem] leading-tight font-medium",
            tone === "dark" ? "border-white/35 text-white/75" : "border-line-strong text-ink-subtle",
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
