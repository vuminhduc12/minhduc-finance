import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function DangerSignalsSection() {
  const { danger } = scamCheckCopy;
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14" aria-labelledby="signals-heading">
      <Container>
        <SectionHeading id="signals-heading" titleBi={danger.heading} subtitleBi={danger.subtitle} />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {danger.cards.map((c) => (
            <Card key={c.title.ja}>
              <h3 className="text-[0.9375rem] font-bold leading-snug text-navy sm:text-base">
                <span className="block">{c.title.ja}</span>
                <span lang="vi" className="mt-1 block text-[0.8125rem] font-semibold leading-snug text-navy-soft">
                  {c.title.vi}
                </span>
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">{c.body.ja}</p>
              <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
                {c.body.vi}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
