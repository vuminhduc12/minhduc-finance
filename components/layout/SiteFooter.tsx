import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { BRAND_LEGAL_NAME, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const footerNav = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/disclaimer", label: "免責事項" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-navy text-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md space-y-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              {SITE_NAME}
              <FlagIcon code="jp" className="h-4 w-6" />
              <FlagIcon code="vn" className="h-4 w-6" />
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {SITE_TAGLINE}。教育・情報提供を目的とし、金融商品の販売、個別の投資判断、法律判断の代行は行いません。
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              将来的な法人化・研修・コミュニティ支援に向けて、信頼できる学びの基盤を整えています。
            </p>
          </div>
          <nav aria-label="フッターリンク" className="flex flex-col gap-2">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {BRAND_LEGAL_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
