import { ArrowLeft, ArrowRightLeft, Car, Coins, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export interface Benefit {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  icon: "financing" | "trade-in" | "test-drive";
}

const icons: Record<Benefit["icon"], LucideIcon> = {
  financing: Coins,
  "trade-in": ArrowRightLeft,
  "test-drive": Car,
};

/**
 * Editorial benefits block: headline on the right, three linked items beside it.
 * Copy must stay non-committal — no guaranteed approvals, valuations or bookings.
 */
export function BenefitSection({ title, benefits }: { title: string; benefits: Benefit[] }) {
  return (
    <section aria-labelledby="benefits-title" className="bg-[#f1f4f5] py-12 lg:py-16">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h2
          id="benefits-title"
          className="text-headline font-extrabold text-balance text-forest-950 lg:col-span-4 lg:pt-2"
        >
          {title}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-8 lg:gap-5">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];
            return (
              <li key={benefit.title}>
                <Link
                  href={benefit.href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-accent-soft)]">
                    <Icon aria-hidden="true" strokeWidth={1.75} className="size-5.5 text-[var(--brand-accent)]" />
                  </span>
                  <h3 className="mt-4 text-title font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-1.5 flex-1 text-ink-muted">{benefit.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-forest-700">
                    {benefit.linkLabel}
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
