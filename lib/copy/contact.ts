import type { Bi } from "@/lib/copy/types";

export const contactCopy = {
  pageIntro: {
    ja: "個人のご相談、取材、協業、企業・学校・団体向けのご連絡はこちらから。",
    vi: "Liên hệ cho tư vấn cá nhân, phỏng vấn, hợp tác, hoặc nhu cầu từ công ty, trường học, tổ chức.",
  } satisfies Bi,
  leadBeforeLink: {
    ja: "返信にお時間をいただくことがあります。送金・契約が近い話は、まず",
    vi: "Đôi khi phản hồi sẽ hơi chậm. Nếu sắp chuyển tiền hoặc ký hợp đồng, trước tiên hãy xem ",
  } satisfies Bi,
  scamCheckPageLink: {
    ja: "詐欺チェックのページ",
    vi: "trang kiểm tra lừa đảo",
  } satisfies Bi,
  leadAfterLink: {
    ja: "か、LINEで短く整理してください。",
    vi: " hoặc sắp xếp nhanh trên LINE.",
  } satisfies Bi,
  inquiryTypes: [
    {
      ja: "個人：詐欺かもしれない話の整理、教材に関する質問",
      vi: "Cá nhân: sắp xếp lời mời có thể lừa đảo, câu hỏi về tài liệu",
    },
    {
      ja: "メディア：取材、記事、登壇の相談",
      vi: "Media: phỏng vấn, bài viết, phát biểu",
    },
    {
      ja: "法人・学校・団体：ベトナム人向け金融トラブル予防の資料・勉強会",
      vi: "Công ty, trường học, tổ chức: tài liệu/workshop phòng tránh rắc rối tài chính cho người Việt",
    },
  ] as const satisfies readonly Bi[],
} as const;
