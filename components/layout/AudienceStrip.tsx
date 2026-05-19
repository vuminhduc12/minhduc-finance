import { FlagIcon } from "@/components/brand/FlagIcon";
import { audienceStrip } from "@/lib/copy/audience";

/**
 * 全ページ共通：対象者の明示（日越併記）
 * 将来 /vi ではこの文言を vi ページに寄せる想定で、文言は lib/copy に集約。
 */
export function AudienceStrip() {
  return (
    <div className="border-b border-border bg-[linear-gradient(90deg,rgba(11,31,58,0.04),rgba(15,159,143,0.08),rgba(218,37,29,0.04))] px-4 py-2.5 sm:px-6 sm:py-3">
      <p className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-2 text-center text-[13px] leading-relaxed text-navy-soft sm:flex-row sm:text-sm sm:leading-snug">
        <span className="flex shrink-0 items-center gap-1.5">
          <FlagIcon code="jp" className="h-5 w-7" />
          <span className="text-xs font-bold text-navy-soft">JP</span>
          <span className="h-px w-5 bg-border" aria-hidden />
          <span className="text-xs font-bold text-navy-soft">VN</span>
          <FlagIcon code="vn" className="h-5 w-7" />
        </span>
        <span className="lang-ja block text-navy">{audienceStrip.ja}</span>
        <span lang="vi" className="lang-vi block font-medium leading-relaxed text-navy-soft">
          {audienceStrip.vi}
        </span>
      </p>
    </div>
  );
}
