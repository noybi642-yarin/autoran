import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { telHref } from "@/content/locations";

interface BrandContactCtaProps {
  title: string;
  text: string;
  cta: { href: string; label: string };
  /** Optional direct line, e.g. the brand showroom. */
  phone?: { number: string; label: string };
}

/**
 * Conversion panel on the brand's dark surface (--brand-panel).
 * Deliberately photo-free: no staff or showroom imagery is invented.
 */
export function BrandContactCta({ title, text, cta, phone }: BrandContactCtaProps) {
  return (
    <section aria-labelledby="assist-title" className="bg-white py-12 lg:py-16">
      <Container>
        <div className="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-[var(--brand-panel)] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-12">
          <div className="max-w-2xl">
            <h2 id="assist-title" className="text-headline font-extrabold text-balance">
              {title}
            </h2>
            <p className="mt-3 text-lead text-white/85">{text}</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0 lg:shrink-0">
            <ButtonLink href={cta.href} variant="inverse" size="lg">
              <MessageCircle aria-hidden="true" className="size-5" />
              {cta.label}
            </ButtonLink>
            {phone && (
              <a
                href={telHref(phone.number)}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-white/35 px-6 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone aria-hidden="true" className="size-5" />
                <span className="sr-only">{phone.label}: </span>
                <span className="ltr-nums">{phone.number}</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
