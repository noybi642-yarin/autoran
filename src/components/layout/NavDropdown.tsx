"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavEntry } from "@/content/site";
import { cx } from "@/lib/cx";

/**
 * Disclosure-style dropdown for a top-level nav entry with children.
 * Opens on click/Enter/Space; closes on Escape, outside click, focus leaving
 * the group, and link selection.
 */
export function NavDropdown({ entry, className }: { entry: NavEntry; className: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const active = pathname === entry.href || pathname.startsWith(`${entry.href}/`);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        data-active={active || undefined}
        onClick={() => setOpen((v) => !v)}
        className={cx(className, "gap-1")}
      >
        {entry.label}
        <ChevronDown
          aria-hidden="true"
          className={cx("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full start-0 z-50 mt-2 w-60 rounded-[var(--radius-card)] border border-line bg-white p-2 shadow-[var(--shadow-card-hover)]"
      >
        <ul>
          <li>
            <Link
              href={entry.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 font-semibold text-forest-800 hover:bg-forest-50"
            >
              כל הרכבים
            </Link>
          </li>
          {entry.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                lang="en"
                className="flex min-h-11 items-center rounded-lg px-3 font-medium text-ink hover:bg-forest-50"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
