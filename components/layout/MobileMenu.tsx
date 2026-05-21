"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteSectionIcon, type SiteSectionIconType } from "@/components/brand/SiteSectionIcon";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

type NavItem = {
  href: string;
  icon: SiteSectionIconType;
  labelJa: string;
  labelVi: string;
  labelEn: string;
};

type Props = {
  nav: readonly NavItem[];
};

export function MobileMenu({ nav }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-accent-muted/45"
      >
        <span className="flex h-4 w-5 flex-col justify-center gap-1" aria-hidden>
          <span className={`h-0.5 rounded-full bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </span>
        <span className="lang-ja">メニュー</span>
        <span lang="vi" className="lang-vi">Menu</span>
        <span lang="en" className="lang-en">Menu</span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="メニューを閉じる"
            className="fixed inset-0 z-40 bg-navy/12 backdrop-blur-[1px]"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="fixed right-3 top-[4.25rem] z-50 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_rgba(11,31,58,0.22)] sm:right-6"
          >
          <div className="border-b border-border bg-white/90 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                <span className="lang-ja">言語</span>
                <span lang="vi" className="lang-vi">Ngôn ngữ</span>
                <span lang="en" className="lang-en">Language</span>
              </p>
              <LanguageToggle />
            </div>
          </div>
          <nav aria-label="Mobile navigation" className="py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent-muted/50"
              >
                <SiteSectionIcon type={item.icon} size="sm" />
                <span className="min-w-0">
                  <span className="lang-ja">{item.labelJa}</span>
                  <span lang="vi" className="lang-vi">{item.labelVi}</span>
                  <span lang="en" className="lang-en">{item.labelEn}</span>
                </span>
              </Link>
            ))}
          </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
