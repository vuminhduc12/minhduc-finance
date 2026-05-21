import type { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { PageIntro } from "@/components/layout/PageIntro";
import { ResourceHubVisual, ResourceIcon, type ResourceIconVariant } from "@/components/sections/ResourceHubVisual";
import { BiBlock, BiSubheading } from "@/components/ui/Bilingual";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  materialsCopy,
  pdfExpansionSteps,
  pdfMaterials,
  type PdfMaterial,
} from "@/lib/pdf-materials";

const title = "PDF教材ライブラリ";
const description =
  "在日ベトナム人向けの無料PDF教材ライブラリ。詐欺予防、NISA、税金・年金・在留手続きの基礎を低コストに公開し、将来の販売・会員機能にも拡張できる教材ページです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/materials" },
  openGraph: { title, description },
};

const accessLabels = {
  free: { ja: "無料", vi: "Miễn phí", en: "Free" },
  paid: { ja: "有料予定", vi: "Dự kiến trả phí", en: "Paid later" },
  member: { ja: "会員限定予定", vi: "Dự kiến hội viên", en: "Members later" },
} as const;

const statusLabels = {
  ready: { ja: "公開中", vi: "Đang mở", en: "Published" },
  draft: { ja: "PDF配置待ち", vi: "Chờ đặt file PDF", en: "Waiting for PDF" },
  future: { ja: "準備中", vi: "Đang chuẩn bị", en: "Coming soon" },
} as const;

const languageLabels = {
  ja: { ja: "日本語版", vi: "Bản tiếng Nhật", en: "Japanese" },
  vi: { ja: "ベトナム語版", vi: "Bản tiếng Việt", en: "Vietnamese" },
} as const;

const versionLabels = {
  detailed: { ja: "詳細版", vi: "Bản chi tiết", en: "Detailed" },
  standard: { ja: "標準版", vi: "Bản tiêu chuẩn", en: "Standard" },
  vietnamese: { ja: "ベトナム語版", vi: "Bản tiếng Việt", en: "Vietnamese edition" },
} as const;

const materialCategories = [
  {
    prefix: "01",
    title: { ja: "家計・貯金", vi: "Chi tiêu và tiết kiệm", en: "Budgeting and Saving" },
    description: {
      ja: "毎月のお金を整える最初の入口です。",
      vi: "Bước đầu để sắp xếp tiền bạc hàng tháng.",
      en: "The first step for organizing monthly money.",
    },
  },
  {
    prefix: "02",
    title: { ja: "税金・社会保険・年金", vi: "Thuế, bảo hiểm xã hội, lương hưu", en: "Taxes, Social Insurance, and Pension" },
    description: {
      ja: "給与明細や日本の制度を理解するための資料です。",
      vi: "Tài liệu để hiểu bảng lương và chế độ tại Nhật.",
      en: "Materials for understanding pay slips and Japanese systems.",
    },
  },
  {
    prefix: "03",
    title: { ja: "NISA・iDeCo", vi: "NISA và iDeCo", en: "NISA and iDeCo" },
    description: {
      ja: "資産形成を始める前に確認したい基礎です。",
      vi: "Kiến thức cơ bản trước khi bắt đầu tích sản.",
      en: "Basics to check before starting asset building.",
    },
  },
  {
    prefix: "04",
    title: { ja: "投資信託・リスク", vi: "Quỹ đầu tư và rủi ro", en: "Investment Trusts and Risk" },
    description: {
      ja: "投資商品の仕組みとリスクを整理します。",
      vi: "Sắp xếp cơ chế sản phẩm đầu tư và rủi ro.",
      en: "Organize how investment products work and what risks to check.",
    },
  },
  {
    prefix: "05",
    title: { ja: "初心者の失敗予防", vi: "Tránh sai lầm cho người mới", en: "Beginner Mistake Prevention" },
    description: {
      ja: "学び始めの人がつまずきやすい点を確認します。",
      vi: "Kiểm tra các điểm người mới dễ vấp phải.",
      en: "Check common points where beginners often stumble.",
    },
  },
  {
    prefix: "06",
    title: { ja: "銀行・送金・為替", vi: "Ngân hàng, chuyển tiền, tỷ giá", en: "Banking, Remittance, and FX" },
    description: {
      ja: "銀行利用や母国送金の前に確認する資料です。",
      vi: "Tài liệu cần xem trước khi dùng ngân hàng hoặc gửi tiền về quê.",
      en: "Materials to check before using banks or sending money home.",
    },
  },
  {
    prefix: "07",
    title: { ja: "保険", vi: "Bảo hiểm", en: "Insurance" },
    description: {
      ja: "必要な保険と見直しの考え方を整理します。",
      vi: "Sắp xếp cách nghĩ về bảo hiểm cần thiết và rà soát.",
      en: "Organize how to think about necessary coverage and reviews.",
    },
  },
  {
    prefix: "08",
    title: { ja: "住まい・信用", vi: "Nhà ở và tín dụng", en: "Housing and Credit" },
    description: {
      ja: "賃貸契約や信用情報の基礎を確認します。",
      vi: "Kiểm tra cơ bản về thuê nhà và tín dụng.",
      en: "Check the basics of rentals and credit information.",
    },
  },
  {
    prefix: "09",
    title: { ja: "日越ライフプラン", vi: "Kế hoạch Nhật-Việt", en: "Japan-Vietnam Life Planning" },
    description: {
      ja: "日本とベトナムをまたぐ将来設計の資料です。",
      vi: "Tài liệu lập kế hoạch tương lai giữa Nhật và Việt Nam.",
      en: "Materials for planning a future across Japan and Vietnam.",
    },
  },
  {
    prefix: "10",
    title: { ja: "詐欺予防", vi: "Phòng tránh lừa đảo", en: "Scam Prevention" },
    description: {
      ja: "送金・契約・紹介の前に危険サインを確認します。",
      vi: "Kiểm tra dấu hiệu nguy hiểm trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu.",
      en: "Check warning signs before payment, signing, or referrals.",
    },
  },
  {
    prefix: "11",
    title: { ja: "緊急資金", vi: "Quỹ dự phòng", en: "Emergency Fund" },
    description: {
      ja: "急な出費に備える生活防衛資金の資料です。",
      vi: "Tài liệu về quỹ dự phòng cho chi phí bất ngờ.",
      en: "Materials on preparing for unexpected expenses.",
    },
  },
  {
    prefix: "12",
    title: { ja: "給与明細・手取り", vi: "Bảng lương và thực nhận", en: "Pay Slips and Take-Home Pay" },
    description: {
      ja: "給料の内訳、控除、残業代を確認します。",
      vi: "Kiểm tra chi tiết lương, khấu trừ và tăng ca.",
      en: "Check salary details, deductions, and overtime pay.",
    },
  },
  {
    prefix: "13",
    title: { ja: "カード・借金管理", vi: "Thẻ và quản lý nợ", en: "Cards and Debt Management" },
    description: {
      ja: "クレジットカード、リボ払い、返済を整理します。",
      vi: "Sắp xếp thẻ tín dụng, trả góp/revolving và trả nợ.",
      en: "Organize credit cards, revolving payments, and repayment.",
    },
  },
  {
    prefix: "14",
    title: { ja: "教育・子育て・仕送り", vi: "Giáo dục, nuôi con, gửi tiền", en: "Education, Parenting, and Remittance" },
    description: {
      ja: "家族に関わるお金の計画を整理します。",
      vi: "Sắp xếp kế hoạch tiền bạc liên quan đến gia đình.",
      en: "Organize money plans related to family.",
    },
  },
  {
    prefix: "15",
    title: { ja: "帰国・定住・老後", vi: "Về nước, định cư, tuổi già", en: "Returning, Settling, and Retirement" },
    description: {
      ja: "長期の将来設計を考えるための資料です。",
      vi: "Tài liệu để suy nghĩ về kế hoạch dài hạn.",
      en: "Materials for long-term future planning.",
    },
  },
] as const;

function materialPrefix(material: PdfMaterial) {
  return material.filename.slice(0, 2);
}

function materialLanguage(material: PdfMaterial) {
  return material.id.endsWith("-vn") || material.filename.includes("_vn") ? "vi" : "ja";
}

function materialVersion(material: PdfMaterial) {
  if (materialLanguage(material) === "vi") return "vietnamese";
  return material.filename.includes("detailed_expert_full") ? "detailed" : "standard";
}

function materialCategoryIcon(prefix: string): ResourceIconVariant {
  if (prefix === "01" || prefix === "11" || prefix === "12" || prefix === "13") return "budget";
  if (prefix === "02") return "tax";
  if (prefix === "03" || prefix === "04" || prefix === "05") return "investment";
  if (prefix === "06") return "bank";
  if (prefix === "07") return "insurance";
  if (prefix === "08") return "home";
  if (prefix === "10") return "scam";
  if (prefix === "14") return "family";
  return "future";
}

function materialCta(material: PdfMaterial) {
  if (material.status === "ready") {
    return {
      href: material.href,
      external: true,
      label: { ja: "PDFを読む", vi: "Đọc PDF", en: "Read PDF" },
    };
  }

  if (material.status === "draft") {
    return {
      href: "/contact",
      external: false,
      label: { ja: "PDF配置後に公開", vi: "Sẽ mở sau khi đặt file PDF", en: "Published after PDF is placed" },
    };
  }

  return {
    href: "/contact",
    external: false,
    label: { ja: "公開予定を相談する", vi: "Hỏi về lịch phát hành", en: "Ask about release plans" },
  };
}

export default function MaterialsPage() {
  const categorizedMaterials = materialCategories.map((category) => ({
    ...category,
    materials: pdfMaterials.filter((material) => materialPrefix(material) === category.prefix),
  }));
  const japaneseCount = pdfMaterials.filter((material) => materialLanguage(material) === "ja").length;
  const vietnameseCount = pdfMaterials.filter((material) => materialLanguage(material) === "vi").length;

  return (
    <>
      <PageIntro>
        <BiBlock
          text={materialsCopy.pageIntro}
          viSize="sm"
          className="mx-auto max-w-2xl text-left sm:text-center"
        />
      </PageIntro>

      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(15,159,143,0.18),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#eefcf9_54%,#f7f9fc_100%)] py-10 sm:py-12 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-center lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <p className="inline-flex rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent shadow-sm">
                PDF MATERIALS
              </p>
              <h1 className="mt-3 text-balance text-[1.75rem] font-bold leading-tight text-navy sm:text-4xl">
                <BiSubheading text={materialsCopy.title} />
              </h1>
              <BiBlock
                text={materialsCopy.lead}
                viSize="lg"
                className="mt-4 max-w-2xl text-sm text-muted sm:text-base"
              />
            </div>
            <Card className="hidden lg:block">
              <ResourceHubVisual variant="materials" />
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { icon: "pdf", label: "PDF" },
                  { icon: "budget", label: "Money" },
                  { icon: "scam", label: "Risk" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-white/78 p-2">
                    <ResourceIcon variant={item.icon as ResourceIconVariant} className="mx-auto h-8 w-8 rounded-xl" />
                    <p className="mt-1 text-[0.68rem] font-bold text-navy">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 md:py-14" aria-labelledby="materials-list-heading">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                FREE FIRST
              </p>
              <h2 id="materials-list-heading" className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                <span className="lang-ja">種類別にPDFを選ぶ</span>
                <span lang="vi" className="lang-vi">Chọn PDF theo loại</span>
                <span lang="en" className="lang-en">Choose PDFs by type</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="lang-ja">同じテーマごとに、日本語版とベトナム語版を並べています。まずテーマを選び、次に読みたい言語・版を選んでください。</span>
                <span lang="vi" className="lang-vi">Tài liệu được nhóm theo cùng chủ đề, gồm bản tiếng Nhật và tiếng Việt. Trước hết chọn chủ đề, sau đó chọn ngôn ngữ/bản muốn đọc.</span>
                <span lang="en" className="lang-en">Materials are grouped by theme, with Japanese and Vietnamese versions side by side. Choose a theme first, then choose the language or version you want.</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-white/82 p-3 text-center shadow-sm">
              <div>
                <p className="text-lg font-bold text-navy">{pdfMaterials.length}</p>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-muted">PDF</p>
              </div>
              <div>
                <p className="text-lg font-bold text-navy">{japaneseCount}</p>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-muted">JP</p>
              </div>
              <div>
                <p className="text-lg font-bold text-navy">{vietnameseCount}</p>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-muted">VN</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {categorizedMaterials.map((category) => (
              <details
                key={category.prefix}
                className="group rounded-2xl border border-border bg-white/78 shadow-[0_18px_45px_rgba(11,31,58,0.05)] open:bg-white/92"
                open={category.prefix === "01" || category.prefix === "10"}
              >
                <summary className="cursor-pointer list-none p-4 marker:content-none sm:p-5 [&::-webkit-details-marker]:hidden">
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <ResourceIcon variant={materialCategoryIcon(category.prefix)} />
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
                          Series {category.prefix} / {category.materials.length} PDFs
                        </p>
                        <h3 className="mt-1 text-lg font-bold leading-snug text-navy sm:text-xl">
                          <span className="lang-ja">{category.title.ja}</span>
                          <span lang="vi" className="lang-vi">{category.title.vi}</span>
                          <span lang="en" className="lang-en">{category.title.en}</span>
                        </h3>
                        <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                          <span className="lang-ja">{category.description.ja}</span>
                          <span lang="vi" className="lang-vi">{category.description.vi}</span>
                          <span lang="en" className="lang-en">{category.description.en}</span>
                        </p>
                      </div>
                    </div>
                    <span
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-base font-bold text-navy transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      ↓
                    </span>
                  </div>
                </summary>

                <div className="border-t border-border px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="grid gap-3 pt-4 md:grid-cols-2">
                    {category.materials.map((material) => {
                      const cta = materialCta(material);
                      const language = languageLabels[materialLanguage(material)];
                      const version = versionLabels[materialVersion(material)];
                      return (
                        <Card key={material.id} className="flex min-w-0 flex-col p-4 sm:p-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold text-white">
                              <span className="lang-ja">{language.ja}</span>
                              <span lang="vi" className="lang-vi">{language.vi}</span>
                              <span lang="en" className="lang-en">{language.en}</span>
                            </span>
                            <span className="rounded-full border border-border bg-accent-muted/55 px-2.5 py-1 text-[0.65rem] font-bold text-navy">
                              <span className="lang-ja">{version.ja}</span>
                              <span lang="vi" className="lang-vi">{version.vi}</span>
                              <span lang="en" className="lang-en">{version.en}</span>
                            </span>
                            <span className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.65rem] font-bold text-navy-soft">
                              <span className="lang-ja">{accessLabels[material.access].ja}</span>
                              <span lang="vi" className="lang-vi">{accessLabels[material.access].vi}</span>
                              <span lang="en" className="lang-en">{accessLabels[material.access].en}</span>
                            </span>
                          </div>

                          <h4 className="mt-3 text-balance text-base font-bold leading-snug text-navy">
                            <span className="lang-ja">{material.title.ja}</span>
                            <span lang="vi" className="lang-vi">{material.title.vi}</span>
                            <span lang="en" className="lang-en">{material.title.en}</span>
                          </h4>
                          <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                            <span className="lang-ja">{material.description.ja}</span>
                            <span lang="vi" className="lang-vi">{material.description.vi}</span>
                            <span lang="en" className="lang-en">{material.description.en}</span>
                          </p>
                          <p className="mt-3 rounded-xl border border-border bg-white/70 p-2.5 text-xs leading-relaxed text-navy-soft">
                            <span className="font-bold text-navy">
                              <span className="lang-ja">対象: </span>
                              <span lang="vi" className="lang-vi">Dành cho: </span>
                              <span lang="en" className="lang-en">For: </span>
                            </span>
                            <span className="lang-ja">{material.audience.ja}</span>
                            <span lang="vi" className="lang-vi">{material.audience.vi}</span>
                            <span lang="en" className="lang-en">{material.audience.en}</span>
                          </p>

                          <div className="mt-auto pt-4">
                            <TrackedLink
                              href={cta.href}
                              external={cta.external}
                              eventName="pdf_click"
                              eventPayload={{ materialId: material.id, filename: material.filename, status: material.status }}
                              className={cta.external
                                ? "inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-xs font-bold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
                                : "inline-flex min-h-10 w-full items-center justify-center rounded-xl border-2 border-navy bg-white/70 px-3 py-2 text-center text-xs font-bold text-navy hover:bg-navy hover:text-white"}
                            >
                              <span className="lang-ja">{cta.label.ja}</span>
                              <span lang="vi" className="lang-vi">{cta.label.vi}</span>
                              <span lang="en" className="lang-en">{cta.label.en}</span>
                            </TrackedLink>
                            <p className="mt-2 break-all text-[0.65rem] leading-relaxed text-muted">
                              <span className="lang-ja">ファイル: {material.filename}</span>
                              <span lang="vi" className="lang-vi">File: {material.filename}</span>
                              <span lang="en" className="lang-en">File: {material.filename}</span>
                            </p>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white/78 py-10 sm:py-12 md:py-14" aria-labelledby="materials-growth-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              GROWTH DESIGN
            </p>
            <h2 id="materials-growth-heading" className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              <span className="lang-ja">無料から販売・会員へ拡張する設計</span>
              <span lang="vi" className="lang-vi">Thiết kế mở rộng từ miễn phí sang trả phí/hội viên</span>
              <span lang="en" className="lang-en">A design that can grow from free PDFs to paid and member access</span>
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {pdfExpansionSteps.map((step, index) => (
              <Card key={step.title.ja} className="min-w-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  <span className="lang-ja">{step.title.ja}</span>
                  <span lang="vi" className="lang-vi">{step.title.vi}</span>
                  <span lang="en" className="lang-en">{step.title.en}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="lang-ja">{step.body.ja}</span>
                  <span lang="vi" className="lang-vi">{step.body.vi}</span>
                  <span lang="en" className="lang-en">{step.body.en}</span>
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="rounded-3xl border border-border bg-navy p-5 text-white shadow-[0_18px_45px_rgba(11,31,58,0.14)] sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-muted">
              STORAGE RULE
            </p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              <span className="lang-ja">無料PDFだけ public/pdfs に置く</span>
              <span lang="vi" className="lang-vi">Chỉ đặt PDF miễn phí trong public/pdfs</span>
              <span lang="en" className="lang-en">Place only free PDFs in public/pdfs</span>
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200">
              <span className="lang-ja">
                public配下のPDFはURLを知っていれば誰でも読めます。有料・会員限定にする教材は、将来Supabase Storage、S3、Cloudflare R2などの保護ストレージへ移し、ログイン・購入履歴・期限付きURLで管理します。
              </span>
              <span lang="vi" className="lang-vi">
                PDF trong public có thể đọc nếu biết URL. Tài liệu trả phí hoặc hội viên nên chuyển sang storage được bảo vệ như Supabase Storage, S3 hoặc Cloudflare R2 và quản lý bằng đăng nhập, lịch sử mua, URL có thời hạn.
              </span>
              <span lang="en" className="lang-en">
                PDFs under public can be read by anyone who knows the URL. Paid or member-only materials should later move to protected storage such as Supabase Storage, S3, or Cloudflare R2, with login, purchase history, and expiring URLs.
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
