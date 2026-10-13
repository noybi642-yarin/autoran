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

/**
 * Manual hero carousel (no autoplay — nothing moves unless the visitor asks).
 * The headline/CTAs are passed in as children and stay fixed across slides.
 */
export function HeroCarousel({ slides, children }: { slides: HeroSlide[]; children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const go = (i: number) => setIndex((i + count) % count);
  const current = slides[index];

  return (
    <div
      role="region"
      aria-roledescription="קרוסלה"
      aria-label="רכבים נבחרים"
      className="relative isolate flex min-h-[38rem] flex-col sm:min-h-[36rem] lg:h-[clamp(34rem,40vw,42rem)] lg:min-h-0"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        // RTL: swiping right reveals the next slide.
        if (Math.abs(dx) > 50) go(index + (dx > 0 ? 1 : -1));
      }}
    >
      {/* Slides */}
      <div aria-live="polite" className="absolute inset-0 -z-20 bg-placeholder">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="שקופית"
            aria-label={`${i + 1} מתוך ${count}: ${slide.name}`}
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
              sizes="100vw"
              priority={i === 0}
              position="35% 60%"
              placeholderClassName="items-end pb-36 sm:pb-28 lg:items-center lg:justify-end lg:pb-0 lg:pe-[14%]"
            />
          </div>
        ))}
      </div>

      {/* Readability scrim on the headline side only */}
      <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 -z-10" />
      {current.image && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/45 to-transparent"
        />
      )}

      {/* Headline + CTAs */}
      <div className="mx-auto flex w-full max-w-[84rem] flex-1 flex-col px-4 pt-10 pb-6 sm:px-6 lg:justify-center lg:px-10 lg:py-12">
        {children}
      </div>

      {/* Caption + controls */}
      <div className="mx-auto flex w-full max-w-[84rem] items-end justify-between gap-4 px-4 pb-6 sm:px-6 lg:px-10 lg:pb-8">
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

        <p
          className={cx(
            "flex items-center gap-3 text-end",
            current.image ? "text-white" : "text-ink",
          )}
        >
          <span>
            <span lang="en" className="block text-base font-bold tracking-wide uppercase sm:text-lg">
              {current.name}
            </span>
            {current.tagline && <span className="block text-sm">{current.tagline}</span>}
          </span>
          {current.brandLogo ? (
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
          ) : (
            <span lang="en" className="sr-only">
              {current.brandName}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
