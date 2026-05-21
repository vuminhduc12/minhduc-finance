type HubVariant = "materials" | "official";
export type ResourceIconVariant =
  | "budget"
  | "tax"
  | "investment"
  | "bank"
  | "insurance"
  | "home"
  | "scam"
  | "family"
  | "future"
  | "money"
  | "visa"
  | "consumer"
  | "life"
  | "pdf";

type HubProps = {
  variant: HubVariant;
  className?: string;
};

type IconProps = {
  variant: ResourceIconVariant;
  className?: string;
};

const iconTone: Record<ResourceIconVariant, string> = {
  budget: "bg-sky-50 text-sky-700",
  tax: "bg-indigo-50 text-indigo-700",
  investment: "bg-emerald-50 text-emerald-700",
  bank: "bg-cyan-50 text-cyan-700",
  insurance: "bg-violet-50 text-violet-700",
  home: "bg-amber-50 text-amber-700",
  scam: "bg-rose-50 text-rose-700",
  family: "bg-pink-50 text-pink-700",
  future: "bg-slate-100 text-slate-700",
  money: "bg-emerald-50 text-emerald-700",
  visa: "bg-blue-50 text-blue-700",
  consumer: "bg-orange-50 text-orange-700",
  life: "bg-teal-50 text-teal-700",
  pdf: "bg-emerald-50 text-emerald-700",
};

export function ResourceHubVisual({ variant, className = "" }: HubProps) {
  const isMaterials = variant === "materials";

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border bg-white/88 p-4 shadow-[0_18px_45px_rgba(11,31,58,0.08)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 320 220" className="h-auto w-full" fill="none">
        <rect width="320" height="220" rx="26" fill={isMaterials ? "#ecfdf5" : "#eef2ff"} />
        <circle cx="263" cy="45" r="36" fill={isMaterials ? "#a7f3d0" : "#c7d2fe"} opacity="0.72" />
        <circle cx="51" cy="178" r="42" fill={isMaterials ? "#bae6fd" : "#ccfbf1"} opacity="0.64" />

        {isMaterials ? (
          <>
            <rect x="74" y="36" width="134" height="158" rx="16" fill="#fff" stroke="#0f9f8f" strokeWidth="4" />
            <rect x="94" y="61" width="73" height="10" rx="5" fill="#0b1f3a" />
            <rect x="94" y="84" width="94" height="8" rx="4" fill="#99f6e4" />
            <rect x="94" y="103" width="78" height="8" rx="4" fill="#bfdbfe" />
            <rect x="94" y="122" width="88" height="8" rx="4" fill="#fde68a" />
            <path d="M104 160h22l12-20 19 30 12-16h24" stroke="#0f9f8f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="186" y="68" width="65" height="88" rx="14" fill="#0b1f3a" />
            <path d="M205 92h28M205 112h20M205 132h31" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            <path d="M228 68v30h23" fill="#14395f" />
            <text x="205" y="52" fill="#0b1f3a" fontSize="18" fontWeight="800">PDF</text>
          </>
        ) : (
          <>
            <rect x="68" y="62" width="184" height="112" rx="18" fill="#fff" stroke="#4f46e5" strokeWidth="4" />
            <path d="M160 31 77 65h166z" fill="#0b1f3a" />
            <path d="M104 84v58M139 84v58M181 84v58M216 84v58" stroke="#4f46e5" strokeWidth="8" strokeLinecap="round" />
            <rect x="91" y="150" width="139" height="13" rx="6.5" fill="#0b1f3a" />
            <circle cx="238" cy="54" r="22" fill="#14b8a6" />
            <path d="m229 54 6 6 13-15" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="92" y="178" width="136" height="20" rx="10" fill="#c7d2fe" />
            <path d="M111 188h33M156 188h22M190 188h19" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}

export function ResourceIcon({ variant, className = "" }: IconProps) {
  return (
    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${iconTone[variant]} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {variant === "budget" ? <><path d="M6 7h12v10H6z" /><path d="M9 11h6" /><path d="M9 14h3" /></> : null}
        {variant === "tax" ? <><path d="M7 5h10v14H7z" /><path d="M9.5 9h5" /><path d="M9.5 12h5" /><path d="M9.5 15h2.5" /></> : null}
        {variant === "investment" ? <><path d="M5 18h14" /><path d="M7 15v-3" /><path d="M12 15V8" /><path d="M17 15v-5" /><path d="m7 10 5-4 5 2" /></> : null}
        {variant === "bank" ? <><path d="M12 5 5 8.5h14z" /><path d="M7 10v6" /><path d="M12 10v6" /><path d="M17 10v6" /><path d="M5.5 18h13" /></> : null}
        {variant === "insurance" ? <><path d="M12 5 18 7v4.5c0 3.4-2.2 5.9-6 7.2-3.8-1.3-6-3.8-6-7.2V7z" /><path d="M12 9v5" /><path d="M9.5 11.5h5" /></> : null}
        {variant === "home" ? <><path d="m5 11 7-6 7 6" /><path d="M7 10.5V19h10v-8.5" /><path d="M10.5 19v-5h3v5" /></> : null}
        {variant === "scam" ? <><path d="M12 5 18 7v4.7c0 3.3-2.1 5.8-6 7.2-3.9-1.4-6-3.9-6-7.2V7z" /><path d="M12 9v4" /><path d="M12 16h.01" /></> : null}
        {variant === "family" ? <><circle cx="9" cy="8" r="2.5" /><circle cx="15.5" cy="9" r="2" /><path d="M5.5 18c.7-2.8 2-4 3.5-4s2.8 1.2 3.5 4" /><path d="M13 17c.5-1.8 1.4-2.7 2.5-2.7s2 .9 2.5 2.7" /></> : null}
        {variant === "future" ? <><path d="M6 18V6h12v12" /><path d="M9 9h6" /><path d="M9 12h4" /><path d="m9 18 3-3 3 3" /></> : null}
        {variant === "money" ? <><circle cx="12" cy="12" r="7" /><path d="M12 8v8" /><path d="M9.5 10h5" /><path d="M9.5 14h5" /></> : null}
        {variant === "visa" ? <><rect x="6" y="4.5" width="12" height="15" rx="2" /><path d="M9 9h6" /><path d="M9 13h4" /><circle cx="15" cy="15.5" r="1.5" /></> : null}
        {variant === "consumer" ? <><path d="M12 5 19 18H5z" /><path d="M12 10v3" /><path d="M12 16h.01" /></> : null}
        {variant === "life" ? <><path d="M5 18c4-8 10-8 14 0" /><path d="M8 12c.5-3 2-5 4-6 2 1 3.5 3 4 6" /><path d="M12 6v12" /></> : null}
        {variant === "pdf" ? <><path d="M7 4.5h7l3 3V19H7z" /><path d="M14 4.5v3h3" /><path d="M9.5 11h5" /><path d="M9.5 14h5" /></> : null}
      </svg>
    </span>
  );
}
