import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PDF_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeCopy } from "@/lib/copy/home";

export function PdfPromoSection() {
  const { pdfPromo } = homeCopy;
  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="pdf-promo-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <Card className="order-2 lg:order-1">
            <h3 className="text-base font-bold text-navy sm:text-lg">
              <span className="lang-ja block">{pdfPromo.cardTitle.ja}</span>
              <span lang="vi" className="lang-vi text-sm font-semibold text-navy-soft">
                {pdfPromo.cardTitle.vi}
              </span>
            </h3>
            <ul className="mt-3 space-y-2 text-[0.8125rem] text-muted sm:mt-4 sm:space-y-2.5 sm:text-sm">
              {pdfPromo.themes.map((t) => (
                <li key={t.ja} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ・
                  </span>
                  <span>
                    <span className="lang-ja block text-foreground">{t.ja}</span>
                    <span lang="vi" className="lang-vi text-foreground">
                      {t.vi}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-muted sm:mt-4 sm:text-xs">
              <span className="lang-ja block">{pdfPromo.footnote.ja}</span>
              <span lang="vi" className="lang-vi">{pdfPromo.footnote.vi}</span>
            </p>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="pdf-promo-heading"
              kickerBi={pdfPromo.kicker}
              titleBi={pdfPromo.title}
              subtitleBi={pdfPromo.subtitle}
            />
            <ButtonLink
              href={PDF_URL}
              className="w-full sm:w-auto"
              aria-label={`${cta.pdfContentAndPurchase.ja} ${cta.pdfContentAndPurchase.vi}`}
              subLabelVi={cta.pdfContentAndPurchase.vi}
            >
              {cta.pdfContentAndPurchase.ja}
            </ButtonLink>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
              <span className="lang-ja">
                {pdfPromo.purchaseNote.ja}
                <Link href="/disclaimer" className="font-medium text-accent underline-offset-2 hover:underline">
                  {pdfPromo.disclaimerLink.ja}
                </Link>
                {pdfPromo.afterDisclaimer.ja}
              </span>
              <span lang="vi" className="lang-vi">
                {pdfPromo.purchaseNote.vi}
                <Link href="/disclaimer" className="font-medium text-accent underline-offset-2 hover:underline">
                  {pdfPromo.disclaimerLink.vi}
                </Link>
                {pdfPromo.afterDisclaimer.vi}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
