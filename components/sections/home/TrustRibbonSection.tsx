import { FlagIcon } from "@/components/brand/FlagIcon";
import { Container } from "@/components/ui/Container";
import { homeCopy } from "@/lib/copy/home";

export function TrustRibbonSection() {
  const { trustRibbon } = homeCopy;

  return (
    <section className="-mt-8 relative z-10 px-4 sm:px-6" aria-label="信頼できる運用方針">
      <Container className="overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white/95 shadow-[0_22px_55px_rgba(11,31,58,0.12)] backdrop-blur">
        <div className="grid md:grid-cols-3">
          {trustRibbon.items.map((item, index) => (
            <div
              key={item.label.ja}
              className={`bg-white p-5 ${index < trustRibbon.items.length - 1 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                  Trust 0{index + 1}
                </span>
                <div className="flex items-center gap-1.5">
                  {index === 0 ? (
                    <>
                      <FlagIcon code="jp" className="h-4 w-6" />
                      <FlagIcon code="vn" className="h-4 w-6" />
                    </>
                  ) : null}
                  <h2 className="text-sm font-bold text-navy sm:text-base">
                    {item.label.ja}
                  </h2>
                </div>
              </div>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-muted sm:text-sm">
                {item.body.ja}
              </p>
              <p lang="vi" className="mt-1.5 text-[0.7rem] leading-relaxed text-navy-soft sm:text-xs">
                {item.body.vi}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
