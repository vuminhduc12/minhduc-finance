import type { Metadata } from "next";
import { BiBlock } from "@/components/ui/Bilingual";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { legalVi } from "@/lib/copy/legal-vi";

const title = "プライバシーポリシー";
const description =
  "Minh Duc Financeのプライバシーポリシー。お問い合わせ、LINE、note、PDF教材、解析ツールなど外部サービス利用時の情報の扱いについて説明します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="pb-10 pt-0 sm:pb-12 md:pb-14" aria-labelledby="privacy-title">
      <PageIntro>
        <span className="lang-ja">本サイトおよび関連する外部サービス利用時の、個人情報の扱いについて説明します。</span>
        <span lang="vi" className="lang-vi">Cách xử lý thông tin cá nhân khi sử dụng website và các dịch vụ liên quan.</span>
        <span lang="en" className="lang-en">How personal information is handled when using this website and related external services.</span>
      </PageIntro>
      <Container className="max-w-3xl pt-2 sm:pt-3">
        <BiBlock text={legalVi.privacyIntro} viSize="sm" className="mb-8 rounded-xl border border-border bg-card p-4 sm:p-5" />
        <h1 id="privacy-title" className="text-[1.5rem] font-bold leading-snug text-navy sm:text-3xl">
          <span className="lang-ja">プライバシーポリシー</span>
          <span lang="vi" className="lang-vi">Chính sách bảo mật</span>
          <span lang="en" className="lang-en">Privacy Policy</span>
        </h1>
        <div lang="en" className="lang-en">
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
            Minh Duc Finance pays attention to how information obtained through this site is handled. When using external services such as LINE, note, PDF materials, email, or analytics, please also check each service's terms and privacy policy.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">1. Information collected</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
            <li>Information you enter when contacting us, such as name, email address, affiliation, and inquiry details</li>
            <li>Usage information based on analytics, which may include information through cookies</li>
            <li>Information collected by external services such as LINE, social media, email, or analytics tools</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">2. Purpose of use</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
            <li>Responding to inquiries, interviews, partnerships, and requests from companies, schools, and organizations</li>
            <li>Statistical analysis to improve materials, LINE flows, and site content without identifying individuals</li>
            <li>Responding as required by law</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">3. Third-party provision</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            We do not provide personal information to third parties without your consent, except as required by law. However, providers of external services such as LINE, note, analytics, and email may collect information as necessary to operate their services.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">4. Disclosure, correction, and deletion</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            If you request disclosure, correction, or deletion of personal information, we will respond promptly within a reasonable scope. Please contact us through the inquiry channel.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">5. Policy updates</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This policy may be updated due to legal changes or service changes. Updated content becomes effective when posted on this page.
          </p>

          <p className="mt-10 text-xs text-muted">
            Established: site launch date / Last updated: site launch date. This page will be updated as services are added or the business is incorporated.
          </p>
        </div>
        <div className="lang-ja">
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
            Minh Duc Finance（以下「運営者」）は、本サイトを通じて取得する情報の取り扱いに注意を払います。LINE、note、PDF教材、メール、アクセス解析など外部サービスを利用する場合は、各サービスの規約・プライバシーポリシーもあわせてご確認ください。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">1. 取得する情報</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
            <li>お問い合わせ時にご本人が入力した情報（氏名、メールアドレス、所属、相談内容など）</li>
            <li>アクセス解析に基づく利用状況（Cookie等を通じた情報を含む場合があります）</li>
            <li>外部サービス（LINE、SNS、メール、解析ツール）側で取得される情報</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">2. 利用目的</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
            <li>お問い合わせ、取材、協業、企業・学校・団体向け相談への対応</li>
            <li>教材、LINE導線、サイト内容の改善のための統計的な分析（個人が特定されない形で利用します）</li>
            <li>法令に基づく対応</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">3. 第三者提供</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供しません。ただし、LINE、note、解析ツール、メールなど利用する外部サービスの提供者が、各サービスの運営に必要な範囲で情報を取得する場合があります。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">4. 開示・訂正・削除</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            個人情報の開示・訂正・削除等のご請求があれば、合理的な範囲で速やかに対応します。手続きはお問い合わせ窓口へご連絡ください。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">5. 本ポリシーの変更</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            法令の改正やサービス内容の変更に伴い、本ポリシーを更新することがあります。更新後の内容は本ページに掲載した時点から効力を生じます。
          </p>

          <p className="mt-10 text-xs text-muted">
            制定日：サイト公開日 / 最終更新日：サイト公開日。法人化や利用サービス追加に合わせて更新します。
          </p>
        </div>
      </Container>
    </article>
  );
}
