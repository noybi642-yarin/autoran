import { Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { legalPages } from "@/content/legal";
import { formatAddress, locations, telHref } from "@/content/locations";
import { primaryNav, secondaryNav, site, testDriveCta } from "@/content/site";

const quickLinks = [
  ...primaryNav.map(({ label, href }) => ({ label, href })),
  testDriveCta,
  ...secondaryNav,
];

const linkClass = "inline-flex min-h-9 items-center text-forest-100 transition-colors hover:text-white";

/** Business hours and social links are intentionally absent until verified. */
export function Footer() {
  return (
    <footer className="on-dark bg-forest-900 text-forest-100">
      <Container className="py-10 lg:py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              סוכנות רכב רב־מותגית — אולמות תצוגה ברעננה ובהרצליה ומרכז שירות מורשה ברעננה.
            </p>
          </div>

          <nav aria-labelledby="footer-nav" className="md:col-span-4">
            <h2 id="footer-nav" className="font-semibold text-white">
              קישורים מהירים
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-semibold text-white">יצירת קשר</h2>
            <ul className="mt-3 space-y-3">
              {locations.map((loc) => (
                <li key={loc.id} className="text-sm">
                  <p className="font-medium text-white">{loc.name}</p>
                  <p>{formatAddress(loc)}</p>
                  <a
                    href={telHref(loc.phone)}
                    className="inline-flex min-h-9 items-center gap-2 font-medium text-white underline-offset-4 hover:underline"
                  >
                    <Phone aria-hidden="true" className="size-4 text-forest-300" />
                    <span className="sr-only">טלפון {loc.name}: </span>
                    <span className="ltr-nums">{loc.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-forest-200 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="מידע משפטי">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="inline-flex min-h-9 items-center hover:text-white">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>{site.independenceNotice}</p>
          <p>© {site.name}. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  );
}
