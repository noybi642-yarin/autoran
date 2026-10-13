import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { ImageAsset } from "@/content/types";
import { cx } from "@/lib/cx";

interface PhotoProps {
  image?: ImageAsset;
  /** What the missing photo should show, e.g. "Hyundai Tucson". */
  placeholderLabel: string;
  sizes: string;
  priority?: boolean;
  /** object-position for art direction, e.g. "30% 60%". */
  position?: string;
  /** Classes for the real image only (e.g. hover zoom). */
  className?: string;
  /** Layout classes for the placeholder only (e.g. where its label sits). */
  placeholderClassName?: string;
  /** Placeholder surface tone. */
  tone?: "light" | "dark";
  /** Short visible label for small slots; the full label stays in aria-label. */
  compact?: boolean;
}

/**
 * Photograph slot that fills its (positioned) parent.
 * With an authorised image: optimised next/image. Without: a plain, clearly
 * labelled placeholder — never an illustration or substitute photo.
 */
export function Photo({
  image,
  placeholderLabel,
  sizes,
  priority = false,
  position,
  className,
  placeholderClassName,
  tone = "light",
  compact = false,
}: PhotoProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={image.src.endsWith(".svg")}
        style={position ? { objectPosition: position } : undefined}
        className={cx("object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`מקום לתמונה: ${placeholderLabel} (ממתינה לקובץ מאושר)`}
      className={cx(
        "absolute inset-0 flex items-center justify-center",
        tone === "dark" ? "text-white/80" : "bg-placeholder text-ink-muted",
        placeholderClassName,
      )}
    >
      <span
        className={cx(
          "flex max-w-[85%] items-center gap-2 rounded-full border px-3.5 py-1.5 text-center text-xs font-medium backdrop-blur-sm",
          !compact && "sm:text-sm",
          tone === "dark" ? "border-white/25 bg-black/20" : "border-line-strong bg-white/75",
        )}
      >
        <ImageIcon aria-hidden="true" className="size-4 shrink-0" />
        {compact ? (
          <span>תמונה ממתינה לאישור</span>
        ) : (
          <span>
            תמונה: <bdi lang="en">{placeholderLabel}</bdi> · ממתינה לקובץ מאושר
          </span>
        )}
      </span>
    </div>
  );
}
