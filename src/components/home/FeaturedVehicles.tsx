import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrand } from "@/content/brands";
import { featuredVehicleSlugs } from "@/content/site";
import type { Vehicle } from "@/content/types";
import { getVehicle } from "@/content/vehicles";

export function FeaturedVehicles() {
  const featured = featuredVehicleSlugs
    .map(getVehicle)
    .filter((v): v is Vehicle => Boolean(v));

  return (
    <section aria-labelledby="featured-title" className="bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeader
          id="featured-title"
          eyebrow="דגמים נבחרים"
          title="מה חדש באולם התצוגה"
          action={
            <ButtonLink href="/brands" variant="ghost" className="px-0">
              לכל הדגמים
              <ArrowLeft aria-hidden="true" className="size-4" />
            </ButtonLink>
          }
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12 lg:gap-8">
          {featured.map((vehicle) => {
            const brand = getBrand(vehicle.brand);
            const name = `${brand.name} ${vehicle.model}`;
            return (
              <li key={vehicle.slug}>
                <article className="group relative flex h-full flex-col">
                  <MediaFrame
                    image={vehicle.images[0]}
                    placeholderLabel={name}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    tone="light"
                    className="aspect-[16/11] rounded-[var(--radius-card)]"
                    illustrationClassName="w-[82%]"
                  />
                  <div className="flex flex-1 flex-col pt-5">
                    <p lang="en" className="text-sm font-semibold tracking-[0.16em] text-ink-muted">
                      {brand.name.toUpperCase()}
                    </p>
                    <h3 className="mt-1 text-title font-bold">
                      <Link
                        href={`/cars/${vehicle.slug}`}
                        className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none group-has-[:focus-visible]:after:outline-3 group-has-[:focus-visible]:after:outline-offset-4 group-has-[:focus-visible]:after:outline-focus"
                      >
                        <span lang="en">
                          <span className="sr-only">{brand.name} </span>
                          {vehicle.model}
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-muted">
                      {vehicle.intro ?? "תיאור הדגם והמפרט יפורסמו לאחר אימות מול היבואן."}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-forest-800"
                    >
                      לפרטי הדגם
                      <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
