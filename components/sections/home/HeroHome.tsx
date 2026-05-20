import { BiSubheading } from "@/components/ui/Bilingual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FlagIcon } from "@/components/brand/FlagIcon";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { LINE_BOT_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeCopy } from "@/lib/copy/home";
import Link from "next/link";

export function HeroHome() {
  const { hero } = homeCopy;
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgba(15,159,143,0.18),transparent_30rem),radial-gradient(circle_at_88%_18%,rgba(11,31,58,0.14),transparent_26rem),linear-gradient(135deg,#ffffff_0%,#f3fbfa_42%,#eef3f8_100%)] pb-14 pt-6 sm:pb-20 sm:pt-11 lg:pb-20 lg:pt-12 xl:pb-24 xl:pt-14"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(330px,0.82fr)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="max-w-[42rem] space-y-4 sm:space-y-6">
            <p className="inline-flex max-w-xl flex-col rounded-2xl border border-border/80 bg-white/80 px-3.5 py-2 text-left text-[0.78rem] font-semibold leading-relaxed text-navy-soft shadow-sm backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm lg:text-[0.82rem]">
              <span className="flex flex-wrap items-center gap-1.5 text-navy sm:gap-2">
                <FlagIcon code="jp" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <FlagIcon code="vn" className="h-3.5 w-5 sm:h-4 sm:w-6" />
                <FlagIcon code="us" className="h-3.5 w-5 sm:h-4 sm:w-6" title="アメリカ英語" />
                <span className="lang-ja">{hero.trustLine.ja}</span>
                <span lang="vi" className="lang-vi">{hero.trustLine.vi}</span>
                <span lang="en" className="lang-en">{hero.trustLine.en}</span>
              </span>
            </p>
            <h1
              id="hero-title"
              className="max-w-[41rem] text-balance text-[1.58rem] font-bold leading-snug tracking-tight text-navy min-[390px]:text-[1.72rem] sm:text-4xl sm:leading-tight lg:text-[2.55rem] lg:leading-[1.18] xl:text-[2.9rem] xl:leading-[1.14]"
            >
              <BiSubheading text={hero.title} />
            </h1>
            <div className="max-w-[38rem] text-[0.9rem] leading-relaxed text-muted sm:text-base lg:text-[0.98rem]">
              <p className="lang-ja text-foreground">{hero.lead.ja}</p>
              <p lang="vi" className="lang-vi text-foreground">
                {hero.lead.vi}
              </p>
              <p lang="en" className="lang-en text-foreground">
                {hero.lead.en}
              </p>
            </div>
            <div className="flex max-w-[44rem] flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="w-full sm:w-auto lg:max-w-[22rem] lg:px-5 lg:text-sm"
                aria-label={`${cta.lineCheckNow.ja} ${cta.lineCheckNow.vi}`}
                subLabelVi={cta.lineCheckNow.vi}
                subLabelEn={cta.lineCheckNow.en}
              >
                {cta.lineCheckNow.ja}
              </ButtonLink>
              <ButtonLink
                href="/scam-check"
                variant="secondary"
                className="w-full sm:w-auto lg:max-w-[21rem] lg:px-5 lg:text-sm"
                aria-label={`${cta.readScamCheckFirst.ja} ${cta.readScamCheckFirst.vi}`}
                subLabelVi={cta.readScamCheckFirst.vi}
                subLabelEn={cta.readScamCheckFirst.en}
              >
                {cta.readScamCheckFirst.ja}
              </ButtonLink>
            </div>
            <p className="text-[0.78rem] text-muted sm:text-sm">
              <span className="lang-ja block sm:inline">運営：Vu Minh Duc（</span>
              <Link
                href="/profile"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                <span className="lang-ja">{cta.profileRead.ja}</span>
                <span lang="vi" className="lang-vi">{cta.profileRead.vi}</span>
                <span lang="en" className="lang-en">{cta.profileRead.en}</span>
              </Link>
              <span className="lang-ja hidden sm:inline"> / </span>
              <span className="lang-ja">）</span>
            </p>
          </div>
          <aside
            className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-[1.65rem] border border-navy/10 bg-[linear-gradient(160deg,#ffffff_0%,#f7fbfb_48%,#e6f4f2_100%)] p-4 shadow-[0_22px_60px_rgba(11,31,58,0.14)] backdrop-blur sm:max-w-[420px] sm:rounded-[2rem] sm:p-6 lg:max-w-[420px] xl:max-w-[460px]"
            aria-label="ブランドマスコット ミライくん"
          >
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-2 py-0.5 text-[0.62rem] font-bold text-navy shadow-sm sm:right-4 sm:top-4 sm:px-2.5 sm:py-1 sm:text-[0.68rem]">
              <FlagIcon code="jp" className="h-3.5 w-5" />
              <span>JP/VN/EN</span>
              <FlagIcon code="vn" className="h-3.5 w-5" />
              <FlagIcon code="us" className="h-3.5 w-5" title="アメリカ英語" />
            </div>
            <div className="mx-auto flex max-w-[260px] flex-col items-center text-center sm:max-w-[280px] lg:max-w-[300px]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-white to-accent-muted/80 ring-4 ring-white sm:h-56 sm:w-56 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
                <MiraiMascot variant="smile" className="h-44 w-44 sm:h-60 sm:w-60 lg:h-56 lg:w-56 xl:h-60 xl:w-60" />
              </div>
              <p className="mt-3 text-sm font-bold tracking-wide text-navy sm:mt-4">MIRAI NAVIGATOR</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs">
                Financial Education Mascot
              </p>
              <p className="mt-2 whitespace-pre-line text-[11px] font-medium leading-relaxed text-navy sm:text-xs">
                <span className="lang-ja">{hero.cardRole.ja}</span>
                <span lang="vi" className="lang-vi">{hero.cardRole.vi}</span>
                <span lang="en" className="lang-en">{hero.cardRole.en}</span>
              </p>
              <div className="mt-4 grid w-full grid-cols-4 gap-2">
                {[
                  { label: "Smile", variant: "smile" },
                  { label: "Think", variant: "think" },
                  { label: "Cheer", variant: "cheer" },
                  { label: "Calm", variant: "calm" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="min-w-0 rounded-2xl border border-border bg-white/85 p-2 text-center"
                  >
                    <MiraiMascot
                      compact
                      variant={item.variant as "smile" | "think" | "cheer" | "calm"}
                      className="mx-auto h-14 w-14"
                      title={`ミライくん ${item.label}`}
                    />
                    <p className="mt-1 truncate text-[0.58rem] font-bold uppercase tracking-[0.08em] text-navy">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <dl className="mt-5 grid w-full grid-cols-2 gap-2 text-left">
                {hero.trustPoints.map((point) => (
                  <div key={point.ja} className="min-w-0 rounded-xl border border-border bg-white/70 p-2.5 sm:p-3">
                    <dt className="text-[0.72rem] font-bold text-navy sm:text-xs">
                      <span className="lang-ja">{point.ja}</span>
                      <span lang="vi" className="lang-vi">{point.vi}</span>
                      <span lang="en" className="lang-en">{point.en}</span>
                    </dt>
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
