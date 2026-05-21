import type { Bi } from "@/lib/copy/types";

export type FaqBiItem = { q: Bi; a: Bi };

/** よくある質問（トップ） */
export const homeFaqItems: readonly FaqBiItem[] = [
  {
    q: {
      ja: "投資の「おすすめ銘柄」を教えてもらえますか？",
      vi: "Bạn có “gợi ý mã cổ phiếu” hay sản phẩm nên mua không?",
      en: "Can you tell me recommended stocks or products to buy?",
    },
    a: {
      ja: "個別の銘柄や商品の推奨、売買のタイミングを断定するようなお答えはしていません。制度の仕組みや考え方を整理し、ご自身で判断できる材料になるよう情報を届けています。",
      vi: "Tôi không trả lời theo kiểu khuyên mã cụ thể hay khẳng định thời điểm mua/bán. Tôi ưu tiên giúp bạn hiểu cơ chế và cách nghĩ, để bạn tự ra quyết định.",
      en: "I do not recommend specific stocks or products, or state definite buy/sell timing. I organize systems and ways of thinking so you can make your own decision.",
    },
  },
  {
    q: {
      ja: "将来、相談や研修もお願いできますか？",
      vi: "Tương lai có thể nhờ tư vấn hoặc workshop không?",
      en: "Can I request consultation or workshops in the future?",
    },
    a: {
      ja: "段階的に整備予定です。まずは教育コンテンツと詐欺予防の導線を整え、個人・企業・学校・コミュニティ向けの支援に広げられる形を作ります。",
      vi: "Dự kiến xây dựng từng bước. Trước hết hoàn thiện nội dung giáo dục và lối phòng tránh lừa đảo, sau đó mở rộng hỗ trợ cho cá nhân, công ty, trường học và cộng đồng.",
      en: "These will be prepared step by step. First I am building educational content and scam-prevention paths, then expanding support for individuals, companies, schools, and communities.",
    },
  },
] as const;

/** 詐欺チェックページ用FAQ */
export const scamCheckFaqItems: readonly FaqBiItem[] = [
  {
    q: {
      ja: "チェック結果は、法的な保証がありますか？",
      vi: "Kết quả kiểm tra có được pháp luật bảo đảm không?",
      en: "Does the check result have legal guarantees?",
    },
    a: {
      ja: "いいえ。学習・整理のための目安です。最終的な判断はご本人・専門家（必要なら弁護士や税理士など）に委ねてください。",
      vi: "Không. Đây chỉ là mốc tham khảo để học và sắp xếp suy nghĩ. Quyết định cuối cùng thuộc về bạn hoặc chuyên gia (luật sư, kế toán thuế…) khi cần.",
      en: "No. It is only a reference for learning and organizing your thoughts. Final decisions should be made by you or a professional such as a lawyer or tax accountant when needed.",
    },
  },
  {
    q: {
      ja: "個別の契約書まで見てもらえますか？",
      vi: "Bạn có đọc giúp hợp đồng riêng của tôi không?",
      en: "Can you review my individual contract?",
    },
    a: {
      ja: "このサイトやBotでは、個別の契約の精読や法的判断は行いません。不安が残る場合は、相談窓口や専門家の利用を検討してください。",
      vi: "Trang và bot không đọc kỹ hợp đồng riêng hay đưa nhận định pháp lý. Nếu vẫn lo, hãy tìm đường dây tư vấn hoặc chuyên gia.",
      en: "This site and Bot do not provide detailed review of individual contracts or legal judgment. If you remain worried, consider using a consultation desk or professional support.",
    },
  },
] as const;
