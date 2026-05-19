import type { Bi } from "@/lib/copy/types";

type Size = "sm" | "md" | "lg";

const viSize: Record<Size, string> = {
  sm: "mt-1 border-l-2 border-accent/40 pl-2.5 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem]",
  md: "mt-1.5 border-l-2 border-accent/40 pl-3 text-[0.8125rem] leading-relaxed text-navy-soft sm:text-sm",
  lg: "mt-2 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-navy-soft sm:text-[0.9375rem]",
};

/** 本文ブロック：日本語 → ベトナム語（視覚的に下位行） */
export function BiBlock({
  text,
  viSize: size = "md",
  className = "",
}: {
  text: Bi;
  viSize?: Size;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="leading-relaxed">{text.ja}</p>
      <p lang="vi" className={viSize[size]}>
        {text.vi}
      </p>
    </div>
  );
}

/** 見出し直下の併記（h1〜h3の内側で使う想定） */
export function BiSubheading({ text, className = "" }: { text: Bi; className?: string }) {
  return (
    <span className={`block ${className}`}>
      <span className="block">{text.ja}</span>
      <span lang="vi" className="mt-1.5 block text-[0.88em] font-semibold leading-snug text-navy-soft sm:text-[0.9em]">
        {text.vi}
      </span>
    </span>
  );
}
