import { ArrowDown, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Photo } from "@/components/ui/Photo";
import type { ImageAsset } from "@/content/types";

interface BrandHeroProps {
  brandName: string;
  eyebrow: string;
  title: string;
  text: string;
  image?: ImageAsset;
  /** Placeholder label when no photo exists. */
  imageLabel: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}

const SIZES = "(min-width: 1024px) 64vw, 100vw";

/**
 * Brand hero. Same art direction as the approved homepage hero (photo
 * anchored left, faded into a blurred extension of itself), tinted by the
 * page's brand theme (--brand-hero-surface / --brand-accent).
 * Mobile: text first, then the full uncropped photo.
 */
export function BrandHero({
  brandName,
  eyebrow,
  title,
  text,
  image,
  imageLabel,
  primary,
  secondary,
}: BrandHeroProps) {
  return (
    <section
      aria-labelledby="brand-hero-title"
      className="relative isolate flex flex-col overflow-hidden bg-[var(--brand-hero-surface)] lg:block lg:h-[clamp(30rem,33vw,37rem)]"
    >
      {/* Desktop backdrop: blurred extension of the photo */}
      {image && (
        <div aria-hidden="true" className="absolute inset-0 -z-30 hidden lg:block">
          <Image src={image.src} alt="" fill sizes={SIZES} className="scale-110 object-cover object-right blur-2xl" />
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(to left, var(--brand-hero-surface) 0%, color-mix(in srgb, var(--brand-hero-surface) 90%, transparent) 28%, color-mix(in srgb, var(--brand-hero-surface) 40%, transparent) 40%, transparent 50%)",
        }}
      />

      {/* Copy */}
      <div className="lg:absolute lg:inset-0">
        <div className="mx-auto flex h-full w-full max-w-[84rem] flex-col justify-center px-4 pt-6 pb-7 sm:px-6 lg:px-10 lg:py-0">
          <div className="max-w-[36rem]">
            <nav aria-label="פירורי לחם" className="mb-5 text-sm text-ink-muted">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="inline-flex min-h-6 items-center underline-offset-4 hover:text-ink hover:underline">
                    דף הבית
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronLeft className="size-3.5" />
                </li>
                <li aria-current="page" className="font-medium text-ink">
                  {brandName}
                </li>
              </ol>
            </nav>
            <p className="text-sm font-bold tracking-wide text-[var(--brand-accent)]">{eyebrow}</p>
            <h1
              id="brand-hero-title"
              className="mt-2 text-[clamp(2.125rem,1.4rem+2.6vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.015em] text-balance text-forest-950"
            >
              {title}
            </h1>
            <p className="mt-4 text-lead font-medium text-ink lg:mt-5">{text}</p>
            <div className="mt-7 flex flex-wrap gap-3 lg:mt-8">
              <ButtonLink href={primary.href} size="lg">
                {primary.label}
                <ArrowDown aria-hidden="true" className="size-5" />
              </ButtonLink>
              <ButtonLink href={secondary.href} size="lg" variant="secondary">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="relative aspect-[625/341] w-full bg-placeholder lg:absolute lg:inset-y-0 lg:end-0 lg:-z-20 lg:aspect-auto lg:w-[64%] lg:bg-transparent lg:[mask-image:linear-gradient(to_right,black_84%,transparent)]">
        <Photo image={image} placeholderLabel={imageLabel} sizes={SIZES} priority position="0% 100%" />
      </div>
    </section>
  );
}
