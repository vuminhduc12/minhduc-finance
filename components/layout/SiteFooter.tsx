import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { BRAND_LEGAL_NAME, SITE_NAME, SITE_TAGLINE, SITE_TAGLINE_EN, SITE_TAGLINE_VI } from "@/lib/site";

const footerNav = [
  { href: "/articles", labelJa: "記事ライブラリ", labelVi: "Thư viện bài viết", labelEn: "Article library" },
  { href: "/materials", labelJa: "PDF教材", labelVi: "Tài liệu PDF", labelEn: "PDF materials" },
  { href: "/official-info", labelJa: "公式情報ハブ", labelVi: "Nguồn chính thức", labelEn: "Official sources" },
  { href: "/scam-check", labelJa: "詐欺チェック", labelVi: "Kiểm tra lừa đảo", labelEn: "Scam check" },
  { href: "/privacy", labelJa: "プライバシーポリシー", labelVi: "Chính sách bảo mật", labelEn: "Privacy policy" },
  { href: "/disclaimer", labelJa: "免責事項", labelVi: "Miễn trừ trách nhiệm", labelEn: "Disclaimer" },
  { href: "/contact", labelJa: "お問い合わせ", labelVi: "Liên hệ", labelEn: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-navy text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md space-y-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              {SITE_NAME}
              <FlagIcon code="jp" className="h-4 w-6" />
              <FlagIcon code="vn" className="h-4 w-6" />
              <FlagIcon code="us" className="h-4 w-6" title="アメリカ英語" />
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              <span className="lang-ja">
                {SITE_TAGLINE}。教育・情報提供を目的とし、金融商品の販売、個別の投資判断、法律判断の代行は行いません。
              </span>
              <span lang="vi" className="lang-vi">
                {SITE_TAGLINE_VI}. Nội dung chỉ nhằm mục đích giáo dục và cung cấp thông tin; không bán sản phẩm tài chính, không thay bạn quyết định đầu tư hay pháp lý.
              </span>
              <span lang="en" className="lang-en">
                {SITE_TAGLINE_EN}. This site provides education and information only; it does not sell financial products or replace investment, legal, or tax advice.
              </span>
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <span className="lang-ja">
                将来的な法人化・研修・コミュニティ支援に向けて、信頼できる学びの基盤を整えています。
              </span>
              <span lang="vi" className="lang-vi">
                Đang xây dựng nền tảng học tập đáng tin cậy để phát triển thành đào tạo và hỗ trợ cộng đồng trong tương lai.
              </span>
              <span lang="en" className="lang-en">
                Building a trusted learning base for future training and community support.
              </span>
            </p>
          </div>
          <nav aria-label="フッターリンク" className="flex flex-col gap-2">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                <span className="lang-ja">{item.labelJa}</span>
                <span lang="vi" className="lang-vi">{item.labelVi}</span>
                <span lang="en" className="lang-en">{item.labelEn}</span>
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
