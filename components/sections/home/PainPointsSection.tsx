import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function PainPointsSection() {
  const { pains } = homeCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="pains-heading">
      <Container>
        <SectionHeading
          id="pains-heading"
          titleBi={pains.heading}
          subtitleBi={pains.subtitle}
        />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {pains.items.map((p) => (
            <Card key={p.title.ja}>
              <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                <span className="block">{p.title.ja}</span>
                <span lang="vi" className="mt-1 block text-[0.8125rem] font-semibold leading-snug text-navy-soft">
                  {p.title.vi}
                </span>
              </h3>
              <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
                {p.body.ja}
              </p>
              <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem]">
                {p.body.vi}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
