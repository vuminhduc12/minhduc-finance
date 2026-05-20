import type { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { PageIntro } from "@/components/layout/PageIntro";
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
            <Card className="hidden text-center lg:block">
              <MiraiMascot compact variant="explain" className="mx-auto h-44 w-44" title="PDF教材を説明するミライくん" />
              <p className="mt-2 text-sm font-bold text-navy">
                <span className="lang-ja">まず無料で学ぶ</span>
                <span lang="vi" className="lang-vi">Học miễn phí trước</span>
                <span lang="en" className="lang-en">Start learning for free</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                <span className="lang-ja">反応がある教材だけ、あとで販売・会員機能に育てます。</span>
                <span lang="vi" className="lang-vi">Tài liệu có nhu cầu sẽ phát triển thành trả phí hoặc hội viên.</span>
                <span lang="en" className="lang-en">Materials with demand can grow into paid or member content later.</span>
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 md:py-14" aria-labelledby="materials-list-heading">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              FREE FIRST
            </p>
            <h2 id="materials-list-heading" className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              <span className="lang-ja">公開予定のPDF教材</span>
              <span lang="vi" className="lang-vi">Tài liệu PDF dự kiến mở</span>
              <span lang="en" className="lang-en">PDF materials to publish</span>
            </h2>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {pdfMaterials.map((material) => {
              const cta = materialCta(material);
              return (
                <Card key={material.id} className="flex min-w-0 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold text-white">
                      <span className="lang-ja">{accessLabels[material.access].ja}</span>
                      <span lang="vi" className="lang-vi">{accessLabels[material.access].vi}</span>
                      <span lang="en" className="lang-en">{accessLabels[material.access].en ?? accessLabels[material.access].vi}</span>
                    </span>
                    <span className="rounded-full border border-border bg-accent-muted/55 px-2.5 py-1 text-[0.65rem] font-bold text-navy">
                      <span className="lang-ja">{statusLabels[material.status].ja}</span>
                      <span lang="vi" className="lang-vi">{statusLabels[material.status].vi}</span>
                      <span lang="en" className="lang-en">{statusLabels[material.status].en ?? statusLabels[material.status].vi}</span>
                    </span>
                    {material.pages ? (
                      <span className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.65rem] font-bold text-navy-soft">
                        {material.pages} pages
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-balance text-lg font-bold leading-snug text-navy">
                    <span className="lang-ja">{material.title.ja}</span>
                    <span lang="vi" className="lang-vi">{material.title.vi}</span>
                    <span lang="en" className="lang-en">{material.title.en ?? material.title.vi}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="lang-ja">{material.description.ja}</span>
                    <span lang="vi" className="lang-vi">{material.description.vi}</span>
                    <span lang="en" className="lang-en">{material.description.en ?? material.description.vi}</span>
                  </p>
                  <p className="mt-3 rounded-2xl border border-border bg-white/70 p-3 text-xs leading-relaxed text-navy-soft">
                    <span className="font-bold text-navy">
                      <span className="lang-ja">対象: </span>
                      <span lang="vi" className="lang-vi">Dành cho: </span>
                      <span lang="en" className="lang-en">For: </span>
                    </span>
                    <span className="lang-ja">{material.audience.ja}</span>
                    <span lang="vi" className="lang-vi">{material.audience.vi}</span>
                    <span lang="en" className="lang-en">{material.audience.en ?? material.audience.vi}</span>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {material.tags.map((tag) => (
                      <span
                        key={tag.ja}
                        className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.7rem] font-bold text-navy-soft"
                      >
                        <span className="lang-ja">{tag.ja}</span>
                        <span lang="vi" className="lang-vi">{tag.vi}</span>
                        <span lang="en" className="lang-en">{tag.en ?? tag.vi}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5">
                    {cta.external ? (
                      <TrackedLink
                        href={cta.href}
                        external
                        eventName="pdf_click"
                        eventPayload={{ materialId: material.id, filename: material.filename }}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-navy px-4 py-2 text-center text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
                      >
                        <span className="lang-ja">{cta.label.ja}</span>
                        <span lang="vi" className="lang-vi">{cta.label.vi}</span>
                        <span lang="en" className="lang-en">{cta.label.en ?? cta.label.vi}</span>
                      </TrackedLink>
                    ) : (
                      <TrackedLink
                        href={cta.href}
                        eventName="pdf_click"
                        eventPayload={{ materialId: material.id, filename: material.filename, status: material.status }}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border-2 border-navy bg-white/70 px-4 py-2 text-center text-sm font-bold text-navy hover:bg-navy hover:text-white"
                      >
                        <span className="lang-ja">{cta.label.ja}</span>
                        <span lang="vi" className="lang-vi">{cta.label.vi}</span>
                        <span lang="en" className="lang-en">{cta.label.en ?? cta.label.vi}</span>
                      </TrackedLink>
                    )}
                    <p className="mt-2 text-[0.68rem] leading-relaxed text-muted">
                      <span className="lang-ja">ファイル名: {material.filename}</span>
                      <span lang="vi" className="lang-vi">Tên file: {material.filename}</span>
                      <span lang="en" className="lang-en">File name: {material.filename}</span>
                    </p>
                  </div>
                </Card>
              );
            })}
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
