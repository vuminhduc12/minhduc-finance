import Link from "next/link";
import { articlePreviews } from "@/lib/articles";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

type Props = {
  limit?: number;
  showHeaderLink?: boolean;
};

export function ArticleHubSection({ limit, showHeaderLink = true }: Props) {
  const items = typeof limit === "number" ? articlePreviews.slice(0, limit) : articlePreviews;

  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="article-hub-heading">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="article-hub-heading"
            kicker="CONTENT HUB"
            titleBi={{
              ja: "信頼を積み上げる記事ライブラリ",
              vi: "Thư viện bài viết để xây dựng niềm tin",
            }}
            subtitleBi={{
              ja: "iSenpai や生活情報サイトのように、検索・再訪問につながるテーマ別コンテンツを育てます。",
              vi: "Xây dựng nội dung theo chủ đề để người đọc tìm kiếm và quay lại thường xuyên.",
            }}
          />
          {showHeaderLink ? (
            <Link
              href="/articles"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy bg-white px-4 py-2 text-sm font-bold text-navy hover:bg-navy hover:text-white"
            >
              記事一覧へ
            </Link>
          ) : null}
        </div>
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map((article) => (
            <Card key={article.slug} className="flex h-full flex-col overflow-hidden p-0">
              <div className="border-b border-border bg-navy px-4 py-3 text-white">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-muted">
                  {article.categoryLabel.ja}
                </p>
                <p lang="vi" className="mt-0.5 text-[0.68rem] text-slate-300">
                  {article.categoryLabel.vi}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
                  <span>{article.readTime}</span>
                  <span>{article.status === "published" ? "Published" : "Planned"}</span>
                </div>
                <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                  <span className="block">{article.title.ja}</span>
                  <span lang="vi" className="mt-1 block text-[0.82rem] font-semibold text-navy-soft">
                    {article.title.vi}
                  </span>
                </h3>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                  {article.excerpt.ja}
                </p>
                <p lang="vi" className="mt-1.5 border-l-2 border-accent/30 pl-2.5 text-[0.72rem] leading-relaxed text-navy-soft sm:text-xs">
                  {article.excerpt.vi}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
