import type { Bi } from "@/lib/copy/types";

export const homeCopy = {
  hero: {
    trustLine: {
      ja: "金融商品の販売ではなく、学び・詐欺予防・判断材料の整理を行います。",
      vi: "Không bán sản phẩm tài chính; tập trung vào học tập, phòng tránh lừa đảo và sắp xếp thông tin.",
    } satisfies Bi,
    title: {
      ja: "在日ベトナム人のための金融リテラシー・リスクチェック基盤。",
      vi: "Nền tảng kiến thức tài chính và kiểm tra rủi ro cho người Việt tại Nhật.",
    } satisfies Bi,
    lead: {
      ja: "日本の制度、給与、税金、送金、NISA、投資の基礎を、やさしい日本語とベトナム語で整理します。怪しい話に急いで乗らないための入口として、LINEチェックやPDF教材も用意します。",
      vi: "Giải thích bằng Nhật-Việt dễ hiểu về chế độ ở Nhật, lương, thuế, chuyển tiền, NISA và nền tảng đầu tư. LINE check và PDF giúp bạn không vội tin lời mời đáng ngờ.",
    } satisfies Bi,
    cardRole: {
      ja: "Financial Education Navigator\n学びとリスク確認を案内",
      vi: "Financial Education Navigator\nđịnh hướng học tập và kiểm tra rủi ro",
    } satisfies Bi,
    trustPoints: [
      { ja: "SE視点", vi: "Tư duy kỹ sư" },
      { ja: "プロボクサーの距離感", vi: "Khoảng cách võ sĩ" },
      { ja: "日越バイリンガル", vi: "Song ngữ Nhật-Việt" },
      { ja: "在日コミュニティ理解", vi: "Hiểu cộng đồng tại Nhật" },
    ] as const satisfies readonly Bi[],
  },
  trustRibbon: {
    items: [
      {
        label: { ja: "日越併記", vi: "Song ngữ Nhật-Việt" },
        body: {
          ja: "重要な説明はベトナム語でも補足し、日本語だけで不安にならない設計にします。",
          vi: "Nội dung quan trọng có tiếng Việt để bạn không bị cô đơn vì tiếng Nhật.",
        },
      },
      {
        label: { ja: "安全確認が先", vi: "An toàn trước" },
        body: {
          ja: "送金・契約・紹介の前に、危険サインを落ち着いて確認します。",
          vi: "Trước khi chuyển tiền, ký hợp đồng hay giới thiệu, hãy kiểm tra dấu hiệu nguy hiểm.",
        },
      },
      {
        label: { ja: "売り込みより教育", vi: "Giáo dục hơn bán hàng" },
        body: {
          ja: "金融商品の販売ではなく、自分で判断するための材料を整理します。",
          vi: "Không bán sản phẩm tài chính; sắp xếp thông tin để bạn tự quyết định.",
        },
      },
    ] as const,
  },
  founderEdge: {
    kicker: "FOUNDER EDGE",
    heading: {
      ja: "このサイトが、ただの情報まとめで終わらない理由",
      vi: "Vì sao đây không chỉ là trang tổng hợp thông tin",
    } satisfies Bi,
    subtitle: {
      ja: "SE、プロボクサー、日越バイリンガル発信者。この3つを掛け合わせて、在日ベトナム人のお金の不安を構造化します。",
      vi: "Kết hợp kỹ sư, võ sĩ chuyên nghiệp và người truyền đạt song ngữ Nhật-Việt để cấu trúc lại nỗi lo về tiền bạc của người Việt tại Nhật.",
    } satisfies Bi,
    edges: [
      {
        code: "SYSTEM",
        title: { ja: "SEとして、複雑な制度を分解する", vi: "Tư duy kỹ sư: chia nhỏ hệ thống phức tạp" },
        body: {
          ja: "給与、税金、送金、NISA、契約条件を、順番に確認できる形へ整理します。",
          vi: "Sắp xếp lương, thuế, chuyển tiền, NISA và điều kiện hợp đồng thành các bước dễ kiểm tra.",
        },
      },
      {
        code: "RISK",
        title: { ja: "プロボクサーとして、危険な距離感を読む", vi: "Tư duy võ sĩ: đọc khoảng cách rủi ro" },
        body: {
          ja: "急かす言葉、紹介圧力、感情を動かす勧誘を、いったん距離を取るサインとして扱います。",
          vi: "Nhìn lời thúc ép, áp lực giới thiệu và mời gọi cảm xúc như tín hiệu cần giữ khoảng cách.",
        },
      },
      {
        code: "BRIDGE",
        title: { ja: "日越の言葉と文化の間をつなぐ", vi: "Kết nối ngôn ngữ và văn hóa Nhật-Việt" },
        body: {
          ja: "日本語の制度説明を、ベトナム語の感覚でも理解できるように翻訳ではなく再設計します。",
          vi: "Không chỉ dịch, mà thiết kế lại cách giải thích để người Việt hiểu được trong bối cảnh Nhật.",
        },
      },
    ] as const,
  },
  quickChoice: {
    heading: {
      ja: "Action Center",
      vi: "Trung tâm hành động",
    } satisfies Bi,
    subtitle: {
      ja: "緊急度と目的に合わせて、最短の導線から進めます。",
      vi: "Chọn lối đi ngắn nhất theo mức độ khẩn cấp và mục đích của bạn.",
    } satisfies Bi,
    cards: [
      {
        tag: { ja: "RISK CHECK", vi: "KIỂM TRA" },
        title: { ja: "送金・契約前の確認", vi: "Kiểm tra trước khi chuyển tiền/ký" },
        body: {
          ja: "送金・契約・紹介の前に、まずLINEで危険サインを整理します。",
          vi: "Trước khi chuyển tiền/ký hợp đồng/giới thiệu, hãy kiểm tra dấu hiệu nguy hiểm trên LINE.",
        },
        href: "/scam-check",
        cta: { ja: "リスクを確認", vi: "Kiểm tra rủi ro" },
      },
      {
        tag: { ja: "LEARN", vi: "HỌC" },
        title: { ja: "生活金融の基礎学習", vi: "Học nền tảng tài chính đời sống" },
        body: {
          ja: "給与・税金・送金・NISAなど、生活に近い言葉から整理します。",
          vi: "Bắt đầu từ lương, thuế, chuyển tiền, NISA và các thuật ngữ gần đời sống.",
        },
        href: "#learning-path-heading",
        cta: { ja: "学習導線へ", vi: "Xem lộ trình" },
      },
      {
        tag: { ja: "BUSINESS", vi: "TỔ CHỨC" },
        title: { ja: "取材・協業・法人相談", vi: "Phỏng vấn, hợp tác, tổ chức" },
        body: {
          ja: "企業・学校・団体向けの資料や勉強会の相談窓口です。",
          vi: "Lối liên hệ cho tài liệu/workshop dành cho công ty, trường học, tổ chức.",
        },
        href: "/contact",
        cta: { ja: "窓口へ進む", vi: "Liên hệ" },
      },
    ] as const,
  },
  pains: {
    heading: {
      ja: "リスクが高まりやすい状況",
      vi: "Những tình huống dễ tăng rủi ro",
    } satisfies Bi,
    subtitle: {
      ja: "該当するほど、送金・契約・紹介の前に確認する価値があります。",
      vi: "Càng trùng khớp, càng nên kiểm tra trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu.",
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
      ja: "提供する4つの機能",
      vi: "4 chức năng chính",
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
  learningPath: {
    heading: {
      ja: "Risk Control Flow",
      vi: "Quy trình kiểm soát rủi ro",
    } satisfies Bi,
    subtitle: {
      ja: "行動を急がせずに、「止まる、学ぶ、相談する」の順番を見える化します。",
      vi: "Không thúc ép hành động. Hãy đi theo thứ tự: dừng lại, học, rồi hỏi khi cần.",
    } satisfies Bi,
    steps: [
      {
        badge: "01",
        title: { ja: "まず止まる", vi: "Dừng lại trước" },
        body: {
          ja: "今だけ、秘密、紹介報酬などの言葉が出たら、送金や契約を急がずLINEチェックへ。",
          vi: "Nếu có “chỉ hôm nay”, “bí mật”, hoa hồng giới thiệu, đừng vội chuyển tiền/ký hợp đồng.",
        },
      },
      {
        badge: "02",
        title: { ja: "言葉を理解する", vi: "Hiểu thuật ngữ" },
        body: {
          ja: "給与、税金、送金、NISA、投資と投機など、生活に近いところから整理します。",
          vi: "Bắt đầu từ lương, thuế, chuyển tiền, NISA, đầu tư và đầu cơ.",
        },
      },
      {
        badge: "03",
        title: { ja: "必要なら相談する", vi: "Hỏi khi cần" },
        body: {
          ja: "契約・法律・税金の判断は専門家へ。サイトはその前の整理を手伝います。",
          vi: "Hợp đồng, pháp lý, thuế cần chuyên gia. Trang này giúp bạn chuẩn bị trước.",
        },
      },
    ] as const,
  },
  scamPromo: {
    kicker: { ja: "送金や契約の前に", vi: "Trước khi chuyển tiền hoặc ký hợp đồng" } satisfies Bi,
    title: {
      ja: "LINEで、危ないサインをひと通り確認する",
      vi: "Dùng LINE để đi qua các “dấu hiệu nguy hiểm” một lượt",
    } satisfies Bi,
    subtitle: {
      ja: "だいたい3分ほどのイメージです。正解を出す機械ではなく、「今は決めない」という選択肢も含めて整理します。",
      vi: "Khoảng 3 phút là đủ để hình dung. Đây không phải máy cho “đáp án đúng”, mà giúp bạn sắp xếp lại — kể cả lựa chọn “chưa quyết định ngay”.",
    } satisfies Bi,
    bullets: [
      { ja: "紹介報酬が大きいほど、なぜ冷静さが必要か", vi: "Vì sao cần bình tĩnh khi hoa hồng giới thiệu càng lớn?" },
      { ja: "「今だけ」「内緒」などの言葉への向き合い方", vi: "Cách đối diện với những từ kiểu “chỉ hôm nay”, “bí mật”…" },
    ] as const satisfies readonly Bi[],
    asideTitle: { ja: "補足", vi: "Lưu ý thêm" } satisfies Bi,
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
    title: { ja: "はじめての方向けPDF教材", vi: "PDF cho người mới bắt đầu" } satisfies Bi,
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
      ja: "Vu Minh Ducだから作れる金融教育ブランドへ",
      vi: "Xây dựng thương hiệu giáo dục tài chính chỉ Vu Minh Duc mới có thể làm",
    } satisfies Bi,
    body: {
      ja: "SEとして制度や条件を構造化し、プロボクサーとして危ない距離感を読み、日越バイリンガルとして言葉の壁を越える。この組み合わせを、お金の学びと詐欺予防に活かします。",
      vi: "Kết hợp tư duy kỹ sư để cấu trúc điều kiện, cảm giác khoảng cách của võ sĩ để đọc rủi ro, và năng lực song ngữ Nhật-Việt để vượt rào cản ngôn ngữ.",
    } satisfies Bi,
  },
  faqSection: {
    heading: { ja: "よくあるご質問", vi: "Câu hỏi thường gặp" } satisfies Bi,
    subtitle: {
      ja: "不安があるのは自然です。無理に進まなくて大丈夫です。",
      vi: "Lo lắng là điều bình thường. Bạn không cần vội bước tiếp.",
    } satisfies Bi,
  },
} as const;
