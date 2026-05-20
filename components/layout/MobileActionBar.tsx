import Link from "next/link";
import { LINE_BOT_URL } from "@/lib/constants";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(11,31,58,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={LINE_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-col items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-[0.72rem] font-bold leading-snug text-white"
        >
          <span className="lang-ja">危険チェック</span>
          <span lang="vi" className="lang-vi">
            Kiểm tra rủi ro
          </span>
          <span lang="en" className="lang-en">
            Risk check
          </span>
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 flex-col items-center justify-center rounded-xl border border-border bg-white px-3 py-2 text-center text-[0.72rem] font-bold leading-snug text-navy"
        >
          <span className="lang-ja">相談する</span>
          <span lang="vi" className="lang-vi">
            Liên hệ
          </span>
          <span lang="en" className="lang-en">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}
