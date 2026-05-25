import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { PageIntro } from "@/components/layout/PageIntro";
import { ResourceHubVisual, ResourceIcon, type ResourceIconVariant } from "@/components/sections/ResourceHubVisual";
import { BiBlock, BiSubheading } from "@/components/ui/Bilingual";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  officialHubCopy,
  officialSources,
  officialUseCases,
} from "@/lib/official-info";

const title = "公式情報ハブ";
const description =
  "金融庁、国税庁、出入国在留管理庁、消費者庁などの公式情報へ、在日ベトナム人が目的別にアクセスできる情報ハブです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/official-info" },
  openGraph: { title, description },
};

const sourceById = new Map(officialSources.map((source) => [source.id, source]));

function enText(text: { vi: string; en?: string }) {
  return text.en ?? text.vi;
}

const priorityLabels = {
  money: { ja: "お金", vi: "Tiền bạc", en: "Money" },
  tax: { ja: "税金", vi: "Thuế", en: "Tax" },
  visa: { ja: "在留", vi: "Lưu trú", en: "Residence" },
  consumer: { ja: "トラブル", vi: "Rắc rối", en: "Trouble" },
  life: { ja: "生活", vi: "Đời sống", en: "Life" },
} as const;

function priorityIcon(priority: keyof typeof priorityLabels): ResourceIconVariant {
  if (priority === "money") return "money";
  if (priority === "tax") return "tax";
  if (priority === "visa") return "visa";
  if (priority === "consumer") return "consumer";
  return "life";
}

function useCaseIcon(id: string): ResourceIconVariant {
  if (id === "scam") return "scam";
  if (id === "nisa-tax") return "investment";
  return "visa";
}

const referenceVisuals: readonly {
  icon: ResourceIconVariant;
  title: { ja: string; vi: string; en: string };
  body: { ja: string; vi: string; en: string };
}[] = [
  {
    icon: "tax",
    title: { ja: "給与・税金", vi: "Lương và thuế", en: "Salary and tax" },
    body: {
      ja: "給与明細、所得税、住民税、社会保険を確認します。",
      vi: "Kiểm tra phiếu lương, thuế thu nhập, thuế cư trú và bảo hiểm.",
      en: "Check pay slips, income tax, resident tax, and social insurance.",
    },
  },
  {
    icon: "visa",
    title: { ja: "在留・手続き", vi: "Lưu trú và thủ tục", en: "Residence and paperwork" },
    body: {
      ja: "在留カード、資格変更、更新などの一次情報へ進みます。",
      vi: "Đi đến nguồn gốc về thẻ lưu trú, đổi tư cách và gia hạn.",
      en: "Go to primary sources for residence cards, status changes, and renewals.",
    },
  },
  {
    icon: "investment",
    title: { ja: "NISA・金融", vi: "NISA và tài chính", en: "NISA and finance" },
    body: {
      ja: "制度の説明、注意点、登録業者の確認に使います。",
      vi: "Dùng để xem chế độ, điểm cần chú ý và kiểm tra đơn vị đăng ký.",
      en: "Use this for system details, cautions, and registered business checks.",
    },
  },
  {
    icon: "consumer",
    title: { ja: "詐欺・トラブル", vi: "Lừa đảo và rắc rối", en: "Scams and trouble" },
    body: {
      ja: "契約、SNS勧誘、送金前の相談先を整理します。",
      vi: "Sắp xếp nơi hỏi về hợp đồng, mời gọi SNS và trước khi chuyển tiền.",
      en: "Organize where to ask about contracts, SNS offers, and transfers.",
    },
  },
];

export default function OfficialInfoPage() {
  return (
    <>
      <PageIntro>
        <BiBlock
          text={officialHubCopy.pageIntro}
          viSize="sm"
          className="mx-auto max-w-2xl text-left sm:text-center"
        />
      </PageIntro>

      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(15,159,143,0.18),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#eefcf9_54%,#f7f9fc_100%)] py-10 sm:py-12 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-center lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent shadow-sm">
                <FlagIcon code="vn" className="h-4 w-6" />
                Official Source Hub
                <FlagIcon code="jp" className="h-4 w-6" />
                <FlagIcon code="us" className="h-4 w-6" title="アメリカ英語" />
              </p>
              <h1 className="mt-3 text-balance text-[1.75rem] font-bold leading-tight text-navy sm:text-4xl">
                <BiSubheading text={officialHubCopy.title} />
              </h1>
              <BiBlock
                text={officialHubCopy.lead}
                viSize="lg"
                className="mt-4 max-w-2xl text-sm text-muted sm:text-base"
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { ja: "一次情報へ誘導", vi: "Đi đến nguồn gốc", en: "Guide to primary sources" },
                  { ja: "目的別に整理", vi: "Sắp xếp theo mục đích", en: "Organized by purpose" },
                  { ja: "転載より安全", vi: "An toàn hơn sao chép", en: "Safer than copied summaries" },
                ].map((item) => (
                  <div
                    key={item.ja}
                    className="min-w-0 rounded-2xl border border-border bg-white/78 p-3 text-sm font-bold text-navy shadow-sm"
                  >
                    <span className="lang-ja">{item.ja}</span>
                    <span lang="vi" className="lang-vi">{item.vi}</span>
                    <span lang="en" className="lang-en">{item.en}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="hidden lg:block">
              <ResourceHubVisual variant="official" />
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { icon: "money", label: "Money" },
                  { icon: "tax", label: "Tax" },
                  { icon: "visa", label: "Visa" },
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

      <section className="border-b border-border bg-white/78 py-8 sm:py-10" aria-labelledby="reference-visual-map">
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                REFERENCE MAP
              </p>
              <h2 id="reference-visual-map" className="mt-2 text-balance text-2xl font-bold text-navy sm:text-3xl">
                <span className="lang-ja">迷った時に見る参考資料</span>
                <span lang="vi" className="lang-vi">Tài liệu tham khảo khi bạn phân vân</span>
                <span lang="en" className="lang-en">Reference materials when unsure</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              <span className="lang-ja">内容ごとに公式情報の入口を分けています。まず近いテーマを選んでください。</span>
              <span lang="vi" className="lang-vi">Các lối vào nguồn chính thức được chia theo nội dung. Hãy chọn chủ đề gần nhất trước.</span>
              <span lang="en" className="lang-en">Official sources are grouped by purpose. Start with the closest topic.</span>
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {referenceVisuals.map((item) => (
              <Card key={item.title.ja} className="min-w-0">
                <ResourceIcon variant={item.icon} className="h-14 w-14 rounded-2xl" />
                <h3 className="mt-4 min-w-0 break-words text-lg font-bold leading-snug text-navy">
                  <span className="lang-ja">{item.title.ja}</span>
                  <span lang="vi" className="lang-vi">{item.title.vi}</span>
                  <span lang="en" className="lang-en">{item.title.en}</span>
                </h3>
                <p className="mt-2 min-w-0 break-words text-sm leading-relaxed text-muted">
                  <span className="lang-ja">{item.body.ja}</span>
                  <span lang="vi" className="lang-vi">{item.body.vi}</span>
                  <span lang="en" className="lang-en">{item.body.en}</span>
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 md:py-14" aria-labelledby="official-routes">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              SMART ROUTES
            </p>
            <h2 id="official-routes" className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              <span className="lang-ja">目的から公式情報へ進む</span>
              <span lang="vi" className="lang-vi">Đi từ mục đích đến nguồn chính thức</span>
              <span lang="en" className="lang-en">Go from purpose to official sources</span>
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {officialUseCases.map((useCase, index) => (
              <Card key={useCase.id} className="flex min-w-0 flex-col">
                <div className="flex items-start gap-3">
                  <ResourceIcon variant={useCaseIcon(useCase.id)} />
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                      Route 0{index + 1}
                    </p>
                    <h3 className="text-balance text-base font-bold leading-snug text-navy">
                      <span className="lang-ja">{useCase.label.ja}</span>
                      <span lang="vi" className="lang-vi">{useCase.label.vi}</span>
                      <span lang="en" className="lang-en">{enText(useCase.label)}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      <span className="lang-ja">{useCase.guide.ja}</span>
                      <span lang="vi" className="lang-vi">{useCase.guide.vi}</span>
                      <span lang="en" className="lang-en">{enText(useCase.guide)}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {useCase.sourceIds.map((sourceId) => {
                    const source = sourceById.get(sourceId);
                    if (source == null) return null;
                    return (
                      <Link
                        key={source.id}
                        href={`#${source.id}`}
                        className="min-w-0 rounded-full border border-border bg-accent-muted/55 px-3 py-1.5 text-xs font-bold text-navy hover:bg-accent-muted"
                      >
                        <span className="lang-ja">{source.agency.ja}</span>
                        <span lang="vi" className="lang-vi">{source.agency.vi}</span>
                        <span lang="en" className="lang-en">{enText(source.agency)}</span>
                      </Link>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white/72 py-10 sm:py-12 md:py-14" aria-labelledby="official-sources">
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                OFFICIAL SOURCES
              </p>
              <h2 id="official-sources" className="mt-2 text-balance text-2xl font-bold text-navy sm:text-3xl">
                <span className="lang-ja">確認先一覧</span>
                <span lang="vi" className="lang-vi">Danh sách nơi cần kiểm tra</span>
                <span lang="en" className="lang-en">Official places to check</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              <span className="lang-ja">外部サイトは新しいタブで開きます。制度変更があるため、最終判断は公式ページの日付と本文で確認してください。</span>
              <span lang="vi" className="lang-vi">Trang ngoài sẽ mở ở tab mới. Vì quy định có thể thay đổi, hãy kiểm tra ngày cập nhật và nội dung gốc.</span>
              <span lang="en" className="lang-en">External sites open in a new tab. Because rules can change, confirm the update date and original text before deciding.</span>
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {officialSources.map((source) => (
              <Card key={source.id} className="flex min-w-0 flex-col">
                <article id={source.id} className="flex h-full flex-col">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-start gap-3">
                      <ResourceIcon variant={priorityIcon(source.priority)} />
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                          <span className="lang-ja">{source.agency.ja}</span>
                          <span lang="vi" className="lang-vi">{source.agency.vi}</span>
                          <span lang="en" className="lang-en">{enText(source.agency)}</span>
                        </p>
                        <h3 className="mt-1 text-balance text-lg font-bold leading-snug text-navy">
                          <span className="lang-ja">{source.topic.ja}</span>
                          <span lang="vi" className="lang-vi">{source.topic.vi}</span>
                          <span lang="en" className="lang-en">{enText(source.topic)}</span>
                        </h3>
                      </div>
                    </div>
                    <span className="w-fit shrink-0 rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold text-white">
                      <span className="lang-ja">{priorityLabels[source.priority].ja}</span>
                      <span lang="vi" className="lang-vi">{priorityLabels[source.priority].vi}</span>
                      <span lang="en" className="lang-en">{priorityLabels[source.priority].en ?? priorityLabels[source.priority].vi}</span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="lang-ja">{source.description.ja}</span>
                    <span lang="vi" className="lang-vi">{source.description.vi}</span>
                    <span lang="en" className="lang-en">{enText(source.description)}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {source.tags.map((tag) => (
                      <span
                        key={tag.ja}
                        className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.7rem] font-bold text-navy-soft"
                      >
                        <span className="lang-ja">{tag.ja}</span>
                        <span lang="vi" className="lang-vi">{tag.vi}</span>
                        <span lang="en" className="lang-en">{enText(tag)}</span>
                      </span>
                    ))}
                  </div>
                  <TrackedLink
                    href={source.url}
                    external
                    eventName="official_info_click"
                    eventPayload={{ sourceId: source.id, agency: source.agency.ja }}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
                  >
                    <span className="lang-ja">公式サイトを開く</span>
                    <span lang="vi" className="lang-vi">Mở trang chính thức</span>
                    <span lang="en" className="lang-en">Open official site</span>
                  </TrackedLink>
                </article>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="rounded-3xl border border-border bg-navy p-5 text-white shadow-[0_18px_45px_rgba(11,31,58,0.14)] sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-muted">
              UPDATE POLICY
            </p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">
              <span className="lang-ja">自動取得より、公式リンクと確認ルールを優先</span>
              <span lang="vi" className="lang-vi">Ưu tiên liên kết chính thức và quy tắc kiểm tra</span>
              <span lang="en" className="lang-en">Prioritize official links and checking rules over automatic scraping</span>
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200">
              <span className="lang-ja">
                公的サイトの内容を無断転載・機械取得して表示するのではなく、一次情報へ直接進める導線を整えます。将来的にRSSや公開APIが利用できる場合のみ、新着情報の自動表示を検討します。
              </span>
              <span lang="vi" className="lang-vi">
                Không sao chép hoặc tự động lấy toàn bộ nội dung từ trang công. Trang này ưu tiên đường dẫn đến nguồn gốc; sau này chỉ tự động hiển thị tin mới nếu có RSS hoặc API công khai phù hợp.
              </span>
              <span lang="en" className="lang-en">
                This site does not copy or automatically scrape full content from public websites. It prioritizes direct paths to primary sources; automatic updates will be considered only when suitable RSS feeds or public APIs are available.
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
