"use client";

import { useEffect, useRef } from "react";
import { FlagIcon } from "@/components/brand/FlagIcon";

type Lang = "vi" | "ja" | "en";
const LANG_STORAGE_KEY = "minhduc-finance-lang";

function isLang(value: string | null): value is Lang {
  return value === "vi" || value === "ja" || value === "en";
}

export function LanguageToggle() {
  const viButtonRef = useRef<HTMLButtonElement>(null);
  const jaButtonRef = useRef<HTMLButtonElement>(null);
  const enButtonRef = useRef<HTMLButtonElement>(null);

  function applyLang(next: Lang, shouldPersist = true) {
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
    if (shouldPersist) {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    }
    viButtonRef.current?.setAttribute("aria-pressed", String(next === "vi"));
    jaButtonRef.current?.setAttribute("aria-pressed", String(next === "ja"));
    enButtonRef.current?.setAttribute("aria-pressed", String(next === "en"));
  }

  useEffect(() => {
    const currentLang = document.documentElement.dataset.lang ?? null;
    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    const initialLang: Lang = isLang(savedLang)
      ? savedLang
      : isLang(currentLang)
        ? currentLang
        : "vi";
    applyLang(initialLang, false);
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
        ref={enButtonRef}
        type="button"
        onClick={() => changeLang("en")}
        aria-pressed="false"
        className="lang-toggle-button lang-toggle-en flex items-center gap-1 rounded-full px-2 py-1 text-[0.68rem] font-bold transition-colors"
      >
        <FlagIcon code="us" className="h-3.5 w-5" title="アメリカ英語" />
        EN
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
