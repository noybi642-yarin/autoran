import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { primaryNav, secondaryNav, testDriveCta } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  // Blur lives on a pseudo-element: backdrop-filter on the header itself would
  // trap the fixed-position mobile menu panel inside the header box.
  return (
    <header className="sticky top-0 z-50 isolate h-[var(--header-h)] border-b border-line/80 before:absolute before:inset-0 before:-z-10 before:bg-canvas/90 before:backdrop-blur-md supports-[backdrop-filter]:before:bg-canvas/75">
      <Container className="flex h-full items-center justify-between gap-6">
        <Logo />

        <nav aria-label="ניווט ראשי" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium text-ink-muted transition-colors hover:text-ink aria-[current=page]:text-forest-800 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-1.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-forest-700"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper owns visibility so it can't clash with the button's display class. */}
          <span className="hidden min-[380px]:contents">
            <ButtonLink href={testDriveCta.href} size="sm">
              {testDriveCta.label}
            </ButtonLink>
          </span>
          <MobileMenu items={[...primaryNav, ...secondaryNav]} cta={testDriveCta} />
        </div>
      </Container>
    </header>
  );
}
