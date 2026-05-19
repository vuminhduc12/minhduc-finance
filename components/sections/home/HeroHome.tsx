import { BiSubheading } from "@/components/ui/Bilingual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LINE_BOT_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeCopy } from "@/lib/copy/home";
import Link from "next/link";

export function HeroHome() {
  const { hero } = homeCopy;
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(15,159,143,0.18),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#eefcf9_46%,#f7f9fc_100%)] pb-10 pt-8 sm:pb-14 sm:pt-11 lg:pb-16 lg:pt-14"
    >
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <p className="max-w-xl text-left text-xs font-medium leading-relaxed text-navy-soft sm:text-sm">
              <span className="block text-navy">{hero.trustLine.ja}</span>
              <span lang="vi" className="mt-1 block font-normal leading-relaxed">
                {hero.trustLine.vi}
              </span>
            </p>
            <h1
              id="hero-title"
              className="text-[1.5rem] font-bold leading-snug tracking-tight text-navy sm:text-3xl sm:leading-snug lg:text-[2.125rem] lg:leading-tight"
            >
              <BiSubheading text={hero.title} />
            </h1>
            <div className="max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              <p className="text-foreground">{hero.lead.ja}</p>
              <p lang="vi" className="mt-2 border-l-2 border-accent/40 pl-3 text-[0.8125rem] leading-relaxed text-navy-soft sm:text-[0.9375rem]">
                {hero.lead.vi}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="w-full sm:w-auto"
                aria-label={`${cta.lineCheckNow.ja} ${cta.lineCheckNow.vi}`}
                subLabelVi={cta.lineCheckNow.vi}
              >
                {cta.lineCheckNow.ja}
              </ButtonLink>
              <ButtonLink
                href="/scam-check"
                variant="secondary"
                className="w-full sm:w-auto"
                aria-label={`${cta.readScamCheckFirst.ja} ${cta.readScamCheckFirst.vi}`}
                subLabelVi={cta.readScamCheckFirst.vi}
              >
                {cta.readScamCheckFirst.ja}
              </ButtonLink>
            </div>
            <p className="text-[0.8125rem] text-muted sm:text-sm">
              <span className="block sm:inline">運営：Vu Minh Duc（</span>
              <Link
                href="/profile"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {cta.profileRead.ja}
              </Link>
              <span className="hidden sm:inline"> / </span>
              <span lang="vi" className="mt-0.5 block text-[0.75rem] text-navy-soft sm:mt-0 sm:inline sm:text-[0.8125rem]">
                {cta.profileRead.vi}
              </span>
              <span>）</span>
            </p>
          </div>
          <aside
            className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-[0_24px_70px_rgba(11,31,58,0.12)] backdrop-blur sm:rounded-3xl sm:p-6"
            aria-label="顔写真の枠（差し替え用）"
          >
            <div className="mx-auto flex max-w-[260px] flex-col items-center text-center sm:max-w-[280px]">
              <div
                role="img"
                aria-label="顔写真のプレースホルダー。準備ができたら差し替えてください。"
                className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 ring-4 ring-accent-muted sm:h-44 sm:w-44"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 w-16 opacity-60 sm:h-20 sm:w-20"
                  aria-hidden
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <p className="mt-3 text-sm font-semibold text-navy sm:mt-4">Vu Minh Duc</p>
              <p className="mt-2 whitespace-pre-line text-[11px] font-medium leading-relaxed text-navy sm:text-xs">
                {hero.cardRole.ja}
              </p>
              <p lang="vi" className="mt-1.5 whitespace-pre-line text-[10px] leading-relaxed text-muted sm:text-[11px]">
                {hero.cardRole.vi}
              </p>
              <dl className="mt-5 grid w-full grid-cols-2 gap-2 text-left">
                {hero.trustPoints.map((point) => (
                  <div key={point.ja} className="rounded-xl border border-border bg-white/70 p-3">
                    <dt className="text-[0.72rem] font-bold text-navy sm:text-xs">{point.ja}</dt>
                    <dd lang="vi" className="mt-1 text-[0.62rem] leading-snug text-muted sm:text-[0.68rem]">
                      {point.vi}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
