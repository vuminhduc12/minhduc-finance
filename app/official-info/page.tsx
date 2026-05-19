import type { Metadata } from "next";
import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { PageIntro } from "@/components/layout/PageIntro";
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

const priorityLabels = {
  money: { ja: "お金", vi: "Tiền bạc" },
  tax: { ja: "税金", vi: "Thuế" },
  visa: { ja: "在留", vi: "Lưu trú" },
  consumer: { ja: "トラブル", vi: "Rắc rối" },
  life: { ja: "生活", vi: "Đời sống" },
} as const;

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
                  { ja: "一次情報へ誘導", vi: "Đi đến nguồn gốc" },
                  { ja: "目的別に整理", vi: "Sắp xếp theo mục đích" },
                  { ja: "転載より安全", vi: "An toàn hơn sao chép" },
                ].map((item) => (
                  <div
                    key={item.ja}
                    className="min-w-0 rounded-2xl border border-border bg-white/78 p-3 text-sm font-bold text-navy shadow-sm"
                  >
                    <span className="lang-ja">{item.ja}</span>
                    <span lang="vi" className="lang-vi">{item.vi}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="hidden text-center lg:block">
              <MiraiMascot compact variant="calm" className="mx-auto h-44 w-44" title="公式情報を落ち着いて確認するミライくん" />
              <p className="mt-2 text-sm font-bold text-navy">
                <span className="lang-ja">ミライくんの確認ルール</span>
                <span lang="vi" className="lang-vi">Quy tắc kiểm tra của Mirai</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                <span className="lang-ja">大事な判断は、解説記事だけでなく公式サイトでも確認。</span>
                <span lang="vi" className="lang-vi">Việc quan trọng phải kiểm tra lại trên trang chính thức.</span>
              </p>
            </Card>
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
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {officialUseCases.map((useCase, index) => (
              <Card key={useCase.id} className="flex min-w-0 flex-col">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-navy text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-balance text-base font-bold leading-snug text-navy">
                      <span className="lang-ja">{useCase.label.ja}</span>
                      <span lang="vi" className="lang-vi">{useCase.label.vi}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      <span className="lang-ja">{useCase.guide.ja}</span>
                      <span lang="vi" className="lang-vi">{useCase.guide.vi}</span>
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
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              <span className="lang-ja">外部サイトは新しいタブで開きます。制度変更があるため、最終判断は公式ページの日付と本文で確認してください。</span>
              <span lang="vi" className="lang-vi">Trang ngoài sẽ mở ở tab mới. Vì quy định có thể thay đổi, hãy kiểm tra ngày cập nhật và nội dung gốc.</span>
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {officialSources.map((source) => (
              <Card key={source.id} className="flex min-w-0 flex-col">
                <article id={source.id} className="flex h-full flex-col">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                        <span className="lang-ja">{source.agency.ja}</span>
                        <span lang="vi" className="lang-vi">{source.agency.vi}</span>
                      </p>
                      <h3 className="mt-1 text-balance text-lg font-bold leading-snug text-navy">
                        <span className="lang-ja">{source.topic.ja}</span>
                        <span lang="vi" className="lang-vi">{source.topic.vi}</span>
                      </h3>
                    </div>
                    <span className="w-fit shrink-0 rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold text-white">
                      <span className="lang-ja">{priorityLabels[source.priority].ja}</span>
                      <span lang="vi" className="lang-vi">{priorityLabels[source.priority].vi}</span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="lang-ja">{source.description.ja}</span>
                    <span lang="vi" className="lang-vi">{source.description.vi}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {source.tags.map((tag) => (
                      <span
                        key={tag.ja}
                        className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.7rem] font-bold text-navy-soft"
                      >
                        <span className="lang-ja">{tag.ja}</span>
                        <span lang="vi" className="lang-vi">{tag.vi}</span>
                      </span>
                    ))}
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-2 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,31,58,0.18)] hover:bg-navy-soft"
                  >
                    <span className="lang-ja">公式サイトを開く</span>
                    <span lang="vi" className="lang-vi">Mở trang chính thức</span>
                  </a>
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
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200">
              <span className="lang-ja">
                公的サイトの内容を無断転載・機械取得して表示するのではなく、一次情報へ直接進める導線を整えます。将来的にRSSや公開APIが利用できる場合のみ、新着情報の自動表示を検討します。
              </span>
              <span lang="vi" className="lang-vi">
                Không sao chép hoặc tự động lấy toàn bộ nội dung từ trang công. Trang này ưu tiên đường dẫn đến nguồn gốc; sau này chỉ tự động hiển thị tin mới nếu có RSS hoặc API công khai phù hợp.
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
