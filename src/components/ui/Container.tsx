import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "@/lib/cx";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Page-width wrapper with the site's responsive gutters. */
export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cx("mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-10", className)}
      {...props}
    />
  );
}
