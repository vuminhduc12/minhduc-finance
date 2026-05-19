import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function LearningPathSection() {
  const { learningPath } = homeCopy;

  return (
    <section
      className="relative overflow-hidden bg-navy py-10 text-white sm:py-12 md:py-14"
      aria-labelledby="learning-path-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,159,143,0.32),transparent_22rem),radial-gradient(circle_at_82%_8%,rgba(200,138,45,0.16),transparent_20rem)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] text-accent-muted sm:text-sm">
                TRUST FLOW
              </p>
              <h2
                id="learning-path-heading"
                className="mt-2 text-[1.35rem] font-bold leading-snug tracking-tight text-white sm:text-2xl sm:leading-tight md:text-[1.75rem]"
              >
                <span className="block">{learningPath.heading.ja}</span>
                <span lang="vi" className="mt-1.5 block text-[0.88em] font-semibold text-accent-muted">
                  {learningPath.heading.vi}
                </span>
              </h2>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-slate-300 sm:text-base">
                <span className="block">{learningPath.subtitle.ja}</span>
                <span lang="vi" className="mt-1.5 block text-[0.88em]">
                  {learningPath.subtitle.vi}
                </span>
              </p>
            </div>
            <div className="mt-6 hidden rounded-3xl border border-white/10 bg-white/8 p-5 text-center lg:block">
              <MiraiMascot compact className="mx-auto h-44 w-44" title="学習導線を案内するミライくん" />
              <p className="mt-2 text-sm font-bold text-white">ミライくんの合言葉</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                すぐ決めない。まず確認して、言葉を理解する。
              </p>
            </div>
          </div>
          <ol className="grid gap-3">
            {learningPath.steps.map((step) => (
              <li key={step.badge}>
                <Card className="border-white/10 bg-white/95 p-4 sm:p-5">
                  <div className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:items-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-[0_12px_28px_rgba(15,159,143,0.25)]">
                      {step.badge}
                    </div>
                    <div>
                      <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                        <span className="block">{step.title.ja}</span>
                        <span lang="vi" className="mt-1 block text-[0.82rem] font-semibold text-navy-soft">
                          {step.title.vi}
                        </span>
                      </h3>
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                        {step.body.ja}
                      </p>
                      <p lang="vi" className="mt-1.5 border-l-2 border-accent/30 pl-2.5 text-[0.72rem] leading-relaxed text-navy-soft sm:text-xs">
                        {step.body.vi}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
