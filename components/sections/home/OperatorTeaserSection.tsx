import Link from "next/link";
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
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:gap-10 lg:p-10">
          <div
            className="mx-auto mb-5 flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 sm:mb-6 sm:h-32 sm:w-32 lg:mb-0 lg:h-36 lg:w-36"
            role="img"
            aria-label="運営者の顔写真プレースホルダー"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12 opacity-70 sm:h-14 sm:w-14"
              aria-hidden
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
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
