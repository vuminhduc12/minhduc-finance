import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_NAME, SITE_TAGLINE, SITE_TAGLINE_VI } from "@/lib/site";

const nav = [
  { href: "/", labelJa: "ホーム", labelVi: "Trang chủ" },
  { href: "/articles", labelJa: "記事", labelVi: "Bài viết" },
  { href: "/materials", labelJa: "PDF教材", labelVi: "PDF" },
  { href: "/official-info", labelJa: "公式情報", labelVi: "Nguồn chính thức" },
  { href: "/scam-check", labelJa: "詐欺チェック", labelVi: "Kiểm tra" },
  { href: "/profile", labelJa: "プロフィール", labelVi: "Hồ sơ" },
  { href: "/contact", labelJa: "お問い合わせ", labelVi: "Liên hệ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8 xl:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2.5 font-semibold leading-tight text-navy hover:text-accent-hover xl:max-w-[22rem]"
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
              <span className="lang-ja">{SITE_TAGLINE}</span>
              <span lang="vi" className="lang-vi">{SITE_TAGLINE_VI}</span>
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-navy-soft hover:bg-accent-muted/60 hover:text-navy"
            >
              <span className="lang-ja">{item.labelJa}</span>
              <span lang="vi" className="lang-vi">{item.labelVi}</span>
            </Link>
          ))}
          <Link
            href="/scam-check"
            className="ml-1 rounded-full bg-navy px-3.5 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
          >
            <span className="lang-ja">まず確認する</span>
            <span lang="vi" className="lang-vi">Kiểm tra ngay</span>
          </Link>
          <LanguageToggle />
        </nav>
        <MobileMenu nav={nav} />
      </div>
    </header>
  );
}
