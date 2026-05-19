import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const nav = [
  { href: "/", label: "ホーム" },
  { href: "/scam-check", label: "詐欺チェック" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2.5 font-semibold leading-tight text-navy hover:text-accent-hover"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_rgba(11,31,58,0.16)]">
            <span className="text-sm font-bold">MF</span>
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1.5 truncate text-sm sm:text-base">
              {SITE_NAME}
              <FlagIcon code="jp" className="hidden h-3.5 w-5 sm:block" />
              <FlagIcon code="vn" className="hidden h-3.5 w-5 sm:block" />
            </span>
            <span className="block truncate text-[11px] font-normal text-muted sm:text-xs">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>
        <nav
          aria-label="主要ナビゲーション"
          className="hidden items-center gap-0.5 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-navy-soft hover:bg-accent-muted/60 hover:text-navy lg:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            メニュー
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-border bg-card py-2 shadow-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-navy hover:bg-accent-muted/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
