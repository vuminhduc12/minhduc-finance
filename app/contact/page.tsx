import type { Metadata } from "next";
import { SiteSectionIcon } from "@/components/brand/SiteSectionIcon";
import { BiBlock } from "@/components/ui/Bilingual";
import { PageIntro } from "@/components/layout/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CONTACT_MAILTO, LINE_BOT_URL, NOTE_PROFILE_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { contactCopy } from "@/lib/copy/contact";
import Link from "next/link";

const title = "お問い合わせ";
const description =
  "Minh Duc Financeへのお問い合わせ。個人相談、取材、協業、企業・学校・団体向けの金融トラブル予防資料や勉強会の連絡窓口です。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro>
        <BiBlock text={contactCopy.pageIntro} viSize="sm" className="mx-auto max-w-2xl text-left sm:text-center" />
      </PageIntro>
      <section className="pb-10 pt-2 sm:pb-12 sm:pt-3 md:pb-14" aria-labelledby="contact-title">
        <Container className="max-w-3xl">
          <h1 id="contact-title" className="flex items-center gap-3 text-[1.5rem] font-bold leading-snug text-navy sm:text-3xl">
            <SiteSectionIcon type="contact" size="md" />
            <span>
              <span className="lang-ja block">お問い合わせ</span>
              <span lang="vi" className="lang-vi text-lg font-semibold text-navy-soft sm:text-xl">
                Liên hệ
              </span>
              <span lang="en" className="lang-en text-lg font-semibold text-navy-soft sm:text-xl">
                Contact
              </span>
            </span>
          </h1>
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm md:text-base">
            <span className="lang-ja">
              {contactCopy.leadBeforeLink.ja}
              <Link href="/scam-check" className="font-medium text-accent underline-offset-2 hover:underline">
                {contactCopy.scamCheckPageLink.ja}
              </Link>
              {contactCopy.leadAfterLink.ja}
            </span>
            <span lang="vi" className="lang-vi">
              {contactCopy.leadBeforeLink.vi}
              <Link href="/scam-check" className="font-medium text-accent underline-offset-2 hover:underline">
                {contactCopy.scamCheckPageLink.vi}
              </Link>
              {contactCopy.leadAfterLink.vi}
            </span>
            <span lang="en" className="lang-en">
              {contactCopy.leadBeforeLink.en}
              <Link href="/scam-check" className="font-medium text-accent underline-offset-2 hover:underline">
                {contactCopy.scamCheckPageLink.en}
              </Link>
              {contactCopy.leadAfterLink.en}
            </span>
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            <Card>
              <h2 className="flex items-center gap-2 text-sm font-bold text-navy sm:text-base">
                <SiteSectionIcon type="contact" size="sm" />
                <span>
                  <span className="lang-ja block">メール窓口</span>
                  <span lang="vi" className="lang-vi text-xs font-semibold text-navy-soft">
                    Email liên hệ
                  </span>
                  <span lang="en" className="lang-en text-xs font-semibold text-navy-soft">
                    Email contact
                  </span>
                </span>
              </h2>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                <span className="lang-ja">
                  現在はメールアプリを開く形式です。本番公開時に正式なメールアドレスへ差し替えます。
                </span>
                <span lang="vi" className="lang-vi">
                  Hiện tại nút sẽ mở ứng dụng email. Khi public production, hãy thay bằng địa chỉ chính thức.
                </span>
                <span lang="en" className="lang-en">
                  This button currently opens your mail app. Replace it with the official address before production launch.
                </span>
              </p>
              <ButtonLink
                href={CONTACT_MAILTO}
                external
                className="mt-3 w-full sm:mt-4"
                aria-label={`${cta.openMailApp.ja} ${cta.openMailApp.vi} ${cta.openMailApp.en}`}
                subLabelVi={cta.openMailApp.vi}
                subLabelEn={cta.openMailApp.en}
              >
                {cta.openMailApp.ja}
              </ButtonLink>
            </Card>
            <Card>
              <h2 className="flex items-center gap-2 text-sm font-bold text-navy sm:text-base">
                <SiteSectionIcon type="profile" size="sm" />
                <span>
                  <span className="lang-ja block">対応できるご連絡</span>
                  <span lang="vi" className="lang-vi text-xs font-semibold text-navy-soft">
                    Các nội dung có thể liên hệ
                  </span>
                  <span lang="en" className="lang-en text-xs font-semibold text-navy-soft">
                    Requests we can receive
                  </span>
                </span>
              </h2>
              <ul className="mt-2 space-y-2 text-[0.8125rem] sm:mt-3 sm:text-sm">
                {contactCopy.inquiryTypes.map((item) => (
                  <li key={item.ja} className="border-l-2 border-accent/25 pl-2.5">
                    <span className="lang-ja block text-foreground">{item.ja}</span>
                    <span lang="vi" className="lang-vi text-foreground">
                      {item.vi}
                    </span>
                    <span lang="en" className="lang-en text-foreground">
                      {item.en}
                    </span>
                  </li>
                ))}
                <li>
                  <Link
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href="/scam-check"
                  >
                    <span className="lang-ja">{cta.scamCheckAboutLink.ja}</span>
                    <span lang="vi" className="lang-vi">{cta.scamCheckAboutLink.vi}</span>
                    <span lang="en" className="lang-en">{cta.scamCheckAboutLink.en}</span>
                  </Link>
                </li>
                <li>
                  <a
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href={LINE_BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="lang-ja">{cta.lineCheckExternal.ja}</span>
                    <span lang="vi" className="lang-vi">{cta.lineCheckExternal.vi}</span>
                    <span lang="en" className="lang-en">{cta.lineCheckExternal.en}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href={NOTE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="lang-ja">{cta.noteOpen.ja}</span>
                    <span lang="vi" className="lang-vi">{cta.noteOpen.vi}</span>
                    <span lang="en" className="lang-en">{cta.noteOpen.en}</span>
                  </a>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mt-6 sm:mt-8">
            <h2 className="flex items-center gap-2 text-sm font-bold text-navy sm:text-base">
              <SiteSectionIcon type="disclaimer" size="sm" />
              <span>
                <span className="lang-ja block">お受けできないご依頼</span>
                <span lang="vi" className="lang-vi text-xs font-semibold text-navy-soft">
                  Những yêu cầu chúng tôi không nhận
                </span>
                <span lang="en" className="lang-en text-xs font-semibold text-navy-soft">
                  Requests we cannot accept
                </span>
              </span>
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-[0.8125rem] text-muted sm:mt-3 sm:text-sm">
              <li>
                <span className="lang-ja">個別銘柄の推奨、売買タイミングの断定</span>
                <span lang="vi" className="lang-vi">Không khuyến nghị mã cụ thể hoặc khẳng định thời điểm mua/bán</span>
                <span lang="en" className="lang-en">Recommendations of specific stocks or definite buy/sell timing</span>
              </li>
              <li>
                <span className="lang-ja">契約書の精読や法的判断の代行</span>
                <span lang="vi" className="lang-vi">Không đọc hợp đồng thay hoặc đưa ra phán đoán pháp lý thay bạn</span>
                <span lang="en" className="lang-en">Detailed contract review or legal judgment on your behalf</span>
              </li>
              <li>
                <span className="lang-ja">成果やリターンの保証</span>
                <span lang="vi" className="lang-vi">Không cam kết kết quả hoặc lợi nhuận</span>
                <span lang="en" className="lang-en">Guarantees of results or returns</span>
              </li>
            </ul>
          </Card>
        </Container>
      </section>
    </>
  );
}
