import { FlagIcon } from "@/components/brand/FlagIcon";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { BiSubheading } from "@/components/ui/Bilingual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LINE_BOT_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { scamCheckCopy } from "@/lib/copy/scam-check";

export function HeroScamCheck() {
  const { hero } = scamCheckCopy;
  return (
    <section
      className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(15,159,143,0.16),transparent_28rem),linear-gradient(135deg,#ffffff_0%,#eefcf9_52%,#f7f9fc_100%)] pb-10 pt-8 sm:pb-14 sm:pt-11 lg:pb-16 lg:pt-14"
      aria-labelledby="scam-hero-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-medium text-accent shadow-sm sm:text-sm">
              <FlagIcon code="jp" className="h-4 w-6" />
              <span className="lang-ja">{hero.eyebrow.ja}</span>
              <FlagIcon code="vn" className="h-4 w-6" />
              <span lang="vi" className="lang-vi text-[0.7rem] font-semibold leading-snug text-navy-soft sm:text-xs">
                {hero.eyebrow.vi}
              </span>
            </p>
            <h1
              id="scam-hero-title"
              className="mt-2 max-w-3xl text-[1.5rem] font-bold leading-snug text-navy sm:mt-3 sm:text-3xl sm:leading-snug lg:text-[2.125rem]"
            >
              <BiSubheading text={hero.title} />
            </h1>
            <div className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
              <p className="lang-ja text-foreground">{hero.lead.ja}</p>
              <p lang="vi" className="lang-vi text-foreground">
                {hero.lead.vi}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="sm:w-auto"
                aria-label={`${cta.lineCheckNowShort.ja} ${cta.lineCheckNowShort.vi}`}
                subLabelVi={cta.lineCheckNowShort.vi}
              >
                {cta.lineCheckNowShort.ja}
              </ButtonLink>
              <ButtonLink
                href="#flow"
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${cta.flowOnlyLater.ja} ${cta.flowOnlyLater.vi}`}
                subLabelVi={cta.flowOnlyLater.vi}
              >
                {cta.flowOnlyLater.ja}
              </ButtonLink>
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-[260px] rounded-3xl border border-border bg-white/78 p-5 text-center shadow-[0_18px_45px_rgba(11,31,58,0.09)] lg:block">
            <MiraiMascot compact variant="think" className="mx-auto h-44 w-44" title="詐欺チェックを考えるミライくん" />
            <p className="mt-2 text-sm font-bold text-navy">
              <span className="lang-ja">ミライくんが一緒に確認</span>
              <span lang="vi" className="lang-vi">Mirai cùng bạn kiểm tra</span>
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              <span className="lang-ja">急がされる話ほど、いったん止まって整理します。</span>
              <span lang="vi" className="lang-vi">Lời mời càng gấp, càng cần dừng lại để sắp xếp.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
