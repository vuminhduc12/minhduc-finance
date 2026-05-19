import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { LINE_BOT_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeCopy } from "@/lib/copy/home";

export function ScamCheckPromoSection() {
  const { scamPromo } = homeCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="scam-promo-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-8">
          <div>
            <SectionHeading
              id="scam-promo-heading"
              kickerBi={scamPromo.kicker}
              titleBi={scamPromo.title}
              subtitleBi={scamPromo.subtitle}
            />
            <ul className="mb-5 space-y-3 text-[0.8125rem] leading-relaxed text-muted sm:mb-6 sm:text-sm">
              {scamPromo.bullets.map((b) => (
                <li key={b.ja} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ・
                  </span>
                  <span>
                    <span className="block text-foreground">{b.ja}</span>
                    <span lang="vi" className="mt-0.5 block text-[0.75rem] text-navy-soft sm:text-[0.8125rem]">
                      {b.vi}
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
                aria-label={`${cta.lineCheckCurrent.ja} ${cta.lineCheckCurrent.vi}`}
                subLabelVi={cta.lineCheckCurrent.vi}
              >
                {cta.lineCheckCurrent.ja}
              </ButtonLink>
              <ButtonLink
                href="/scam-check"
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${cta.readMechanismFirst.ja} ${cta.readMechanismFirst.vi}`}
                subLabelVi={cta.readMechanismFirst.vi}
              >
                {cta.readMechanismFirst.ja}
              </ButtonLink>
            </div>
          </div>
          <Card className="border-accent-muted bg-gradient-to-br from-white to-accent-muted/40">
            <h3 className="text-base font-bold text-navy sm:text-lg">
              <span className="block">{scamPromo.asideTitle.ja}</span>
              <span lang="vi" className="mt-1 block text-sm font-semibold text-navy-soft">
                {scamPromo.asideTitle.vi}
              </span>
            </h3>
            <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
              {scamPromo.asideBeforeLink.ja}
              <Link
                href="/scam-check"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {scamPromo.asideLinkLabel.ja}
              </Link>
              {scamPromo.asideAfterLink.ja}
            </p>
            <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
              {scamPromo.asideBeforeLink.vi}
              <Link
                href="/scam-check"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {scamPromo.asideLinkLabel.vi}
              </Link>
              {scamPromo.asideAfterLink.vi}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
