import Image from "next/image";
import type { ImageAsset } from "@/content/types";
import { cx } from "@/lib/cx";
import { PendingBadge } from "./PendingBadge";
import { VehicleSilhouette } from "./VehicleSilhouette";

interface MediaFrameProps {
  image?: ImageAsset;
  /** Shown in the placeholder state, e.g. the model name. */
  placeholderLabel: string;
  sizes: string;
  priority?: boolean;
  tone?: "dark" | "light";
  className?: string;
  /** Extra classes for the illustration in placeholder state. */
  illustrationClassName?: string;
}

/**
 * Vehicle imagery slot. Renders authorised photography when supplied;
 * otherwise a neutral illustration with an explicit "image pending" note.
 * The placeholder is never presented as a photo of the real vehicle.
 */
export function MediaFrame({
  image,
  placeholderLabel,
  sizes,
  priority = false,
  tone = "dark",
  className,
  illustrationClassName,
}: MediaFrameProps) {
  if (image) {
    return (
      <div className={cx("relative overflow-hidden", className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`${placeholderLabel} — תמונה רשמית תתווסף לאחר אישור`}
      className={cx(
        "relative flex items-center justify-center overflow-hidden",
        dark ? "bg-forest-900 text-forest-200" : "bg-sand text-forest-800/70",
        className,
      )}
    >
      {/* Subtle floor light — single soft radial, no decorative gradients elsewhere. */}
      <div
        aria-hidden="true"
        className={cx(
          "absolute inset-x-0 bottom-0 h-2/3",
          dark
            ? "bg-[radial-gradient(60%_60%_at_50%_100%,rgb(159_227_196/0.16),transparent)]"
            : "bg-[radial-gradient(60%_60%_at_50%_100%,rgb(255_255_255/0.9),transparent)]",
        )}
      />
      <VehicleSilhouette className={cx("relative w-[78%] max-w-[44rem]", illustrationClassName)} />
      <PendingBadge tone={dark ? "dark" : "light"} className="absolute bottom-4 start-4">
        תמונה רשמית ממתינה לאישור
      </PendingBadge>
    </div>
  );
}
