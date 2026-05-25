import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { PDF_URL } from "@/lib/constants";
import { homeBrandCopy } from "@/lib/copy/home";

export function PdfPromoSection() {
  const { pdfGuide } = homeBrandCopy;

  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="pdf-promo-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <Card className="order-2 lg:order-1">
            <h3 className="text-base font-bold text-navy sm:text-lg">
              <span className="lang-ja block">{pdfGuide.cardTitle.ja}</span>
              <span lang="vi" className="lang-vi text-sm font-semibold text-navy-soft">
                {pdfGuide.cardTitle.vi}
              </span>
              <span lang="en" className="lang-en text-sm font-semibold text-navy-soft">
                {pdfGuide.cardTitle.en}
              </span>
            </h3>
            <ul className="mt-4 grid gap-2.5 text-[0.8125rem] text-muted sm:text-sm">
              {pdfGuide.themes.map((t) => (
                <li key={t.title.ja} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3">
                  <ResourceIcon variant={t.icon} className="h-9 w-9 rounded-xl" />
                  <span className="font-semibold">
                    <span className="lang-ja block text-foreground">{t.title.ja}</span>
                    <span lang="vi" className="lang-vi text-foreground">
                      {t.title.vi}
                    </span>
                    <span lang="en" className="lang-en text-foreground">
                      {t.title.en}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-muted sm:mt-4 sm:text-xs">
              <span className="lang-ja block">{pdfGuide.note.ja}</span>
              <span lang="vi" className="lang-vi">{pdfGuide.note.vi}</span>
              <span lang="en" className="lang-en">{pdfGuide.note.en}</span>
            </p>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="pdf-promo-heading"
              kickerBi={pdfGuide.kicker}
              titleBi={pdfGuide.title}
              subtitleBi={pdfGuide.subtitle}
            />
            <ButtonLink
              href={PDF_URL}
              className="w-full sm:w-auto"
              aria-label={`${pdfGuide.cta.ja} ${pdfGuide.cta.vi}`}
              subLabelVi={pdfGuide.cta.vi}
              subLabelEn={pdfGuide.cta.en}
            >
              {pdfGuide.cta.ja}
            </ButtonLink>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
              <span className="lang-ja">
                教材の利用前に
                <Link href="/disclaimer" className="font-medium text-accent underline-offset-2 hover:underline">
                  免責事項
                </Link>
                も確認してください。
              </span>
              <span lang="vi" className="lang-vi">
                Trước khi sử dụng tài liệu, hãy xem thêm phần 
                <Link href="/disclaimer" className="font-medium text-accent underline-offset-2 hover:underline">
                  miễn trừ trách nhiệm
                </Link>
                .
              </span>
              <span lang="en" className="lang-en">
                Before using the materials, also check the 
                <Link href="/disclaimer" className="font-medium text-accent underline-offset-2 hover:underline">
                  disclaimer
                </Link>
                .
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
