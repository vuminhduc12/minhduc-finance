import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function TargetInsightSection() {
  const { targetInsight } = homeCopy;

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfb_100%)] py-10 sm:py-12 md:py-14" aria-labelledby="target-insight-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {targetInsight.kicker}
            </p>
            <h2
              id="target-insight-heading"
              className="mt-2 text-balance text-[1.45rem] font-bold leading-snug tracking-tight text-navy sm:text-2xl md:text-[2rem]"
            >
              <span className="lang-ja block">{targetInsight.heading.ja}</span>
              <span lang="vi" className="lang-vi block text-[0.88em] font-semibold text-navy-soft">
                {targetInsight.heading.vi}
              </span>
              <span lang="en" className="lang-en block text-[0.88em] font-semibold text-navy-soft">
                {targetInsight.heading.en}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              <span className="lang-ja">{targetInsight.subtitle.ja}</span>
              <span lang="vi" className="lang-vi">{targetInsight.subtitle.vi}</span>
              <span lang="en" className="lang-en">{targetInsight.subtitle.en}</span>
            </p>

            <div className="mt-6 rounded-3xl border border-border bg-navy p-5 text-white shadow-[0_18px_45px_rgba(11,31,58,0.12)] sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden shrink-0 rounded-full bg-white/95 p-2 sm:block">
                  <MiraiMascot compact variant="think" className="h-24 w-24" title="顧客の悩みを考えるミライくん" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-muted">
                    Why This Service
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    <span className="lang-ja">{targetInsight.reason.ja}</span>
                    <span lang="vi" className="lang-vi">{targetInsight.reason.vi}</span>
                    <span lang="en" className="lang-en">{targetInsight.reason.en}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {targetInsight.segments.map((segment, index) => (
              <Card key={segment.label.ja} className="min-w-0">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <span className="flex w-fit shrink-0 items-center rounded-full bg-accent-muted px-3 py-1.5 text-xs font-bold text-navy">
                    <span className="lang-ja">{segment.label.ja}</span>
                    <span lang="vi" className="lang-vi">{segment.label.vi}</span>
                    <span lang="en" className="lang-en">{segment.label.en}</span>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                      Segment 0{index + 1}
                    </p>
                    <h3 className="mt-1 text-base font-bold leading-snug text-navy sm:text-lg">
                      <span className="lang-ja">{segment.title.ja}</span>
                      <span lang="vi" className="lang-vi">{segment.title.vi}</span>
                      <span lang="en" className="lang-en">{segment.title.en}</span>
                    </h3>
                    <div className="mt-3 grid gap-2 text-sm leading-relaxed">
                      <p className="rounded-2xl border border-border bg-white/75 p-3 text-muted">
                        <span className="font-bold text-navy">
                          <span className="lang-ja">悩み: </span>
                          <span lang="vi" className="lang-vi">Nỗi lo: </span>
                          <span lang="en" className="lang-en">Concern: </span>
                        </span>
                        <span className="lang-ja">{segment.insight.ja}</span>
                        <span lang="vi" className="lang-vi">{segment.insight.vi}</span>
                        <span lang="en" className="lang-en">{segment.insight.en}</span>
                      </p>
                      <p className="rounded-2xl border border-accent/20 bg-accent-muted/45 p-3 text-navy-soft">
                        <span className="font-bold text-navy">
                          <span className="lang-ja">必要なこと: </span>
                          <span lang="vi" className="lang-vi">Cần: </span>
                          <span lang="en" className="lang-en">Need: </span>
                        </span>
                        <span className="lang-ja">{segment.need.ja}</span>
                        <span lang="vi" className="lang-vi">{segment.need.vi}</span>
                        <span lang="en" className="lang-en">{segment.need.en}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {targetInsight.outcomes.map((outcome) => (
            <Card key={outcome.title.ja} className="min-w-0 border-t-4 border-t-accent">
              <h3 className="text-base font-bold text-navy">
                <span className="lang-ja">{outcome.title.ja}</span>
                <span lang="vi" className="lang-vi">{outcome.title.vi}</span>
                <span lang="en" className="lang-en">{outcome.title.en}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="lang-ja">{outcome.body.ja}</span>
                <span lang="vi" className="lang-vi">{outcome.body.vi}</span>
                <span lang="en" className="lang-en">{outcome.body.en}</span>
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
