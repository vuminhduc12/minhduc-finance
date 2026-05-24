import type { Metadata } from "next";
import { ArticleHubSection } from "@/components/sections/ArticleHubSection";
import { DualCtaBand } from "@/components/sections/DualCtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { HeroHome } from "@/components/sections/home/HeroHome";
import { OperatorTeaserSection } from "@/components/sections/home/OperatorTeaserSection";
import { PdfPromoSection } from "@/components/sections/home/PdfPromoSection";
import { QuickChoiceSection } from "@/components/sections/home/QuickChoiceSection";
import { ScamCheckPromoSection } from "@/components/sections/home/ScamCheckPromoSection";
import { TrustRibbonSection } from "@/components/sections/home/TrustRibbonSection";
import { WhatYouCanDoSection } from "@/components/sections/home/WhatYouCanDoSection";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";
import { homeFaqItems } from "@/lib/faq-content";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <WhatYouCanDoSection />
      <QuickChoiceSection />
      <PdfPromoSection />
      <ScamCheckPromoSection />
      <ArticleHubSection limit={3} />
      <OperatorTeaserSection />
      <TrustRibbonSection />
      <section className="py-10 sm:py-12 md:py-14" aria-labelledby="home-faq-heading">
        <Container>
          <SectionHeading
            id="home-faq-heading"
            titleBi={homeCopy.faqSection.heading}
            subtitleBi={homeCopy.faqSection.subtitle}
          />
          <FaqList items={homeFaqItems} />
        </Container>
      </section>
      <DualCtaBand />
    </>
  );
}
