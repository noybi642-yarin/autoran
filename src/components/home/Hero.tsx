import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getBrand } from "@/content/brands";
import { heroVehicleSlug, testDriveCta } from "@/content/site";
import { getVehicle } from "@/content/vehicles";

const facts = [
  { value: "5", label: "מותגים" },
  { value: "2", label: "אולמות תצוגה" },
  { value: "1", label: "מרכז שירות מורשה" },
];

export function Hero() {
  const vehicle = getVehicle(heroVehicleSlug);
  const brand = vehicle ? getBrand(vehicle.brand) : undefined;
  const vehicleName = vehicle && brand ? `${brand.name} ${vehicle.model}` : "";

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-10 pt-10 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-24">
        <div className="motion-safe:animate-rise lg:col-span-5">
          <p className="text-sm font-semibold tracking-wide text-forest-700">
            אוטורן · רעננה והרצליה
          </p>
          <h1 id="hero-title" className="mt-4 text-display font-extrabold text-balance">
            הרכב הבא שלכם מתחיל כאן
          </h1>
          <p className="mt-6 max-w-xl text-lead text-pretty text-ink-muted">
            יונדאי, מיצובישי, <span lang="en">JAECOO</span>, <span lang="en">OMODA</span>{" "}
            ו־<span lang="en">ORA</span> — עם ליווי אישי באולם התצוגה ומרכז שירות מורשה
            שממשיך איתכם גם אחרי המסירה.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={testDriveCta.href} size="lg">
              תיאום נסיעת מבחן
            </ButtonLink>
            <ButtonLink href="/brands" size="lg" variant="secondary">
              לכל הדגמים
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-ink-muted">{fact.label}</dt>
                <dd className="order-first text-3xl font-bold text-forest-800">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="motion-safe:animate-rise motion-safe:[animation-delay:120ms] lg:col-span-7">
          <div className="relative">
            <MediaFrame
              image={vehicle?.images[0]}
              placeholderLabel={vehicleName}
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
              className="aspect-[4/3] rounded-[var(--radius-panel)] sm:aspect-[16/11]"
            />
            {vehicle && brand && (
              <p className="pointer-events-none absolute top-5 start-6 text-white">
                <span lang="en" className="block text-sm font-medium tracking-[0.2em] text-forest-200">
                  {brand.name}
                </span>
                <span lang="en" className="block text-3xl font-bold sm:text-4xl">
                  {vehicle.model}
                </span>
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
