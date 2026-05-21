export type SiteSectionIconType =
  | "home"
  | "articles"
  | "materials"
  | "official"
  | "scam"
  | "profile"
  | "contact"
  | "privacy"
  | "disclaimer";

type Props = {
  type: SiteSectionIconType;
  size?: "xs" | "sm" | "md";
  className?: string;
};

const styles: Record<SiteSectionIconType, { bg: string; fg: string; soft: string }> = {
  home: { bg: "bg-sky-50", fg: "text-sky-700", soft: "text-sky-300" },
  articles: { bg: "bg-amber-50", fg: "text-amber-700", soft: "text-amber-300" },
  materials: { bg: "bg-emerald-50", fg: "text-emerald-700", soft: "text-emerald-300" },
  official: { bg: "bg-indigo-50", fg: "text-indigo-700", soft: "text-indigo-300" },
  scam: { bg: "bg-rose-50", fg: "text-rose-700", soft: "text-rose-300" },
  profile: { bg: "bg-cyan-50", fg: "text-cyan-700", soft: "text-cyan-300" },
  contact: { bg: "bg-violet-50", fg: "text-violet-700", soft: "text-violet-300" },
  privacy: { bg: "bg-slate-100", fg: "text-slate-700", soft: "text-slate-300" },
  disclaimer: { bg: "bg-orange-50", fg: "text-orange-700", soft: "text-orange-300" },
};

const sizeClass = {
  xs: "h-6 w-6 rounded-lg",
  sm: "h-8 w-8 rounded-xl",
  md: "h-10 w-10 rounded-2xl",
};

const svgSizeClass = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
};

export function SiteSectionIcon({ type, size = "sm", className = "" }: Props) {
  const tone = styles[type];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${sizeClass[size]} ${tone.bg} ${className}`}
      aria-hidden="true"
    >
      <span className={svgSizeClass[size]}>
        <IconGraphic type={type} />
      </span>
    </span>
  );
}

function IconGraphic({ type }: { type: SiteSectionIconType }) {
  const tone = styles[type];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-full w-full ${tone.fg}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {type === "home" ? (
        <>
          <path className={tone.soft} d="M5 11.2 12 5l7 6.2" />
          <path d="M7.2 10.5v8h9.6v-8" />
          <path d="M10.2 18.5v-5h3.6v5" />
        </>
      ) : null}
      {type === "articles" ? (
        <>
          <path className={tone.soft} d="M7 5.5h8.2L18 8.3v10.2H7z" />
          <path d="M9.5 10h5" />
          <path d="M9.5 13h5.5" />
          <path d="M9.5 16h3.7" />
        </>
      ) : null}
      {type === "materials" ? (
        <>
          <path d="M5.5 6.5h7.2a3 3 0 0 1 3 3v8H8.5a3 3 0 0 1-3-3z" />
          <path className={tone.soft} d="M15.7 8h2.8v10h-2.8" />
          <path d="M8.5 10h4.2" />
          <path d="M8.5 13h4.7" />
        </>
      ) : null}
      {type === "official" ? (
        <>
          <path className={tone.soft} d="M12 4.5 5.5 8h13z" />
          <path d="M7 9.5v7" />
          <path d="M12 9.5v7" />
          <path d="M17 9.5v7" />
          <path d="M5.5 18.5h13" />
        </>
      ) : null}
      {type === "scam" ? (
        <>
          <path d="M12 4.7 18.2 7v4.8c0 3.6-2.3 6.3-6.2 7.7-3.9-1.4-6.2-4.1-6.2-7.7V7z" />
          <path className={tone.soft} d="M9.5 12.1 11.3 14l3.5-4" />
        </>
      ) : null}
      {type === "profile" ? (
        <>
          <circle className={tone.soft} cx="12" cy="8.3" r="3.1" />
          <path d="M6.5 18.6c.9-3 2.7-4.5 5.5-4.5s4.6 1.5 5.5 4.5" />
          <path d="M17.2 7.2h2" />
          <path d="M18.2 6.2v2" />
        </>
      ) : null}
      {type === "contact" ? (
        <>
          <path d="M5.5 7.5h13v9h-13z" />
          <path className={tone.soft} d="m6 8 6 4.7L18 8" />
          <path d="M16.5 17.8 18.8 20" />
        </>
      ) : null}
      {type === "privacy" ? (
        <>
          <path d="M12 4.7 18 7v4.7c0 3.4-2.1 6.1-6 7.6-3.9-1.5-6-4.2-6-7.6V7z" />
          <path className={tone.soft} d="M9.8 12h4.4" />
          <path className={tone.soft} d="M12 9.8v4.4" />
        </>
      ) : null}
      {type === "disclaimer" ? (
        <>
          <path d="M12 5.2 19 18H5z" />
          <path className={tone.soft} d="M12 9.4v3.8" />
          <path d="M12 16h.01" />
        </>
      ) : null}
    </svg>
  );
}
