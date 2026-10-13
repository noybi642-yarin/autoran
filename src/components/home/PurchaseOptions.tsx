import { ArrowLeft, ArrowRightLeft, Car, Coins, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { getPurchaseBackground } from "@/content/assets";
import { cx } from "@/lib/cx";

/** General copy only — no rates, repayments or contractual terms. */
const options: { title: string; body: string; href: string; cta: string; Icon: LucideIcon }[] = [
  {
    title: "מימון וליסינג",
    body: "פתרונות רכישה שמתאימים לכם",
    href: "/financing",
    cta: "לפרטים נוספים",
    Icon: Coins,
  },
  {
    title: "טרייד אין",
    body: "מחליפים רכב בקלות ובנוחות",
    href: "/trade-in",
    cta: "לפרטים נוספים",
    Icon: ArrowRightLeft,
  },
  {
    title: "קביעת נסיעת מבחן",
    body: "חוויית נהיגה שמתחילה כאן",
    href: "/test-drive",
    cta: "לתיאום נסיעת מבחן",
    Icon: Car,
  },
];

export function PurchaseOptions() {
  // Decorative photo is optional: without it the cards simply use the full width.
  const background = getPurchaseBackground();

  return (
    <section
      aria-labelledby="purchase-title"
      className="relative isolate overflow-hidden bg-[#f1f4f5] py-10 lg:py-14"
    >
      {background && (
        <div aria-hidden="true" className="absolute inset-y-0 end-0 -z-10 hidden w-[27%] lg:block">
          <Photo image={background} placeholderLabel="" sizes="27vw" position="0% 50%" />
          {/* Fade the photo's inner edge into the section background. */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#f1f4f5] via-[#f1f4f5]/0 via-35% to-transparent" />
        </div>
      )}
      <Container>
        <div className={cx(background && "lg:ms-0 lg:max-w-[75%]")}>
          <h2 id="purchase-title" className="text-headline font-extrabold text-forest-950">
            איך תרצו להתקדם?
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:mt-7 lg:gap-5">
            {options.map(({ title, body, href, cta, Icon }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex h-full flex-col items-center rounded-[var(--radius-card)] bg-white px-5 py-6 text-center shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] lg:py-7"
                >
                  <Icon aria-hidden="true" strokeWidth={1.75} className="size-9 text-forest-700" />
                  <h3 className="mt-3 text-title font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-ink-muted">{body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-forest-700">
                    {cta}
                    <ArrowLeft
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
