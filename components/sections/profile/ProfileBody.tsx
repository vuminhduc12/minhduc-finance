import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { NOTE_PROFILE_URL, LINE_BOT_URL, PDF_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { profileCopy } from "@/lib/copy/profile";
import type { ProfileSection } from "@/lib/copy/profile";

function SectionTitle({ id, title }: { id: string; title: { ja: string; vi: string } }) {
  return (
    <h2 id={id} className="text-lg font-bold leading-snug text-navy sm:text-xl md:text-2xl">
      <span className="block">{title.ja}</span>
      <span lang="vi" className="mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
        {title.vi}
      </span>
    </h2>
  );
}

function renderSection(section: ProfileSection) {
  switch (section.kind) {
    case "paragraphs":
      return (
        <>
          {section.paragraphsJa.map((p) => (
            <p key={p} className="text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">
              {p}
            </p>
          ))}
          <p
            lang="vi"
            className="border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryVi}
          </p>
        </>
      );
    case "bullets":
      return (
        <>
          <ul className="list-inside list-disc space-y-2 text-[0.8125rem] text-muted sm:text-sm md:text-base">
            {section.bulletsJa.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p
            lang="vi"
            className="mt-3 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryVi}
          </p>
        </>
      );
    case "cards":
      return (
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {section.cards.map((card, i) => (
            <Card key={card.title.ja} className={i === 0 ? "border-accent-muted" : ""}>
              <h3 className="text-sm font-bold text-navy sm:text-base">
                <span className="block">{card.title.ja}</span>
                <span lang="vi" className="mt-1 block text-xs font-semibold text-navy-soft sm:text-sm">
                  {card.title.vi}
                </span>
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 text-[0.8125rem] text-muted sm:mt-3 sm:text-sm">
                {card.itemsJa.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p
                lang="vi"
                className="mt-3 border-l-2 border-accent/25 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]"
              >
                {card.summaryVi}
              </p>
            </Card>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export function ProfileBody() {
  const { hero, sections } = profileCopy;
  return (
    <div className="pb-8">
      <section className="border-b border-border bg-gradient-to-b from-white to-accent-muted/20 py-10 sm:py-12 md:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-10">
            <aside className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div
                role="img"
                aria-label="顔写真のプレースホルダー。差し替え用です。"
                className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100 text-slate-400 ring-4 ring-accent-muted sm:h-40 sm:w-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 w-16 opacity-70 sm:h-20 sm:w-20"
                  aria-hidden
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h1 className="mt-5 text-xl font-bold text-navy sm:mt-6 sm:text-2xl">Vu Minh Duc</h1>
              <p className="mt-2 whitespace-pre-line text-[0.8125rem] font-medium leading-snug text-navy-soft sm:text-sm">
                {hero.role.ja}
              </p>
              <p lang="vi" className="mt-2 whitespace-pre-line text-[0.7rem] leading-relaxed text-muted sm:text-[0.75rem]">
                {hero.role.vi}
              </p>
              <p className="mt-3 max-w-xs text-[0.8125rem] leading-relaxed text-muted sm:mt-4 sm:text-sm">
                {hero.tagline.ja}
              </p>
              <p lang="vi" className="mt-2 max-w-xs border-l-2 border-accent/30 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]">
                {hero.tagline.vi}
              </p>
              <div className="mt-5 flex w-full max-w-xs flex-col gap-2.5 sm:mt-6">
                <ButtonLink
                  href={LINE_BOT_URL}
                  external
                  className="w-full"
                  aria-label={`${cta.lineOrganizeFree.ja} ${cta.lineOrganizeFree.vi}`}
                  subLabelVi={cta.lineOrganizeFree.vi}
                >
                  {cta.lineOrganizeFree.ja}
                </ButtonLink>
                <ButtonLink
                  href={PDF_URL}
                  external
                  variant="secondary"
                  className="w-full"
                  aria-label={`${cta.pdfConfirmContent.ja} ${cta.pdfConfirmContent.vi}`}
                  subLabelVi={cta.pdfConfirmContent.vi}
                >
                  {cta.pdfConfirmContent.ja}
                </ButtonLink>
              </div>
            </aside>
            <div className="min-w-0 space-y-5 sm:space-y-6">
              {hero.intro.map((para) => (
                <div key={para.ja}>
                  <p className="text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">{para.ja}</p>
                  <p
                    lang="vi"
                    className="mt-2 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
                  >
                    {para.vi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-3xl space-y-10 sm:space-y-12 md:space-y-14">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`${section.id}-heading`}>
              <SectionTitle id={`${section.id}-heading`} title={section.title} />
              <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">{renderSection(section)}</div>
              {section.id === "media" ? (
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <ButtonLink
                    href={NOTE_PROFILE_URL}
                    external
                    className="sm:w-auto"
                    aria-label={`${cta.noteOpenShort.ja} ${cta.noteOpenShort.vi}`}
                    subLabelVi={cta.noteOpenShort.vi}
                  >
                    {cta.noteOpenShort.ja}
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    variant="secondary"
                    className="sm:w-auto"
                    aria-label={`${cta.contact.ja} ${cta.contact.vi}`}
                    subLabelVi={cta.contact.vi}
                  >
                    {cta.contact.ja}
                  </ButtonLink>
                </div>
              ) : null}
              {section.id === "closing" ? (
                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                  <ButtonLink
                    href={LINE_BOT_URL}
                    external
                    aria-label={`${cta.lineOrganizeFree.ja} ${cta.lineOrganizeFree.vi}`}
                    subLabelVi={cta.lineOrganizeFree.vi}
                  >
                    {cta.lineOrganizeFree.ja}
                  </ButtonLink>
                  <ButtonLink
                    href={PDF_URL}
                    external
                    variant="secondary"
                    aria-label={`${cta.pdfConfirmContent.ja} ${cta.pdfConfirmContent.vi}`}
                    subLabelVi={cta.pdfConfirmContent.vi}
                  >
                    {cta.pdfConfirmContent.ja}
                  </ButtonLink>
                  <Link
                    href="/"
                    className="inline-flex min-h-12 flex-col items-center justify-center text-center text-[0.8125rem] font-semibold text-navy underline-offset-4 hover:underline sm:min-h-11 sm:text-sm md:text-base"
                  >
                    <span>{cta.topBack.ja}</span>
                    <span lang="vi" className="mt-0.5 text-[0.7rem] font-normal text-navy-soft sm:text-xs">
                      {cta.topBack.vi}
                    </span>
                  </Link>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
