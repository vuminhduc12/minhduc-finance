import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_NAME, SITE_TAGLINE, SITE_TAGLINE_EN, SITE_TAGLINE_VI } from "@/lib/site";

const nav = [
  { href: "/", icon: "home", labelJa: "ホーム", labelVi: "Trang chủ", labelEn: "Home" },
  { href: "/articles", icon: "articles", labelJa: "記事", labelVi: "Bài viết", labelEn: "Articles" },
  { href: "/materials", icon: "materials", labelJa: "PDF教材", labelVi: "PDF", labelEn: "PDF" },
  { href: "/official-info", icon: "official", labelJa: "公式情報", labelVi: "Nguồn chính thức", labelEn: "Official sources" },
  { href: "/scam-check", icon: "scam", labelJa: "詐欺チェック", labelVi: "Kiểm tra", labelEn: "Risk check" },
  { href: "/profile", icon: "profile", labelJa: "プロフィール", labelVi: "Hồ sơ", labelEn: "Profile" },
  { href: "/contact", icon: "contact", labelJa: "お問い合わせ", labelVi: "Liên hệ", labelEn: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 xl:py-2.5">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 font-semibold leading-tight text-navy hover:text-accent-hover"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_rgba(11,31,58,0.16)] sm:h-10 sm:w-10">
              <span className="text-xs font-bold sm:text-sm">MF</span>
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 truncate text-[0.9rem] sm:text-[1rem]">
                {SITE_NAME}
                <FlagIcon code="jp" className="hidden h-3.5 w-5 sm:block" />
                <FlagIcon code="vn" className="hidden h-3.5 w-5 sm:block" />
                <FlagIcon code="us" className="hidden h-3.5 w-5 sm:block" title="アメリカ英語" />
              </span>
              <span className="block max-w-[12.5rem] truncate text-[10px] font-normal text-muted sm:max-w-[22rem] sm:text-[11px] xl:max-w-[34rem]">
                <span className="lang-ja">{SITE_TAGLINE}</span>
                <span lang="vi" className="lang-vi">{SITE_TAGLINE_VI}</span>
                <span lang="en" className="lang-en">{SITE_TAGLINE_EN}</span>
              </span>
            </span>
          </Link>
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <Link
              href="/scam-check"
              className="rounded-full bg-navy px-4 py-2 text-center text-[0.82rem] font-bold leading-tight text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
            >
              <span className="lang-ja">まず確認する</span>
              <span lang="vi" className="lang-vi">Kiểm tra ngay</span>
              <span lang="en" className="lang-en">Check now</span>
            </Link>
            <LanguageToggle />
          </div>
          <MobileMenu nav={nav} />
        </div>
        <nav
          aria-label="Main navigation"
          className="mt-2 hidden items-center justify-center gap-1 border-t border-border/70 pt-2 xl:flex"
        >
          {nav.map((item) => (
            <HeaderNavLink key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
