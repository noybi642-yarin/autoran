import { MapPin, MessageCircle, Navigation, ParkingSquare, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { googleMapsHref, telHref, wazeHref } from "@/content/locations";
import type { Location } from "@/content/types";

interface BrandLocationProps {
  title: string;
  locations: Location[];
  contactHref: string;
}

/**
 * Showroom details for a brand. Opening hours render only once verified;
 * no facility photography is shown.
 */
export function BrandLocation({ title, locations, contactHref }: BrandLocationProps) {
  return (
    <section aria-labelledby="brand-location-title" className="bg-white pb-14 lg:pb-20">
      <Container>
        <SectionHeader
          id="brand-location-title"
          title={title}
          link={{ href: "/locations", label: "לכל הסניפים" }}
        />
        <ul className="mt-7 grid gap-5">
          {locations.map((loc) => (
            <li key={loc.id}>
              <article
                aria-labelledby={`brand-loc-${loc.id}`}
                className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-white shadow-[var(--shadow-card)] lg:grid-cols-12"
              >
                <div className="min-w-0 p-5 sm:p-6 lg:col-span-7 lg:p-8">
                  <p className="text-sm font-semibold text-[var(--brand-accent)]">אולם תצוגה</p>
                  <h3 id={`brand-loc-${loc.id}`} className="mt-1 text-title font-extrabold text-ink">
                    {loc.name}
                  </h3>
                  <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="flex items-center gap-2 text-sm text-ink-muted">
                        <MapPin aria-hidden="true" className="size-4.5 shrink-0 text-forest-700" />
                        כתובת
                      </dt>
                      <dd className="mt-1 ps-6.5 font-medium">
                        {loc.address.street}, {loc.address.city}
                        {loc.address.area && <span className="block text-sm font-normal text-ink-muted">{loc.address.area}</span>}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-sm text-ink-muted">
                        <Phone aria-hidden="true" className="size-4.5 shrink-0 text-forest-700" />
                        טלפון
                      </dt>
                      <dd className="mt-1 ps-6.5">
                        <a href={telHref(loc.phone)} className="font-semibold underline-offset-4 hover:text-forest-700 hover:underline">
                          <span className="ltr-nums">{loc.phone}</span>
                        </a>
                      </dd>
                    </div>
                    {loc.parking && (
                      <div className="sm:col-span-2">
                        <dt className="flex items-center gap-2 text-sm text-ink-muted">
                          <ParkingSquare aria-hidden="true" className="size-4.5 shrink-0 text-forest-700" />
                          חניה
                        </dt>
                        <dd className="mt-1 ps-6.5">{loc.parking}</dd>
                      </div>
                    )}
                    {loc.hoursVerification === "verified" && loc.hours && (
                      <div className="sm:col-span-2">
                        <dt className="text-sm text-ink-muted">שעות פעילות</dt>
                        {loc.hours.map((h) => (
                          <dd key={h.label} className="mt-1">
                            {h.label} <span className="ltr-nums">{h.value}</span>
                          </dd>
                        ))}
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex min-w-0 flex-col justify-center gap-3 border-t border-line bg-[var(--brand-accent-soft)] p-5 sm:p-6 lg:col-span-5 lg:border-t-0 lg:border-s lg:p-8">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={wazeHref(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-line-strong bg-white px-3 text-sm font-semibold whitespace-nowrap sm:text-base text-ink transition-colors hover:border-forest-700 hover:text-forest-800"
                    >
                      <Navigation aria-hidden="true" className="size-4 text-forest-700" />
                      <span lang="en">Waze</span>
                      <span className="sr-only"> — ניווט אל {loc.name} (נפתח בחלון חדש)</span>
                    </a>
                    <a
                      href={googleMapsHref(loc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-line-strong bg-white px-3 text-sm font-semibold whitespace-nowrap sm:text-base text-ink transition-colors hover:border-forest-700 hover:text-forest-800"
                    >
                      <MapPin aria-hidden="true" className="size-4 text-forest-700" />
                      <span lang="en">Google Maps</span>
                      <span className="sr-only"> — {loc.name} במפה (נפתח בחלון חדש)</span>
                    </a>
                  </div>
                  <ButtonLink href={contactHref} size="lg" wrap>
                    <MessageCircle aria-hidden="true" className="size-5" />
                    צרו קשר עם אולם התצוגה
                  </ButtonLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
