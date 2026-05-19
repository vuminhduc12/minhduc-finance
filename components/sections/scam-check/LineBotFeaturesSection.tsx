import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function LineBotFeaturesSection() {
  const { lineFeatures } = scamCheckCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="line-features-heading">
      <Container>
        <SectionHeading
          id="line-features-heading"
          titleBi={lineFeatures.heading}
          subtitleBi={lineFeatures.subtitle}
        />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {lineFeatures.items.map((f) => (
            <Card key={f.title.ja}>
              <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                <span className="block">{f.title.ja}</span>
                <span lang="vi" className="mt-1 block text-sm font-semibold leading-snug text-navy-soft">
                  {f.title.vi}
                </span>
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">{f.body.ja}</p>
              <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
                {f.body.vi}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
