import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getArticleBySlug, getArticleFeed } from "@/lib/article-feed";
import { SITE_NAME } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const feed = await getArticleFeed();
  return feed.items.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (article == null) {
    return { title: SITE_NAME };
  }

  return {
    title: article.title.vi,
    description: article.excerpt.vi,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title.vi,
      description: article.excerpt.vi,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (article == null) {
    notFound();
  }

  const body = article.body ?? [];

  return (
    <article className="pb-12">
      <section className="border-b border-border bg-[linear-gradient(135deg,#ffffff,#eefcf9)] py-10 sm:py-12 md:py-14">
        <Container>
          <Link
            href="/articles"
            className="inline-flex text-sm font-bold text-accent underline-offset-4 hover:underline"
          >
            <span className="lang-ja">記事ライブラリへ戻る</span>
            <span lang="vi" className="lang-vi">Quay lại thư viện bài viết</span>
          </Link>
          <div className="mt-5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <span className="lang-ja">{article.categoryLabel.ja}</span>
              <span lang="vi" className="lang-vi">{article.categoryLabel.vi}</span>
            </p>
            <h1 className="mt-3 text-balance text-[1.75rem] font-bold leading-tight text-navy sm:text-4xl">
              <span className="lang-ja block">{article.title.ja}</span>
              <span lang="vi" className="lang-vi block text-[0.82em] font-semibold text-navy-soft">
                {article.title.vi}
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              <span className="lang-ja">{article.excerpt.ja}</span>
              <span lang="vi" className="lang-vi">{article.excerpt.vi}</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-navy-soft">
              <span className="rounded-full border border-border bg-white px-3 py-1.5">
                {article.readTime}
              </span>
              <span className="rounded-full border border-border bg-white px-3 py-1.5">
                {article.publishedAt ?? "Draft"}
              </span>
              {article.source ? (
                <span className="rounded-full border border-border bg-white px-3 py-1.5">
                  {article.source}
                </span>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12">
        {body.length > 0 ? (
          <div className="mx-auto max-w-3xl space-y-5 rounded-3xl border border-border bg-card p-5 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-8">
            {body.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`} className="text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                <span className="lang-ja block">{paragraph.ja}</span>
                <span lang="vi" className="lang-vi block text-navy-soft">{paragraph.vi}</span>
              </p>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-5 text-center shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-8">
            <p className="text-sm leading-relaxed text-muted">
              <span className="lang-ja">この記事本文は準備中です。</span>
              <span lang="vi" className="lang-vi">Nội dung bài viết này đang được chuẩn bị.</span>
            </p>
          </div>
        )}
      </Container>
    </article>
  );
}
