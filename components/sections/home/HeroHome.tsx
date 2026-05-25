import { BiSubheading } from "@/components/ui/Bilingual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { LINE_BOT_URL } from "@/lib/constants";
import { homeBrandCopy } from "@/lib/copy/home";
import Link from "next/link";

export function HeroHome() {
  const { hero } = homeBrandCopy;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgba(15,159,143,0.16),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#f4fbfa_48%,#eef4f8_100%)] pb-10 pt-7 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.76fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="max-w-[44rem] space-y-4 sm:space-y-5">
            <p className="inline-flex rounded-full border border-border/80 bg-white/85 px-3.5 py-2 text-left text-[0.78rem] font-bold leading-relaxed text-navy-soft shadow-sm backdrop-blur sm:px-4 sm:text-sm">
              <span className="flex flex-wrap items-center gap-1.5 text-navy sm:gap-2">
                <FlagIcon code="jp" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <FlagIcon code="vn" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <span className="lang-ja">{hero.badge.ja}</span>
                <span lang="vi" className="lang-vi">{hero.badge.vi}</span>
                <span lang="en" className="lang-en">{hero.badge.en}</span>
              </span>
            </p>
            <h1
              id="hero-title"
              className="max-w-[42rem] text-balance text-[1.9rem] font-bold leading-tight tracking-tight text-navy sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.13] xl:text-[3.05rem]"
            >
              <BiSubheading
                text={hero.title}
              />
            </h1>
            <div className="max-w-[38rem] text-[0.9rem] leading-relaxed text-muted sm:text-base lg:text-[0.98rem]">
              <p className="lang-ja text-foreground">
                {hero.lead.ja}
              </p>
              <p lang="vi" className="lang-vi text-foreground">
                {hero.lead.vi}
              </p>
              <p lang="en" className="lang-en text-foreground">
                {hero.lead.en}
              </p>
            </div>
            <div className="flex max-w-[46rem] flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="w-full sm:w-auto lg:max-w-[22rem] lg:px-5 lg:text-sm"
                aria-label={`${hero.lineCta.ja} ${hero.lineCta.vi}`}
                subLabelVi={hero.lineCta.vi}
                subLabelEn={hero.lineCta.en}
              >
                {hero.lineCta.ja}
              </ButtonLink>
              <ButtonLink
                href="/materials"
                variant="secondary"
                className="w-full sm:w-auto lg:max-w-[21rem] lg:px-5 lg:text-sm"
                aria-label={`${hero.pdfCta.ja} ${hero.pdfCta.vi}`}
                subLabelVi={hero.pdfCta.vi}
                subLabelEn={hero.pdfCta.en}
              >
                {hero.pdfCta.ja}
              </ButtonLink>
              <Link
                href="/profile"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-4 py-2 text-center text-[0.8125rem] font-bold text-navy underline-offset-4 hover:underline sm:min-h-11 sm:text-sm"
              >
                <span className="lang-ja">{hero.profileCta.ja}</span>
                <span lang="vi" className="lang-vi">{hero.profileCta.vi}</span>
                <span lang="en" className="lang-en">{hero.profileCta.en}</span>
              </Link>
            </div>
            <p className="text-[0.78rem] leading-relaxed text-muted sm:text-sm">
              <span className="lang-ja">{hero.note.ja}</span>
              <span lang="vi" className="lang-vi">{hero.note.vi}</span>
              <span lang="en" className="lang-en">{hero.note.en}</span>
            </p>
          </div>
          <aside
            className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white/90 p-4 shadow-[0_22px_60px_rgba(11,31,58,0.12)] backdrop-blur sm:p-5"
            aria-label="学習テーマ"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Start Here</p>
            <h2 className="mt-2 text-xl font-bold leading-snug text-navy">
              <span className="lang-ja">{hero.focusHeading.ja}</span>
              <span lang="vi" className="lang-vi">{hero.focusHeading.vi}</span>
              <span lang="en" className="lang-en">{hero.focusHeading.en}</span>
            </h2>
            <div className="mt-4 grid gap-2.5">
              {hero.focusItems.map((item) => (
                <div key={item.label.ja} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm">
                  <ResourceIcon variant={item.icon} />
                  <p className="text-sm font-bold leading-snug text-navy">
                    <span className="lang-ja">{item.label.ja}</span>
                    <span lang="vi" className="lang-vi">{item.label.vi}</span>
                    <span lang="en" className="lang-en">{item.label.en}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-accent/20 bg-accent-muted/35 p-3">
              <p className="text-sm font-bold text-navy">
                <span className="lang-ja">{hero.pauseTitle.ja}</span>
                <span lang="vi" className="lang-vi">{hero.pauseTitle.vi}</span>
                <span lang="en" className="lang-en">{hero.pauseTitle.en}</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                <span className="lang-ja">{hero.pauseBody.ja}</span>
                <span lang="vi" className="lang-vi">{hero.pauseBody.vi}</span>
                <span lang="en" className="lang-en">{hero.pauseBody.en}</span>
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center">
              {hero.stats.map((item) => (
                <div key={item.label.ja} className="rounded-2xl border border-border bg-white p-3">
                  <p className="text-lg font-bold text-navy">{item.value}</p>
                  <p className="text-[0.68rem] font-bold text-muted">
                    <span className="lang-ja">{item.label.ja}</span>
                    <span lang="vi" className="lang-vi">{item.label.vi}</span>
                    <span lang="en" className="lang-en">{item.label.en}</span>
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
