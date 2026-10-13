import { ArrowLeft, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "@/content/types";

interface VehicleCardProps {
  brandName: string;
  modelName: string;
  description?: string;
  image?: ImageAsset;
  detailsHref: string;
  testDriveHref?: string;
  headingLevel?: "h3" | "h4";
}

/**
 * Showroom vehicle card. Two explicit actions (details / test drive) rather
 * than a stretched link, so each is reachable and announced on its own.
 * Without an authorised photo it shows a typographic placeholder — the model
 * name set large in the brand tint — and a visible "photo pending" note.
 */
export function VehicleCard({
  brandName,
  modelName,
  description,
  image,
  detailsHref,
  testDriveHref,
  headingLevel: Heading = "h3",
}: VehicleCardProps) {
  return (
    // Mobile: compact horizontal row (photo beside text). sm+: vertical card.
    <article className="group flex h-full overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:flex-col">
      {/* Image duplicates the details link for pointer users; hidden from AT/keyboard. */}
      <Link
        href={detailsHref}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block w-[40%] shrink-0 overflow-hidden bg-[var(--brand-accent-soft)] sm:aspect-[2/1] sm:w-full"
      >
        {image ? (
          <Image
            src={image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 40vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-2 sm:gap-3 sm:px-4">
            {/* Decorative watermark drawn by CSS (pseudo-element), not page text. */}
            <span
              aria-hidden="true"
              data-watermark={modelName}
              className="text-center text-xl leading-none font-extrabold tracking-tight text-[var(--brand-accent)] opacity-[0.14] before:content-[attr(data-watermark)] sm:text-5xl"
            />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white/80 px-2 py-0.5 text-[0.6875rem] font-medium text-ink-muted sm:px-3 sm:py-1 sm:text-xs">
              <ImageIcon className="size-3.5 shrink-0" />
              <span className="sm:hidden">תמונה ממתינה</span>
              <span className="hidden sm:inline">תמונת הדגם ממתינה לקובץ מאושר</span>
            </span>
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col px-4 pt-3 pb-2 sm:px-5 sm:pt-4 sm:pb-5">
        <p lang="en" className="text-[0.6875rem] font-bold tracking-[0.18em] text-[var(--brand-accent)] uppercase sm:text-xs">
          {brandName}
        </p>
        <Heading lang="en" className="mt-0.5 text-title font-extrabold text-ink sm:mt-1">
          {modelName}
        </Heading>
        {description && <p className="mt-0.5 text-sm text-ink-muted sm:mt-1 sm:text-base">{description}</p>}

        <div aria-hidden="true" className="flex-1 sm:min-h-4" />
        <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:border-t sm:border-line sm:pt-3">
          <Link
            href={detailsHref}
            className="inline-flex min-h-10 items-center gap-1.5 text-[0.9375rem] font-semibold text-forest-700 underline-offset-4 hover:underline sm:min-h-11"
          >
            לפרטי הדגם
            <span className="sr-only"> {modelName}</span>
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
          {testDriveHref && (
            <Link
              href={testDriveHref}
              className="inline-flex min-h-10 items-center text-sm font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline sm:min-h-11"
            >
              לתיאום נסיעת מבחן
              <span className="sr-only"> ב־{modelName}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
