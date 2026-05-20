import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_NAME, SITE_TAGLINE, SITE_TAGLINE_EN, SITE_TAGLINE_VI } from "@/lib/site";

const nav = [
  { href: "/", labelJa: "ホーム", labelVi: "Trang chủ", labelEn: "Home" },
  { href: "/articles", labelJa: "記事", labelVi: "Bài viết", labelEn: "Articles" },
  { href: "/materials", labelJa: "PDF教材", labelVi: "PDF", labelEn: "PDF" },
  { href: "/official-info", labelJa: "公式情報", labelVi: "Nguồn chính thức", labelEn: "Official sources" },
  { href: "/scam-check", labelJa: "詐欺チェック", labelVi: "Kiểm tra", labelEn: "Risk check" },
  { href: "/profile", labelJa: "プロフィール", labelVi: "Hồ sơ", labelEn: "Profile" },
  { href: "/contact", labelJa: "お問い合わせ", labelVi: "Liên hệ", labelEn: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 px-4 py-2 sm:gap-4 sm:px-6 lg:px-8 xl:min-h-[4.25rem] xl:py-2.5">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2.5 font-semibold leading-tight text-navy hover:text-accent-hover xl:w-[17rem] xl:shrink-0 2xl:w-[20rem]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-[0_10px_24px_rgba(11,31,58,0.16)] sm:h-10 sm:w-10">
            <span className="text-xs font-bold sm:text-sm">MF</span>
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1.5 truncate text-[0.86rem] sm:text-[0.95rem]">
              {SITE_NAME}
              <FlagIcon code="jp" className="hidden h-3.5 w-5 sm:block" />
              <FlagIcon code="vn" className="hidden h-3.5 w-5 sm:block" />
              <FlagIcon code="us" className="hidden h-3.5 w-5 sm:block" title="アメリカ英語" />
            </span>
            <span className="block max-w-[12.5rem] truncate text-[10px] font-normal text-muted sm:max-w-[18rem] sm:text-[11px] xl:max-w-[15rem] 2xl:max-w-[19rem]">
              <span className="lang-ja">{SITE_TAGLINE}</span>
              <span lang="vi" className="lang-vi">{SITE_TAGLINE_VI}</span>
              <span lang="en" className="lang-en">{SITE_TAGLINE_EN}</span>
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-center text-[0.78rem] font-semibold leading-tight text-navy-soft hover:bg-accent-muted/60 hover:text-navy 2xl:px-2.5 2xl:text-[0.82rem]"
            >
              <span className="lang-ja">{item.labelJa}</span>
              <span lang="vi" className="lang-vi">{item.labelVi}</span>
              <span lang="en" className="lang-en">{item.labelEn}</span>
            </Link>
          ))}
          <Link
            href="/scam-check"
            className="ml-1 shrink-0 rounded-full bg-navy px-4 py-2 text-center text-[0.78rem] font-bold leading-tight text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft 2xl:text-[0.82rem]"
          >
            <span className="lang-ja">まず確認する</span>
            <span lang="vi" className="lang-vi">Kiểm tra ngay</span>
            <span lang="en" className="lang-en">Check now</span>
          </Link>
          <LanguageToggle />
        </nav>
        <MobileMenu nav={nav} />
      </div>
    </header>
  );
}
