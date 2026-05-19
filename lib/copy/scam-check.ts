import type { Bi } from "@/lib/copy/types";

export const scamCheckCopy = {
  pageIntro: {
    ja: "送金・契約・紹介の前に、LINEで危険サインを短く整理できます（無料）。",
    vi: "Trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu người khác, bạn có thể kiểm tra dấu hiệu nguy hiểm trên LINE (miễn phí).",
  } satisfies Bi,
  hero: {
    eyebrow: { ja: "LINE · 詐欺チェック", vi: "LINE · Kiểm tra lừa đảo" } satisfies Bi,
    title: {
      ja: "「今すぐ決めて」と言われたら、送金や契約の前に3分だけ。",
      vi: "Nếu ai đó nói “quyết ngay bây giờ”, hãy dành 3 phút trước khi chuyển tiền hay ký hợp đồng.",
    } satisfies Bi,
    lead: {
      ja: "あなたを責めるためではなく、守るためのチェックです。正解を断定するものではなく、危険サイン、足りない情報、専門家へ相談すべき可能性を落ち着いて整理します。",
      vi: "Đây không phải để trách bạn, mà để bảo vệ bạn. Không phán quyết đúng sai, mà giúp bình tĩnh sắp xếp dấu hiệu nguy hiểm, thông tin còn thiếu và khả năng nên hỏi chuyên gia.",
    } satisfies Bi,
  },
  forWho: {
    heading: {
      ja: "こんなときに、使ってください",
      vi: "Hãy dùng khi bạn rơi vào các tình huống sau",
    } satisfies Bi,
    subtitle: {
      ja: "当てはまるほど悪い、という意味ではありません。気づけた時点で、もう一歩前です。",
      vi: "Trùng khớp không có nghĩa là “bạn tệ”. Chỉ cần nhận ra, bạn đã tiến thêm một bước.",
    } satisfies Bi,
    bullets: [
      {
        ja: "投資に詳しくないのに、周りから話を持ちかけられることがある",
        vi: "Bạn chưa rành đầu tư nhưng thường bị người xung quanh chào mời",
      },
      {
        ja: "「今だけ」「社内の話」などの言葉で胸がざわつく",
        vi: "Nghe cụm kiểu “chỉ hôm nay”, “chuyện nội bộ công ty” là tim đập nhanh",
      },
      {
        ja: "紹介すると報酬がもらえる、と言われて迷っている",
        vi: "Được nói “giới thiệu là có hoa hồng” nên đang phân vân",
      },
      {
        ja: "日本語の説明が短く、大事な条件が書かれていない気がする",
        vi: "Giải thích tiếng Nhật quá ngắn, cảm giác thiếu điều kiện quan trọng",
      },
      {
        ja: "家族や友人を紹介するよう強く言われている",
        vi: "Bị thúc ép giới thiệu gia đình hoặc bạn bè",
      },
    ] as const satisfies readonly Bi[],
  },
  danger: {
    heading: {
      ja: "危ないサインの例",
      vi: "Một vài dấu hiệu cần cảnh giác",
    } satisfies Bi,
    subtitle: {
      ja: "一つでも当てはまっても「ダメ」ではありません。深呼吸の合図として使ってください。",
      vi: "Dù chỉ trùng một dấu hiệu cũng không có nghĩa là “tệ hại”. Hãy coi đó là tín hiệu để hít thở sâu.",
    } satisfies Bi,
    cards: [
      {
        title: {
          ja: "「確実」「必ず」などの断定が多い",
          vi: "Nhiều câu chắc chắn kiểu “chắc chắn”, “nhất định”",
        },
        body: {
          ja: "金融に100%はありません。断定口調は、一度距離を取るサインになり得ます。",
          vi: "Trong tài chính không có chuyện 100%. Giọng quá chắc nịch đôi khi là dấu hiệu cần giữ khoảng cách.",
        },
      },
      {
        title: {
          ja: "質問すると急かされる、または怒られる",
          vi: "Hỏi thêm thì bị giục hoặc bị nổi giận",
        },
        body: {
          ja: "説明に自信があれば、考える時間を置いてもらえます。",
          vi: "Nếu giải thích minh bạch, họ sẽ cho bạn thời gian suy nghĩ.",
        },
      },
      {
        title: {
          ja: "急に仲間意識を作られる（家族みたい、など）",
          vi: "Đột nhiên tạo cảm giác “như gia đình”",
        },
        body: {
          ja: "人間関係の気持ちと、お金の判断は分けて考えられます。",
          vi: "Cảm xúc trong quan hệ và quyết định về tiền nên tách ra suy nghĩ.",
        },
      },
      {
        title: {
          ja: "紹介で広がる形が中心、説明より勧誘が先に来る",
          vi: "Mô hình chủ yếu lan qua giới thiệu, mời gọi đến trước giải thích",
        },
        body: {
          ja: "紹介報酬そのものは悪ではありませんが、仕組みやリスクの説明が弱い場合は注意が必要です。",
          vi: "Hoa hồng giới thiệu không tự nó xấu, nhưng nếu giải thích cơ chế và rủi ro quá yếu thì cần cảnh giác.",
        },
      },
    ] as const,
  },
  lineFeatures: {
    heading: {
      ja: "LINEのBotでできること",
      vi: "Bot LINE có thể giúp bạn điều gì?",
    } satisfies Bi,
    subtitle: {
      ja: "万能の判定機ではありません。でも、勢いのまま進む前の「一度止まる」には使えます。",
      vi: "Không phải máy phán đoán vạn năng. Nhưng có thể giúp bạn “dừng một nhịp” trước khi vội lao vào.",
    } satisfies Bi,
    items: [
      {
        title: { ja: "短いステップで考え直せる", vi: "Suy lại theo các bước ngắn" },
        body: {
          ja: "長い文章を読む前に、要点に触れられます。",
          vi: "Chạm vào các ý chính trước khi phải đọc văn bản dài.",
        },
      },
      {
        title: { ja: "「次に何をしないか」も整理する", vi: "Sắp xếp cả “điều chưa nên làm”" },
        body: {
          ja: "今すぐ送金しない、契約しない、紹介しないなど、止まる選択肢も確認します。",
          vi: "Xác nhận cả lựa chọn dừng lại: chưa chuyển tiền, chưa ký, chưa giới thiệu.",
        },
      },
      {
        title: { ja: "一人にしない言い方", vi: "Cách nói để bạn không cảm thấy cô đơn" },
        body: {
          ja: "恥ずかしさより、安全を優先できるトーンを大切にしています。",
          vi: "Ưu tiên giọng điệu giúp bạn đặt an toàn lên trên cảm giác ngại ngùng.",
        },
      },
    ] as const,
  },
  flow: {
    heading: {
      ja: "チェックの流れ（目安）",
      vi: "Các bước kiểm tra (tham khảo)",
    } satisfies Bi,
    subtitle: {
      ja: "実際の文言は、Botの更新で変わる場合があります。大まかなイメージとしてご覧ください。",
      vi: "Nội dung thực tế có thể thay đổi khi cập nhật bot. Hãy xem như hình dung tổng thể.",
    } satisfies Bi,
    steps: [
      {
        tag: { ja: "ステップ1", vi: "Bước 1" },
        title: { ja: "LINEを開く", vi: "Mở LINE" },
        body: { ja: "友だち追加後、案内に沿って始めます。", vi: "Sau khi thêm bạn, làm theo hướng dẫn để bắt đầu." },
      },
      {
        tag: { ja: "ステップ2", vi: "Bước 2" },
        title: { ja: "質問に答える", vi: "Trả lời câu hỏi" },
        body: {
          ja: "思い出せる範囲で大丈夫です。完璧じゃなくてOKです。",
          vi: "Trả lời trong phạm vi bạn nhớ được là đủ. Không cần hoàn hảo.",
        },
      },
      {
        tag: { ja: "ステップ3", vi: "Bước 3" },
        title: { ja: "危険サインと不足情報を読む", vi: "Đọc dấu hiệu nguy hiểm và thông tin còn thiếu" },
        body: {
          ja: "次の行動は「今すぐ決める」以外も選べます。必要なら専門窓口の利用も検討します。",
          vi: "Bước tiếp theo không nhất thiết là “quyết định ngay”. Khi cần, cân nhắc hỏi nơi tư vấn hoặc chuyên gia.",
        },
      },
      {
        tag: { ja: "ステップ4", vi: "Bước 4" },
        title: { ja: "必要なら学びへ", vi: "Nếu cần, chuyển sang học thêm" },
        body: {
          ja: "PDFやnoteで、言葉の意味を少しずつ積み上げられます。",
          vi: "Có thể tích lũy nghĩa từ qua PDF hoặc note.",
        },
      },
    ] as const,
  },
  edu: {
    title: {
      ja: "教育目的の範囲について（重要）",
      vi: "Phạm vi mục đích giáo dục (quan trọng)",
    } satisfies Bi,
    bullets: [
      {
        ja: "本Botと本サイトは、教育・情報提供が目的です。特定の金融商品の売買をすすめるものではありません。",
        vi: "Bot và trang web chỉ nhằm giáo dục và cung cấp thông tin. Không chào mời mua/bán sản phẩm tài chính cụ thể.",
      },
      {
        ja: "個別の契約の精読、法律や税金の判断は行いません。必要なら専門家や公的窓口の利用を検討してください。",
        vi: "Không đọc kỹ hợp đồng riêng lẻ hay đưa ra nhận định pháp lý/thuế. Khi cần, hãy tìm chuyên gia hoặc cơ quan công.",
      },
      {
        ja: "チェック結果は参考です。危険を感じる場合は、送金・契約・紹介を止め、専門家や公的窓口に相談してください。",
        vi: "Kết quả chỉ mang tính tham khảo. Nếu thấy nguy hiểm, hãy dừng chuyển tiền/ký hợp đồng/giới thiệu và hỏi chuyên gia hoặc cơ quan công.",
      },
    ] as const satisfies readonly Bi[],
  },
  pdfBridge: {
    heading: {
      ja: "チェックのあと：基礎を紙面でまとめる",
      vi: "Sau khi kiểm tra: tóm tắt nền tảng trên tài liệu (PDF)",
    } satisfies Bi,
    subtitle: {
      ja: "一度立ち止まれたら、言葉の意味も少しずつ整えていきましょう。PDFはそのための読み物です。",
      vi: "Khi đã dừng lại được, hãy dần làm rõ các từ ngữ. PDF là tài liệu đọc cho mục đích đó.",
    } satisfies Bi,
    body: {
      ja: "制度の全体像や生活に近いテーマから入る想定です。内容・価格は販売ページの記載をご確認ください。",
      vi: "Dự kiến bắt đầu từ bức tranh tổng thể và các chủ đề gần với đời sống. Nội dung và giá xin xem đúng trang bán.",
    } satisfies Bi,
  },
  faqSection: {
    heading: { ja: "よくあるご質問", vi: "Câu hỏi thường gặp" } satisfies Bi,
    subtitle: {
      ja: "詐欺チェックと、このサイトの考え方について。",
      vi: "Về kiểm tra lừa đảo và cách tiếp cận của trang này.",
    } satisfies Bi,
  },
  dualCta: {
    heading: {
      ja: "よければ、あとひと手間だけ。次はどちらか一方で十分です",
      vi: "Nếu được, thêm một bước nhỏ thôi. Chỉ cần một trong hai lựa chọn sau là đủ.",
    } satisfies Bi,
  },
} as const;
