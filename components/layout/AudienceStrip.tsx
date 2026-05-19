import { audienceStrip } from "@/lib/copy/audience";

/**
 * 全ページ共通：対象者の明示（日越併記）
 * 将来 /vi ではこの文言を vi ページに寄せる想定で、文言は lib/copy に集約。
 */
export function AudienceStrip() {
  return (
    <div className="border-b border-border bg-navy/[0.04] px-4 py-2.5 sm:px-6 sm:py-3">
      <p className="mx-auto max-w-3xl text-center text-[13px] leading-relaxed text-navy-soft sm:text-sm sm:leading-snug">
        <span className="block text-navy">{audienceStrip.ja}</span>
        <span lang="vi" className="mt-1.5 block font-medium leading-relaxed text-navy-soft">
          {audienceStrip.vi}
        </span>
      </p>
    </div>
  );
}
