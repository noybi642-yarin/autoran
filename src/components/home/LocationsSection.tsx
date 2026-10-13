import { MapPin, Navigation, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { locations, telHref, wazeHref } from "@/content/locations";

const kindLabel = { showroom: "אולם תצוגה", service: "מרכז שירות" } as const;

export function LocationsSection() {
  return (
    <section aria-labelledby="locations-title" className="bg-white py-10 lg:py-14">
      <Container>
        <SectionHeader
          id="locations-title"
          title="הסניפים שלנו"
          description="מוזמנים להגיע, להתרשם ולקבל שירות אישי."
          link={{ href: "/locations", label: "לכל הסניפים" }}
        />

        <ul className="mt-6 grid gap-4 md:grid-cols-3 lg:mt-7 lg:gap-5">
          {locations.map((loc) => (
            <li key={loc.id}>
              <article
                aria-labelledby={`loc-${loc.id}`}
                className="flex h-full flex-col rounded-[var(--radius-card)] border border-line/80 bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 id={`loc-${loc.id}`} className="font-bold text-ink">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-forest-700">{kindLabel[loc.kind]}</p>
                  </div>
                  <MapPin aria-hidden="true" className="size-5 shrink-0 text-forest-700" />
                </div>

                <address className="mt-3 text-sm text-ink-muted not-italic">
                  {loc.address.street}, {loc.address.city}
                  {loc.address.area && <> · {loc.address.area}</>}
                </address>

                <div aria-hidden="true" className="min-h-4 flex-1" />
                <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
                  <a
                    href={wazeHref(loc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-forest-700 hover:underline underline-offset-4"
                  >
                    <Navigation aria-hidden="true" className="size-4" />
                    ניווט
                    <span className="sr-only"> אל {loc.name} ב־Waze (נפתח בחלון חדש)</span>
                  </a>
                  <a
                    href={telHref(loc.phone)}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink hover:text-forest-700"
                  >
                    <Phone aria-hidden="true" className="size-4 text-forest-700" />
                    <span className="sr-only">התקשרו אל {loc.name}: </span>
                    <span className="ltr-nums">{loc.phone}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
