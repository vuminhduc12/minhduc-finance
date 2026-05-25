import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { LINE_BOT_URL } from "@/lib/constants";
import { homeBrandCopy } from "@/lib/copy/home";

export function ScamCheckPromoSection() {
  const { scamCta } = homeBrandCopy;

  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="scam-promo-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <div>
            <SectionHeading
              id="scam-promo-heading"
              kickerBi={scamCta.kicker}
              titleBi={scamCta.title}
              subtitleBi={scamCta.subtitle}
            />
            <ul className="mb-5 space-y-3 text-[0.8125rem] leading-relaxed text-muted sm:mb-6 sm:text-sm">
              {scamCta.bullets.map((b) => (
                <li key={b.ja} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ・
                  </span>
                  <span>
                    <span className="lang-ja block text-foreground">{b.ja}</span>
                    <span lang="vi" className="lang-vi mt-0.5 block text-[0.75rem] text-navy-soft sm:text-[0.8125rem]">
                      {b.vi}
                    </span>
                    <span lang="en" className="lang-en mt-0.5 block text-[0.75rem] text-navy-soft sm:text-[0.8125rem]">
                      {b.en}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="sm:w-auto"
                aria-label={`${scamCta.lineCta.ja} ${scamCta.lineCta.vi}`}
                subLabelVi={scamCta.lineCta.vi}
                subLabelEn={scamCta.lineCta.en}
              >
                {scamCta.lineCta.ja}
              </ButtonLink>
              <ButtonLink
                href="/scam-check"
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${scamCta.flowCta.ja} ${scamCta.flowCta.vi}`}
                subLabelVi={scamCta.flowCta.vi}
                subLabelEn={scamCta.flowCta.en}
              >
                {scamCta.flowCta.ja}
              </ButtonLink>
            </div>
          </div>
          <Card className="border-accent-muted bg-gradient-to-br from-white to-accent-muted/40">
            <ResourceIcon variant="scam" />
            <h3 className="text-base font-bold text-navy sm:text-lg">
              <span className="lang-ja mt-3 block">{scamCta.asideTitle.ja}</span>
              <span lang="vi" className="lang-vi mt-1 block text-sm font-semibold text-navy-soft">
                {scamCta.asideTitle.vi}
              </span>
              <span lang="en" className="lang-en mt-1 block text-sm font-semibold text-navy-soft">
                {scamCta.asideTitle.en}
              </span>
            </h3>
            <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
              <span className="lang-ja">{scamCta.asideBody.ja} 詳しくは</span>
              <Link
                href="/scam-check"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                <span className="lang-ja">{scamCta.pageLink.ja}</span>
                <span lang="vi" className="lang-vi">{scamCta.pageLink.vi}</span>
                <span lang="en" className="lang-en">{scamCta.pageLink.en}</span>
              </Link>
              <span className="lang-ja">をご覧ください。</span>
            </p>
            <p lang="vi" className="lang-vi mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
              {scamCta.asideBody.vi}
            </p>
            <p lang="en" className="lang-en mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
              {scamCta.asideBody.en}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
