import type { Bi } from "@/lib/copy/types";

/** 法的ページ：日本語本文の下に置くベトナム語要点（ja は短い案内、vi が要約本文） */
export const legalVi = {
  privacyIntro: {
    ja: "以下は、個人情報の扱いについてのベトナム語での要点です。詳細は日本語の本文をご確認ください。",
    vi: "Trang này mô tả cách chúng tôi xử lý thông tin cá nhân khi bạn sử dụng website, LINE, note, trang bán PDF hoặc liên hệ. Chúng tôi không bán dữ liệu của bạn. Các dịch vụ bên ngoài có thể thu thập thông tin theo chính sách riêng, nên bạn vui lòng đọc thêm chính sách của từng dịch vụ.",
    en: "This page explains how we handle personal information when you use this website, LINE, note, PDF sales pages, or contact forms. We do not sell your data. External services may collect information under their own policies, so please also read each service's policy.",
  } satisfies Bi,
  disclaimerIntro: {
    ja: "以下は、免責についてのベトナム語での要点です。詳細は日本語の本文をご確認ください。",
    vi: "Nội dung chỉ nhằm mục đích giáo dục và cung cấp thông tin, không phải tư vấn đầu tư cá nhân, pháp lý hay thuế. Thông tin có thể có sai sót hoặc lỗi thời. Quyết định đầu tư có rủi ro và có thể lỗ vốn. Với quyết định quan trọng như chuyển tiền, ký hợp đồng hoặc vay tiền, hãy xác nhận bằng tài liệu chính thống và hỏi chuyên gia khi cần.",
    en: "This content is for education and information only. It is not personal investment, legal, or tax advice. Information may contain errors or become outdated. Investment decisions involve risk and may lose principal. For important decisions such as remittance, contracts, or borrowing, confirm official documents and consult a professional when needed.",
  } satisfies Bi,
} as const;
