import type { Metadata } from "next";
import { BiBlock } from "@/components/ui/Bilingual";
import { PageIntro } from "@/components/layout/PageIntro";
import { DualCtaBand } from "@/components/sections/DualCtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { CheckFlowSection } from "@/components/sections/scam-check/CheckFlowSection";
import { DangerSignalsSection } from "@/components/sections/scam-check/DangerSignalsSection";
import { EduDisclaimerPanel } from "@/components/sections/scam-check/EduDisclaimerPanel";
import { ForWhoScamSection } from "@/components/sections/scam-check/ForWhoScamSection";
import { HeroScamCheck } from "@/components/sections/scam-check/HeroScamCheck";
import { LineBotFeaturesSection } from "@/components/sections/scam-check/LineBotFeaturesSection";
import { PdfBridgeSection } from "@/components/sections/scam-check/PdfBridgeSection";
import { RiskCheckTool } from "@/components/sections/scam-check/RiskCheckTool";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";
import { scamCheckFaqItems } from "@/lib/faq-content";

const title = "詐欺チェック（LINE Bot）";
const description =
  "日本で働く・生活するベトナムの方向け。送金・契約・紹介の前に、怪しい投資話の危険サインをLINEで短時間整理する教育目的のBotです。個別の投資助言や法律判断ではありません。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/scam-check" },
  openGraph: { title, description },
};

export default function ScamCheckPage() {
  return (
    <>
      <PageIntro>
        <BiBlock text={scamCheckCopy.pageIntro} viSize="sm" className="mx-auto max-w-2xl text-left sm:text-center" />
      </PageIntro>
      <HeroScamCheck />
      <RiskCheckTool />
      <ForWhoScamSection />
      <DangerSignalsSection />
      <LineBotFeaturesSection />
      <CheckFlowSection />
      <EduDisclaimerPanel />
      <PdfBridgeSection />
      <section className="py-10 sm:py-12 md:py-14" aria-labelledby="scam-faq-heading">
        <Container>
          <SectionHeading
            id="scam-faq-heading"
            titleBi={scamCheckCopy.faqSection.heading}
            subtitleBi={scamCheckCopy.faqSection.subtitle}
          />
          <FaqList items={scamCheckFaqItems} />
        </Container>
      </section>
      <DualCtaBand headingBi={scamCheckCopy.dualCta.heading} />
    </>
  );
}
