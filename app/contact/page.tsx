import type { Metadata } from "next";
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
          <h1
            id="contact-title"
            className="text-[1.5rem] font-bold leading-snug text-navy sm:text-3xl"
          >
            <span className="block">お問い合わせ</span>
            <span lang="vi" className="mt-1.5 block text-lg font-semibold text-navy-soft sm:text-xl">
              Liên hệ
            </span>
          </h1>
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm md:text-base">
            {contactCopy.leadBeforeLink.ja}
            <Link href="/scam-check" className="font-medium text-accent underline-offset-2 hover:underline">
              {contactCopy.scamCheckPageLink.ja}
            </Link>
            {contactCopy.leadAfterLink.ja}
          </p>
          <p lang="vi" className="mt-2 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm">
            {contactCopy.leadBeforeLink.vi}
            <Link href="/scam-check" className="font-medium text-accent underline-offset-2 hover:underline">
              {contactCopy.scamCheckPageLink.vi}
            </Link>
            {contactCopy.leadAfterLink.vi}
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            <Card>
              <h2 className="text-sm font-bold text-navy sm:text-base">
                <span className="block">メール窓口</span>
                <span lang="vi" className="mt-1 block text-xs font-semibold text-navy-soft">
                  Email liên hệ
                </span>
              </h2>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                現在はメールアプリを開く形式です。本番公開時に正式なメールアドレスへ差し替えます。
              </p>
              <p lang="vi" className="mt-2 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]">
                Hiện tại nút sẽ mở ứng dụng email. Khi public production, hãy thay bằng địa chỉ chính thức.
              </p>
              <ButtonLink
                href={CONTACT_MAILTO}
                external
                className="mt-3 w-full sm:mt-4"
                aria-label={`${cta.openMailApp.ja} ${cta.openMailApp.vi}`}
                subLabelVi={cta.openMailApp.vi}
              >
                {cta.openMailApp.ja}
              </ButtonLink>
            </Card>
            <Card>
              <h2 className="text-sm font-bold text-navy sm:text-base">
                <span className="block">対応できるご連絡</span>
                <span lang="vi" className="mt-1 block text-xs font-semibold text-navy-soft">
                  Các nội dung có thể liên hệ
                </span>
              </h2>
              <ul className="mt-2 space-y-2 text-[0.8125rem] sm:mt-3 sm:text-sm">
                {contactCopy.inquiryTypes.map((item) => (
                  <li key={item.ja} className="border-l-2 border-accent/25 pl-2.5">
                    <span className="block text-foreground">{item.ja}</span>
                    <span lang="vi" className="mt-0.5 block text-[0.7rem] text-navy-soft sm:text-xs">
                      {item.vi}
                    </span>
                  </li>
                ))}
                <li>
                  <Link
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href="/scam-check"
                  >
                    {cta.scamCheckAboutLink.ja}
                  </Link>
                  <span lang="vi" className="mt-0.5 block text-[0.7rem] text-navy-soft sm:text-xs">
                    {cta.scamCheckAboutLink.vi}
                  </span>
                </li>
                <li>
                  <a
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href={LINE_BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cta.lineCheckExternal.ja}
                  </a>
                  <span lang="vi" className="mt-0.5 block text-[0.7rem] text-navy-soft sm:text-xs">
                    {cta.lineCheckExternal.vi}
                  </span>
                </li>
                <li>
                  <a
                    className="font-medium text-accent underline-offset-2 hover:underline"
                    href={NOTE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cta.noteOpen.ja}
                  </a>
                  <span lang="vi" className="mt-0.5 block text-[0.7rem] text-navy-soft sm:text-xs">
                    {cta.noteOpen.vi}
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mt-6 sm:mt-8">
            <h2 className="text-sm font-bold text-navy sm:text-base">
              <span className="block">お受けできないご依頼</span>
              <span lang="vi" className="mt-1 block text-xs font-semibold text-navy-soft">
                Những yêu cầu chúng tôi không nhận
              </span>
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-[0.8125rem] text-muted sm:mt-3 sm:text-sm">
              <li>個別銘柄の推奨、売買タイミングの断定</li>
              <li>契約書の精読や法的判断の代行</li>
              <li>成果やリターンの保証</li>
            </ul>
            <p lang="vi" className="mt-3 border-l-2 border-accent/25 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]">
              Không tư vấn mã cụ thể hay thời điểm mua/bán; không đọc hợp đồng thay hay đưa ra ý kiến pháp lý; không cam kết lợi nhuận.
            </p>
          </Card>
        </Container>
      </section>
    </>
  );
}
