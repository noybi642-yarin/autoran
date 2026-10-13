import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Copy is intentionally general: no rates, repayments or terms.
 * Product descriptions for private leasing await client approval.
 */
const options = [
  {
    title: "מימון רכישה",
    body: "הסוכנים באולם התצוגה יציגו את מסלולי המימון הזמינים ויעזרו לכם לבחור את המתאים לכם.",
  },
  {
    title: "ליסינג פרטי",
    body: "רכב חדש בתשלום חודשי, בהתאם לתנאי המסלול. את פרטי המסלולים תקבלו מהסוכן באולם התצוגה.",
  },
  {
    title: "טרייד־אין",
    body: "מגיעים עם הרכב הנוכחי ומשלבים אותו בעסקה על הרכב החדש.",
    href: "/trade-in",
    linkLabel: "איך זה עובד",
  },
];

export function PurchaseOptions() {
  return (
    <section aria-labelledby="purchase-title" className="on-dark bg-forest-900 py-16 text-white lg:py-24">
      <Container>
        <SectionHeader
          id="purchase-title"
          tone="dark"
          eyebrow="מימון, ליסינג וטרייד־אין"
          title="מתקדמים לרכב הבא בדרך שמתאימה לכם"
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/12 md:grid-cols-3">
          {options.map((option, i) => (
            <li key={option.title} className="flex flex-col bg-forest-900 p-7 lg:p-9">
              <span aria-hidden="true" className="text-sm font-semibold text-forest-300 tabular-nums">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-title font-bold">{option.title}</h3>
              <p className="mt-3 flex-1 text-forest-100">{option.body}</p>
              {option.href && (
                <Link
                  href={option.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-white underline-offset-4 hover:underline"
                >
                  {option.linkLabel}
                  <span className="sr-only">: {option.title}</span>
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </Link>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-forest-200">
            המידע באתר הוא כללי ואינו מהווה הצעה. כל עסקת מימון או ליסינג כפופה לאישור הגורם
            המממן ולתנאיו.
          </p>
          <ButtonLink href="/financing" variant="inverse" size="lg">
            שאלו את הסוכן באולם התצוגה
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
