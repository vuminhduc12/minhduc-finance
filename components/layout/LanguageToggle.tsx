"use client";

import { useEffect, useRef } from "react";
import { FlagIcon } from "@/components/brand/FlagIcon";

type Lang = "vi" | "ja";

export function LanguageToggle() {
  const viButtonRef = useRef<HTMLButtonElement>(null);
  const jaButtonRef = useRef<HTMLButtonElement>(null);

  function applyLang(next: Lang) {
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next === "ja" ? "ja" : "vi";
    viButtonRef.current?.setAttribute("aria-pressed", String(next === "vi"));
    jaButtonRef.current?.setAttribute("aria-pressed", String(next === "ja"));
  }

  useEffect(() => {
    applyLang("vi");
  }, []);

  function changeLang(next: Lang) {
    applyLang(next);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-white/80 p-1 shadow-sm">
      <button
        ref={viButtonRef}
        type="button"
        onClick={() => changeLang("vi")}
        aria-pressed="true"
        className="lang-toggle-button lang-toggle-vi flex items-center gap-1 rounded-full px-2 py-1 text-[0.68rem] font-bold transition-colors"
      >
        <FlagIcon code="vn" className="h-3.5 w-5" />
        VI
      </button>
      <button
        ref={jaButtonRef}
        type="button"
        onClick={() => changeLang("ja")}
        aria-pressed="false"
        className="lang-toggle-button lang-toggle-ja flex items-center gap-1 rounded-full px-2 py-1 text-[0.68rem] font-bold transition-colors"
      >
        <FlagIcon code="jp" className="h-3.5 w-5" />
        JP
      </button>
    </div>
  );
}
