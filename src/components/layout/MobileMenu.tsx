"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/content/types";
import { NavLink } from "./NavLink";

interface MobileMenuProps {
  items: NavItem[];
  cta: NavItem;
}

/**
 * Disclosure-pattern mobile navigation. The test-drive CTA inside it only shows on
 * very narrow screens, where the header has no room for it.
 * Closes on Escape, link click and resize to desktop.
 */
export function MobileMenu({ items, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onResize = () => mq.matches && close();
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
      document.documentElement.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 items-center justify-center rounded-[var(--radius-control)] text-ink hover:bg-sand"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        <span className="sr-only">{open ? "סגירת התפריט" : "פתיחת התפריט"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto border-t border-line bg-canvas"
      >
        <nav aria-label="תפריט ראשי" className="px-4 pt-4 pb-10 sm:px-6">
          <ul className="divide-y divide-line">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={() => close()}
                  className="flex min-h-14 items-center text-lg font-semibold text-ink aria-[current=page]:text-forest-700"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            href={cta.href}
            onClick={() => close()}
            className="mt-8 flex min-h-13 min-[380px]:hidden items-center justify-center rounded-[var(--radius-control)] bg-forest-700 text-base font-semibold text-white hover:bg-forest-800"
          >
            {cta.label}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
