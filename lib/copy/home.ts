import type { Bi } from "@/lib/copy/types";

export const homeCopy = {
  hero: {
    trustLine: {
      ja: "金融商品の販売ではなく、学び・詐欺予防・判断材料の整理を行います。",
      vi: "Không bán sản phẩm tài chính; tập trung vào học tập, phòng tránh lừa đảo và sắp xếp thông tin.",
      en: "No financial product sales; this site focuses on learning, scam prevention, and organizing decision points.",
    } satisfies Bi,
    title: {
      ja: "在日ベトナム人のための金融リテラシー・リスクチェック基盤。",
      vi: "Nền tảng kiến thức tài chính và kiểm tra rủi ro cho người Việt tại Nhật.",
      en: "Financial literacy and risk-check guidance for Vietnamese residents in Japan.",
    } satisfies Bi,
    lead: {
      ja: "日本の制度、給与、税金、送金、NISA、投資の基礎を、やさしい日本語とベトナム語で整理します。迷っている人が次の行動を選べる導線を作ります。",
      vi: "Giải thích bằng Nhật-Việt dễ hiểu về制度 Nhật, lương, thuế, chuyển tiền, NISA và đầu tư. Trang giúp người đang phân vân chọn bước tiếp theo.",
      en: "We explain Japanese systems, salary, taxes, remittance, NISA, and investment basics in simple language so unsure users can choose their next step.",
    } satisfies Bi,
    cardRole: {
      ja: "Financial Education Navigator\n学びとリスク確認を案内",
      vi: "Financial Education Navigator\nđịnh hướng học tập và kiểm tra rủi ro",
      en: "Financial Education Navigator\nguiding learning and risk checks",
    } satisfies Bi,
    trustPoints: [
      { ja: "SE視点", vi: "Tư duy kỹ sư", en: "Engineer mindset" },
      { ja: "プロボクサーの距離感", vi: "Khoảng cách võ sĩ", en: "Boxer's distance sense" },
      { ja: "日越バイリンガル", vi: "Song ngữ Nhật-Việt", en: "JP/VN bilingual" },
      { ja: "在日コミュニティ理解", vi: "Hiểu cộng đồng tại Nhật", en: "Japan community insight" },
    ] as const satisfies readonly Bi[],
  },
  trustRibbon: {
    items: [
      {
        label: { ja: "日越併記", vi: "Song ngữ Nhật-Việt", en: "Multilingual support" },
        body: {
          ja: "重要な説明はベトナム語でも補足し、日本語だけで不安にならない設計にします。",
          vi: "Nội dung quan trọng có tiếng Việt để bạn không bị cô đơn vì tiếng Nhật.",
          en: "Important explanations are supported in multiple languages so users are not left alone with Japanese-only information.",
        },
      },
      {
        label: { ja: "安全確認が先", vi: "An toàn trước", en: "Safety first" },
        body: {
          ja: "送金・契約・紹介の前に、危険サインを落ち着いて確認します。",
          vi: "Trước khi chuyển tiền, ký hợp đồng hay giới thiệu, hãy kiểm tra dấu hiệu nguy hiểm.",
          en: "Before sending money, signing, or introducing others, check the warning signs calmly.",
        },
      },
      {
        label: { ja: "売り込みより教育", vi: "Giáo dục hơn bán hàng", en: "Education over sales" },
        body: {
          ja: "金融商品の販売ではなく、自分で判断するための材料を整理します。",
          vi: "Không bán sản phẩm tài chính; sắp xếp thông tin để bạn tự quyết định.",
          en: "We do not sell financial products. We organize information so users can make their own decisions.",
        },
      },
    ] as const,
  },
  targetInsight: {
    kicker: "TARGET INSIGHT",
    heading: {
      ja: "誰の、どんな不安を解決するサービスなのか",
      vi: "Dịch vụ này giải quyết nỗi lo nào, cho ai?",
      en: "Who this service helps, and what concerns it solves",
    } satisfies Bi,
    subtitle: {
      ja: "主な対象は、日本で働く・生活する20代後半〜40代前半のベトナム人。収入はあるが、日本語の制度・金融用語・詐欺リスクに不安が残る層です。",
      vi: "Đối tượng chính là người Việt khoảng cuối 20 đến đầu 40 tuổi đang làm việc và sống tại Nhật. Có thu nhập, nhưng vẫn lo về制度 Nhật, từ vựng tài chính và rủi ro lừa đảo.",
      en: "The primary audience is Vietnamese residents in Japan, mainly from their late 20s to early 40s. They have income, but still feel unsure about Japanese systems, financial terms, and scam risks.",
    } satisfies Bi,
    segments: [
      {
        label: { ja: "25〜34歳", vi: "25-34 tuổi", en: "Ages 25-34" },
        title: { ja: "働き始め・生活を整えたい層", vi: "Người mới ổn định công việc và đời sống", en: "People starting to stabilize work and daily life" },
        insight: {
          ja: "給与明細、税金、保険、送金、貯金を理解したいが、どこから学べばよいかわからない。",
          vi: "Muốn hiểu bảng lương, thuế, bảo hiểm, chuyển tiền và tiết kiệm, nhưng không biết bắt đầu từ đâu.",
          en: "They want to understand pay slips, taxes, insurance, remittances, and savings, but do not know where to begin.",
        },
        need: {
          ja: "やさしい言葉で、生活に直結する順番に整理された教材と公式情報への導線が必要。",
          vi: "Cần tài liệu dễ hiểu và lộ trình đến nguồn chính thức theo thứ tự gần với đời sống.",
          en: "They need simple materials organized in a practical order, with clear routes to official information.",
        },
      },
      {
        label: { ja: "30〜45歳", vi: "30-45 tuổi", en: "Ages 30-45" },
        title: { ja: "家族・将来・資産形成を考え始める層", vi: "Người bắt đầu nghĩ về gia đình, tương lai và tích sản", en: "People thinking about family, the future, and building assets" },
        insight: {
          ja: "NISA、保険、教育費、帰国・定住などを考えたいが、失敗や詐欺への不安が強い。",
          vi: "Muốn nghĩ về NISA, bảo hiểm, chi phí giáo dục, về nước/định cư nhưng lo thất bại và lừa đảo.",
          en: "They want to consider NISA, insurance, education costs, returning home, or settling in Japan, but fear mistakes and scams.",
        },
        need: {
          ja: "売り込みではなく、判断材料・比較軸・リスク確認を先に示す中立的な学び場が必要。",
          vi: "Cần nơi học trung lập, không bán hàng, đưa ra tiêu chí so sánh và kiểm tra rủi ro trước.",
          en: "They need a neutral learning space that shows decision points, comparison criteria, and risk checks before any sales pitch.",
        },
      },
      {
        label: { ja: "緊急層", vi: "Nhóm khẩn cấp", en: "Urgent cases" },
        title: { ja: "投資話・紹介・送金を急がされている層", vi: "Người đang bị thúc ép đầu tư, giới thiệu hoặc chuyển tiền", en: "People being rushed to invest, invite others, or send money" },
        insight: {
          ja: "知人・SNS・同じコミュニティ経由の話ほど断りにくく、冷静な確認が遅れやすい。",
          vi: "Lời mời từ người quen, SNS hoặc cộng đồng càng khó từ chối, khiến việc kiểm tra bình tĩnh bị chậm.",
          en: "Offers from acquaintances, social media, or the same community can be harder to refuse, making calm checks more likely to be delayed.",
        },
        need: {
          ja: "送金・契約前に一度止まり、危険サインと公式確認先を短時間で整理する導線が必要。",
          vi: "Cần một lối dừng lại trước khi chuyển tiền/ký hợp đồng, để kiểm tra dấu hiệu nguy hiểm và nguồn chính thức.",
          en: "They need a way to pause before sending money or signing, then quickly review warning signs and official sources.",
        },
      },
    ] as const,
    outcomes: [
      {
        title: { ja: "利用前", vi: "Trước khi sử dụng", en: "Before using it" },
        body: {
          ja: "日本語の制度説明が難しく、SNSや知人の話に流されやすい。",
          vi: "Khó hiểu giải thích制度 bằng tiếng Nhật và dễ bị cuốn theo SNS/người quen.",
          en: "Japanese explanations of systems feel difficult, and it is easy to be influenced by social media or acquaintances.",
        },
      },
      {
        title: { ja: "利用後", vi: "Sau khi sử dụng", en: "After using it" },
        body: {
          ja: "まず確認する習慣ができ、公式情報・PDF・LINEチェックで判断を整理できる。",
          vi: "Có thói quen kiểm tra trước, biết dùng nguồn chính thức, PDF và LINE check để sắp xếp quyết định.",
          en: "Users build the habit of checking first and can organize decisions with official sources, PDFs, and LINE checks.",
        },
      },
      {
        title: { ja: "得られる価値", vi: "Giá trị nhận được", en: "Value gained" },
        body: {
          ja: "損失回避、言葉の理解、家計改善、将来設計、安心して相談できる入口。",
          vi: "Giảm rủi ro mất tiền, hiểu thuật ngữ, cải thiện chi tiêu, lập kế hoạch tương lai và có nơi hỏi an tâm.",
          en: "Lower loss risk, better understanding of terms, improved household finances, future planning, and a safer place to ask questions.",
        },
      },
    ] as const,
    reason: {
      ja: "この層に必要なのは、難しい専門知識そのものよりも、日本語の制度をベトナム語の生活感覚に翻訳し、危ない話から距離を取るための判断順序です。",
      vi: "Điều nhóm này cần không chỉ là kiến thức chuyên môn khó, mà là thứ tự quyết định: chuyển制度 Nhật sang cảm giác đời sống bằng tiếng Việt và giữ khoảng cách với lời mời nguy hiểm.",
      en: "What this audience needs is not just technical knowledge. They need Japanese systems translated into everyday context, plus a clear order for stepping back from risky offers.",
    } satisfies Bi,
  },
  founderEdge: {
    kicker: "FOUNDER EDGE",
    heading: {
      ja: "このサイトが、ただの情報まとめで終わらない理由",
      vi: "Vì sao đây không chỉ là trang tổng hợp thông tin",
      en: "Why this site is more than a collection of information",
    } satisfies Bi,
    subtitle: {
      ja: "SE、プロボクサー、日越バイリンガル発信者。この3つを掛け合わせて、在日ベトナム人のお金の不安を構造化します。",
      vi: "Kết hợp kỹ sư, võ sĩ chuyên nghiệp và người truyền đạt song ngữ Nhật-Việt để cấu trúc lại nỗi lo về tiền bạc của người Việt tại Nhật.",
      en: "It combines a software engineer mindset, professional boxing discipline, and multilingual communication to structure money concerns for Vietnamese residents in Japan.",
    } satisfies Bi,
    edges: [
      {
        code: "SYSTEM",
        title: { ja: "SEとして、複雑な制度を分解する", vi: "Tư duy kỹ sư: chia nhỏ hệ thống phức tạp", en: "As a software engineer, break complex systems into steps" },
        body: {
          ja: "給与、税金、送金、NISA、契約条件を、順番に確認できる形へ整理します。",
          vi: "Sắp xếp lương, thuế, chuyển tiền, NISA và điều kiện hợp đồng thành các bước dễ kiểm tra.",
          en: "Salary, taxes, remittances, NISA, and contract terms are organized into steps users can check in order.",
        },
      },
      {
        code: "RISK",
        title: { ja: "プロボクサーとして、危険な距離感を読む", vi: "Tư duy võ sĩ: đọc khoảng cách rủi ro", en: "As a professional boxer, read risky distance" },
        body: {
          ja: "急かす言葉、紹介圧力、感情を動かす勧誘を、いったん距離を取るサインとして扱います。",
          vi: "Nhìn lời thúc ép, áp lực giới thiệu và mời gọi cảm xúc như tín hiệu cần giữ khoảng cách.",
          en: "Rushed wording, referral pressure, and emotional sales tactics are treated as signs to step back first.",
        },
      },
      {
        code: "BRIDGE",
        title: { ja: "日越の言葉と文化の間をつなぐ", vi: "Kết nối ngôn ngữ và văn hóa Nhật-Việt", en: "Bridge language and culture across Japan and Vietnam" },
        body: {
          ja: "日本語の制度説明を、ベトナム語の感覚でも理解できるように再設計します。",
          vi: "Thiết kế lại cách giải thích để người Việt hiểu được trong bối cảnh Nhật.",
          en: "Japanese system explanations are redesigned so Vietnamese readers can understand them in a real-life context.",
        },
      },
    ] as const,
  },
  quickChoice: {
    heading: {
      ja: "あなたはいま、どの状況ですか？",
      vi: "Bây giờ bạn đang ở tình huống nào?",
      en: "Which situation are you in right now?",
    } satisfies Bi,
    subtitle: {
      ja: "迷っている内容を選ぶと、記事・PDF・公式情報・LINEチェックの最短導線へ進めます。",
      vi: "Chọn tình huống của bạn để đi nhanh đến bài viết, PDF, nguồn chính thức hoặc LINE check.",
      en: "Choose your situation to get the shortest route to an article, PDF, official source, or LINE check.",
    } satisfies Bi,
    cards: [
      {
        tag: { ja: "SCAM", vi: "LỪA ĐẢO", en: "SCAM" },
        title: { ja: "怪しい投資話を見た", vi: "Tôi thấy lời mời đầu tư đáng ngờ", en: "I saw a suspicious investment offer" },
        body: {
          ja: "送金・契約の前に危険サインを確認し、必要ならLINEチェックへ進みます。",
          vi: "Trước khi chuyển tiền/ký hợp đồng, kiểm tra dấu hiệu nguy hiểm và đi đến LINE check nếu cần.",
          en: "Before sending money or signing, check the warning signs and use the LINE check if needed.",
        },
        href: "/scam-check",
        cta: { ja: "危険サインを確認", vi: "Kiểm tra dấu hiệu", en: "Check warning signs" },
      },
      {
        tag: { ja: "SALARY", vi: "LƯƠNG/THUẾ", en: "SALARY/TAX" },
        title: { ja: "給与・税金がわからない", vi: "Tôi không hiểu lương/thuế", en: "I do not understand salary or taxes" },
        body: {
          ja: "給与明細、税金、社会保険を公式情報と記事から確認します。",
          vi: "Kiểm tra bảng lương, thuế và bảo hiểm xã hội qua bài viết và nguồn chính thức.",
          en: "Check pay slips, taxes, and social insurance through articles and official sources.",
        },
        href: "/articles/salary-tax-basics",
        cta: { ja: "給与・税金の記事へ", vi: "Đọc bài lương/thuế", en: "Read salary/tax article" },
      },
      {
        tag: { ja: "NISA", vi: "NISA", en: "NISA" },
        title: { ja: "NISAを始めたい", vi: "Tôi muốn bắt đầu NISA", en: "I want to start NISA" },
        body: {
          ja: "メリットだけでなく、投資リスクと金融庁の公式情報も確認します。",
          vi: "Không chỉ xem lợi ích, mà còn kiểm tra rủi ro đầu tư và nguồn chính thức FSA.",
          en: "Review not only the benefits, but also investment risks and official FSA information.",
        },
        href: "/articles/nisa-first-step",
        cta: { ja: "NISA導線へ", vi: "Đi đến NISA", en: "Go to NISA guide" },
      },
      {
        tag: { ja: "REMIT", vi: "CHUYỂN TIỀN", en: "REMITTANCE" },
        title: { ja: "ベトナムへ送金したい", vi: "Tôi muốn gửi tiền về Việt Nam", en: "I want to send money to Vietnam" },
        body: {
          ja: "手数料、為替、送金先、怪しい依頼を送金前に確認します。",
          vi: "Kiểm tra phí, tỷ giá, người nhận và lời nhờ đáng ngờ trước khi chuyển tiền.",
          en: "Check fees, exchange rates, recipients, and suspicious requests before sending money.",
        },
        href: "/articles/remittance-checklist",
        cta: { ja: "送金前チェックへ", vi: "Checklist chuyển tiền", en: "Remittance checklist" },
      },
      {
        tag: { ja: "PDF", vi: "PDF", en: "PDF" },
        title: { ja: "PDFでまず学びたい", vi: "Tôi muốn học bằng PDF trước", en: "I want to learn with PDFs first" },
        body: {
          ja: "家計、税金、NISA、詐欺予防などの無料PDFから自分のペースで学びます。",
          vi: "Học theo nhịp riêng qua PDF miễn phí về chi tiêu, thuế, NISA và phòng tránh lừa đảo.",
          en: "Learn at your own pace with free PDFs on budgeting, taxes, NISA, and scam prevention.",
        },
        href: "/materials",
        cta: { ja: "無料PDFを見る", vi: "Xem PDF miễn phí", en: "View free PDFs" },
      },
      {
        tag: { ja: "B2B", vi: "TỔ CHỨC", en: "ORGANIZATION" },
        title: { ja: "会社・学校で使いたい", vi: "Muốn dùng cho công ty/trường học", en: "I want to use this at a company or school" },
        body: {
          ja: "ベトナム人向けの金融トラブル予防資料・勉強会の相談へ進みます。",
          vi: "Liên hệ về tài liệu/workshop phòng tránh rắc rối tài chính cho người Việt.",
          en: "Ask about materials or workshops for preventing financial trouble among Vietnamese communities.",
        },
        href: "/contact",
        cta: { ja: "相談する", vi: "Liên hệ", en: "Contact us" },
      },
    ] as const,
  },
  pains: {
    heading: { ja: "リスクが高まりやすい状況", vi: "Những tình huống dễ tăng rủi ro", en: "Situations where risk tends to rise" } satisfies Bi,
    subtitle: {
      ja: "該当するほど、送金・契約・紹介の前に確認する価値があります。",
      vi: "Càng trùng khớp, càng nên kiểm tra trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu.",
      en: "The more these apply, the more valuable it is to check before sending money, signing, or introducing others.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "SNSに「すぐ増える」話ばかり流れてくる", vi: "Trên SNS toàn thấy lời hứa tăng tiền nhanh", en: "Social media is full of quick-profit offers" },
        body: {
          ja: "高い利回りや紹介報酬の話を見ると、つい気になってしまいます。",
          vi: "Khi thấy lãi cao hay hoa hồng giới thiệu, rất dễ bị lay động.",
          en: "High returns and referral rewards can easily make you curious.",
        },
      },
      {
        title: { ja: "日本語の金融の言葉が壁になる", vi: "Từ vựng tài chính tiếng Nhật trở thành rào cản", en: "Japanese financial terms become a barrier" },
        body: {
          ja: "NISAや税金に興味があっても、用語の時点で止まってしまいます。",
          vi: "Dù muốn hiểu NISA hay thuế, chỉ riêng thuật ngữ đã khiến bạn dừng lại.",
          en: "Even if you want to learn about NISA or taxes, the terms alone can stop you.",
        },
      },
      {
        title: { ja: "本音で相談できる相手がいない", vi: "Không có ai để hỏi thật lòng về tiền bạc", en: "There is no one you can ask honestly about money" },
        body: {
          ja: "身近な人に聞くほど、遠慮してしまうこともあります。",
          vi: "Càng hỏi người thân, đôi khi càng ngại nói hết suy nghĩ.",
          en: "The closer someone is, the harder it can be to speak openly.",
        },
      },
    ] as const,
  },
  whatYouCan: {
    heading: { ja: "提供する4つの機能", vi: "4 chức năng chính", en: "Four things this site provides" } satisfies Bi,
    subtitle: {
      ja: "守る・わかる・確認する・相談できる状態を作ります。",
      vi: "Giúp bạn tự bảo vệ, hiểu đúng, kiểm tra và có nơi hỏi.",
      en: "It helps you protect yourself, understand, verify, and know where to ask.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "LINEで、怪しい話を短く整理する", vi: "Dùng LINE để sắp xếp lời mời đáng ngờ", en: "Use LINE to sort out suspicious offers briefly" },
        body: {
          ja: "送金や契約の前に、危険サインと次の行動を確認します。",
          vi: "Trước khi chuyển tiền/ký hợp đồng, kiểm tra dấu hiệu nguy hiểm và bước tiếp theo.",
          en: "Before sending money or signing, check warning signs and next actions.",
        },
      },
      {
        title: { ja: "PDF教材で、日本のお金の基礎を学ぶ", vi: "Học nền tảng tiền bạc ở Nhật qua PDF", en: "Learn Japanese money basics through PDFs" },
        body: {
          ja: "給与明細、税金、送金、NISAなど生活に近いテーマから整理します。",
          vi: "Bắt đầu từ phiếu lương, thuế, chuyển tiền, NISA và chủ đề gần đời sống.",
          en: "Start with practical topics such as pay slips, taxes, remittance, and NISA.",
        },
      },
      {
        title: { ja: "記事と公式情報で判断材料を増やす", vi: "Tăng nguồn tham khảo qua bài viết và nguồn chính thức", en: "Build decision material through articles and official sources" },
        body: {
          ja: "制度・言葉・リスクを理解するための情報を積み上げます。",
          vi: "Tích lũy thông tin để hiểu制度, thuật ngữ và rủi ro.",
          en: "Build up information to understand systems, terms, and risks.",
        },
      },
      {
        title: { ja: "相談・研修・法人支援へ広げる", vi: "Mở rộng sang tư vấn, workshop và hỗ trợ tổ chức", en: "Expand into consultation, workshops, and organizational support" },
        body: {
          ja: "企業・学校・コミュニティ向けに金融トラブル予防の資料や勉強会へ広げます。",
          vi: "Mở rộng thành tài liệu và workshop phòng tránh rắc rối tài chính cho tổ chức.",
          en: "Expand into materials and workshops for companies, schools, and communities.",
        },
      },
    ] as const,
  },
  learningPath: {
    heading: { ja: "Risk Control Flow", vi: "Quy trình kiểm soát rủi ro", en: "Risk Control Flow" } satisfies Bi,
    subtitle: {
      ja: "行動を急がせずに、「止まる、学ぶ、相談する」の順番を見える化します。",
      vi: "Không thúc ép hành động. Hãy đi theo thứ tự: dừng lại, học, rồi hỏi khi cần.",
      en: "Instead of rushing action, it makes the order visible: pause, learn, then ask when needed.",
    } satisfies Bi,
    steps: [
      {
        badge: "01",
        title: { ja: "まず止まる", vi: "Dừng lại trước", en: "Pause first" },
        body: {
          ja: "今だけ、秘密、紹介報酬などの言葉が出たら、送金や契約を急がない。",
          vi: "Nếu có “chỉ hôm nay”, “bí mật”, hoa hồng giới thiệu, đừng vội chuyển tiền/ký.",
          en: "If you hear words like only today, secret, or referral reward, do not rush payment or signing.",
        },
      },
      {
        badge: "02",
        title: { ja: "言葉を理解する", vi: "Hiểu thuật ngữ", en: "Understand the terms" },
        body: {
          ja: "給与、税金、送金、NISA、投資と投機などを生活に近いところから整理します。",
          vi: "Bắt đầu từ lương, thuế, chuyển tiền, NISA, đầu tư và đầu cơ.",
          en: "Start from practical topics such as salary, taxes, remittance, NISA, investing, and speculation.",
        },
      },
      {
        badge: "03",
        title: { ja: "必要なら相談する", vi: "Hỏi khi cần", en: "Ask when needed" },
        body: {
          ja: "契約・法律・税金の判断は専門家へ。サイトはその前の整理を手伝います。",
          vi: "Hợp đồng, pháp lý, thuế cần chuyên gia. Trang này giúp chuẩn bị trước.",
          en: "Contracts, legal matters, and taxes need professionals. This site helps you organize things before that.",
        },
      },
    ] as const,
  },
  scamPromo: {
    kicker: { ja: "送金や契約の前に", vi: "Trước khi chuyển tiền hoặc ký hợp đồng", en: "Before sending money or signing" } satisfies Bi,
    title: { ja: "LINEで、危ないサインをひと通り確認する", vi: "Dùng LINE để kiểm tra các dấu hiệu nguy hiểm", en: "Use LINE to check warning signs once" } satisfies Bi,
    subtitle: {
      ja: "正解を出す機械ではなく、「今は決めない」という選択肢も含めて整理します。",
      vi: "Không phải máy cho đáp án đúng, mà giúp bạn sắp xếp lại, kể cả lựa chọn chưa quyết định ngay.",
      en: "It is not a machine that gives the correct answer. It helps you organize options, including not deciding right now.",
    } satisfies Bi,
    bullets: [
      { ja: "紹介報酬が大きいほど、なぜ冷静さが必要か", vi: "Vì sao cần bình tĩnh khi hoa hồng càng lớn?", en: "Why bigger referral rewards require more calm" },
      { ja: "「今だけ」「内緒」などの言葉への向き合い方", vi: "Cách đối diện với “chỉ hôm nay”, “bí mật”", en: "How to respond to words like only now or keep it secret" },
    ] as const satisfies readonly Bi[],
    asideTitle: { ja: "補足", vi: "Lưu ý thêm", en: "Note" } satisfies Bi,
    asideBeforeLink: {
      ja: "チェックは万能ではありません。それでも、感情が高ぶっているときに一度止まることには役立ちます。詳しくは",
      vi: "Việc kiểm tra không đúng 100%, nhưng giúp bạn dừng lại khi đang xúc động. Chi tiết xem ",
      en: "This check is not perfect, but it can help you pause when emotions are high. For details, see the ",
    } satisfies Bi,
    asideAfterLink: { ja: "をご覧ください。", vi: ".", en: "." } satisfies Bi,
    asideLinkLabel: { ja: "詐欺チェックのページ", vi: "trang kiểm tra lừa đảo", en: "scam check page" } satisfies Bi,
  },
  pdfPromo: {
    cardTitle: { ja: "PDFに含めたいテーマ（例）", vi: "Các chủ đề trong PDF (ví dụ)", en: "Topics planned for PDFs" } satisfies Bi,
    themes: [
      { ja: "日本で働くときのお金の全体像", vi: "Bức tranh tổng thể về tiền bạc khi làm việc tại Nhật", en: "The overall picture of money when working in Japan" },
      { ja: "投資と投機の違い", vi: "Khác nhau giữa đầu tư và đầu cơ", en: "The difference between investing and speculation" },
      { ja: "NISAの考え方", vi: "Cách hiểu về NISA", en: "How to think about NISA" },
      { ja: "税金・国際送金など生活に近い入口", vi: "Thuế, chuyển tiền quốc tế và chủ đề gần đời sống", en: "Practical entry points such as taxes and international remittance" },
    ] as const satisfies readonly Bi[],
    footnote: {
      ja: "※ 章立てや形式は準備状況で変わる場合があります。",
      vi: "※ Cấu trúc và hình thức có thể thay đổi tùy tiến độ.",
      en: "Sections and format may change depending on preparation progress.",
    } satisfies Bi,
    kicker: { ja: "自分のペースで読む", vi: "Đọc theo nhịp của riêng bạn", en: "Read at your own pace" } satisfies Bi,
    title: { ja: "はじめての方向けPDF教材", vi: "PDF cho người mới bắt đầu", en: "PDF materials for beginners" } satisfies Bi,
    subtitle: {
      ja: "「何から読めばいいかわからない」を減らすためのまとめです。",
      vi: "Tài liệu giúp bạn bớt bối rối không biết bắt đầu từ đâu.",
      en: "Materials designed to reduce the feeling of not knowing where to start.",
    } satisfies Bi,
    purchaseNote: { ja: "内容は教材ページで確認できます（", vi: "Bạn có thể xem nội dung tại trang tài liệu (", en: "You can check the contents on the materials page (" } satisfies Bi,
    disclaimerLink: { ja: "免責事項", vi: "miễn trừ trách nhiệm", en: "disclaimer" } satisfies Bi,
    afterDisclaimer: { ja: "）。", vi: ").", en: ")." } satisfies Bi,
  },
  operator: {
    heading: {
      ja: "Vu Minh Ducだから作れる金融教育ブランドへ",
      vi: "Xây dựng thương hiệu giáo dục tài chính chỉ Vu Minh Duc mới có thể làm",
      en: "Toward a financial education brand only Vu Minh Duc can build",
    } satisfies Bi,
    body: {
      ja: "SEとして制度や条件を構造化し、プロボクサーとして危ない距離感を読み、日越バイリンガルとして言葉の壁を越える。この組み合わせを、お金の学びと詐欺予防に活かします。",
      vi: "Kết hợp tư duy kỹ sư, cảm giác khoảng cách của võ sĩ và năng lực song ngữ Nhật-Việt để hỗ trợ học tiền bạc và phòng tránh lừa đảo.",
      en: "I combine software engineering structure, a boxer's sense of distance, and multilingual communication to support money learning and scam prevention.",
    } satisfies Bi,
  },
  faqSection: {
    heading: { ja: "よくあるご質問", vi: "Câu hỏi thường gặp", en: "Frequently asked questions" } satisfies Bi,
    subtitle: {
      ja: "不安があるのは自然です。無理に進まなくて大丈夫です。",
      vi: "Lo lắng là điều bình thường. Bạn không cần vội bước tiếp.",
      en: "It is natural to feel uncertain. You do not need to rush forward.",
    } satisfies Bi,
  },
} as const;

export const homeBrandCopy = {
  hero: {
    badge: {
      ja: "在日ベトナム人向けの金融教育サイト",
      vi: "Trang học tiền bạc cho người Việt tại Nhật",
      en: "Financial education for Vietnamese residents in Japan",
    } satisfies Bi,
    title: {
      ja: "日本で働くベトナム人のための、お金と詐欺予防の学び場",
      vi: "Nơi học về tiền bạc và phòng tránh lừa đảo cho người Việt làm việc tại Nhật",
      en: "A learning hub for money, investing, and scam prevention in Japan",
    } satisfies Bi,
    lead: {
      ja: "給与・税金・NISA・送金・保険・投資の基本を、やさしい日本語とベトナム語で整理します。金融商品の販売ではなく、自分で判断するための知識と安全確認をサポートします。",
      vi: "Sắp xếp kiến thức cơ bản về lương, thuế, NISA, chuyển tiền, bảo hiểm và đầu tư bằng Nhật-Việt dễ hiểu. Không bán sản phẩm tài chính; trang này hỗ trợ bạn tự kiểm tra và tự quyết định.",
      en: "Simple guidance on salary, taxes, remittances, NISA, investing, and scam prevention for life in Japan.",
    } satisfies Bi,
    lineCta: {
      ja: "LINEで無料チェックする",
      vi: "Kiểm tra miễn phí trên LINE",
      en: "Free LINE check",
    } satisfies Bi,
    pdfCta: {
      ja: "無料PDFで学ぶ",
      vi: "Tài liệu PDF miễn phí",
      en: "Free PDF materials",
    } satisfies Bi,
    profileCta: {
      ja: "プロフィールを見る",
      vi: "Xem hồ sơ",
      en: "View profile",
    } satisfies Bi,
    note: {
      ja: "金融商品の販売ではなく、教育・詐欺予防・公式情報確認を目的にしています。",
      vi: "Không bán sản phẩm tài chính. Trang này ưu tiên giáo dục, phòng tránh lừa đảo và kiểm tra nguồn chính thức.",
      en: "Education only. No product sales or guaranteed returns.",
    } satisfies Bi,
    focusHeading: {
      ja: "まず確認できる5つのテーマ",
      vi: "5 chủ đề có thể kiểm tra trước",
      en: "Five topics to check first",
    } satisfies Bi,
    focusItems: [
      { icon: "budget", label: { ja: "給与・生活費", vi: "Lương / chi phí", en: "Salary and living costs" } },
      { icon: "tax", label: { ja: "税金・制度", vi: "Thuế / chế độ", en: "Taxes and systems" } },
      { icon: "bank", label: { ja: "送金", vi: "Chuyển tiền", en: "Remittance" } },
      { icon: "investment", label: { ja: "NISA・投資", vi: "NISA / đầu tư", en: "NISA and investing" } },
      { icon: "scam", label: { ja: "詐欺予防", vi: "Tránh lừa đảo", en: "Scam prevention" } },
    ] as const,
    pauseTitle: {
      ja: "迷ったら、送金・契約の前に止まる。",
      vi: "Nếu phân vân, hãy dừng trước khi chuyển tiền hoặc ký.",
      en: "If unsure, pause before payment or signing.",
    } satisfies Bi,
    pauseBody: {
      ja: "LINEチェック、PDF、公式情報の順で確認できます。",
      vi: "Có thể kiểm tra qua LINE, PDF và nguồn chính thức.",
      en: "Use the LINE check, PDFs, and official sources.",
    } satisfies Bi,
    stats: [
      { label: { ja: "対応言語", vi: "Ngôn ngữ", en: "Languages" }, value: "JP / VN / EN" },
      { label: { ja: "教材", vi: "Tài liệu", en: "Materials" }, value: "PDF" },
    ] as const,
  },
  services: {
    heading: {
      ja: "このサイトでできること",
      vi: "Bạn có thể làm gì trên trang này",
      en: "What this site helps you do",
    } satisfies Bi,
    subtitle: {
      ja: "金融教育・詐欺予防・学習コミュニティの3つに絞って、安心して確認できる入口を作ります。",
      vi: "Tập trung vào giáo dục tài chính, phòng tránh lừa đảo và học tập cộng đồng.",
      en: "Focused on financial education, scam prevention, and community learning.",
    } satisfies Bi,
    items: [
      {
        icon: "investment",
        label: "SERVICE 01",
        title: { ja: "Financial Education", vi: "Giáo dục tài chính", en: "Financial Education" },
        body: {
          ja: "給与明細、税金、社会保険、NISA、家計管理、送金などを、生活に近い言葉でやさしく解説します。",
          vi: "Giải thích dễ hiểu về phiếu lương, thuế, bảo hiểm xã hội, NISA, quản lý chi tiêu và chuyển tiền.",
          en: "Simple explanations of pay slips, taxes, social insurance, NISA, budgeting, and remittances.",
        },
      },
      {
        icon: "scam",
        label: "SERVICE 02",
        title: { ja: "Scam & Risk Check", vi: "Kiểm tra rủi ro lừa đảo", en: "Scam & Risk Check" },
        body: {
          ja: "SNS、知人紹介、投資話、送金依頼などで迷ったときに、危険サインを一度整理します。",
          vi: "Khi phân vân về SNS, lời giới thiệu, lời mời đầu tư hoặc yêu cầu chuyển tiền, hãy kiểm tra dấu hiệu nguy hiểm.",
          en: "Check warning signs around social media, referrals, investment offers, and remittance requests.",
        },
      },
      {
        icon: "family",
        label: "SERVICE 03",
        title: { ja: "Community & Learning", vi: "Cộng đồng và học tập", en: "Community & Learning" },
        body: {
          ja: "無料PDF、記事、LINE確認を入口に、今後の勉強会やコミュニティ学習につなげます。",
          vi: "Bắt đầu từ PDF miễn phí, bài viết và LINE check, sau đó kết nối đến học nhóm và cộng đồng.",
          en: "Start with free PDFs, articles, and LINE checks, then connect to future workshops and community learning.",
        },
      },
    ] as const,
  },
  scamCta: {
    kicker: { ja: "LINE CHECK", vi: "KIỂM TRA LINE", en: "LINE CHECK" } satisfies Bi,
    title: {
      ja: "怪しい話を受けたら、送金・契約の前に一度チェック",
      vi: "Nếu nhận lời mời đáng ngờ, hãy kiểm tra trước khi chuyển tiền hoặc ký",
      en: "If something feels suspicious, check before sending money or signing",
    } satisfies Bi,
    subtitle: {
      ja: "投資、送金、紹介ビジネス、保険、NISAなどで迷ったときに、まず確認できる入口です。",
      vi: "Khi phân vân về đầu tư, chuyển tiền, giới thiệu kinh doanh, bảo hiểm hoặc NISA, đây là nơi để kiểm tra trước.",
      en: "A first checkpoint when you are unsure about investing, remittances, referrals, insurance, or NISA.",
    } satisfies Bi,
    bullets: [
      { ja: "SNSで投資話を見た", vi: "Thấy lời mời đầu tư trên SNS", en: "You saw an investment offer on social media" },
      { ja: "知人から紹介された", vi: "Được người quen giới thiệu", en: "Someone you know introduced it" },
      { ja: "送金や契約を急がされている", vi: "Bị thúc chuyển tiền hoặc ký hợp đồng", en: "You are being rushed to send money or sign" },
    ] as const,
    lineCta: { ja: "LINEで確認する", vi: "Kiểm tra trên LINE", en: "Check on LINE" } satisfies Bi,
    flowCta: { ja: "流れを見る", vi: "Xem cách kiểm tra", en: "View the flow" } satisfies Bi,
    asideTitle: {
      ja: "急がされる話ほど、一度止まる",
      vi: "Càng bị thúc giục, càng cần dừng lại",
      en: "The more rushed it feels, the more you should pause",
    } satisfies Bi,
    asideBody: {
      ja: "チェックは正解を断定するものではありません。危険サイン、足りない情報、公式情報や専門家に確認すべき点を整理します。",
      vi: "Việc kiểm tra không khẳng định đúng sai. Nó giúp bạn sắp xếp dấu hiệu nguy hiểm, thông tin còn thiếu và điểm cần hỏi nguồn chính thức hoặc chuyên gia.",
      en: "The check does not decide what is correct. It organizes warning signs, missing information, and points to verify with official sources or professionals.",
    } satisfies Bi,
    pageLink: { ja: "詐欺チェックのページ", vi: "trang kiểm tra lừa đảo", en: "scam check page" } satisfies Bi,
  },
  pdfGuide: {
    kicker: { ja: "FREE PDF", vi: "PDF MIỄN PHÍ", en: "FREE PDF" } satisfies Bi,
    title: {
      ja: "日本で損しないお金の基本ガイド",
      vi: "Guide cơ bản để không bị thiệt về tiền khi sống ở Nhật",
      en: "A basic money guide for life in Japan",
    } satisfies Bi,
    subtitle: {
      ja: "日本 お金 勉強 ベトナム人、給与明細 税金 社会保険、NISA ベトナム人 日本、詐欺予防 日本 ベトナム人に関心がある方の入口です。",
      vi: "Dành cho người Việt muốn học về tiền bạc, phiếu lương, thuế, bảo hiểm xã hội, NISA và phòng tránh lừa đảo ở Nhật.",
      en: "For Vietnamese residents learning about money, pay slips, taxes, social insurance, NISA, and scam prevention in Japan.",
    } satisfies Bi,
    cardTitle: {
      ja: "ガイドで確認できる内容",
      vi: "Nội dung có thể kiểm tra trong guide",
      en: "Topics in the guide",
    } satisfies Bi,
    themes: [
      { icon: "budget", title: { ja: "給与明細の見方", vi: "Cách đọc phiếu lương", en: "How to read a pay slip" } },
      { icon: "tax", title: { ja: "税金・社会保険の基本", vi: "Thuế và bảo hiểm xã hội cơ bản", en: "Taxes and social insurance basics" } },
      { icon: "investment", title: { ja: "NISAの注意点", vi: "Điểm cần chú ý về NISA", en: "NISA points to check" } },
      { icon: "bank", title: { ja: "送金前チェック", vi: "Kiểm tra trước khi chuyển tiền", en: "Before remitting money" } },
      { icon: "scam", title: { ja: "怪しい投資話の見分け方", vi: "Cách nhận biết lời mời đầu tư đáng ngờ", en: "How to spot suspicious offers" } },
    ] as const,
    cta: { ja: "無料PDFを見る", vi: "Xem PDF miễn phí", en: "View free PDFs" } satisfies Bi,
    note: {
      ja: "※ 教育・情報提供を目的とした資料です。個別判断は公式情報や専門家にも確認してください。",
      vi: "※ Tài liệu chỉ nhằm mục đích giáo dục và cung cấp thông tin. Hãy kiểm tra thêm nguồn chính thức hoặc chuyên gia khi cần.",
      en: "Educational information only. Check official sources or professionals when needed.",
    } satisfies Bi,
  },
  founder: {
    heading: { ja: "Vu Minh Ducのストーリー", vi: "Câu chuyện của Vu Minh Duc", en: "Founder Story" } satisfies Bi,
    body: {
      ja: "ベトナム出身、日本在住。ITエンジニアとして働きながら、金融・FPの知識を学び、プロボクサーとしても挑戦を続けています。",
      vi: "Sinh ra ở Việt Nam, hiện sống tại Nhật. Vừa làm kỹ sư IT, vừa học kiến thức tài chính/FP và tiếp tục thử thách với boxing chuyên nghiệp.",
      en: "Born in Vietnam and living in Japan. Working as an IT engineer while learning financial planning and continuing as a professional boxer.",
    } satisfies Bi,
    reason: {
      ja: "自分自身も、日本の制度・言葉・お金の難しさを経験してきました。だからこそ、在日ベトナム人が損をしないための学び場を作りたいと考えています。",
      vi: "Bản thân tôi cũng từng thấy khó với chế độ, ngôn ngữ và chuyện tiền bạc ở Nhật. Vì vậy tôi muốn tạo nơi học để người Việt tại Nhật không bị thiệt.",
      en: "I have also experienced the difficulty of Japanese systems, language, and money matters. That is why I want to build a learning place for Vietnamese residents in Japan.",
    } satisfies Bi,
  },
  boxing: {
    kicker: "Founder Story",
    title: {
      ja: "リングで学んだ、距離感・継続力・冷静な判断",
      vi: "Điều học được trên võ đài: khoảng cách, kiên trì và bình tĩnh",
      en: "Distance, persistence, and calm judgment learned in the ring",
    } satisfies Bi,
    body: {
      ja: "プロボクシングで学んだのは、焦らず距離を取り、相手を見る力です。お金や投資の判断も同じで、急がされる話ほど一度立ち止まることが大切です。",
      vi: "Boxing chuyên nghiệp giúp tôi học cách giữ khoảng cách, quan sát và không vội. Quyết định về tiền bạc và đầu tư cũng vậy: càng bị thúc giục, càng cần dừng lại.",
      en: "Professional boxing taught me to keep distance, observe, and stay calm. Money and investment decisions are similar: the more rushed an offer feels, the more important it is to pause.",
    } satisfies Bi,
  },
} as const;
