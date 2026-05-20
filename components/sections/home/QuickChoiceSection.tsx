import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function QuickChoiceSection() {
  const { quickChoice } = homeCopy;

  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="quick-choice-heading">
      <Container>
        <div className="grid gap-6 border-y border-border py-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <div>
            <div className="inline-flex rounded-md bg-navy px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
              User Routing
            </div>
            <h2
              id="quick-choice-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug tracking-tight text-navy sm:text-2xl md:text-[2rem]"
            >
              <span className="lang-ja block">{quickChoice.heading.ja}</span>
              <span lang="vi" className="lang-vi block text-[0.88em] font-semibold text-navy-soft">
                {quickChoice.heading.vi}
              </span>
              <span lang="en" className="lang-en block text-[0.88em] font-semibold text-navy-soft">
                {quickChoice.heading.en}
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-[0.93rem] leading-relaxed text-muted sm:text-base">
              <span className="lang-ja block">{quickChoice.subtitle.ja}</span>
              <span lang="vi" className="lang-vi block text-[0.88em] text-navy-soft">
                {quickChoice.subtitle.vi}
              </span>
              <span lang="en" className="lang-en block text-[0.88em] text-navy-soft">
                {quickChoice.subtitle.en}
              </span>
            </p>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_45px_rgba(11,31,58,0.07)]">
              <div className="border-r border-border p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Primary</p>
                <p className="mt-1 text-sm font-bold text-navy">Situation</p>
              </div>
              <div className="border-r border-border p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Next Step</p>
                <p className="mt-1 text-sm font-bold text-navy">Article / PDF / LINE</p>
              </div>
              <div className="p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Goal</p>
                <p className="mt-1 text-sm font-bold text-navy">Safer Action</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickChoice.cards.map((card, index) => (
            <div
              key={card.title.ja}
              className="group flex h-full flex-col rounded-3xl border border-border bg-white p-5 shadow-[0_18px_45px_rgba(11,31,58,0.07)] transition-colors hover:bg-accent-muted/25 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                  <span className="lang-ja">{card.tag.ja}</span>
                  <span lang="vi" className="lang-vi">{card.tag.vi}</span>
                  <span lang="en" className="lang-en">{card.tag.en}</span>
                </span>
                <span className="text-3xl font-bold leading-none text-accent-muted" aria-hidden>
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                <span className="lang-ja block">{card.title.ja}</span>
                <span lang="vi" className="lang-vi block text-[0.82rem] font-semibold text-navy-soft">
                  {card.title.vi}
                </span>
                <span lang="en" className="lang-en block text-[0.82rem] font-semibold text-navy-soft">
                  {card.title.en}
                </span>
              </h3>
              <p className="lang-ja mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                {card.body.ja}
              </p>
              <p lang="vi" className="lang-vi mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                {card.body.vi}
              </p>
              <p lang="en" className="lang-en mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                {card.body.en}
              </p>
              <Link
                href={card.href}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-navy-soft"
              >
                <span className="lang-ja">{card.cta.ja}</span>
                <span lang="vi" className="lang-vi">
                  {card.cta.vi}
                </span>
                <span lang="en" className="lang-en">
                  {card.cta.en}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
