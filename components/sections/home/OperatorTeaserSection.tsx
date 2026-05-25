import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { NOTE_PROFILE_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { homeBrandCopy } from "@/lib/copy/home";

export function OperatorTeaserSection() {
  const { founder } = homeBrandCopy;
  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="operator-teaser-heading">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,#ffffff,rgba(213,247,241,0.48))] p-5 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:gap-10 lg:p-10">
          <div className="relative mx-auto mb-5 h-36 w-36 shrink-0 overflow-hidden rounded-full bg-navy shadow-inner ring-4 ring-accent-muted sm:mb-6 sm:h-40 sm:w-40 lg:mb-0 lg:h-44 lg:w-44">
            <Image
              src="/profile/vu-minh-duc-profile.png"
              alt="Vu Minh Duc"
              fill
              sizes="176px"
              className="object-cover object-[50%_35%]"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h2
              id="operator-teaser-heading"
              className="text-lg font-bold leading-snug text-navy sm:text-xl md:text-2xl"
            >
              <span className="lang-ja block">{founder.heading.ja}</span>
              <span lang="vi" className="lang-vi mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
                {founder.heading.vi}
              </span>
              <span lang="en" className="lang-en mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
                {founder.heading.en}
              </span>
            </h2>
            <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-muted sm:mt-3 sm:text-sm md:text-base">
              <span className="lang-ja">
                {founder.body.ja}
              </span>
              <span lang="vi" className="lang-vi">
                {founder.body.vi}
              </span>
              <span lang="en" className="lang-en">
                {founder.body.en}
              </span>
            </p>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">
              <span className="lang-ja">
                {founder.reason.ja}
              </span>
              <span lang="vi" className="lang-vi">
                {founder.reason.vi}
              </span>
              <span lang="en" className="lang-en">
                {founder.reason.en}
              </span>
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href="/profile"
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${cta.profileCareer.ja} ${cta.profileCareer.vi}`}
                subLabelVi={cta.profileCareer.vi}
              >
                プロフィールを見る
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
