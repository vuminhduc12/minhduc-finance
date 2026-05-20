import { FlagIcon } from "@/components/brand/FlagIcon";
import { audienceStrip } from "@/lib/copy/audience";

/**
 * 全ページ共通：対象者の明示（日越併記）
 * 将来 /vi ではこの文言を vi ページに寄せる想定で、文言は lib/copy に集約。
 */
export function AudienceStrip() {
  return (
    <div className="border-b border-border bg-[linear-gradient(90deg,rgba(11,31,58,0.035),rgba(15,159,143,0.075),rgba(218,37,29,0.035))] px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8">
      <p className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1.5 text-center text-[11px] leading-relaxed text-navy-soft sm:flex-row sm:text-[13px] sm:leading-snug xl:justify-start xl:text-left">
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/70 px-2 py-0.5 shadow-sm sm:px-2.5 sm:py-1">
          <FlagIcon code="jp" className="h-3.5 w-5" />
          <span className="text-[10px] font-bold text-navy-soft">JP</span>
          <span className="h-px w-4 bg-border" aria-hidden />
          <span className="text-[10px] font-bold text-navy-soft">VN</span>
          <FlagIcon code="vn" className="h-3.5 w-5" />
          <span className="h-px w-4 bg-border" aria-hidden />
          <span className="text-[10px] font-bold text-navy-soft">EN</span>
          <FlagIcon code="us" className="h-3.5 w-5" title="アメリカ英語" />
        </span>
        <span className="lang-ja block max-w-[21rem] font-medium text-navy sm:max-w-4xl">{audienceStrip.ja}</span>
        <span lang="vi" className="lang-vi block max-w-[21rem] font-medium leading-relaxed text-navy-soft sm:max-w-4xl">
          {audienceStrip.vi}
        </span>
        <span lang="en" className="lang-en block max-w-[21rem] font-medium leading-relaxed text-navy-soft sm:max-w-4xl">
          {audienceStrip.en}
        </span>
      </p>
    </div>
  );
}
