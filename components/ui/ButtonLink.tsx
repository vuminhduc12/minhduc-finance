import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl px-4 py-2.5 text-center text-[0.8125rem] font-semibold leading-snug transition-colors sm:min-h-11 sm:px-5 sm:text-sm md:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_12px_28px_rgba(15,159,143,0.24)] hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  secondary:
    "border-2 border-navy bg-white/70 text-navy hover:bg-navy hover:text-white",
  ghost: "min-h-11 border-0 px-2 text-navy underline-offset-4 hover:underline sm:px-3",
};

type Props = {
  href: string;
  children: ReactNode;
  /** CTA のベトナム語行（あればボタン内の2行目に表示） */
  subLabelVi?: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  subLabelVi,
  variant = "primary",
  external,
  className = "",
  "aria-label": ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner =
    subLabelVi != null && subLabelVi !== "" ? (
      <>
        <span className="lang-ja">{children}</span>
        <span lang="vi" className="lang-vi max-w-[22rem] text-[0.82rem] font-semibold leading-snug opacity-95 sm:text-sm">
          {subLabelVi}
        </span>
      </>
    ) : (
      children
    );

  const computedAria =
    ariaLabel ??
    (typeof children === "string" && subLabelVi
      ? `${children}（${subLabelVi}）`
      : undefined);

  if (external) {
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={cls}
        {...(!isMailto
          ? { target: "_blank", rel: "noopener noreferrer" }
          : { rel: "noopener" })}
        aria-label={computedAria}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={computedAria}>
      {inner}
    </Link>
  );
}
