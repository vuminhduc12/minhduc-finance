import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { homeBrandCopy } from "@/lib/copy/home";

export function WhatYouCanDoSection() {
  const { services } = homeBrandCopy;

  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="can-do-heading">
      <Container>
        <SectionHeading
          id="can-do-heading"
          titleBi={services.heading}
          subtitleBi={services.subtitle}
        />
        <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
          {services.items.map((item) => (
            <li key={item.title.ja}>
              <Card className="h-full border-t-4 border-t-accent">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <ResourceIcon variant={item.icon} />
                  <span className="rounded-full bg-accent-muted px-2.5 py-1 text-[0.68rem] font-bold text-navy">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                  <span className="lang-ja block">{item.title.ja}</span>
                  <span lang="vi" className="lang-vi mt-1 block text-[0.8125rem] font-semibold leading-snug text-navy-soft">
                    {item.title.vi}
                  </span>
                  <span lang="en" className="lang-en mt-1 block text-[0.8125rem] font-semibold leading-snug text-navy-soft">
                    {item.title.en}
                  </span>
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm">
                  <span className="lang-ja">{item.body.ja}</span>
                  <span lang="vi" className="lang-vi">{item.body.vi}</span>
                  <span lang="en" className="lang-en">{item.body.en}</span>
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
