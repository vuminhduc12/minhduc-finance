import type { Bi } from "@/lib/copy/types";

export const scamCheckCopy = {
  pageIntro: {
    ja: "送金・契約・紹介の前に、LINEで危険サインを短く整理できます（無料）。",
    vi: "Trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu người khác, bạn có thể kiểm tra dấu hiệu nguy hiểm trên LINE (miễn phí).",
    en: "Before sending money, signing a contract, or introducing someone else, use LINE to quickly sort out the warning signs for free.",
  } satisfies Bi,
  hero: {
    eyebrow: { ja: "LINE · 詐欺チェック", vi: "LINE · Kiểm tra lừa đảo", en: "LINE · Scam check" } satisfies Bi,
    title: {
      ja: "「今すぐ決めて」と言われたら、送金や契約の前に3分だけ。",
      vi: "Nếu ai đó nói “quyết ngay bây giờ”, hãy dành 3 phút trước khi chuyển tiền hay ký hợp đồng.",
      en: "If someone says “decide now,” take three minutes before you send money or sign anything.",
    } satisfies Bi,
    lead: {
      ja: "あなたを責めるためではなく、守るためのチェックです。正解を断定するものではなく、危険サイン、足りない情報、専門家へ相談すべき可能性を落ち着いて整理します。",
      vi: "Đây không phải để trách bạn, mà để bảo vệ bạn. Không phán quyết đúng sai, mà giúp bình tĩnh sắp xếp dấu hiệu nguy hiểm, thông tin còn thiếu và khả năng nên hỏi chuyên gia.",
      en: "This check is not about blaming you. It is here to protect you by sorting out warning signs, missing information, and whether expert support may be needed.",
    } satisfies Bi,
  },
  forWho: {
    heading: {
      ja: "こんなときに、使ってください",
      vi: "Hãy dùng khi bạn rơi vào các tình huống sau",
      en: "Use it in situations like these",
    } satisfies Bi,
    subtitle: {
      ja: "当てはまるほど悪い、という意味ではありません。気づけた時点で、もう一歩前です。",
      vi: "Trùng khớp không có nghĩa là “bạn tệ”. Chỉ cần nhận ra, bạn đã tiến thêm một bước.",
      en: "Matching these does not mean you did something wrong. Noticing them is already one step forward.",
    } satisfies Bi,
    bullets: [
      {
        ja: "投資に詳しくないのに、周りから話を持ちかけられることがある",
        vi: "Bạn chưa rành đầu tư nhưng thường bị người xung quanh chào mời",
        en: "You are not familiar with investing, but people around you bring offers to you",
      },
      {
        ja: "「今だけ」「社内の話」などの言葉で胸がざわつく",
        vi: "Nghe cụm kiểu “chỉ hôm nay”, “chuyện nội bộ công ty” là tim đập nhanh",
        en: "Words like only today or inside company information make you uneasy",
      },
      {
        ja: "紹介すると報酬がもらえる、と言われて迷っている",
        vi: "Được nói “giới thiệu là có hoa hồng” nên đang phân vân",
        en: "You were told you can earn a reward by introducing others and feel unsure",
      },
      {
        ja: "日本語の説明が短く、大事な条件が書かれていない気がする",
        vi: "Giải thích tiếng Nhật quá ngắn, cảm giác thiếu điều kiện quan trọng",
        en: "The Japanese explanation feels too short, and important conditions seem missing",
      },
      {
        ja: "家族や友人を紹介するよう強く言われている",
        vi: "Bị thúc ép giới thiệu gia đình hoặc bạn bè",
        en: "You are being strongly pushed to introduce family or friends",
      },
    ] as const satisfies readonly Bi[],
  },
  danger: {
    heading: {
      ja: "危ないサインの例",
      vi: "Một vài dấu hiệu cần cảnh giác",
      en: "Examples of warning signs",
    } satisfies Bi,
    subtitle: {
      ja: "一つでも当てはまっても「ダメ」ではありません。深呼吸の合図として使ってください。",
      vi: "Dù chỉ trùng một dấu hiệu cũng không có nghĩa là “tệ hại”. Hãy coi đó là tín hiệu để hít thở sâu.",
      en: "Even one match does not mean you failed. Use it as a signal to pause and breathe.",
    } satisfies Bi,
    cards: [
      {
        title: {
          ja: "「確実」「必ず」などの断定が多い",
          vi: "Nhiều câu chắc chắn kiểu “chắc chắn”, “nhất định”",
          en: "Many absolute words such as guaranteed or definitely",
        },
        body: {
          ja: "金融に100%はありません。断定口調は、一度距離を取るサインになり得ます。",
          vi: "Trong tài chính không có chuyện 100%. Giọng quá chắc nịch đôi khi là dấu hiệu cần giữ khoảng cách.",
          en: "There is no 100% in finance. Strong guarantees can be a sign to step back.",
        },
      },
      {
        title: {
          ja: "質問すると急かされる、または怒られる",
          vi: "Hỏi thêm thì bị giục hoặc bị nổi giận",
          en: "When you ask questions, you are rushed or criticized",
        },
        body: {
          ja: "説明に自信があれば、考える時間を置いてもらえます。",
          vi: "Nếu giải thích minh bạch, họ sẽ cho bạn thời gian suy nghĩ.",
          en: "If the explanation is solid, they should allow you time to think.",
        },
      },
      {
        title: {
          ja: "急に仲間意識を作られる（家族みたい、など）",
          vi: "Đột nhiên tạo cảm giác “như gia đình”",
          en: "A sudden sense of belonging is created, such as we are like family",
        },
        body: {
          ja: "人間関係の気持ちと、お金の判断は分けて考えられます。",
          vi: "Cảm xúc trong quan hệ và quyết định về tiền nên tách ra suy nghĩ.",
          en: "Feelings about relationships and money decisions can be considered separately.",
        },
      },
      {
        title: {
          ja: "紹介で広がる形が中心、説明より勧誘が先に来る",
          vi: "Mô hình chủ yếu lan qua giới thiệu, mời gọi đến trước giải thích",
          en: "The offer spreads mainly through referrals, and recruitment comes before explanation",
        },
        body: {
          ja: "紹介報酬そのものは悪ではありませんが、仕組みやリスクの説明が弱い場合は注意が必要です。",
          vi: "Hoa hồng giới thiệu không tự nó xấu, nhưng nếu giải thích cơ chế và rủi ro quá yếu thì cần cảnh giác.",
          en: "Referral rewards are not automatically bad, but weak explanations of the structure and risks require caution.",
        },
      },
    ] as const,
  },
  lineFeatures: {
    heading: {
      ja: "LINEのBotでできること",
      vi: "Bot LINE có thể giúp bạn điều gì?",
      en: "What the LINE Bot can help with",
    } satisfies Bi,
    subtitle: {
      ja: "万能の判定機ではありません。でも、勢いのまま進む前の「一度止まる」には使えます。",
      vi: "Không phải máy phán đoán vạn năng. Nhưng có thể giúp bạn “dừng một nhịp” trước khi vội lao vào.",
      en: "It is not an all-purpose judge, but it can help you pause before moving forward too quickly.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "短いステップで考え直せる", vi: "Suy lại theo các bước ngắn", en: "Think again through short steps" },
        body: {
          ja: "長い文章を読む前に、要点に触れられます。",
          vi: "Chạm vào các ý chính trước khi phải đọc văn bản dài.",
          en: "You can touch the main points before reading long explanations.",
        },
      },
      {
        title: { ja: "「次に何をしないか」も整理する", vi: "Sắp xếp cả “điều chưa nên làm”", en: "Organize what not to do next" },
        body: {
          ja: "今すぐ送金しない、契約しない、紹介しないなど、止まる選択肢も確認します。",
          vi: "Xác nhận cả lựa chọn dừng lại: chưa chuyển tiền, chưa ký, chưa giới thiệu.",
          en: "It confirms stop options such as not sending money, signing, or introducing others right now.",
        },
      },
      {
        title: { ja: "一人にしない言い方", vi: "Cách nói để bạn không cảm thấy cô đơn", en: "Wording that does not leave you alone" },
        body: {
          ja: "恥ずかしさより、安全を優先できるトーンを大切にしています。",
          vi: "Ưu tiên giọng điệu giúp bạn đặt an toàn lên trên cảm giác ngại ngùng.",
          en: "The tone is designed to help you prioritize safety over embarrassment.",
        },
      },
    ] as const,
  },
  flow: {
    heading: {
      ja: "チェックの流れ（目安）",
      vi: "Các bước kiểm tra (tham khảo)",
      en: "Check flow",
    } satisfies Bi,
    subtitle: {
      ja: "実際の文言は、Botの更新で変わる場合があります。大まかなイメージとしてご覧ください。",
      vi: "Nội dung thực tế có thể thay đổi khi cập nhật bot. Hãy xem như hình dung tổng thể.",
      en: "Actual wording may change as the Bot is updated. Use this as a general picture.",
    } satisfies Bi,
    steps: [
      {
        tag: { ja: "ステップ1", vi: "Bước 1", en: "Step 1" },
        title: { ja: "LINEを開く", vi: "Mở LINE", en: "Open LINE" },
        body: { ja: "友だち追加後、案内に沿って始めます。", vi: "Sau khi thêm bạn, làm theo hướng dẫn để bắt đầu.", en: "After adding the account, follow the guidance to start." },
      },
      {
        tag: { ja: "ステップ2", vi: "Bước 2", en: "Step 2" },
        title: { ja: "質問に答える", vi: "Trả lời câu hỏi", en: "Answer questions" },
        body: {
          ja: "思い出せる範囲で大丈夫です。完璧じゃなくてOKです。",
          vi: "Trả lời trong phạm vi bạn nhớ được là đủ. Không cần hoàn hảo.",
          en: "Answer as much as you remember. It does not need to be perfect.",
        },
      },
      {
        tag: { ja: "ステップ3", vi: "Bước 3", en: "Step 3" },
        title: { ja: "危険サインと不足情報を読む", vi: "Đọc dấu hiệu nguy hiểm và thông tin còn thiếu", en: "Read warning signs and missing information" },
        body: {
          ja: "次の行動は「今すぐ決める」以外も選べます。必要なら専門窓口の利用も検討します。",
          vi: "Bước tiếp theo không nhất thiết là “quyết định ngay”. Khi cần, cân nhắc hỏi nơi tư vấn hoặc chuyên gia.",
          en: "Your next action does not have to be deciding now. Consider public support or professionals when needed.",
        },
      },
      {
        tag: { ja: "ステップ4", vi: "Bước 4", en: "Step 4" },
        title: { ja: "必要なら学びへ", vi: "Nếu cần, chuyển sang học thêm", en: "Learn more if needed" },
        body: {
          ja: "PDFやnoteで、言葉の意味を少しずつ積み上げられます。",
          vi: "Có thể tích lũy nghĩa từ qua PDF hoặc note.",
          en: "You can gradually build understanding through PDFs and note articles.",
        },
      },
    ] as const,
  },
  edu: {
    title: {
      ja: "教育目的の範囲について（重要）",
      vi: "Phạm vi mục đích giáo dục (quan trọng)",
      en: "Scope of educational purpose",
    } satisfies Bi,
    bullets: [
      {
        ja: "本Botと本サイトは、教育・情報提供が目的です。特定の金融商品の売買をすすめるものではありません。",
        vi: "Bot và trang web chỉ nhằm giáo dục và cung cấp thông tin. Không chào mời mua/bán sản phẩm tài chính cụ thể.",
        en: "This Bot and site are for education and information. They do not recommend buying or selling specific financial products.",
      },
      {
        ja: "個別の契約の精読、法律や税金の判断は行いません。必要なら専門家や公的窓口の利用を検討してください。",
        vi: "Không đọc kỹ hợp đồng riêng lẻ hay đưa ra nhận định pháp lý/thuế. Khi cần, hãy tìm chuyên gia hoặc cơ quan công.",
        en: "They do not provide detailed contract review, legal judgment, or tax judgment. Use professionals or public support when needed.",
      },
      {
        ja: "チェック結果は参考です。危険を感じる場合は、送金・契約・紹介を止め、専門家や公的窓口に相談してください。",
        vi: "Kết quả chỉ mang tính tham khảo. Nếu thấy nguy hiểm, hãy dừng chuyển tiền/ký hợp đồng/giới thiệu và hỏi chuyên gia hoặc cơ quan công.",
        en: "The check result is only a reference. If you feel danger, stop payment, signing, or introductions and consult public support or professionals.",
      },
    ] as const satisfies readonly Bi[],
  },
  pdfBridge: {
    heading: {
      ja: "チェックのあと：基礎を紙面でまとめる",
      vi: "Sau khi kiểm tra: tóm tắt nền tảng trên tài liệu (PDF)",
      en: "After checking: learn the basics in PDF materials",
    } satisfies Bi,
    subtitle: {
      ja: "一度立ち止まれたら、言葉の意味も少しずつ整えていきましょう。PDFはそのための読み物です。",
      vi: "Khi đã dừng lại được, hãy dần làm rõ các từ ngữ. PDF là tài liệu đọc cho mục đích đó.",
      en: "Once you have paused, gradually organize the meaning of important terms. PDFs are reading materials for that purpose.",
    } satisfies Bi,
    body: {
      ja: "制度の全体像や生活に近いテーマから入る想定です。内容はPDF教材ページで確認してください。",
      vi: "Dự kiến bắt đầu từ bức tranh tổng thể và các chủ đề gần với đời sống. Nội dung và giá xin xem đúng trang bán.",
      en: "The materials start from the overall picture of systems and practical daily-life topics. Please check the sales page for content and pricing.",
    } satisfies Bi,
  },
  faqSection: {
    heading: { ja: "よくあるご質問", vi: "Câu hỏi thường gặp", en: "Frequently asked questions" } satisfies Bi,
    subtitle: {
      ja: "詐欺チェックと、このサイトの考え方について。",
      vi: "Về kiểm tra lừa đảo và cách tiếp cận của trang này.",
      en: "About the scam check and the thinking behind this site.",
    } satisfies Bi,
  },
  dualCta: {
    heading: {
      ja: "よければ、あとひと手間だけ。次はどちらか一方で十分です",
      vi: "Nếu được, thêm một bước nhỏ thôi. Chỉ cần một trong hai lựa chọn sau là đủ.",
      en: "If possible, take one more small step. Either of the next two options is enough.",
    } satisfies Bi,
  },
} as const;
