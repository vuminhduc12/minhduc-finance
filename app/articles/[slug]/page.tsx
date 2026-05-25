import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleVisual } from "@/components/sections/ArticleVisual";
import { ResourceIcon, type ResourceIconVariant } from "@/components/sections/ResourceHubVisual";
import { Container } from "@/components/ui/Container";
import { getArticleBySlug, getArticleFeed } from "@/lib/article-feed";
import type { ArticleCategory } from "@/lib/articles";
import { SITE_NAME } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const visualGuides: Record<
  ArticleCategory,
  {
    icon: ResourceIconVariant;
    points: readonly { ja: string; vi: string; en: string }[];
  }
> = {
  risk: {
    icon: "scam",
    points: [
      { ja: "急がされる言葉", vi: "Lời nói thúc ép", en: "Pressure phrases" },
      { ja: "送金前の確認", vi: "Kiểm tra trước khi chuyển tiền", en: "Checks before sending money" },
      { ja: "相談先の整理", vi: "Sắp xếp nơi cần hỏi", en: "Where to ask" },
    ],
  },
  "life-money": {
    icon: "tax",
    points: [
      { ja: "給与明細", vi: "Phiếu lương", en: "Pay slip" },
      { ja: "税金・社会保険", vi: "Thuế và bảo hiểm", en: "Tax and social insurance" },
      { ja: "生活費の見直し", vi: "Xem lại chi phí sống", en: "Daily budget" },
    ],
  },
  nisa: {
    icon: "investment",
    points: [
      { ja: "制度の基本", vi: "Kiến thức cơ bản", en: "System basics" },
      { ja: "リスク確認", vi: "Kiểm tra rủi ro", en: "Risk check" },
      { ja: "長期で考える", vi: "Suy nghĩ dài hạn", en: "Long-term view" },
    ],
  },
  remittance: {
    icon: "bank",
    points: [
      { ja: "手数料", vi: "Phí chuyển tiền", en: "Fees" },
      { ja: "送金先情報", vi: "Thông tin người nhận", en: "Recipient details" },
      { ja: "本人確認", vi: "Xác minh danh tính", en: "Identity checks" },
    ],
  },
  debt: {
    icon: "consumer",
    points: [
      { ja: "毎月の支払い", vi: "Khoản trả mỗi tháng", en: "Monthly payment" },
      { ja: "利息と総額", vi: "Lãi và tổng số tiền", en: "Interest and total cost" },
      { ja: "早めの相談", vi: "Hỏi sớm", en: "Ask early" },
    ],
  },
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
    title: article.title.en ?? article.title.vi,
    description: article.excerpt.en ?? article.excerpt.vi,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title.en ?? article.title.vi,
      description: article.excerpt.en ?? article.excerpt.vi,
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
            <span lang="en" className="lang-en">Back to article library</span>
          </Link>
          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-center">
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                <span className="lang-ja">{article.categoryLabel.ja}</span>
                <span lang="vi" className="lang-vi">{article.categoryLabel.vi}</span>
                <span lang="en" className="lang-en">{article.categoryLabel.en ?? article.categoryLabel.vi}</span>
              </p>
              <h1 className="mt-3 text-balance text-[1.75rem] font-bold leading-tight text-navy sm:text-4xl">
                <span className="lang-ja block">{article.title.ja}</span>
                <span lang="vi" className="lang-vi block text-[0.82em] font-semibold text-navy-soft">
                  {article.title.vi}
                </span>
                <span lang="en" className="lang-en block text-[0.82em] font-semibold text-navy-soft">
                  {article.title.en ?? article.title.vi}
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                <span className="lang-ja">{article.excerpt.ja}</span>
                <span lang="vi" className="lang-vi">{article.excerpt.vi}</span>
                <span lang="en" className="lang-en">{article.excerpt.en ?? article.excerpt.vi}</span>
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
            <div className="min-w-0 rounded-3xl border border-border bg-white p-3 shadow-[0_18px_45px_rgba(11,31,58,0.08)]">
              <ArticleVisual category={article.category} size="feature" className="rounded-2xl" />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12">
        <div className="mx-auto mb-5 grid max-w-3xl gap-3 md:grid-cols-3">
          {visualGuides[article.category].points.map((point) => (
            <div key={point.ja} className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
              <ResourceIcon variant={visualGuides[article.category].icon} className="h-10 w-10 shrink-0 rounded-xl" />
              <p className="min-w-0 break-words text-sm font-bold leading-snug text-navy">
                <span className="lang-ja">{point.ja}</span>
                <span lang="vi" className="lang-vi">{point.vi}</span>
                <span lang="en" className="lang-en">{point.en}</span>
              </p>
            </div>
          ))}
        </div>
        {body.length > 0 ? (
          <div className="mx-auto max-w-3xl space-y-5 rounded-3xl border border-border bg-card p-5 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-8">
            {body.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`} className="text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                <span className="lang-ja block">{paragraph.ja}</span>
                <span lang="vi" className="lang-vi block text-navy-soft">{paragraph.vi}</span>
                <span lang="en" className="lang-en block text-navy-soft">{paragraph.en ?? paragraph.vi}</span>
              </p>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-5 text-center shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-8">
            <p className="text-sm leading-relaxed text-muted">
              <span className="lang-ja">この記事本文は準備中です。</span>
              <span lang="vi" className="lang-vi">Nội dung bài viết này đang được chuẩn bị.</span>
              <span lang="en" className="lang-en">This article body is being prepared.</span>
            </p>
          </div>
        )}
      </Container>
    </article>
  );
}
