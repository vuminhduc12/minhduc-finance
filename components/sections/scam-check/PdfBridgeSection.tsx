import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PDF_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function PdfBridgeSection() {
  const { pdfBridge } = scamCheckCopy;
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14" aria-labelledby="pdf-bridge-heading">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            id="pdf-bridge-heading"
            titleBi={pdfBridge.heading}
            subtitleBi={pdfBridge.subtitle}
          />
          <p className="text-[0.8125rem] leading-relaxed text-muted sm:text-sm">{pdfBridge.body.ja}</p>
          <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
            {pdfBridge.body.vi}
          </p>
          <div className="mt-5 sm:mt-6">
            <ButtonLink
              href={PDF_URL}
              external
              className="w-full sm:w-auto"
              aria-label={`${cta.pdfContentAndPurchase.ja} ${cta.pdfContentAndPurchase.vi}`}
              subLabelVi={cta.pdfContentAndPurchase.vi}
            >
              {cta.pdfContentAndPurchase.ja}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
