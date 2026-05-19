import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function WhatYouCanDoSection() {
  const { whatYouCan } = homeCopy;
  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="can-do-heading">
      <Container>
        <SectionHeading
          id="can-do-heading"
          titleBi={whatYouCan.heading}
          subtitleBi={whatYouCan.subtitle}
        />
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {whatYouCan.items.map((item, index) => (
            <li key={item.title.ja}>
              <Card className="h-full border-t-4 border-t-accent">
                <div className="mb-3 inline-flex rounded-full bg-accent-muted px-2.5 py-1 text-[0.68rem] font-bold text-navy">
                  SERVICE 0{index + 1}
                </div>
                <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                  <span className="block">{item.title.ja}</span>
                  <span lang="vi" className="mt-1 block text-[0.8125rem] font-semibold leading-snug text-navy-soft">
                    {item.title.vi}
                  </span>
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
                  {item.body.ja}
                </p>
                <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem]">
                  {item.body.vi}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
