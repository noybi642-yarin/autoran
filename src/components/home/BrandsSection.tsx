import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrandLogo, getBrandTile } from "@/content/assets";
import { brands } from "@/content/brands";
import type { BrandSlug } from "@/content/types";
import { cx } from "@/lib/cx";

/** Static class map so Tailwind sees every atmosphere class at build time. */
const atmosphere: Record<BrandSlug, string> = {
  hyundai: "atmosphere-hyundai",
  mitsubishi: "atmosphere-mitsubishi",
  jaecoo: "atmosphere-jaecoo",
  omoda: "atmosphere-omoda",
  ora: "atmosphere-ora",
};

export function BrandsSection() {
  return (
    <section aria-labelledby="brands-title" className="bg-white py-10 lg:py-14">
      <Container>
        <SectionHeader
          id="brands-title"
          title="המותגים שלנו"
          link={{ href: "/brands", label: "לכל המותגים" }}
        />

        {/* Mobile: swipeable row. Desktop: five equal tiles. */}
        <ul className="-mx-4 mt-6 grid snap-x snap-mandatory auto-cols-[62%] grid-flow-col gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:auto-cols-[38%] sm:px-6 lg:mx-0 lg:mt-7 lg:grid-flow-row lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {brands.map((brand) => {
            const dark = brand.tileTone === "dark";
            const logo = getBrandLogo(brand.slug, brand.name);
            const tile = getBrandTile(brand.slug, `${brand.name} — רכבי המותג`);
            return (
              <li key={brand.slug} className="snap-start">
                <Link
                  href={`/brands/${brand.slug}`}
                  className={cx(
                    "group relative isolate flex aspect-[4/5] flex-col overflow-hidden rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]",
                    atmosphere[brand.slug],
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  <span className="absolute inset-0 -z-10 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]">
                    <Photo
                      image={tile}
                      placeholderLabel={brand.name}
                      sizes="(min-width: 1024px) 20vw, 62vw"
                      tone={dark ? "dark" : "light"}
                      compact
                      placeholderClassName={cx("items-end pb-16", !dark && "bg-transparent")}
                    />
                  </span>
                  {tile && (
                    <span
                      aria-hidden="true"
                      className={cx(
                        "absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b to-transparent",
                        dark ? "from-black/55" : "from-white/80",
                      )}
                    />
                  )}

                  <span className="flex flex-col items-center text-center">
                    {logo ? (
                      <span className="relative block h-10 w-32">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="128px"
                          unoptimized={logo.src.endsWith(".svg")}
                          className="object-contain"
                        />
                      </span>
                    ) : (
                      <span lang="en" className="text-2xl font-extrabold tracking-[0.14em] uppercase">
                        {brand.name}
                      </span>
                    )}
                    <span className="mt-1.5 text-[0.9375rem] font-medium">{brand.tagline}</span>
                  </span>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold">
                    לכל הדגמים
                    <span className="sr-only"> של {brand.nameHe}</span>
                    <ArrowLeft
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
