import { Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { brands } from "@/content/brands";
import { publishedLegalPages } from "@/content/legal";
import { formatAddress, locations, telHref } from "@/content/locations";
import { primaryNav, secondaryNav, site, testDriveCta } from "@/content/site";

const linkClass =
  "inline-flex min-h-9 items-center text-forest-100 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="on-dark bg-forest-950 text-forest-100">
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-forest-100">
              סוכנות רכב רב־מותגית: יונדאי, מיצובישי, <span lang="en">JAECOO</span>,{" "}
              <span lang="en">OMODA</span> ו־<span lang="en">ORA</span>. אולמות תצוגה ברעננה
              ובהרצליה ומרכז שירות מורשה ברעננה.
            </p>
          </div>

          <nav aria-labelledby="footer-nav" className="lg:col-span-2">
            <h2 id="footer-nav" className="text-sm font-semibold text-white">
              ניווט
            </h2>
            <ul className="mt-4 space-y-1">
              {[...primaryNav, testDriveCta, ...secondaryNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-brands" className="lg:col-span-2">
            <h2 id="footer-brands" className="text-sm font-semibold text-white">
              מותגים
            </h2>
            <ul className="mt-4 space-y-1">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link href={`/brands/${brand.slug}`} className={linkClass} lang="en">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-4">
            <h2 className="text-sm font-semibold text-white">יצירת קשר</h2>
            <ul className="mt-4 space-y-5">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <p className="font-semibold text-white">{loc.name}</p>
                  <p className="mt-1 text-[0.9375rem]">{formatAddress(loc)}</p>
                  <a
                    href={telHref(loc.phone)}
                    className="mt-1 inline-flex min-h-9 items-center gap-2 text-[0.9375rem] font-medium text-white hover:underline underline-offset-4"
                  >
                    <Phone aria-hidden="true" className="size-4 text-forest-300" />
                    <span className="ltr-nums">{loc.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-forest-200 md:flex-row md:items-center md:justify-between">
          <p>{site.independenceNotice}</p>
          {publishedLegalPages.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {publishedLegalPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="hover:text-white">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p>
            © <span lang="en">{site.nameLatin}</span>. כל הזכויות שמורות.
          </p>
        </div>
      </Container>
    </footer>
  );
}
