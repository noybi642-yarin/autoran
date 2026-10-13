import { ArrowLeft, MapPin, Navigation, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrand } from "@/content/brands";
import { googleMapsHref, locations, telHref, wazeHref } from "@/content/locations";

const kindLabel = { showroom: "אולם תצוגה", service: "שירות ותחזוקה" } as const;

export function LocationsSection() {
  return (
    <section aria-labelledby="locations-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          id="locations-title"
          eyebrow="הסניפים שלנו"
          title="נשמח לראות אתכם"
          description="שני אולמות תצוגה ברעננה ובהרצליה, ומרכז שירות מורשה באזור התעשייה ברעננה."
          action={
            <ButtonLink href="/locations" variant="ghost" className="px-0">
              כל פרטי הסניפים
              <ArrowLeft aria-hidden="true" className="size-4" />
            </ButtonLink>
          }
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {locations.map((loc) => (
            <li key={loc.id}>
              <article
                aria-labelledby={`loc-${loc.id}`}
                className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] lg:p-7"
              >
                <p className="text-sm font-semibold text-forest-700">{kindLabel[loc.kind]}</p>
                <h3 id={`loc-${loc.id}`} className="mt-2 text-title font-bold">
                  {loc.name}
                </h3>

                <div className="mt-5 flex gap-3 text-[0.9375rem]">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-forest-700" />
                  <address className="not-italic">
                    {loc.address.street}, {loc.address.city}
                    {loc.address.area && (
                      <span className="block text-ink-muted">{loc.address.area}</span>
                    )}
                  </address>
                </div>

                {loc.parking && (
                  <p className="mt-3 ps-8 text-sm text-ink-muted">{loc.parking}</p>
                )}

                {loc.brandsVerification === "verified" && loc.brands.length > 0 && (
                  <p className="mt-4 ps-8 text-sm">
                    <span className="sr-only">מותגים: </span>
                    {loc.brands.map((slug) => (
                      <span
                        key={slug}
                        lang="en"
                        className="me-2 inline-block rounded-full bg-forest-50 px-2.5 py-0.5 font-medium text-forest-800"
                      >
                        {getBrand(slug).name}
                      </span>
                    ))}
                  </p>
                )}

                <div aria-hidden="true" className="min-h-6 flex-1" />
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
                  <a
                    href={telHref(loc.phone)}
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink hover:text-forest-800"
                  >
                    <Phone aria-hidden="true" className="size-4 text-forest-700" />
                    <span className="sr-only">טלפון {loc.name}: </span>
                    <span className="ltr-nums">{loc.phone}</span>
                  </a>
                  <span className="inline-flex items-center gap-1 text-[0.9375rem]">
                    <Navigation aria-hidden="true" className="size-4 text-forest-700" />
                    <a
                      href={wazeHref(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center px-1 font-medium text-forest-800 underline-offset-4 hover:underline"
                    >
                      <span lang="en">Waze</span>
                      <span className="sr-only"> — ניווט אל {loc.name} (נפתח בחלון חדש)</span>
                    </a>
                    <span aria-hidden="true" className="text-line-strong">|</span>
                    <a
                      href={googleMapsHref(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center px-1 font-medium text-forest-800 underline-offset-4 hover:underline"
                    >
                      <span lang="en">Google Maps</span>
                      <span className="sr-only"> — {loc.name} במפה (נפתח בחלון חדש)</span>
                    </a>
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
