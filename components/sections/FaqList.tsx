import type { FaqBiItem } from "@/lib/faq-content";
import { BiBlock } from "@/components/ui/Bilingual";

type Props = {
  items: readonly FaqBiItem[] | FaqBiItem[];
  id?: string;
};

export function FaqList({ items, id = "faq" }: Props) {
  return (
    <div id={id} className="space-y-3 sm:space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-border bg-card px-3 py-0.5 shadow-sm open:shadow-md sm:px-4"
        >
          <summary className="cursor-pointer list-none py-3.5 marker:content-none sm:py-4 [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-3">
              <span className="text-left text-[0.9375rem] font-semibold leading-snug text-navy sm:text-base">
                <span className="lang-ja block">{item.q.ja}</span>
                <span lang="vi" className="lang-vi mt-1 block text-[0.8125rem] font-medium leading-snug text-navy-soft">
                  {item.q.vi}
                </span>
                <span lang="en" className="lang-en mt-1 block text-[0.8125rem] font-medium leading-snug text-navy-soft">
                  {item.q.en}
                </span>
              </span>
              <span
                className="mt-0.5 shrink-0 text-accent transition-transform group-open:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </span>
          </summary>
          <div className="border-t border-border pb-3.5 pt-2 sm:pb-4">
            <BiBlock text={item.a} viSize="sm" />
          </div>
        </details>
      ))}
    </div>
  );
}
