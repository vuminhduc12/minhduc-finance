import Link from "next/link";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_NAME, SITE_TAGLINE, SITE_TAGLINE_EN, SITE_TAGLINE_VI } from "@/lib/site";

const nav = [
  { href: "/", icon: "home", labelJa: "ホーム", labelVi: "Trang chủ", labelEn: "Home" },
  { href: "/articles", icon: "articles", labelJa: "記事", labelVi: "Bài viết", labelEn: "Articles" },
  { href: "/materials", icon: "materials", labelJa: "PDF", labelVi: "PDF", labelEn: "PDF" },
  { href: "/official-info", icon: "official", labelJa: "公式情報", labelVi: "Nguồn chính thức", labelEn: "Official sources" },
  { href: "/scam-check", icon: "scam", labelJa: "詐欺確認", labelVi: "Kiểm tra", labelEn: "Risk check" },
  { href: "/profile", icon: "profile", labelJa: "プロフィール", labelVi: "Hồ sơ", labelEn: "Profile" },
  { href: "/contact", icon: "contact", labelJa: "相談", labelVi: "Liên hệ", labelEn: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8 xl:min-h-[4.25rem] xl:py-2.5">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2.5 font-semibold leading-tight text-navy hover:text-accent-hover xl:w-[16.5rem] 2xl:w-[19rem]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_rgba(11,31,58,0.16)] sm:h-10 sm:w-10">
              <span className="text-xs font-bold sm:text-sm">MF</span>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.9rem] sm:text-[1rem]">
                {SITE_NAME}
              </span>
              <span className="header-compact block max-w-[12.5rem] truncate text-[10px] font-normal text-muted sm:max-w-[22rem] sm:text-[11px] xl:max-w-[13rem] 2xl:max-w-[16rem]">
                <span className="lang-ja">{SITE_TAGLINE}</span>
                <span lang="vi" className="lang-vi">{SITE_TAGLINE_VI}</span>
                <span lang="en" className="lang-en">{SITE_TAGLINE_EN}</span>
              </span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1"
          >
            {nav.map((item) => (
              <HeaderNavLink key={item.href} {...item} />
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
            <Link
              href="/scam-check"
              className="header-compact rounded-full bg-navy px-3.5 py-2 text-center text-[0.78rem] font-bold leading-tight text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
            >
              <span className="lang-ja">確認する</span>
              <span lang="vi" className="lang-vi">Kiểm tra ngay</span>
              <span lang="en" className="lang-en">Check now</span>
            </Link>
            <LanguageToggle compact />
          </div>
          <MobileMenu nav={nav} />
      </div>
    </header>
  );
}
