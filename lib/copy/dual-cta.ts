import type { Bi } from "@/lib/copy/types";

/** トップ・詐欺チェック下部などで共通利用 */
export const dualCtaBandCopy = {
  heading: {
    ja: "次の一歩は、急がずに選べます",
    vi: "Bước tiếp theo có thể chọn từ từ, không cần vội.",
    en: "You can choose the next step without rushing.",
  } satisfies Bi,
  footnote: {
    ja: "教育目的の案内です。金融商品の販売、個別の投資判断、利益保証は行いません。",
    vi: "Nội dung nhằm mục đích giáo dục. Không bán sản phẩm tài chính, không thay bạn quyết định đầu tư và không cam kết lợi nhuận.",
    en: "Educational guidance only. No financial product sales, individual investment decisions, or profit guarantees.",
  } satisfies Bi,
} as const;
