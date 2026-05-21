import type { Bi } from "@/lib/copy/types";

export type ProfileSection =
  | {
      id: string;
      title: Bi;
      kind: "paragraphs";
      paragraphsJa: readonly string[];
      summaryVi: string;
      summaryEn: string;
    }
  | {
      id: string;
      title: Bi;
      kind: "bullets";
      bulletsJa: readonly string[];
      summaryVi: string;
      summaryEn: string;
    }
  | {
      id: string;
      title: Bi;
      kind: "cards";
      cards: readonly {
        title: Bi;
        itemsJa: readonly string[];
        summaryVi: string;
        summaryEn: string;
      }[];
    };

export const profileCopy = {
  pageIntro: {
    ja: "この活動を誰が、どんな姿勢で、どこまで責任を持って行うのかを確認するページです。",
    vi: "Trang này giúp bạn hiểu ai đang vận hành, theo thái độ nào và chịu trách nhiệm trong phạm vi nào.",
    en: "This page explains who runs this activity, the attitude behind it, and the scope of responsibility.",
  } satisfies Bi,
  hero: {
    role: {
      ja: "Founder / SE / プロボクサー\n在日ベトナム人向け金融教育ライター\n詐欺予防・生活金融リテラシー発信",
      vi: "Founder / Kỹ sư / Võ sĩ chuyên nghiệp\nNgười viết giáo dục tài chính cho người Việt tại Nhật\nChia sẻ về phòng tránh lừa đảo và kiến thức tiền bạc đời sống",
      en: "Founder / Software Engineer / Professional boxer\nFinancial education writer for Vietnamese residents in Japan\nSharing scam prevention and daily money literacy",
    } satisfies Bi,
    tagline: {
      ja: "日本語とベトナム語の間にある情報差を減らし、将来は相談・研修・法人支援へ広げることを目指しています。",
      vi: "Giảm khoảng cách thông tin giữa tiếng Nhật và tiếng Việt, hướng tới tư vấn, workshop và hỗ trợ tổ chức trong tương lai.",
      en: "I aim to reduce the information gap between Japanese and Vietnamese, then expand into consultation, workshops, and organizational support.",
    } satisfies Bi,
    intro: [
      {
        ja: "こんにちは、Vu Minh Ducです。日本で働くベトナムの方が、言葉の壁や情報差のせいで、お金の判断だけ不利になる状況を減らしたいと考えています。まずは教育メディアとして信頼を作り、3年後の法人化につながる事業へ育てていきます。",
        vi: "Xin chào, tôi là Vu Minh Duc. Tôi muốn giảm tình trạng người Việt ở Nhật bị bất lợi trong quyết định tiền bạc chỉ vì rào cản ngôn ngữ và thiếu thông tin. Trước hết xây dựng niềm tin như một media giáo dục, hướng tới doanh nghiệp trong 3 năm tới.",
        en: "Hello, I am Vu Minh Duc. I want to reduce situations where Vietnamese people working in Japan are disadvantaged in money decisions because of language barriers or information gaps. I am first building trust as an educational media project, with the goal of growing it into a business over the next three years.",
      },
      {
        ja: "投資信託（S&P500やオールカントリーなど）や資産運用の基礎、NISAの考え方、給与明細の読み方、税金、国際送金、投資と投機の違いまで、生活に近いテーマを中心に発信しています。",
        vi: "Tôi chia sẻ các chủ đề gần với đời sống: quỹ đầu tư (S&P500, toàn cầu…), nền tảng quản lý tài sản, cách nghĩ về NISA, đọc phiếu lương, thuế, chuyển tiền quốc tế, khác nhau giữa đầu tư và đầu cơ.",
        en: "I cover practical topics such as mutual funds, asset-building basics, NISA, pay slips, taxes, international remittance, and the difference between investing and speculation.",
      },
    ] as const satisfies readonly Bi[],
  },
  sections: [
    {
      id: "mission",
      title: { ja: "ミッション", vi: "Sứ mệnh", en: "Mission" },
      kind: "paragraphs",
      paragraphsJa: [
        "在日ベトナムの方が、怪しい投資話に流されず、日本の制度や言葉を「怖いもの」ではなく「使える道具」として扱えるようにすること。個人向けの学びから始め、将来的には企業・学校・コミュニティの金融トラブル予防にも貢献します。",
      ],
      summaryVi:
        "Giúp người Việt ở Nhật tránh bị cuốn theo lời mời đầu tư mơ hồ. Biến chế độ và ngôn ngữ Nhật thành “công cụ dùng được” thay vì nỗi sợ. Tôi đồng hành như một người bạn, không áp đặt.",
      summaryEn:
        "Help Vietnamese residents in Japan avoid vague investment offers and turn Japanese systems and terms into practical tools instead of sources of fear.",
    },
    {
      id: "story",
      title: { ja: "なぜこの活動をしているか", vi: "Vì sao tôi làm việc này?", en: "Why I do this" },
      kind: "paragraphs",
      paragraphsJa: [
        "現場のSEとして論理的に考えることと、プロボクサーとして身体を守り切りにいくことには、共通点があります。それは「準備」と「距離感」です。お金の話も同じで、準備不足のまま距離が近すぎると、冷静さを失いやすくなります。",
        "コミュニティで助け合う文化は好きです。ただ、お金の判断まで感情だけに寄せてしまうと、傷つく人が出ます。だから学びの場では言葉を丁寧にし、確認できる導線（詐欺チェックなど）を先に置きたいと思っています。",
      ],
      summaryVi:
        "Từ kinh nghiệm kỹ sư (tư duy logic) và boxing (bảo vệ bản thân), tôi tin vào “chuẩn bị” và “khoảng cách hợp lý”. Chuyện tiền bạc cũng vậy: thiếu chuẩn bị + quá gần gũi dễ làm mất bình tĩnh. Tôi thích cộng đồng hỗ trợ nhau, nhưng nếu cảm xúc chi phối hết phần tiền, sẽ có người tổn thương — nên tôi đặt lời giải thích rõ ràng và lối “kiểm tra” lên trước.",
      summaryEn:
        "Engineering and boxing both taught me preparation and distance. Money decisions need the same: clear explanations first, then a way to pause and check before emotions take over.",
    },
    {
      id: "offer",
      title: { ja: "いまお手伝いできること", vi: "Hiện tôi có thể hỗ trợ gì?", en: "What I can help with now" },
      kind: "bullets",
      bulletsJa: [
        "noteを中心とした、基礎の整理と考え方の言語化",
        "LINE Botによる「詐欺チェック」（立ち止まるための質問と整理）",
        "初心者向けPDF教材（内容・販売形態は準備状況により更新）",
        "企業・学校・コミュニティ向けの勉強会や資料作成（段階的に整備予定）",
      ],
      summaryVi:
        "Tập trung note để diễn đạt lại kiến thức nền; bot LINE “kiểm tra lừa đảo” để bạn dừng lại và sắp xếp suy nghĩ; PDF cho người mới (cập nhật theo tiến độ); họp nhóm/cộng đồng đang dần xây dựng.",
      summaryEn:
        "I currently provide basic explanations through note, a LINE scam-check flow, beginner PDFs, and gradually prepared materials for communities and organizations.",
    },
    {
      id: "stance",
      title: { ja: "得意なこと / やらないこと", vi: "Tôi làm tốt / Tôi không làm", en: "What I do well / What I do not do" },
      kind: "cards",
      cards: [
        {
          title: { ja: "約束できる姿勢", vi: "Thái độ có thể cam kết", en: "Commitments I can make" },
          itemsJa: [
            "日本語とベトナム語の両方で説明できる",
            "生活に根ざしたテーマから入れる",
            "「すぐ儲かる」話より、再現性のある基礎と安全確認を優先",
          ],
          summaryVi:
            "Giải thích song ngữ; bắt đầu từ chủ đề gần đời sống; ưu tiên nền tảng bền vững hơn chuyện “làm giàu nhanh”.",
          summaryEn:
            "Bilingual explanations, practical daily-life topics, and steady basics before any quick-profit story.",
        },
        {
          title: { ja: "やらないこと", vi: "Tôi không làm", en: "What I do not do" },
          itemsJa: [
            "個別銘柄の推奨や、断定の投資助言",
            "教育・情報提供の範囲を越えた「代わりの判断」",
            "不安を煽って急かすこと",
          ],
          summaryVi:
            "Không khuyên mã cụ thể hay khẳng định mua/bán; không thay bạn quyết định ngoài phạm vi giáo dục; không gieo sợ hãi để giục bạn.",
          summaryEn:
            "No specific stock recommendations, no decisions made on your behalf, and no fear-based pressure.",
        },
      ],
    },
    {
      id: "fit",
      title: { ja: "向き合い方の目安", vi: "Gợi ý “có hợp nhau không”", en: "Who this is a good fit for" },
      kind: "cards",
      cards: [
        {
          title: { ja: "相性が良さそうな方", vi: "Có thể hợp với bạn nếu…", en: "This may fit you if..." },
          itemsJa: [
            "投資未経験〜初心者で、言葉から整えたい",
            "SNSで怪しい話を見かけて、迷いがち",
            "NISAや投資信託に興味はあるが、焦って決めたくない",
          ],
          summaryVi:
            "Mới tìm hiểu đầu tư, muốn bắt đầu từ từ vựng; hay thấy lời mời đáng ngờ trên mạng; quan tâm NISA/quỹ nhưng không muốn quyết vội.",
          summaryEn:
            "You are new to investing, want to start with basic words, often see suspicious offers online, or want to learn NISA without rushing.",
        },
        {
          title: { ja: "別の専門家向きのご希望", vi: "Nên tìm chuyên gia khác nếu…", en: "Another expert may be better if..." },
          itemsJa: [
            "短期で確実に利益を出す方法だけが知りたい",
            "個別銘柄の売買指示や、代わりの判断を求めたい",
            "無課金・無努力で結果だけ欲しい",
          ],
          summaryVi:
            "Chỉ muốn cách “chắc chắn lãi nhanh”; muốn người khác chỉ mã mua/bán hoặc quyết thay; muốn kết quả mà không học/chi phí.",
          summaryEn:
            "You only want guaranteed quick profit, direct buy/sell instructions, or results without learning or effort.",
        },
      ],
    },
    {
      id: "media",
      title: { ja: "発信・連絡・将来の事業化", vi: "Nội dung, liên hệ và hướng phát triển", en: "Publishing, contact, and future business plans" },
      kind: "paragraphs",
      paragraphsJa: [
        "メインはnoteとこのサイトです。今後はPDF教材、LINE導線、問い合わせ、勉強会、法人向け資料へ段階的に広げます。取材・協業・企業や学校からの相談はお問い合わせページからご連絡ください。",
      ],
      summaryVi:
        "Chủ yếu là note; đôi khi cập nhật trên trang bán hoặc mạng xã hội nhanh hơn.",
      summaryEn:
        "The main channels are note and this site. PDFs, LINE flows, inquiries, workshops, and organization-facing materials will expand step by step.",
    },
    {
      id: "closing",
      title: { ja: "最後にひとこと", vi: "Lời cuối", en: "Final note" },
      kind: "paragraphs",
      paragraphsJa: [
        "最後に責任を持つのは、いつもご本人です。その重さを軽く誤魔化さずに、できることから一緒に整えていきましょう。怪しい話に乗る前に、一度ここで立ち止まってください。",
      ],
      summaryVi:
        "Người chịu trách nhiệm cuối cùng luôn là bạn. Đừng coi thường điều đó — hãy cùng làm rõ từng phần nhỏ. Trước khi tin lời mời đáng ngờ, hãy dừng lại ở đây một lần.",
      summaryEn:
        "The final responsibility is always yours. Do not ignore that weight; pause here once before accepting a suspicious offer.",
    },
  ] as const satisfies readonly ProfileSection[],
} as const;
