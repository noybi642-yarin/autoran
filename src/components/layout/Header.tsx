import { Car } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { primaryNav, testDriveCta } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { NavLink } from "./NavLink";

const navItemClass =
  "relative inline-flex min-h-11 items-center px-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-forest-700 aria-[current=page]:text-forest-700 data-[active]:text-forest-700 2xl:px-3.5";

/** Sticky white header: on long pages the test-drive CTA stays one tap away. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-line/70 bg-white">
      <Container className="flex h-full items-center justify-between gap-6">
        <Logo />

        <nav aria-label="ניווט ראשי" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <NavDropdown entry={item} className={navItemClass} />
                ) : (
                  <NavLink href={item.href} className={navItemClass}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper owns visibility so it can't clash with the button's display class. */}
          <span className="hidden min-[400px]:contents">
            <ButtonLink href={testDriveCta.href} size="sm">
              <Car aria-hidden="true" className="size-5" />
              {testDriveCta.label}
            </ButtonLink>
          </span>
          <MobileMenu items={primaryNav} cta={testDriveCta} />
        </div>
      </Container>
    </header>
  );
}
