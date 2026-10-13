import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getVehicleImage } from "@/content/assets";
import { getBrand } from "@/content/brands";
import { featuredVehicleSlugs } from "@/content/site";
import type { Vehicle } from "@/content/types";
import { getVehicle, vehicleName } from "@/content/vehicles";

export function FeaturedVehicles() {
  const featured = featuredVehicleSlugs
    .map(getVehicle)
    .filter((v): v is Vehicle => Boolean(v));

  return (
    <section aria-labelledby="featured-title" className="bg-white pb-12 lg:pb-16">
      <Container>
        <SectionHeader
          id="featured-title"
          title="הדגמים הפופולריים"
          link={{ href: "/brands", label: "לכל הדגמים" }}
        />

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-5">
          {featured.map((vehicle) => {
            const brand = getBrand(vehicle.brand);
            const name = vehicleName(vehicle, brand.name);
            return (
              <li key={vehicle.slug}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <Photo
                      image={getVehicleImage(vehicle.slug, "card", name)}
                      placeholderLabel={name}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                    <h3 className="text-title font-extrabold tracking-wide uppercase">
                      <Link
                        href={`/cars/${vehicle.slug}`}
                        lang="en"
                        className="after:absolute after:inset-0 focus-visible:outline-none group-has-[:focus-visible]:after:rounded-[var(--radius-card)] group-has-[:focus-visible]:after:outline-3 group-has-[:focus-visible]:after:outline-offset-2 group-has-[:focus-visible]:after:outline-focus"
                      >
                        {name}
                      </Link>
                    </h3>
                    {vehicle.tagline && <p className="mt-0.5 text-ink-muted">{vehicle.tagline}</p>}
                    <span
                      aria-hidden="true"
                      className="mt-3 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-forest-700"
                    >
                      לפרטים
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
