import type { Metadata } from "next";
import { ArticleHubSection } from "@/components/sections/ArticleHubSection";
import { PageIntro } from "@/components/layout/PageIntro";
import { BiBlock } from "@/components/ui/Bilingual";
import { Container } from "@/components/ui/Container";
import { articleCategories } from "@/lib/articles";

const title = "記事ライブラリ";
const description =
  "在日ベトナム人向けに、詐欺予防、生活金融、NISA、送金、借金・支払いの基礎を日越併記で整理する記事ライブラリです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/articles" },
  openGraph: { title, description },
};

export default function ArticlesPage() {
  return (
    <>
      <PageIntro>
        <BiBlock
          text={{
            ja: "金融教育メディアとして、検索・再訪問につながるテーマ別の記事をここに蓄積していきます。",
            vi: "Lưu trữ bài viết theo chủ đề để người đọc có thể tìm kiếm và quay lại thường xuyên.",
            en: "A topic-based article library designed for search, learning, and repeat visits.",
          }}
          viSize="sm"
          className="mx-auto max-w-2xl text-left sm:text-center"
        />
      </PageIntro>
      <section className="border-b border-border bg-[linear-gradient(135deg,#ffffff,#eefcf9)] py-10 sm:py-12 md:py-14">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              CONTENT CATEGORIES
            </p>
            <h1 className="mt-2 text-[1.65rem] font-bold leading-tight text-navy sm:text-4xl">
              <span className="lang-ja">記事ライブラリ</span>
              <span lang="vi" className="lang-vi text-[0.72em] font-semibold text-navy-soft">
                Thư viện bài viết
              </span>
              <span lang="en" className="lang-en text-[0.72em] font-semibold text-navy-soft">
                Article library
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              <span className="lang-ja">
                生活に近いお金の疑問を、詐欺予防・送金・NISA・支払いなどのカテゴリで整理します。
              </span>
              <span lang="vi" className="lang-vi">
                Sắp xếp các câu hỏi gần đời sống theo chủ đề: phòng tránh lừa đảo, chuyển tiền, NISA và thanh toán.
              </span>
              <span lang="en" className="lang-en">
                Practical money questions organized by topic: scam prevention, remittances, NISA, and payments.
              </span>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {articleCategories.map((category) => (
              <span
                key={category.id}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold text-navy shadow-sm"
              >
                <span className="lang-ja">{category.label.ja}</span>
                <span lang="vi" className="lang-vi">
                  {category.label.vi}
                </span>
                <span lang="en" className="lang-en">
                  {category.label.en ?? category.label.vi}
                </span>
              </span>
            ))}
          </div>
        </Container>
      </section>
      <ArticleHubSection showHeaderLink={false} />
    </>
  );
}
