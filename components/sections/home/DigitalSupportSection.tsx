import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ResourceIcon } from "@/components/sections/ResourceHubVisual";
import { CONTACT_MAILTO, LINE_BOT_URL } from "@/lib/constants";
import { homeBrandCopy } from "@/lib/copy/home";

export function DigitalSupportSection() {
  const { digitalSupport } = homeBrandCopy;

  return (
    <section className="py-10 sm:py-12 md:py-14" aria-labelledby="digital-support-heading">
      <Container>
        <div className="grid gap-5 rounded-3xl border border-border bg-white/86 p-5 shadow-[0_18px_45px_rgba(11,31,58,0.06)] sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.48fr)] lg:items-center lg:gap-8">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {digitalSupport.kicker}
            </p>
            <h2 id="digital-support-heading" className="mt-2 text-balance text-2xl font-bold leading-snug text-navy sm:text-3xl">
              <span className="lang-ja">{digitalSupport.title.ja}</span>
              <span lang="vi" className="lang-vi">{digitalSupport.title.vi}</span>
              <span lang="en" className="lang-en">{digitalSupport.title.en}</span>
            </h2>
            <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted sm:text-sm md:text-base">
              <span className="lang-ja">{digitalSupport.body.ja}</span>
              <span lang="vi" className="lang-vi">{digitalSupport.body.vi}</span>
              <span lang="en" className="lang-en">{digitalSupport.body.en}</span>
            </p>
            <p className="mt-4 rounded-2xl border border-accent/20 bg-accent-muted/35 p-3 text-[0.8125rem] font-semibold leading-relaxed text-navy sm:text-sm">
              <span className="lang-ja">{digitalSupport.note.ja}</span>
              <span lang="vi" className="lang-vi">{digitalSupport.note.vi}</span>
              <span lang="en" className="lang-en">{digitalSupport.note.en}</span>
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink
                href={LINE_BOT_URL}
                external
                className="sm:w-auto"
                aria-label={`${digitalSupport.lineCta.ja} ${digitalSupport.lineCta.vi}`}
                subLabelVi={digitalSupport.lineCta.vi}
                subLabelEn={digitalSupport.lineCta.en}
              >
                {digitalSupport.lineCta.ja}
              </ButtonLink>
              <ButtonLink
                href={CONTACT_MAILTO}
                external
                variant="secondary"
                className="sm:w-auto"
                aria-label={`${digitalSupport.consultCta.ja} ${digitalSupport.consultCta.vi}`}
                subLabelVi={digitalSupport.consultCta.vi}
                subLabelEn={digitalSupport.consultCta.en}
              >
                {digitalSupport.consultCta.ja}
              </ButtonLink>
            </div>
          </div>
          <Card className="bg-[linear-gradient(135deg,#ffffff,rgba(213,247,241,0.4))]">
            <div className="grid gap-3">
              {digitalSupport.points.map((point) => (
                <div key={point.title.ja} className="flex items-center gap-3 rounded-2xl border border-border bg-white/88 p-3">
                  <ResourceIcon variant={point.icon} />
                  <p className="text-sm font-bold leading-snug text-navy">
                    <span className="lang-ja">{point.title.ja}</span>
                    <span lang="vi" className="lang-vi">{point.title.vi}</span>
                    <span lang="en" className="lang-en">{point.title.en}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                Build with calm focus
              </p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                <span className="lang-ja">派手さより、信頼される見せ方を大切にします。</span>
                <span lang="vi" className="lang-vi">Ưu tiên cách thể hiện đáng tin cậy hơn sự hào nhoáng.</span>
                <span lang="en" className="lang-en">Prioritizing trustworthy presentation over flashiness.</span>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
