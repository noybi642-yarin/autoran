"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import type { ImageAsset } from "@/content/types";
import { cx } from "@/lib/cx";

export interface HeroSlide {
  id: string;
  name: string;
  brandName: string;
  tagline?: string;
  image?: ImageAsset;
  brandLogo?: ImageAsset;
}

const SIZES = "(min-width: 1024px) 66vw, 100vw";

/**
 * Hero with an optional manual carousel (no autoplay). Headline/CTAs are
 * passed as children and stay fixed across slides.
 *
 * Desktop: photo anchored left at its own proportions, its right edge faded
 * into a blurred copy of the same photo so the headline side stays calm.
 * Mobile: text first, then the full uncropped photo.
 */
export function HeroCarousel({ slides, children }: { slides: HeroSlide[]; children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const go = (i: number) => setIndex((i + count) % count);
  const current = slides[index];
  const showCaption = !current.image?.includesText;

  return (
    <div
      role="region"
      aria-roledescription={count > 1 ? "קרוסלה" : undefined}
      aria-label="רכבים נבחרים"
      className="relative isolate flex flex-col overflow-hidden lg:block lg:h-[clamp(30rem,34vw,38rem)]"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || count < 2) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        // RTL: swiping right reveals the next slide.
        if (Math.abs(dx) > 50) go(index + (dx > 0 ? 1 : -1));
      }}
    >
      {/* Desktop backdrop: blurred extension of the current photo */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 hidden bg-placeholder lg:block">
        {current.image && (
          <Image
            src={current.image.src}
            alt=""
            fill
            sizes={SIZES}
            className="scale-110 object-cover object-right blur-2xl"
          />
        )}
      </div>
      <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 -z-10 hidden lg:block" />

      {/* Headline + CTAs */}
      <div className="lg:absolute lg:inset-0">
        <div className="mx-auto flex h-full w-full max-w-[84rem] flex-col justify-center px-4 pt-8 pb-7 sm:px-6 lg:px-10 lg:py-0">
          {children}
        </div>
      </div>

      {/* Slides */}
      <div
        aria-live={count > 1 ? "polite" : undefined}
        className="relative aspect-[625/341] w-full bg-placeholder lg:absolute lg:inset-y-0 lg:end-0 lg:-z-20 lg:aspect-auto lg:w-[66%] lg:bg-transparent lg:[mask-image:linear-gradient(to_right,black_84%,transparent)]"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            role={count > 1 ? "group" : undefined}
            aria-roledescription={count > 1 ? "שקופית" : undefined}
            aria-label={count > 1 ? `${i + 1} מתוך ${count}: ${slide.name}` : undefined}
            aria-hidden={i !== index}
            inert={i !== index}
            className={cx(
              "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out-soft)]",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <Photo
              image={slide.image}
              placeholderLabel={`${slide.name} — תמונת רכב ראשית`}
              sizes={SIZES}
              priority={i === 0}
              position="0% 100%"
            />
          </div>
        ))}
      </div>

      {/* Caption + controls */}
      {(count > 1 || showCaption) && (
        <div className="mx-auto flex w-full max-w-[84rem] items-end justify-between gap-4 px-4 py-4 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-10 lg:pb-8">
          {count > 1 ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-[var(--shadow-card)] transition hover:bg-forest-50"
              >
                <ChevronRight aria-hidden="true" className="size-5" />
                <span className="sr-only">לרכב הקודם</span>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-[var(--shadow-card)] transition hover:bg-forest-50"
              >
                <ChevronLeft aria-hidden="true" className="size-5" />
                <span className="sr-only">לרכב הבא</span>
              </button>
              <div className="ms-2 flex items-center">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => go(i)}
                    className="group inline-flex size-6 items-center justify-center"
                  >
                    <span
                      aria-hidden="true"
                      className={cx(
                        "h-2 rounded-full transition-all duration-300",
                        i === index ? "w-5 bg-forest-700" : "w-2 bg-ink/30 group-hover:bg-ink/50",
                      )}
                    />
                    <span className="sr-only">{`הצגת ${slide.name}`}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <span />
          )}

          {showCaption && (
            <p className="flex items-center gap-3 text-end text-ink lg:text-white">
              <span>
                <span lang="en" className="block text-base font-bold tracking-wide uppercase sm:text-lg">
                  {current.name}
                </span>
                {current.tagline && <span className="block text-sm">{current.tagline}</span>}
              </span>
              {current.brandLogo && (
                <span className="relative block h-9 w-20">
                  <Image
                    src={current.brandLogo.src}
                    alt={current.brandLogo.alt}
                    fill
                    sizes="80px"
                    unoptimized={current.brandLogo.src.endsWith(".svg")}
                    className="object-contain"
                  />
                </span>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
