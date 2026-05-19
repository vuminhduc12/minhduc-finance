import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function CheckFlowSection() {
  const { flow } = scamCheckCopy;
  return (
    <section
      id="flow"
      className="border-y border-border bg-accent-muted/20 py-10 sm:py-12 md:py-14"
      aria-labelledby="flow-heading"
    >
      <Container>
        <SectionHeading id="flow-heading" titleBi={flow.heading} subtitleBi={flow.subtitle} />
        <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {flow.steps.map((step) => (
            <li key={step.title.ja}>
              <Card className="h-full">
                <p className="text-[11px] font-semibold text-accent sm:text-xs">
                  <span className="block">{step.tag.ja}</span>
                  <span lang="vi" className="mt-0.5 block text-[10px] font-semibold text-navy-soft sm:text-[11px]">
                    {step.tag.vi}
                  </span>
                </p>
                <h3 className="mt-1 text-base font-bold leading-snug text-navy sm:mt-2 sm:text-lg">
                  <span className="block">{step.title.ja}</span>
                  <span lang="vi" className="mt-1 block text-sm font-semibold leading-snug text-navy-soft">
                    {step.title.vi}
                  </span>
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">{step.body.ja}</p>
                <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
                  {step.body.vi}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
