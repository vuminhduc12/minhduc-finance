"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

type NavItem = {
  href: string;
  labelJa: string;
  labelVi: string;
};

type Props = {
  nav: readonly NavItem[];
};

export function MobileMenu({ nav }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-accent-muted/45"
      >
        <span className="flex h-4 w-5 flex-col justify-center gap-1" aria-hidden>
          <span className={`h-0.5 rounded-full bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </span>
        <span className="lang-ja">メニュー</span>
        <span lang="vi" className="lang-vi">Menu</span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute right-0 z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_rgba(11,31,58,0.18)]"
        >
          <div className="border-b border-border bg-white/85 p-3">
            <LanguageToggle />
          </div>
          <nav aria-label="Mobile navigation" className="py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent-muted/50"
              >
                <span className="lang-ja">{item.labelJa}</span>
                <span lang="vi" className="lang-vi">{item.labelVi}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
