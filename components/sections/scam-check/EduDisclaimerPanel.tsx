import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function EduDisclaimerPanel() {
  const { edu } = scamCheckCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="edu-note-heading">
      <Container>
        <Card className="border-navy/10 bg-navy/[0.02]">
          <h2 id="edu-note-heading" className="text-base font-bold leading-snug text-navy sm:text-lg">
            <span className="block">{edu.title.ja}</span>
            <span lang="vi" className="mt-1 block text-sm font-semibold text-navy-soft">
              {edu.title.vi}
            </span>
          </h2>
          <ul className="mt-3 space-y-3 text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
            {edu.bullets.map((b) => (
              <li key={b.ja} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ・
                </span>
                <span>
                  <span className="block text-foreground">{b.ja}</span>
                  <span lang="vi" className="mt-1.5 block border-l-2 border-accent/25 pl-2.5 text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
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
