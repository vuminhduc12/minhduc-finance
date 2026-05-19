import Link from "next/link";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { NOTE_PROFILE_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeCopy } from "@/lib/copy/home";

export function OperatorTeaserSection() {
  const { operator } = homeCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="operator-teaser-heading">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,#ffffff,rgba(213,247,241,0.48))] p-5 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:gap-10 lg:p-10">
          <div
            className="mx-auto mb-5 flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white text-slate-400 shadow-inner ring-4 ring-accent-muted sm:mb-6 sm:h-36 sm:w-36 lg:mb-0 lg:h-40 lg:w-40"
            role="img"
            aria-label="ブランドマスコット ミライくん"
          >
            <MiraiMascot compact className="h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44" />
          </div>
          <div className="min-w-0 flex-1">
            <h2
              id="operator-teaser-heading"
              className="text-lg font-bold leading-snug text-navy sm:text-xl md:text-2xl"
            >
              <span className="block">{operator.heading.ja}</span>
              <span lang="vi" className="mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
                {operator.heading.vi}
              </span>
            </h2>
            <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm md:text-base">
              {operator.body.ja}
            </p>
            <p lang="vi" className="mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm">
              {operator.body.vi}
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href="/profile"
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${cta.profileCareer.ja} ${cta.profileCareer.vi}`}
                subLabelVi={cta.profileCareer.vi}
              >
                {cta.profileCareer.ja}
              </ButtonLink>
              <ButtonLink
                href={NOTE_PROFILE_URL}
                external
                variant="ghost"
                className="sm:w-auto"
                aria-label={`${cta.noteOpen.ja} ${cta.noteOpen.vi}`}
                subLabelVi={cta.noteOpen.vi}
              >
                {cta.noteOpen.ja}
              </ButtonLink>
              <Link
                href="/contact"
                className="inline-flex min-h-12 flex-col items-center justify-center text-center text-[0.8125rem] font-semibold text-navy underline-offset-4 hover:underline sm:min-h-11 sm:text-sm md:text-base"
              >
                <span>{cta.contact.ja}</span>
                <span lang="vi" className="mt-0.5 text-[0.7rem] font-normal text-navy-soft sm:text-xs">
                  {cta.contact.vi}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
