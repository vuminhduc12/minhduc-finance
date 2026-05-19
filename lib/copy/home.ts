import type { Bi } from "@/lib/copy/types";

export const homeCopy = {
  hero: {
    trustLine: {
      ja: "金融商品の販売ではなく、学び・詐欺予防・判断材料の整理を行います。",
      vi: "Không bán sản phẩm tài chính; tập trung vào học tập, phòng tránh lừa đảo và sắp xếp thông tin.",
    } satisfies Bi,
    title: {
      ja: "在日ベトナム人のためのお金と詐欺予防の学び場。",
      vi: "Nơi học về tiền bạc và phòng tránh lừa đảo cho người Việt tại Nhật.",
    } satisfies Bi,
    lead: {
      ja: "日本の制度、給与、税金、送金、NISA、投資の基礎を、やさしい日本語とベトナム語で整理します。怪しい話に急いで乗らないための入口として、LINEチェックやPDF教材も用意します。",
      vi: "Giải thích bằng Nhật-Việt dễ hiểu về chế độ ở Nhật, lương, thuế, chuyển tiền, NISA và nền tảng đầu tư. LINE check và PDF giúp bạn không vội tin lời mời đáng ngờ.",
    } satisfies Bi,
    cardRole: {
      ja: "Founder / Financial education writer\n日本語とベトナム語で発信",
      vi: "Founder / Người viết giáo dục tài chính\nĐăng nội dung bằng Nhật-Việt",
    } satisfies Bi,
    trustPoints: [
      { ja: "日越併記", vi: "Song ngữ Nhật-Việt" },
      { ja: "教育目的", vi: "Mục đích giáo dục" },
      { ja: "詐欺予防", vi: "Phòng tránh lừa đảo" },
      { ja: "専門家判断は代行しない", vi: "Không thay chuyên gia phán đoán" },
    ] as const satisfies readonly Bi[],
  },
  pains: {
    heading: {
      ja: "こんなこと、心当たりはありますか？",
      vi: "Bạn có thấy quen những tình huống này không?",
    } satisfies Bi,
    subtitle: {
      ja: "だからダメ、という話ではありません。多くの人が通る道です。",
      vi: "Không phải vì thế là “bạn sai”. Rất nhiều người cũng từng như vậy.",
    } satisfies Bi,
    items: [
      {
        title: {
          ja: "SNSに「すぐ増える」話ばかり流れてくる",
          vi: "Trên mạng xã hội toàn thấy lời hứa “tăng nhanh, dễ kiếm tiền”",
        },
        body: {
          ja: "FacebookやZaloで、高い利回りや紹介報酬の話を見ると、つい気になってしまいますよね。",
          vi: "Trên Facebook hay Zalo, khi thấy lãi suất cao hay tiền hoa hồng giới thiệu, lòng mình dễ bị lay động.",
        },
      },
      {
        title: {
          ja: "日本語の金融の言葉が壁になる",
          vi: "Từ vựng tài chính tiếng Nhật trở thành “bức tường”",
        },
        body: {
          ja: "NISAや投資信託に興味があっても、用語の時点で止まってしまう。それは自然なことです。",
          vi: "Dù bạn muốn tìm hiểu NISA hay quỹ đầu tư, chỉ riêng thuật ngữ đã khiến bạn dừng lại. Điều đó rất bình thường.",
        },
      },
      {
        title: {
          ja: "本音で相談できる相手がいない",
          vi: "Không có ai để trò chuyện thật lòng về chuyện tiền bạc",
        },
        body: {
          ja: "身近な人に聞くほど、遠慮してしまうこともあります。",
          vi: "Càng hỏi người thân, đôi khi bạn càng ngại nói hết suy nghĩ của mình.",
        },
      },
    ] as const,
  },
  whatYouCan: {
    heading: {
      ja: "事業として育てていく4つの入口",
      vi: "4 lối vào để phát triển thành dịch vụ bền vững",
    } satisfies Bi,
    subtitle: {
      ja: "まずは守る・わかる・相談できる状態を作り、将来的に教材・研修・法人支援へ広げます。",
      vi: "Bắt đầu từ bảo vệ bản thân, hiểu đúng và có nơi hỏi; sau đó mở rộng sang tài liệu, workshop và hỗ trợ tổ chức.",
    } satisfies Bi,
    items: [
      {
        title: {
          ja: "LINEで、怪しい話を短く整理する",
          vi: "Dùng LINE để sắp xếp nhanh lời mời đáng ngờ",
        },
        body: {
          ja: "送金や契約の前に、危険サインと次の行動を確認します。判定ではなく、一度止まるための導線です。",
          vi: "Trước khi chuyển tiền hay ký hợp đồng, kiểm tra dấu hiệu nguy hiểm và bước tiếp theo. Đây là lối dừng lại, không phải phán quyết.",
        },
      },
      {
        title: {
          ja: "PDF教材で、日本のお金の基礎を学ぶ",
          vi: "Học nền tảng tiền bạc ở Nhật qua PDF",
        },
        body: {
          ja: "給与明細、税金、国際送金、投資と投機の違いなど、生活に近いテーマから整理します。",
          vi: "Bắt đầu từ chủ đề gần đời sống: phiếu lương, thuế, chuyển tiền, khác nhau giữa đầu tư và đầu cơ.",
        },
      },
      {
        title: {
          ja: "記事とFAQで、信頼できる判断材料を増やす",
          vi: "Tăng nguồn tham khảo đáng tin qua bài viết và FAQ",
        },
        body: {
          ja: "断定的な儲け話ではなく、制度・言葉・リスクを理解するための情報を積み上げます。",
          vi: "Không hứa hẹn làm giàu; tích lũy thông tin để hiểu chế độ, thuật ngữ và rủi ro.",
        },
      },
      {
        title: {
          ja: "相談・研修・法人支援へ広げる",
          vi: "Mở rộng sang tư vấn, workshop và hỗ trợ tổ chức",
        },
        body: {
          ja: "将来的には企業・学校・コミュニティ向けに、金融トラブル予防の資料や勉強会を提供できる形へ育てます。",
          vi: "Tương lai có thể cung cấp tài liệu và buổi học phòng tránh rắc rối tài chính cho công ty, trường học và cộng đồng.",
        },
      },
    ] as const,
  },
  scamPromo: {
    kicker: {
      ja: "送金や契約の前に",
      vi: "Trước khi chuyển tiền hoặc ký hợp đồng",
    } satisfies Bi,
    title: {
      ja: "LINEで、危ないサインをひと通り確認する",
      vi: "Dùng LINE để đi qua các “dấu hiệu nguy hiểm” một lượt",
    } satisfies Bi,
    subtitle: {
      ja: "だいたい3分ほどのイメージです。正解を出す機械ではなく、「今は決めない」という選択肢も含めて整理します。",
      vi: "Khoảng 3 phút là đủ để hình dung. Đây không phải máy cho “đáp án đúng”, mà giúp bạn sắp xếp lại — kể cả lựa chọn “chưa quyết định ngay”.",
    } satisfies Bi,
    bullets: [
      {
        ja: "紹介報酬が大きいほど、なぜ冷静さが必要か",
        vi: "Vì sao cần bình tĩnh khi hoa hồng giới thiệu càng lớn?",
      },
      {
        ja: "「今だけ」「内緒」などの言葉への向き合い方",
        vi: "Cách đối diện với những từ kiểu “chỉ hôm nay”, “bí mật”…",
      },
    ] as const satisfies readonly Bi[],
    asideTitle: { ja: "補足", vi: "Lưu ý thêm" } satisfies Bi,
    /** リンク直前まで（「詳しくは」まで含む） */
    asideBeforeLink: {
      ja: "チェックは万能ではありません。それでも、感情が高ぶっているときに一度止まることには役立ちます。詳しくは",
      vi: "Việc kiểm tra không phải lúc nào cũng đúng 100%. Nhưng nó vẫn giúp bạn “dừng lại một nhịp” khi đang quá xúc động. Chi tiết xem ",
    } satisfies Bi,
    asideAfterLink: { ja: "をご覧ください。", vi: "." } satisfies Bi,
    asideLinkLabel: { ja: "詐欺チェックのページ", vi: "trang kiểm tra lừa đảo" } satisfies Bi,
  },
  pdfPromo: {
    cardTitle: { ja: "PDFに含めたいテーマ（例）", vi: "Các chủ đề dự kiến trong PDF (ví dụ)" } satisfies Bi,
    themes: [
      { ja: "日本で働くときのお金の全体像", vi: "Bức tranh tổng thể về tiền bạc khi làm việc tại Nhật" },
      { ja: "投資と投機の違い（生活に近い例）", vi: "Khác nhau giữa đầu tư và đầu cơ (ví dụ gần với đời sống)" },
      { ja: "NISAの考え方（制度のイメージ）", vi: "Cách hiểu về NISA (hình dung chung về chế độ)" },
      { ja: "税金・国際送金など、生活に近い入口", vi: "Thuế, chuyển tiền quốc tế… các chỗ bắt đầu gần với đời sống" },
    ] as const satisfies readonly Bi[],
    footnote: {
      ja: "※ 章立てや販売形式は準備状況で変わる場合があります。",
      vi: "※ Cấu trúc chương và hình thức bán có thể thay đổi tùy tiến độ chuẩn bị.",
    } satisfies Bi,
    kicker: { ja: "自分のペースで読む", vi: "Đọc theo nhịp của riêng bạn" } satisfies Bi,
    title: {
      ja: "はじめての方向けPDF教材",
      vi: "PDF cho người mới bắt đầu",
    } satisfies Bi,
    subtitle: {
      ja: "「何から読めばいいかわからない」を減らすためのまとめです。読みやすさを優先し、無理な勧誘はしません。",
      vi: "Tài liệu giúp bạn bớt bối rối “không biết bắt đầu từ đâu”. Ưu tiên dễ đọc, không ép buộc mua.",
    } satisfies Bi,
    purchaseNote: {
      ja: "購入は外部ページへ移動します。内容・価格は販売ページの記載をご確認ください（",
      vi: "Khi mua, bạn sẽ chuyển sang trang bên ngoài. Nội dung và giá cả xin xem đúng theo trang bán (",
    } satisfies Bi,
    disclaimerLink: { ja: "免責事項", vi: "miễn trừ trách nhiệm" } satisfies Bi,
    afterDisclaimer: { ja: "）。", vi: ")." } satisfies Bi,
  },
  operator: {
    heading: {
      ja: "この活動を、信頼できる事業へ育てていくために",
      vi: "Để phát triển hoạt động này thành một dịch vụ đáng tin",
    } satisfies Bi,
    body: {
      ja: "Vu Minh Duc。SEとしての整理力と、プロボクサーとしての準備・距離感を、お金の学びと詐欺予防に活かします。まずは教育メディアとして信頼を作り、将来的に相談・研修・法人向け支援へ広げる計画です。",
      vi: "Vu Minh Duc. Kết hợp khả năng sắp xếp của kỹ sư với sự chuẩn bị và khoảng cách hợp lý từ boxing để hỗ trợ học tiền bạc và phòng tránh lừa đảo. Trước hết xây dựng niềm tin như một media giáo dục, sau đó mở rộng sang tư vấn, workshop và hỗ trợ tổ chức.",
    } satisfies Bi,
  },
  faqSection: {
    heading: {
      ja: "よくあるご質問",
      vi: "Câu hỏi thường gặp",
    } satisfies Bi,
    subtitle: {
      ja: "不安があるのは自然です。無理に進まなくて大丈夫です。",
      vi: "Lo lắng là điều bình thường. Bạn không cần vội bước tiếp.",
    } satisfies Bi,
  },
} as const;
