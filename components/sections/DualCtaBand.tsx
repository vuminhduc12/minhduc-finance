import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LINE_BOT_URL, PDF_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import type { Bi } from "@/lib/copy/types";
import { dualCtaBandCopy } from "@/lib/copy/dual-cta";

type Props = {
  headingBi?: Bi;
  footnoteBi?: Bi;
  className?: string;
};

export function DualCtaBand({
  headingBi = dualCtaBandCopy.heading,
  footnoteBi = dualCtaBandCopy.footnote,
  className = "",
}: Props) {
  return (
    <section
      aria-labelledby="dual-cta-heading"
      className={`border-y border-border bg-[linear-gradient(135deg,rgba(213,247,241,0.7),rgba(255,255,255,0.82))] py-10 sm:py-12 md:py-14 ${className}`}
    >
      <Container>
        <h2
          id="dual-cta-heading"
          className="mb-6 text-center text-[1.35rem] font-bold leading-snug text-navy sm:mb-7 sm:text-2xl md:text-[1.75rem]"
        >
          <span className="lang-ja block">{headingBi.ja}</span>
          <span lang="vi" className="lang-vi mt-2 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
            {headingBi.vi}
          </span>
          <span lang="en" className="lang-en mt-2 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
            {headingBi.en}
          </span>
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-4">
          <ButtonLink
            href={LINE_BOT_URL}
            external
            className="w-full sm:w-auto sm:min-w-[220px]"
            aria-label={`${cta.lineOrganizeFree.ja} ${cta.lineOrganizeFree.vi} ${cta.lineOrganizeFree.en}`}
            subLabelVi={cta.lineOrganizeFree.vi}
            subLabelEn={cta.lineOrganizeFree.en}
          >
            {cta.lineOrganizeFree.ja}
          </ButtonLink>
          <ButtonLink
            href={PDF_URL}
            external
            variant="secondary"
            className="w-full sm:w-auto sm:min-w-[220px]"
            aria-label={`${cta.pdfConfirmContent.ja} ${cta.pdfConfirmContent.vi} ${cta.pdfConfirmContent.en}`}
            subLabelVi={cta.pdfConfirmContent.vi}
            subLabelEn={cta.pdfConfirmContent.en}
          >
            {cta.pdfConfirmContent.ja}
          </ButtonLink>
        </div>
        <p className="mx-auto mt-5 max-w-lg text-center text-[0.8125rem] leading-relaxed text-muted sm:mt-6 sm:text-sm">
          <span className="lang-ja block">{footnoteBi.ja}</span>
          <span lang="vi" className="lang-vi mt-1.5 block text-[0.8125rem] text-navy-soft">
            {footnoteBi.vi}
          </span>
          <span lang="en" className="lang-en mt-1.5 block text-[0.8125rem] text-navy-soft">
            {footnoteBi.en}
          </span>
        </p>
      </Container>
    </section>
  );
}
