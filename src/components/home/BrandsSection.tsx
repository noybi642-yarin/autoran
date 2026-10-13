import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { brands } from "@/content/brands";
import type { BrandSlug } from "@/content/types";

/** Static class map so Tailwind can see every brand token at build time. */
const brandStyles: Record<BrandSlug, { card: string; text: string; bar: string }> = {
  hyundai: { card: "bg-brand-hyundai-soft", text: "text-brand-hyundai", bar: "bg-brand-hyundai" },
  mitsubishi: { card: "bg-brand-mitsubishi-soft", text: "text-brand-mitsubishi", bar: "bg-brand-mitsubishi" },
  jaecoo: { card: "bg-brand-jaecoo-soft", text: "text-brand-jaecoo", bar: "bg-brand-jaecoo" },
  omoda: { card: "bg-brand-omoda-soft", text: "text-brand-omoda", bar: "bg-brand-omoda" },
  ora: { card: "bg-brand-ora-soft", text: "text-brand-ora", bar: "bg-brand-ora" },
};

export function BrandsSection() {
  return (
    <section aria-labelledby="brands-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          id="brands-title"
          eyebrow="חמישה מותגים"
          title="לכל מותג יש אופי משלו"
          description="בחרו מותג כדי להכיר את הדגמים, ובואו לראות אותם מקרוב באולם התצוגה."
        />
      </Container>

      {/* Mobile: swipeable row. Desktop: five-column grid. */}
      <Container className="mt-10 lg:mt-12">
        <ul className="-mx-4 grid snap-x snap-mandatory auto-cols-[74%] grid-flow-col gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:auto-cols-[42%] sm:px-6 lg:mx-0 lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {brands.map((brand) => {
            const style = brandStyles[brand.slug];
            return (
              <li key={brand.slug} className="snap-start">
                <Link
                  href={`/brands/${brand.slug}`}
                  className={`group relative flex aspect-[5/4] flex-col sm:aspect-[4/5] justify-between overflow-hidden rounded-[var(--radius-card)] p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] ${style.card}`}
                >
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${style.bar}`} />
                  <span>
                    <span lang="en" className={`block text-[1.75rem] font-extrabold tracking-tight ${style.text}`}>
                      {brand.name}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">{brand.nameHe}</span>
                  </span>
                  <span className="flex items-end justify-between gap-4">
                    <span className="text-[0.9375rem] font-medium leading-snug text-ink">
                      {brand.tagline}
                    </span>
                    <ArrowLeft
                      aria-hidden="true"
                      className={`size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1 ${style.text}`}
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
