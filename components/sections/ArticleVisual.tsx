import type { ArticleCategory } from "@/lib/articles";

type Props = {
  category: ArticleCategory;
  className?: string;
  size?: "compact" | "feature";
};

const visualStyles: Record<ArticleCategory, { bg: string; fg: string; label: string }> = {
  risk: { bg: "bg-[#fff4e6]", fg: "text-[#a85d00]", label: "SCAM" },
  "life-money": { bg: "bg-[#eefcf9]", fg: "text-accent-hover", label: "LIFE" },
  nisa: { bg: "bg-[#eef4ff]", fg: "text-[#315fba]", label: "NISA" },
  remittance: { bg: "bg-[#f7f2ff]", fg: "text-[#6a49a8]", label: "SEND" },
  debt: { bg: "bg-[#fff0f3]", fg: "text-[#b34359]", label: "DEBT" },
};

export function ArticleVisual({ category, className = "", size = "compact" }: Props) {
  const style = visualStyles[category];
  const minHeight =
    size === "feature"
      ? "min-h-[13rem] sm:min-h-[16rem]"
      : "min-h-[5.25rem] sm:min-h-[7.5rem]";
  const iconSize = size === "feature" ? "h-20 w-20 sm:h-24 sm:w-24" : "h-10 w-10 sm:h-14 sm:w-14";
  const padding = size === "feature" ? "p-5 sm:p-6" : "p-3 sm:p-4";

  return (
    <div className={`relative overflow-hidden ${style.bg} ${style.fg} ${className}`}>
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/55 sm:h-32 sm:w-32" aria-hidden />
      <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-white/40 sm:h-36 sm:w-36" aria-hidden />
      <div className={`relative flex h-full ${minHeight} flex-col justify-between ${padding}`}>
        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] opacity-80 sm:text-xs">{style.label}</p>
        <svg viewBox="0 0 64 64" className={iconSize} aria-hidden>
          {category === "risk" ? (
            <>
              <path d="M32 8 52 16v14c0 13-7.5 22.5-20 27-12.5-4.5-20-14-20-27V16l20-8z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <path d="M32 22v13" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <circle cx="32" cy="44" r="2.8" fill="currentColor" />
            </>
          ) : category === "life-money" ? (
            <>
              <path d="M14 42h36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M18 42V24h10v18M36 42V16h10v26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <path d="M16 20h12M34 12h14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : category === "nisa" ? (
            <>
              <path d="M12 46c12-2 24-10 38-28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M40 18h10v10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 48V34m12 14V28m12 20V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : category === "remittance" ? (
            <>
              <path d="M12 23h36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="m40 15 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52 41H16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="m24 33-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <>
              <path d="M18 16h28v36H18z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <path d="M24 25h16M24 34h16M24 43h9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M44 10v12h-8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
