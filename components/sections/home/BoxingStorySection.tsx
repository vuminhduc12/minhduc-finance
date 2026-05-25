import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { homeBrandCopy } from "@/lib/copy/home";

export function BoxingStorySection() {
  const { boxing } = homeBrandCopy;

  return (
    <section className="bg-white/80 py-10 sm:py-12 md:py-14" aria-labelledby="boxing-story-heading">
      <Container>
        <Card className="grid gap-5 border-accent-muted bg-[linear-gradient(135deg,#ffffff,rgba(213,247,241,0.42))] md:grid-cols-[auto_1fr] md:items-start md:gap-6">
          <ResourceIcon variant="scam" className="h-12 w-12 rounded-2xl" />
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{boxing.kicker}</p>
            <h2 id="boxing-story-heading" className="mt-2 text-xl font-bold leading-snug text-navy sm:text-2xl">
              <span className="lang-ja">{boxing.title.ja}</span>
              <span lang="vi" className="lang-vi">{boxing.title.vi}</span>
              <span lang="en" className="lang-en">{boxing.title.en}</span>
            </h2>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">
              <span className="lang-ja">
                {boxing.body.ja}
              </span>
              <span lang="vi" className="lang-vi">
                {boxing.body.vi}
              </span>
              <span lang="en" className="lang-en">
                {boxing.body.en}
              </span>
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}
