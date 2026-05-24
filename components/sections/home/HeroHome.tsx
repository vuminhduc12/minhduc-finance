import { BiSubheading } from "@/components/ui/Bilingual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { LINE_BOT_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import Link from "next/link";

export function HeroHome() {
  const focusItems = [
    { icon: "budget", labelJa: "給与・生活費", labelVi: "Lương / chi phí" },
    { icon: "tax", labelJa: "税金・制度", labelVi: "Thuế / chế độ" },
    { icon: "bank", labelJa: "送金", labelVi: "Chuyển tiền" },
    { icon: "investment", labelJa: "NISA・投資", labelVi: "NISA / đầu tư" },
    { icon: "scam", labelJa: "詐欺予防", labelVi: "Tránh lừa đảo" },
  ] as const;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgba(15,159,143,0.16),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#f4fbfa_48%,#eef4f8_100%)] pb-10 pt-7 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.76fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="max-w-[44rem] space-y-4 sm:space-y-5">
            <p className="inline-flex rounded-full border border-border/80 bg-white/85 px-3.5 py-2 text-left text-[0.78rem] font-bold leading-relaxed text-navy-soft shadow-sm backdrop-blur sm:px-4 sm:text-sm">
              <span className="flex flex-wrap items-center gap-1.5 text-navy sm:gap-2">
                <FlagIcon code="jp" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <FlagIcon code="vn" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <span className="lang-ja">在日ベトナム人向けの金融教育サイト</span>
                <span lang="vi" className="lang-vi">Trang học tiền bạc cho người Việt tại Nhật</span>
                <span lang="en" className="lang-en">Financial education for Vietnamese residents in Japan</span>
              </span>
            </p>
            <h1
              id="hero-title"
              className="max-w-[42rem] text-balance text-[1.9rem] font-bold leading-tight tracking-tight text-navy sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.13] xl:text-[3.05rem]"
            >
              <BiSubheading
                text={{
                  ja: "在日ベトナム人のためのお金・投資・詐欺予防の学び場",
                  vi: "Nơi học về tiền bạc, đầu tư và phòng tránh lừa đảo cho người Việt tại Nhật",
                  en: "A learning hub for money, investing, and scam prevention in Japan",
                }}
              />
            </h1>
            <div className="max-w-[38rem] text-[0.9rem] leading-relaxed text-muted sm:text-base lg:text-[0.98rem]">
              <p className="lang-ja text-foreground">
                日本で生活する中で不安になりやすい、給与・税金・送金・NISA・投資話を整理します。やさしい日本語とベトナム語で、次に何を確認すべきか分かるようにします。
              </p>
              <p lang="vi" className="lang-vi text-foreground">
                Sắp xếp các chủ đề dễ gây lo lắng tại Nhật: lương, thuế, chuyển tiền, NISA và lời mời đầu tư. Giải thích bằng Nhật-Việt dễ hiểu để bạn biết bước cần kiểm tra tiếp theo.
              </p>
              <p lang="en" className="lang-en text-foreground">
                Simple guidance on salary, taxes, remittances, NISA, investing, and scam prevention for life in Japan.
              </p>
            </div>
            <div className="flex max-w-[46rem] flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="w-full sm:w-auto lg:max-w-[22rem] lg:px-5 lg:text-sm"
                aria-label={`${cta.lineCheckNow.ja} ${cta.lineCheckNow.vi}`}
                subLabelVi={cta.lineCheckNow.vi}
                subLabelEn={cta.lineCheckNow.en}
              >
                {cta.lineCheckNow.ja}
              </ButtonLink>
              <ButtonLink
                href="/materials"
                variant="secondary"
                className="w-full sm:w-auto lg:max-w-[21rem] lg:px-5 lg:text-sm"
                aria-label="無料PDFで学ぶ Tài liệu PDF miễn phí"
                subLabelVi="Tài liệu PDF miễn phí"
                subLabelEn="Free PDF materials"
              >
                無料PDFで学ぶ
              </ButtonLink>
              <Link
                href="/profile"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-4 py-2 text-center text-[0.8125rem] font-bold text-navy underline-offset-4 hover:underline sm:min-h-11 sm:text-sm"
              >
                <span className="lang-ja">プロフィールを見る</span>
                <span lang="vi" className="lang-vi">Xem hồ sơ</span>
                <span lang="en" className="lang-en">View profile</span>
              </Link>
            </div>
            <p className="text-[0.78rem] leading-relaxed text-muted sm:text-sm">
              <span className="lang-ja">金融商品の販売ではなく、教育・詐欺予防・公式情報確認を目的にしています。</span>
              <span lang="vi" className="lang-vi">Không bán sản phẩm tài chính. Trang này ưu tiên giáo dục, phòng tránh lừa đảo và kiểm tra nguồn chính thức.</span>
              <span lang="en" className="lang-en">Education only. No product sales or guaranteed returns.</span>
            </p>
          </div>
          <aside
            className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white/90 p-4 shadow-[0_22px_60px_rgba(11,31,58,0.12)] backdrop-blur sm:p-5"
            aria-label="学習テーマ"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Start Here</p>
            <h2 className="mt-2 text-xl font-bold leading-snug text-navy">
              <span className="lang-ja">まず確認できる5つのテーマ</span>
              <span lang="vi" className="lang-vi">5 chủ đề có thể kiểm tra trước</span>
              <span lang="en" className="lang-en">Five topics to check first</span>
            </h2>
            <div className="mt-4 grid gap-2.5">
              {focusItems.map((item) => (
                <div key={item.labelJa} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
                  <ResourceIcon variant={item.icon} />
                  <p className="text-sm font-bold leading-snug text-navy">
                    <span className="lang-ja">{item.labelJa}</span>
                    <span lang="vi" className="lang-vi">{item.labelVi}</span>
                    <span lang="en" className="lang-en">{item.labelJa}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-accent/20 bg-accent-muted/35 p-3">
              <p className="text-sm font-bold text-navy">
                <span className="lang-ja">迷ったら、送金・契約の前に止まる。</span>
                <span lang="vi" className="lang-vi">Nếu phân vân, hãy dừng trước khi chuyển tiền hoặc ký.</span>
                <span lang="en" className="lang-en">If unsure, pause before payment or signing.</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                <span className="lang-ja">LINEチェック、PDF、公式情報の順で確認できます。</span>
                <span lang="vi" className="lang-vi">Có thể kiểm tra qua LINE, PDF và nguồn chính thức.</span>
                <span lang="en" className="lang-en">Use the LINE check, PDFs, and official sources.</span>
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center">
              {[
                { labelJa: "対応言語", labelVi: "Ngôn ngữ", value: "JP / VN / EN" },
                { labelJa: "教材", labelVi: "Tài liệu", value: "PDF" },
              ].map((item) => (
                <div key={item.labelJa} className="rounded-2xl border border-border bg-white p-3">
                  <p className="text-lg font-bold text-navy">{item.value}</p>
                  <p className="text-[0.68rem] font-bold text-muted">
                    <span className="lang-ja">{item.labelJa}</span>
                    <span lang="vi" className="lang-vi">{item.labelVi}</span>
                    <span lang="en" className="lang-en">{item.labelJa}</span>
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
