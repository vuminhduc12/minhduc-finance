import Link from "next/link";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function FounderEdgeSection() {
  const { founderEdge } = homeCopy;

  return (
    <section className="bg-navy py-10 text-white sm:py-12 md:py-14" aria-labelledby="founder-edge-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent-muted">
              <FlagIcon code="jp" className="h-4 w-6" />
              {founderEdge.kicker}
              <FlagIcon code="vn" className="h-4 w-6" />
            </div>
            <h2
              id="founder-edge-heading"
              className="mt-3 text-[1.55rem] font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.25rem]"
            >
              <span className="block">{founderEdge.heading.ja}</span>
              <span lang="vi" className="mt-2 block text-[0.72em] font-semibold text-accent-muted">
                {founderEdge.heading.vi}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <span className="block">{founderEdge.subtitle.ja}</span>
              <span lang="vi" className="mt-2 block text-[0.88em] text-slate-400">
                {founderEdge.subtitle.vi}
              </span>
            </p>
            <Link
              href="/profile"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 bg-white px-4 py-2 text-sm font-bold text-navy hover:bg-accent-muted"
            >
              Founder Profile
            </Link>
          </div>

          <div className="grid gap-3">
            {founderEdge.edges.map((edge, index) => (
              <article
                key={edge.code}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:grid-cols-[6rem_1fr] sm:p-5"
              >
                <div className="flex items-center gap-3 sm:block">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent-muted">
                    0{index + 1}
                  </p>
                  <p className="mt-0 text-lg font-bold tracking-tight text-white sm:mt-2">
                    {edge.code}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                    <span className="block">{edge.title.ja}</span>
                    <span lang="vi" className="mt-1 block text-[0.82rem] font-semibold text-accent-muted">
                      {edge.title.vi}
                    </span>
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-slate-300 sm:text-sm">
                    {edge.body.ja}
                  </p>
                  <p lang="vi" className="mt-1.5 border-l-2 border-accent/40 pl-2.5 text-[0.72rem] leading-relaxed text-slate-400 sm:text-xs">
                    {edge.body.vi}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
