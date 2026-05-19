import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function ForWhoScamSection() {
  const { forWho } = scamCheckCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="for-who-heading">
      <Container>
        <SectionHeading
          id="for-who-heading"
          titleBi={forWho.heading}
          subtitleBi={forWho.subtitle}
        />
        <Card>
          <ul className="space-y-2.5 text-[0.8125rem] leading-relaxed text-muted sm:space-y-3 sm:text-sm">
            {forWho.bullets.map((b) => (
              <li key={b.ja} className="flex gap-2.5 sm:gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:mt-2" aria-hidden />
                <span>
                  <span className="block text-foreground">{b.ja}</span>
                  <span lang="vi" className="mt-1 block text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem]">
                    {b.vi}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
