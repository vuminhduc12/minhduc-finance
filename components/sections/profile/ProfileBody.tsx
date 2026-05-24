import Link from "next/link";
import Image from "next/image";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { NOTE_PROFILE_URL, LINE_BOT_URL, PDF_URL } from "@/lib/constants";
import { cta } from "@/lib/copy/cta";
import { profileCopy } from "@/lib/copy/profile";
import type { ProfileSection } from "@/lib/copy/profile";

type ProfileVisualIcon = "shield" | "book" | "bridge";

function VisualIcon({ type }: { type: ProfileVisualIcon }) {
  if (type === "book") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <path d="M8 12c7 0 12 1.8 16 5.5C28 13.8 33 12 40 12v24c-7 0-12 1.8-16 5.5C20 37.8 15 36 8 36V12z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 17.5v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bridge") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <path d="M7 33h34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 33c3-12 10-18 14-18s11 6 14 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 33V22m20 11V22M24 33V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
      <path d="M24 6 39 12v11c0 9.5-5.5 16.5-15 20-9.5-3.5-15-10.5-15-20V12l15-6z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="m17 24 5 5 10-11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionTitle({ id, title }: { id: string; title: { ja: string; vi: string; en: string } }) {
  return (
    <h2 id={id} className="text-lg font-bold leading-snug text-navy sm:text-xl md:text-2xl">
      <span className="lang-ja block">{title.ja}</span>
      <span lang="vi" className="lang-vi mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
        {title.vi}
      </span>
      <span lang="en" className="lang-en mt-1.5 block text-base font-semibold leading-snug text-navy-soft sm:text-lg">
        {title.en}
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
            <p key={p} className="lang-ja text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">
              {p}
            </p>
          ))}
          <p
            lang="vi"
            className="lang-vi border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryVi}
          </p>
          <p
            lang="en"
            className="lang-en border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryEn}
          </p>
        </>
      );
    case "bullets":
      return (
        <>
          <ul className="lang-ja list-inside list-disc space-y-2 text-[0.8125rem] text-muted sm:text-sm md:text-base">
            {section.bulletsJa.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p
            lang="vi"
            className="lang-vi mt-3 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryVi}
          </p>
          <p
            lang="en"
            className="lang-en mt-3 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
          >
            {section.summaryEn}
          </p>
        </>
      );
    case "cards":
      return (
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {section.cards.map((card, i) => (
            <Card key={card.title.ja} className={i === 0 ? "border-accent-muted" : ""}>
              <h3 className="text-sm font-bold text-navy sm:text-base">
                <span className="lang-ja block">{card.title.ja}</span>
                <span lang="vi" className="lang-vi mt-1 block text-xs font-semibold text-navy-soft sm:text-sm">
                  {card.title.vi}
                </span>
                <span lang="en" className="lang-en mt-1 block text-xs font-semibold text-navy-soft sm:text-sm">
                  {card.title.en}
                </span>
              </h3>
              <ul className="lang-ja mt-2 list-inside list-disc space-y-1.5 text-[0.8125rem] text-muted sm:mt-3 sm:text-sm">
                {card.itemsJa.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p
                lang="vi"
                className="lang-vi mt-3 border-l-2 border-accent/25 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]"
              >
                {card.summaryVi}
              </p>
              <p
                lang="en"
                className="lang-en mt-3 border-l-2 border-accent/25 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]"
              >
                {card.summaryEn}
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
      <section className="border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#f3fbf9_58%,#ffffff_100%)] py-8 sm:py-10 md:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.14fr)_minmax(330px,0.86fr)] lg:items-center lg:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-navy shadow-[0_22px_55px_rgba(11,31,58,0.16)]">
              <div className="relative aspect-[4/3] min-h-[250px] sm:min-h-[340px]">
                <Image
                  src="/profile/vu-minh-duc-profile.png"
                  alt="Vu Minh Duc profile visual"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-[50%_50%]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/92 via-navy/38 to-transparent px-4 pb-4 pt-20 sm:px-6 sm:pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-muted">Financial Education / JP-VN</p>
                  <p className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">Vu Minh Duc</p>
                  <p className="mt-1 max-w-lg text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">
                    Money literacy and scam prevention for Vietnamese residents in Japan
                  </p>
                </div>
              </div>
            </div>

            <aside className="min-w-0 rounded-2xl border border-border bg-white/88 p-4 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Profile</p>
              <h1 className="mt-2 text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl">Vu Minh Duc</h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {hero.trustBadges.map((badge) => (
                  <span
                    key={badge.ja}
                    className="rounded-full border border-accent/20 bg-accent-muted/45 px-3 py-1 text-[0.7rem] font-bold text-navy"
                  >
                    <span className="lang-ja">{badge.ja}</span>
                    <span lang="vi" className="lang-vi">{badge.vi}</span>
                    <span lang="en" className="lang-en">{badge.en}</span>
                  </span>
                ))}
              </div>
              <p className="lang-ja mt-4 whitespace-pre-line text-[0.8125rem] font-semibold leading-snug text-navy-soft sm:text-sm">
                {hero.role.ja}
              </p>
              <p lang="vi" className="lang-vi mt-2 whitespace-pre-line text-[0.7rem] leading-relaxed text-muted sm:text-[0.75rem]">
                {hero.role.vi}
              </p>
              <p lang="en" className="lang-en mt-2 whitespace-pre-line text-[0.7rem] leading-relaxed text-muted sm:text-[0.75rem]">
                {hero.role.en}
              </p>
              <div className="mt-4 border-t border-border pt-4">
              <p className="lang-ja text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                {hero.tagline.ja}
              </p>
              <p lang="vi" className="lang-vi mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]">
                {hero.tagline.vi}
              </p>
              <p lang="en" className="lang-en mt-2 border-l-2 border-accent/30 pl-2.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-[0.75rem]">
                {hero.tagline.en}
              </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { label: { ja: "対応言語", vi: "Ngôn ngữ", en: "Languages" }, value: "JP / VN / EN" },
                  { label: { ja: "教材", vi: "Tài liệu", en: "Materials" }, value: "公開中" },
                  { label: { ja: "相談", vi: "Tư vấn", en: "Support" }, value: "受付中" },
                  { label: { ja: "実績", vi: "Thành tích", en: "Track record" }, value: "準備中" },
                ].map((item) => (
                  <div key={item.label.ja} className="rounded-2xl border border-border bg-white p-3 text-center">
                    <p className="text-sm font-bold text-navy">{item.value}</p>
                    <p className="mt-0.5 text-[0.68rem] font-bold text-muted">
                      <span className="lang-ja">{item.label.ja}</span>
                      <span lang="vi" className="lang-vi">{item.label.vi}</span>
                      <span lang="en" className="lang-en">{item.label.en}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2.5">
                <ButtonLink
                  href={LINE_BOT_URL}
                  external
                  className="w-full"
                  aria-label={`${cta.lineOrganizeFree.ja} ${cta.lineOrganizeFree.vi} ${cta.lineOrganizeFree.en}`}
                  subLabelVi={cta.lineOrganizeFree.vi}
                  subLabelEn={cta.lineOrganizeFree.en}
                >
                  {cta.lineOrganizeFree.ja}
                </ButtonLink>
                <ButtonLink
                  href={PDF_URL}
                  external
                  variant="secondary"
                  className="w-full"
                  aria-label={`${cta.pdfConfirmContent.ja} ${cta.pdfConfirmContent.vi} ${cta.pdfConfirmContent.en}`}
                  subLabelVi={cta.pdfConfirmContent.vi}
                  subLabelEn={cta.pdfConfirmContent.en}
                >
                  {cta.pdfConfirmContent.ja}
                </ButtonLink>
              </div>
            </aside>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.48fr)] lg:items-start lg:gap-8">
            <div className="min-w-0 space-y-4 rounded-2xl border border-border bg-white/74 p-4 shadow-[0_18px_45px_rgba(11,31,58,0.05)] sm:p-6">
              {hero.intro.map((para) => (
                <div key={para.ja}>
                  <p className="lang-ja text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">{para.ja}</p>
                  <p
                    lang="vi"
                    className="lang-vi mt-2 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
                  >
                    {para.vi}
                  </p>
                  <p
                    lang="en"
                    className="lang-en mt-2 border-l-2 border-accent/35 pl-3 text-[0.75rem] leading-relaxed text-navy-soft sm:text-[0.8125rem] md:text-sm"
                  >
                    {para.en}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {hero.focus.map((item) => (
                <div key={item.label.ja} className="rounded-2xl border border-border bg-card/95 p-4 shadow-sm">
                  <p className="text-sm font-bold text-navy">
                    <span className="lang-ja">{item.label.ja}</span>
                    <span lang="vi" className="lang-vi">{item.label.vi}</span>
                    <span lang="en" className="lang-en">{item.label.en}</span>
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                    <span className="lang-ja">{item.body.ja}</span>
                    <span lang="vi" className="lang-vi">{item.body.vi}</span>
                    <span lang="en" className="lang-en">{item.body.en}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white/86 shadow-[0_18px_45px_rgba(11,31,58,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
              <div className="flex items-center justify-center border-b border-border bg-accent-muted/45 p-5 lg:border-b-0 lg:border-r">
                <MiraiMascot compact variant="explain" className="h-36 w-36 sm:h-40 sm:w-40" title="プロフィールの読み方を案内するミライくん" />
              </div>
              <div className="p-4 sm:p-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Visual Guide</p>
                  <h2 className="mt-2 text-xl font-bold leading-snug text-navy sm:text-2xl">
                    <span className="lang-ja">{hero.visualGuide.heading.ja}</span>
                    <span lang="vi" className="lang-vi">{hero.visualGuide.heading.vi}</span>
                    <span lang="en" className="lang-en">{hero.visualGuide.heading.en}</span>
                  </h2>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">
                    <span className="lang-ja">{hero.visualGuide.body.ja}</span>
                    <span lang="vi" className="lang-vi">{hero.visualGuide.body.vi}</span>
                    <span lang="en" className="lang-en">{hero.visualGuide.body.en}</span>
                  </p>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {hero.visualGuide.items.map((item) => (
                    <div key={item.title.ja} className="min-w-0 border-t border-border pt-4 md:border-l md:border-t-0 md:pl-4 md:pt-0">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-accent-muted">
                        <VisualIcon type={item.icon} />
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-navy">
                        <span className="lang-ja">{item.title.ja}</span>
                        <span lang="vi" className="lang-vi">{item.title.vi}</span>
                        <span lang="en" className="lang-en">{item.title.en}</span>
                      </h3>
                      <p className="mt-2 text-[0.75rem] leading-relaxed text-muted sm:text-[0.8125rem]">
                        <span className="lang-ja">{item.body.ja}</span>
                        <span lang="vi" className="lang-vi">{item.body.vi}</span>
                        <span lang="en" className="lang-en">{item.body.en}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-12 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
          <nav className="hidden rounded-2xl border border-border bg-white/82 p-4 text-sm shadow-sm lg:sticky lg:top-24 lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Profile Map</p>
            <div className="mt-3 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}-heading`}
                  className="block rounded-xl px-3 py-2 font-semibold text-navy-soft hover:bg-accent-muted/55 hover:text-navy"
                >
                  <span className="lang-ja">{section.title.ja}</span>
                  <span lang="vi" className="lang-vi">{section.title.vi}</span>
                  <span lang="en" className="lang-en">{section.title.en}</span>
                </a>
              ))}
            </div>
          </nav>
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="border-t border-border pt-8 first:border-t-0 first:pt-0 sm:pt-10"
            >
              <SectionTitle id={`${section.id}-heading`} title={section.title} />
              <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">{renderSection(section)}</div>
              {section.id === "media" ? (
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <ButtonLink
                    href={NOTE_PROFILE_URL}
                    external
                    className="sm:w-auto"
                    aria-label={`${cta.noteOpenShort.ja} ${cta.noteOpenShort.vi} ${cta.noteOpenShort.en}`}
                    subLabelVi={cta.noteOpenShort.vi}
                    subLabelEn={cta.noteOpenShort.en}
                  >
                    {cta.noteOpenShort.ja}
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    variant="secondary"
                    className="sm:w-auto"
                    aria-label={`${cta.contact.ja} ${cta.contact.vi} ${cta.contact.en}`}
                    subLabelVi={cta.contact.vi}
                    subLabelEn={cta.contact.en}
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
                    aria-label={`${cta.lineOrganizeFree.ja} ${cta.lineOrganizeFree.vi} ${cta.lineOrganizeFree.en}`}
                    subLabelVi={cta.lineOrganizeFree.vi}
                    subLabelEn={cta.lineOrganizeFree.en}
                  >
                    {cta.lineOrganizeFree.ja}
                  </ButtonLink>
                  <ButtonLink
                    href={PDF_URL}
                    external
                    variant="secondary"
                    aria-label={`${cta.pdfConfirmContent.ja} ${cta.pdfConfirmContent.vi} ${cta.pdfConfirmContent.en}`}
                    subLabelVi={cta.pdfConfirmContent.vi}
                    subLabelEn={cta.pdfConfirmContent.en}
                  >
                    {cta.pdfConfirmContent.ja}
                  </ButtonLink>
                  <Link
                    href="/"
                    className="inline-flex min-h-12 flex-col items-center justify-center text-center text-[0.8125rem] font-semibold text-navy underline-offset-4 hover:underline sm:min-h-11 sm:text-sm md:text-base"
                  >
                    <span className="lang-ja">{cta.topBack.ja}</span>
                    <span lang="vi" className="lang-vi mt-0.5 text-[0.7rem] font-normal text-navy-soft sm:text-xs">
                      {cta.topBack.vi}
                    </span>
                    <span lang="en" className="lang-en mt-0.5 text-[0.7rem] font-normal text-navy-soft sm:text-xs">
                      {cta.topBack.en}
                    </span>
                  </Link>
                </div>
              ) : null}
            </section>
          ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
