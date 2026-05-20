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
      ja: "日本の制度、給与、税金、送金、NISA、投資の基礎を、やさしい日本語とベトナム語で整理します。迷っている人が次の行動を選べる導線を作ります。",
      vi: "Giải thích bằng Nhật-Việt dễ hiểu về制度 Nhật, lương, thuế, chuyển tiền, NISA và đầu tư. Trang giúp người đang phân vân chọn bước tiếp theo.",
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
  targetInsight: {
    kicker: "TARGET INSIGHT",
    heading: {
      ja: "誰の、どんな不安を解決するサービスなのか",
      vi: "Dịch vụ này giải quyết nỗi lo nào, cho ai?",
    } satisfies Bi,
    subtitle: {
      ja: "主な対象は、日本で働く・生活する20代後半〜40代前半のベトナム人。収入はあるが、日本語の制度・金融用語・詐欺リスクに不安が残る層です。",
      vi: "Đối tượng chính là người Việt khoảng cuối 20 đến đầu 40 tuổi đang làm việc và sống tại Nhật. Có thu nhập, nhưng vẫn lo về制度 Nhật, từ vựng tài chính và rủi ro lừa đảo.",
    } satisfies Bi,
    segments: [
      {
        label: { ja: "25〜34歳", vi: "25-34 tuổi" },
        title: { ja: "働き始め・生活を整えたい層", vi: "Người mới ổn định công việc và đời sống" },
        insight: {
          ja: "給与明細、税金、保険、送金、貯金を理解したいが、どこから学べばよいかわからない。",
          vi: "Muốn hiểu bảng lương, thuế, bảo hiểm, chuyển tiền và tiết kiệm, nhưng không biết bắt đầu từ đâu.",
        },
        need: {
          ja: "やさしい言葉で、生活に直結する順番に整理された教材と公式情報への導線が必要。",
          vi: "Cần tài liệu dễ hiểu và lộ trình đến nguồn chính thức theo thứ tự gần với đời sống.",
        },
      },
      {
        label: { ja: "30〜45歳", vi: "30-45 tuổi" },
        title: { ja: "家族・将来・資産形成を考え始める層", vi: "Người bắt đầu nghĩ về gia đình, tương lai và tích sản" },
        insight: {
          ja: "NISA、保険、教育費、帰国・定住などを考えたいが、失敗や詐欺への不安が強い。",
          vi: "Muốn nghĩ về NISA, bảo hiểm, chi phí giáo dục, về nước/định cư nhưng lo thất bại và lừa đảo.",
        },
        need: {
          ja: "売り込みではなく、判断材料・比較軸・リスク確認を先に示す中立的な学び場が必要。",
          vi: "Cần nơi học trung lập, không bán hàng, đưa ra tiêu chí so sánh và kiểm tra rủi ro trước.",
        },
      },
      {
        label: { ja: "緊急層", vi: "Nhóm khẩn cấp" },
        title: { ja: "投資話・紹介・送金を急がされている層", vi: "Người đang bị thúc ép đầu tư, giới thiệu hoặc chuyển tiền" },
        insight: {
          ja: "知人・SNS・同じコミュニティ経由の話ほど断りにくく、冷静な確認が遅れやすい。",
          vi: "Lời mời từ người quen, SNS hoặc cộng đồng càng khó từ chối, khiến việc kiểm tra bình tĩnh bị chậm.",
        },
        need: {
          ja: "送金・契約前に一度止まり、危険サインと公式確認先を短時間で整理する導線が必要。",
          vi: "Cần một lối dừng lại trước khi chuyển tiền/ký hợp đồng, để kiểm tra dấu hiệu nguy hiểm và nguồn chính thức.",
        },
      },
    ] as const,
    outcomes: [
      {
        title: { ja: "利用前", vi: "Trước khi sử dụng" },
        body: {
          ja: "日本語の制度説明が難しく、SNSや知人の話に流されやすい。",
          vi: "Khó hiểu giải thích制度 bằng tiếng Nhật và dễ bị cuốn theo SNS/người quen.",
        },
      },
      {
        title: { ja: "利用後", vi: "Sau khi sử dụng" },
        body: {
          ja: "まず確認する習慣ができ、公式情報・PDF・LINEチェックで判断を整理できる。",
          vi: "Có thói quen kiểm tra trước, biết dùng nguồn chính thức, PDF và LINE check để sắp xếp quyết định.",
        },
      },
      {
        title: { ja: "得られる価値", vi: "Giá trị nhận được" },
        body: {
          ja: "損失回避、言葉の理解、家計改善、将来設計、安心して相談できる入口。",
          vi: "Giảm rủi ro mất tiền, hiểu thuật ngữ, cải thiện chi tiêu, lập kế hoạch tương lai và có nơi hỏi an tâm.",
        },
      },
    ] as const,
    reason: {
      ja: "この層に必要なのは、難しい専門知識そのものよりも、日本語の制度をベトナム語の生活感覚に翻訳し、危ない話から距離を取るための判断順序です。",
      vi: "Điều nhóm này cần không chỉ là kiến thức chuyên môn khó, mà là thứ tự quyết định: chuyển制度 Nhật sang cảm giác đời sống bằng tiếng Việt và giữ khoảng cách với lời mời nguy hiểm.",
    } satisfies Bi,
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
          ja: "日本語の制度説明を、ベトナム語の感覚でも理解できるように再設計します。",
          vi: "Thiết kế lại cách giải thích để người Việt hiểu được trong bối cảnh Nhật.",
        },
      },
    ] as const,
  },
  quickChoice: {
    heading: {
      ja: "あなたはいま、どの状況ですか？",
      vi: "Bây giờ bạn đang ở tình huống nào?",
    } satisfies Bi,
    subtitle: {
      ja: "迷っている内容を選ぶと、記事・PDF・公式情報・LINEチェックの最短導線へ進めます。",
      vi: "Chọn tình huống của bạn để đi nhanh đến bài viết, PDF, nguồn chính thức hoặc LINE check.",
    } satisfies Bi,
    cards: [
      {
        tag: { ja: "SCAM", vi: "LỪA ĐẢO" },
        title: { ja: "怪しい投資話を見た", vi: "Tôi thấy lời mời đầu tư đáng ngờ" },
        body: {
          ja: "送金・契約の前に危険サインを確認し、必要ならLINEチェックへ進みます。",
          vi: "Trước khi chuyển tiền/ký hợp đồng, kiểm tra dấu hiệu nguy hiểm và đi đến LINE check nếu cần.",
        },
        href: "/scam-check",
        cta: { ja: "危険サインを確認", vi: "Kiểm tra dấu hiệu" },
      },
      {
        tag: { ja: "SALARY", vi: "LƯƠNG/THUẾ" },
        title: { ja: "給与・税金がわからない", vi: "Tôi không hiểu lương/thuế" },
        body: {
          ja: "給与明細、税金、社会保険を公式情報と記事から確認します。",
          vi: "Kiểm tra bảng lương, thuế và bảo hiểm xã hội qua bài viết và nguồn chính thức.",
        },
        href: "/articles/salary-tax-basics",
        cta: { ja: "給与・税金の記事へ", vi: "Đọc bài lương/thuế" },
      },
      {
        tag: { ja: "NISA", vi: "NISA" },
        title: { ja: "NISAを始めたい", vi: "Tôi muốn bắt đầu NISA" },
        body: {
          ja: "メリットだけでなく、投資リスクと金融庁の公式情報も確認します。",
          vi: "Không chỉ xem lợi ích, mà còn kiểm tra rủi ro đầu tư và nguồn chính thức FSA.",
        },
        href: "/articles/nisa-first-step",
        cta: { ja: "NISA導線へ", vi: "Đi đến NISA" },
      },
      {
        tag: { ja: "REMIT", vi: "CHUYỂN TIỀN" },
        title: { ja: "ベトナムへ送金したい", vi: "Tôi muốn gửi tiền về Việt Nam" },
        body: {
          ja: "手数料、為替、送金先、怪しい依頼を送金前に確認します。",
          vi: "Kiểm tra phí, tỷ giá, người nhận và lời nhờ đáng ngờ trước khi chuyển tiền.",
        },
        href: "/articles/remittance-checklist",
        cta: { ja: "送金前チェックへ", vi: "Checklist chuyển tiền" },
      },
      {
        tag: { ja: "PDF", vi: "PDF" },
        title: { ja: "PDFでまず学びたい", vi: "Tôi muốn học bằng PDF trước" },
        body: {
          ja: "家計、税金、NISA、詐欺予防などの無料PDFから自分のペースで学びます。",
          vi: "Học theo nhịp riêng qua PDF miễn phí về chi tiêu, thuế, NISA và phòng tránh lừa đảo.",
        },
        href: "/materials",
        cta: { ja: "無料PDFを見る", vi: "Xem PDF miễn phí" },
      },
      {
        tag: { ja: "B2B", vi: "TỔ CHỨC" },
        title: { ja: "会社・学校で使いたい", vi: "Muốn dùng cho công ty/trường học" },
        body: {
          ja: "ベトナム人向けの金融トラブル予防資料・勉強会の相談へ進みます。",
          vi: "Liên hệ về tài liệu/workshop phòng tránh rắc rối tài chính cho người Việt.",
        },
        href: "/contact",
        cta: { ja: "相談する", vi: "Liên hệ" },
      },
    ] as const,
  },
  pains: {
    heading: { ja: "リスクが高まりやすい状況", vi: "Những tình huống dễ tăng rủi ro" } satisfies Bi,
    subtitle: {
      ja: "該当するほど、送金・契約・紹介の前に確認する価値があります。",
      vi: "Càng trùng khớp, càng nên kiểm tra trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "SNSに「すぐ増える」話ばかり流れてくる", vi: "Trên SNS toàn thấy lời hứa tăng tiền nhanh" },
        body: {
          ja: "高い利回りや紹介報酬の話を見ると、つい気になってしまいます。",
          vi: "Khi thấy lãi cao hay hoa hồng giới thiệu, rất dễ bị lay động.",
        },
      },
      {
        title: { ja: "日本語の金融の言葉が壁になる", vi: "Từ vựng tài chính tiếng Nhật trở thành rào cản" },
        body: {
          ja: "NISAや税金に興味があっても、用語の時点で止まってしまいます。",
          vi: "Dù muốn hiểu NISA hay thuế, chỉ riêng thuật ngữ đã khiến bạn dừng lại.",
        },
      },
      {
        title: { ja: "本音で相談できる相手がいない", vi: "Không có ai để hỏi thật lòng về tiền bạc" },
        body: {
          ja: "身近な人に聞くほど、遠慮してしまうこともあります。",
          vi: "Càng hỏi người thân, đôi khi càng ngại nói hết suy nghĩ.",
        },
      },
    ] as const,
  },
  whatYouCan: {
    heading: { ja: "提供する4つの機能", vi: "4 chức năng chính" } satisfies Bi,
    subtitle: {
      ja: "守る・わかる・確認する・相談できる状態を作ります。",
      vi: "Giúp bạn tự bảo vệ, hiểu đúng, kiểm tra và có nơi hỏi.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "LINEで、怪しい話を短く整理する", vi: "Dùng LINE để sắp xếp lời mời đáng ngờ" },
        body: {
          ja: "送金や契約の前に、危険サインと次の行動を確認します。",
          vi: "Trước khi chuyển tiền/ký hợp đồng, kiểm tra dấu hiệu nguy hiểm và bước tiếp theo.",
        },
      },
      {
        title: { ja: "PDF教材で、日本のお金の基礎を学ぶ", vi: "Học nền tảng tiền bạc ở Nhật qua PDF" },
        body: {
          ja: "給与明細、税金、送金、NISAなど生活に近いテーマから整理します。",
          vi: "Bắt đầu từ phiếu lương, thuế, chuyển tiền, NISA và chủ đề gần đời sống.",
        },
      },
      {
        title: { ja: "記事と公式情報で判断材料を増やす", vi: "Tăng nguồn tham khảo qua bài viết và nguồn chính thức" },
        body: {
          ja: "制度・言葉・リスクを理解するための情報を積み上げます。",
          vi: "Tích lũy thông tin để hiểu制度, thuật ngữ và rủi ro.",
        },
      },
      {
        title: { ja: "相談・研修・法人支援へ広げる", vi: "Mở rộng sang tư vấn, workshop và hỗ trợ tổ chức" },
        body: {
          ja: "企業・学校・コミュニティ向けに金融トラブル予防の資料や勉強会へ広げます。",
          vi: "Mở rộng thành tài liệu và workshop phòng tránh rắc rối tài chính cho tổ chức.",
        },
      },
    ] as const,
  },
  learningPath: {
    heading: { ja: "Risk Control Flow", vi: "Quy trình kiểm soát rủi ro" } satisfies Bi,
    subtitle: {
      ja: "行動を急がせずに、「止まる、学ぶ、相談する」の順番を見える化します。",
      vi: "Không thúc ép hành động. Hãy đi theo thứ tự: dừng lại, học, rồi hỏi khi cần.",
    } satisfies Bi,
    steps: [
      {
        badge: "01",
        title: { ja: "まず止まる", vi: "Dừng lại trước" },
        body: {
          ja: "今だけ、秘密、紹介報酬などの言葉が出たら、送金や契約を急がない。",
          vi: "Nếu có “chỉ hôm nay”, “bí mật”, hoa hồng giới thiệu, đừng vội chuyển tiền/ký.",
        },
      },
      {
        badge: "02",
        title: { ja: "言葉を理解する", vi: "Hiểu thuật ngữ" },
        body: {
          ja: "給与、税金、送金、NISA、投資と投機などを生活に近いところから整理します。",
          vi: "Bắt đầu từ lương, thuế, chuyển tiền, NISA, đầu tư và đầu cơ.",
        },
      },
      {
        badge: "03",
        title: { ja: "必要なら相談する", vi: "Hỏi khi cần" },
        body: {
          ja: "契約・法律・税金の判断は専門家へ。サイトはその前の整理を手伝います。",
          vi: "Hợp đồng, pháp lý, thuế cần chuyên gia. Trang này giúp chuẩn bị trước.",
        },
      },
    ] as const,
  },
  scamPromo: {
    kicker: { ja: "送金や契約の前に", vi: "Trước khi chuyển tiền hoặc ký hợp đồng" } satisfies Bi,
    title: { ja: "LINEで、危ないサインをひと通り確認する", vi: "Dùng LINE để kiểm tra các dấu hiệu nguy hiểm" } satisfies Bi,
    subtitle: {
      ja: "正解を出す機械ではなく、「今は決めない」という選択肢も含めて整理します。",
      vi: "Không phải máy cho đáp án đúng, mà giúp bạn sắp xếp lại, kể cả lựa chọn chưa quyết định ngay.",
    } satisfies Bi,
    bullets: [
      { ja: "紹介報酬が大きいほど、なぜ冷静さが必要か", vi: "Vì sao cần bình tĩnh khi hoa hồng càng lớn?" },
      { ja: "「今だけ」「内緒」などの言葉への向き合い方", vi: "Cách đối diện với “chỉ hôm nay”, “bí mật”" },
    ] as const satisfies readonly Bi[],
    asideTitle: { ja: "補足", vi: "Lưu ý thêm" } satisfies Bi,
    asideBeforeLink: {
      ja: "チェックは万能ではありません。それでも、感情が高ぶっているときに一度止まることには役立ちます。詳しくは",
      vi: "Việc kiểm tra không đúng 100%, nhưng giúp bạn dừng lại khi đang xúc động. Chi tiết xem ",
    } satisfies Bi,
    asideAfterLink: { ja: "をご覧ください。", vi: "." } satisfies Bi,
    asideLinkLabel: { ja: "詐欺チェックのページ", vi: "trang kiểm tra lừa đảo" } satisfies Bi,
  },
  pdfPromo: {
    cardTitle: { ja: "PDFに含めたいテーマ（例）", vi: "Các chủ đề trong PDF (ví dụ)" } satisfies Bi,
    themes: [
      { ja: "日本で働くときのお金の全体像", vi: "Bức tranh tổng thể về tiền bạc khi làm việc tại Nhật" },
      { ja: "投資と投機の違い", vi: "Khác nhau giữa đầu tư và đầu cơ" },
      { ja: "NISAの考え方", vi: "Cách hiểu về NISA" },
      { ja: "税金・国際送金など生活に近い入口", vi: "Thuế, chuyển tiền quốc tế và chủ đề gần đời sống" },
    ] as const satisfies readonly Bi[],
    footnote: {
      ja: "※ 章立てや形式は準備状況で変わる場合があります。",
      vi: "※ Cấu trúc và hình thức có thể thay đổi tùy tiến độ.",
    } satisfies Bi,
    kicker: { ja: "自分のペースで読む", vi: "Đọc theo nhịp của riêng bạn" } satisfies Bi,
    title: { ja: "はじめての方向けPDF教材", vi: "PDF cho người mới bắt đầu" } satisfies Bi,
    subtitle: {
      ja: "「何から読めばいいかわからない」を減らすためのまとめです。",
      vi: "Tài liệu giúp bạn bớt bối rối không biết bắt đầu từ đâu.",
    } satisfies Bi,
    purchaseNote: { ja: "内容は教材ページで確認できます（", vi: "Bạn có thể xem nội dung tại trang tài liệu (" } satisfies Bi,
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
      vi: "Kết hợp tư duy kỹ sư, cảm giác khoảng cách của võ sĩ và năng lực song ngữ Nhật-Việt để hỗ trợ học tiền bạc và phòng tránh lừa đảo.",
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
