import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ArticleVisual } from "@/components/sections/ArticleVisual";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getArticleFeed } from "@/lib/article-feed";

type Props = {
  limit?: number;
  showHeaderLink?: boolean;
};

export async function ArticleHubSection({ limit, showHeaderLink = true }: Props) {
  const feed = await getArticleFeed();
  const items = typeof limit === "number" ? feed.items.slice(0, limit) : feed.items;

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
              en: "An article library that builds trust",
            }}
            subtitleBi={{
              ja: "iSenpai や生活情報サイトのように、検索・再訪問につながるテーマ別コンテンツを育てます。",
              vi: "Xây dựng nội dung theo chủ đề để người đọc tìm kiếm và quay lại thường xuyên.",
              en: "Topic-based content designed for search, learning, and repeat visits.",
            }}
          />
          {showHeaderLink ? (
            <Link
              href="/articles"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy bg-white px-4 py-2 text-sm font-bold text-navy hover:bg-navy hover:text-white"
            >
              <span className="lang-ja">記事一覧へ</span>
              <span lang="vi" className="lang-vi">Xem bài viết</span>
              <span lang="en" className="lang-en">View articles</span>
            </Link>
          ) : null}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map((article) => (
            <Card key={article.slug} className="flex h-full flex-col overflow-hidden p-0">
              <ArticleVisual category={article.category} className="border-b border-border" />
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
                  <span className="rounded-full bg-accent-muted/65 px-2.5 py-1 text-navy">
                    <span className="lang-ja">{article.categoryLabel.ja}</span>
                    <span lang="vi" className="lang-vi">{article.categoryLabel.vi}</span>
                    <span lang="en" className="lang-en">{article.categoryLabel.en}</span>
                  </span>
                  <span>{article.readTime}</span>
                  <span>{article.status === "published" ? "Published" : "Planned"}</span>
                </div>
                <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                  <span className="lang-ja block">{article.title.ja}</span>
                  <span lang="vi" className="lang-vi block text-[0.82rem] font-semibold text-navy-soft">
                    {article.title.vi}
                  </span>
                  <span lang="en" className="lang-en block text-[0.82rem] font-semibold text-navy-soft">
                    {article.title.en ?? article.title.vi}
                  </span>
                </h3>
                <p className="lang-ja mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                  {article.excerpt.ja}
                </p>
                <p lang="vi" className="lang-vi mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                  {article.excerpt.vi}
                </p>
                <p lang="en" className="lang-en mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                  {article.excerpt.en ?? article.excerpt.vi}
                </p>
                <div className="mt-auto pt-4">
                  {article.status !== "published" ? (
                    <span className="inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-border bg-white px-3 py-2 text-center text-xs font-bold text-muted">
                      <span className="lang-ja">準備中</span>
                      <span lang="vi" className="lang-vi">Đang chuẩn bị</span>
                      <span lang="en" className="lang-en">Coming soon</span>
                    </span>
                  ) : article.url?.startsWith("/") ? (
                    <TrackedLink
                      href={article.url}
                      eventName="article_click"
                      eventPayload={{ slug: article.slug, source: "internal" }}
                      className="inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-xs font-bold text-white hover:bg-navy-soft"
                    >
                      <span className="lang-ja">記事を読む</span>
                      <span lang="vi" className="lang-vi">Đọc bài viết</span>
                      <span lang="en" className="lang-en">Read article</span>
                    </TrackedLink>
                  ) : article.url ? (
                    <TrackedLink
                      href={article.url}
                      external
                      eventName="article_click"
                      eventPayload={{ slug: article.slug, source: article.source ?? "external" }}
                      className="inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-xs font-bold text-white hover:bg-navy-soft"
                    >
                      <span className="lang-ja">元の記事を読む</span>
                      <span lang="vi" className="lang-vi">Đọc bài gốc</span>
                      <span lang="en" className="lang-en">Read original</span>
                    </TrackedLink>
                  ) : (
                    <TrackedLink
                      href={`/articles/${article.slug}`}
                      eventName="article_click"
                      eventPayload={{ slug: article.slug, source: "fallback" }}
                      className="inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-xs font-bold text-white hover:bg-navy-soft"
                    >
                      <span className="lang-ja">サイト内で読む</span>
                      <span lang="vi" className="lang-vi">Đọc trong site</span>
                      <span lang="en" className="lang-en">Read on site</span>
                    </TrackedLink>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          <span className="lang-ja">
            記事データ: {feed.source === "remote" ? "外部フィード連携中" : "無料ローカルJSON表示中"}
            {feed.updatedAt ? ` / 更新: ${feed.updatedAt}` : ""}
          </span>
          <span lang="vi" className="lang-vi">
            Dữ liệu bài viết: {feed.source === "remote" ? "đang liên kết feed ngoài" : "đang hiển thị JSON miễn phí nội bộ"}
            {feed.updatedAt ? ` / cập nhật: ${feed.updatedAt}` : ""}
          </span>
          <span lang="en" className="lang-en">
            Article data: {feed.source === "remote" ? "connected to external feed" : "showing free local JSON"}
            {feed.updatedAt ? ` / updated: ${feed.updatedAt}` : ""}
          </span>
        </p>
      </Container>
    </section>
  );
}
