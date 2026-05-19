import Link from "next/link";
import { LINE_BOT_URL } from "@/lib/constants";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-3 py-2 shadow-[0_-12px_30px_rgba(11,31,58,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={LINE_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-col items-center justify-center rounded-xl bg-navy px-3 py-2 text-center text-xs font-bold leading-snug text-white"
        >
          <span>Risk Check</span>
          <span lang="vi" className="text-[0.65rem] font-semibold opacity-90">
            Kiểm tra LINE
          </span>
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 flex-col items-center justify-center rounded-xl border border-border bg-white px-3 py-2 text-center text-xs font-bold leading-snug text-navy"
        >
          <span>Contact</span>
          <span lang="vi" className="text-[0.65rem] font-semibold text-navy-soft">
            Liên hệ
          </span>
        </Link>
      </div>
    </div>
  );
}
