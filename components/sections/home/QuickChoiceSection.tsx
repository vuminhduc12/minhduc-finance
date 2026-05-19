import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function QuickChoiceSection() {
  const { quickChoice } = homeCopy;

  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="quick-choice-heading">
      <Container>
        <div className="grid gap-6 border-y border-border py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-md bg-navy px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
              User Routing
            </div>
            <h2
              id="quick-choice-heading"
              className="mt-3 text-[1.35rem] font-bold leading-snug tracking-tight text-navy sm:text-2xl md:text-[2rem]"
            >
              <span className="block">{quickChoice.heading.ja}</span>
              <span lang="vi" className="mt-1.5 block text-[0.88em] font-semibold text-navy-soft">
                {quickChoice.heading.vi}
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-[0.93rem] leading-relaxed text-muted sm:text-base">
              <span className="block">{quickChoice.subtitle.ja}</span>
              <span lang="vi" className="mt-1.5 block text-[0.88em] text-navy-soft">
                {quickChoice.subtitle.vi}
              </span>
            </p>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_45px_rgba(11,31,58,0.07)]">
              <div className="border-r border-border p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Primary</p>
                <p className="mt-1 text-sm font-bold text-navy">Risk Check</p>
              </div>
              <div className="border-r border-border p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Language</p>
                <p className="mt-1 text-sm font-bold text-navy">JP / VN</p>
              </div>
              <div className="p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">Cost</p>
                <p className="mt-1 text-sm font-bold text-navy">Start Free</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-[0_22px_55px_rgba(11,31,58,0.08)] md:grid-cols-3">
          {quickChoice.cards.map((card, index) => (
            <div
              key={card.title.ja}
              className={`group flex h-full flex-col p-5 transition-colors hover:bg-accent-muted/25 sm:p-6 ${
                index < quickChoice.cards.length - 1 ? "border-b border-border md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                  {card.tag.ja}
                </span>
                <span className="text-3xl font-bold leading-none text-accent-muted" aria-hidden>
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                <span className="block">{card.title.ja}</span>
                <span lang="vi" className="mt-1 block text-[0.82rem] font-semibold text-navy-soft">
                  {card.title.vi}
                </span>
              </h3>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
                {card.body.ja}
              </p>
              <p lang="vi" className="mt-1.5 border-l-2 border-accent/30 pl-2.5 text-[0.72rem] leading-relaxed text-navy-soft sm:text-xs">
                {card.body.vi}
              </p>
              <Link
                href={card.href}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-navy-soft"
              >
                <span>{card.cta.ja}</span>
                <span lang="vi" className="ml-2 text-[0.7rem] font-semibold opacity-80">
                  {card.cta.vi}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
