import type { Bi } from "@/lib/copy/types";

/** トップ・詐欺チェック下部などで共通利用 */
export const dualCtaBandCopy = {
  heading: {
    ja: "次の一歩は、急がずに選べます",
    vi: "Bước tiếp theo có thể chọn từ từ, không cần vội.",
  } satisfies Bi,
  footnote: {
    ja: "LINEと販売ページは外部へ移動します。教育目的の案内であり、金融商品の販売や利益保証は行いません。",
    vi: "LINE và trang bán hàng là dịch vụ bên ngoài. Nội dung nhằm giáo dục, không bán sản phẩm tài chính hay cam kết lợi nhuận.",
  } satisfies Bi,
} as const;
