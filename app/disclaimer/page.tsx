import type { Metadata } from "next";
import { BiBlock } from "@/components/ui/Bilingual";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { legalVi } from "@/lib/copy/legal-vi";

const title = "免責事項";
const description =
  "Minh Duc Financeの免責事項。教育・情報提供、投資判断、法律・税務判断、外部サービス利用、損害に関する注意事項です。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <article className="pb-10 pt-0 sm:pb-12 md:pb-14" aria-labelledby="disclaimer-title">
      <PageIntro>
        <span className="lang-ja">教育・情報提供サイトとしての範囲と、利用前に確認していただきたい注意事項です。</span>
        <span lang="vi" className="lang-vi">Phạm vi của website giáo dục/thông tin và các điểm cần kiểm tra trước khi sử dụng.</span>
        <span lang="en" className="lang-en">The scope of this education and information site, and points to confirm before using it.</span>
      </PageIntro>
      <Container className="max-w-3xl pt-2 sm:pt-3">
        <BiBlock
          text={legalVi.disclaimerIntro}
          viSize="sm"
          className="mb-8 rounded-xl border border-border bg-card p-4 sm:p-5"
        />
        <h1 id="disclaimer-title" className="text-[1.5rem] font-bold leading-snug text-navy sm:text-3xl">
          <span className="lang-ja">免責事項</span>
          <span lang="vi" className="lang-vi">Miễn trừ trách nhiệm</span>
          <span lang="en" className="lang-en">Disclaimer</span>
        </h1>
        <div lang="en" className="lang-en">
          <h2 className="mt-10 text-xl font-bold text-navy">1. Nature of the information</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Text, charts, and Bot guidance on this site are provided for education and information. We try to improve accuracy, but information may contain errors or become outdated. Always confirm important decisions with primary sources such as official system explanations, contracts, exchange or financial institution materials.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">2. Investment decisions</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This site does not recommend buying or selling specific financial products. Investment results vary depending on market conditions and personal circumstances, and may include loss of principal. Past information and general explanations do not guarantee future results.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">3. Legal, tax, and contract decisions</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This site and LINE Bot do not provide detailed contract review, legal judgment, tax judgment, or representation in individual disputes. Before making important decisions such as remittance, contracts, introductions, or borrowing, consult public support or professionals if you remain uncertain.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">4. External services</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This site may link to external services such as LINE, note, email, and file delivery. Availability, security, and terms of use for external services are the responsibility of each provider.
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">5. Damages</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Except where required by law, the operator is not responsible for damages arising from use of this site or inability to use it.
          </p>
        </div>
        <div className="lang-ja">

          <h2 className="mt-10 text-xl font-bold text-navy">1. 情報の性質</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            本サイトに掲載される文章、図表、Botの案内などは、教育・情報提供を目的としています。掲載情報は正確性の向上に努めますが、誤りや古くなった内容が含まれる可能性があります。重要な判断は、必ず一次情報（制度の公式説明、契約書、取引所・金融機関の資料など）でご確認ください。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">2. 投資判断について</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            特定の金融商品の売買を推奨するものではありません。投資の損益は市場環境や個人の状況により変動し、元本割れを含むリスクがあります。過去の情報や一般的な説明は、将来の成果を保証するものではありません。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">3. 法律・税務・契約判断について</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            本サイトおよびLINE Botは、契約書の精読、法律判断、税務判断、個別トラブルの代理対応を行うものではありません。送金、契約、紹介、借入など重要な判断を行う前に、不安がある場合は公的窓口や弁護士・税理士等の専門家へご相談ください。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">4. 外部サービス</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            LINE、note、メール、ファイル配布など外部サービスへリンクする場合があります。外部サービスの可用性、セキュリティ、利用規約は各提供者の責任範囲です。
          </p>

          <h2 className="mt-10 text-xl font-bold text-navy">5. 損害について</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            本サイトの利用、または利用できなかったことにより生じたいかなる損害についても、法令上認められる範囲を除き、運営者は責任を負いません。
          </p>
        </div>
      </Container>
    </article>
  );
}
