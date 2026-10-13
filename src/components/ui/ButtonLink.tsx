import Link from "next/link";
import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-[var(--ease-out-soft)] active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-forest-700 text-white hover:bg-forest-800",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-forest-700 hover:text-forest-800",
  ghost: "text-forest-800 underline-offset-4 hover:underline",
  inverse: "bg-white text-forest-900 hover:bg-forest-50",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-4 text-[0.9375rem] sm:px-5 xl:min-h-12 xl:px-7 xl:text-base",
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-7 text-base",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  /** Allow the label to wrap (long labels in narrow containers). */
  wrap?: boolean;
};

/** A link styled as a button. All CTAs on the site are navigations, not actions. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  wrap = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cx(base, wrap ? "text-center" : "whitespace-nowrap", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
