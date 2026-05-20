import type { Bi } from "@/lib/copy/types";

export type RiskAnswer = "yes" | "unknown" | "no";

export type RiskQuestion = {
  id: string;
  text: Bi;
  help: Bi;
  weight: number;
};

export type RiskLevel = "low" | "medium" | "high";

export const scamRiskCheckCopy = {
  kicker: { ja: "3分セルフチェック", vi: "Tự kiểm tra trong 3 phút", en: "3-minute self-check" } satisfies Bi,
  heading: {
    ja: "投資話・送金前の危険度チェック",
    vi: "Kiểm tra mức độ rủi ro trước khi đầu tư/chuyển tiền",
    en: "Risk check before investing or sending money",
  } satisfies Bi,
  lead: {
    ja: "これは投資助言や法的判断ではありません。送金・契約・紹介の前に、危険サインを一度整理するための簡易チェックです。",
    vi: "Đây không phải tư vấn đầu tư hay pháp lý. Đây là kiểm tra nhanh để sắp xếp dấu hiệu nguy hiểm trước khi chuyển tiền, ký hợp đồng hoặc giới thiệu.",
    en: "This is not investment or legal advice. It is a quick check to organize warning signs before you send money, sign a contract, or introduce others.",
  } satisfies Bi,
  answerLabels: {
    yes: { ja: "はい", vi: "Có", en: "Yes" },
    unknown: { ja: "わからない", vi: "Không rõ", en: "Not sure" },
    no: { ja: "いいえ", vi: "Không", en: "No" },
  } satisfies Record<RiskAnswer, Bi>,
} as const;

export const scamRiskQuestions = [
  {
    id: "guaranteed",
    text: { ja: "元本保証・必ず儲かると言われましたか？", vi: "Bạn có được nói là bảo đảm vốn hoặc chắc chắn có lời không?", en: "Were you told your principal is guaranteed or that profit is certain?" },
    help: {
      ja: "金融に100%はありません。断定が強いほど注意が必要です。",
      vi: "Trong tài chính không có 100%. Càng nói chắc chắn, càng cần cảnh giác.",
      en: "There is no 100% certainty in finance. The stronger the guarantee sounds, the more cautious you should be.",
    },
    weight: 3,
  },
  {
    id: "urgent",
    text: { ja: "今日中・今だけなど、急いで送金や契約を求められていますか？", vi: "Bạn có bị thúc phải chuyển tiền/ký ngay hôm nay hoặc “chỉ hôm nay” không?", en: "Are you being rushed to send money or sign today, or told the offer is only available now?" },
    help: {
      ja: "考える時間を与えない話は、危険サインになりやすいです。",
      vi: "Lời mời không cho thời gian suy nghĩ thường là dấu hiệu nguy hiểm.",
      en: "Offers that do not give you time to think are often warning signs.",
    },
    weight: 3,
  },
  {
    id: "referral",
    text: { ja: "紹介すれば報酬が出る、家族や友人も誘ってと言われましたか？", vi: "Bạn có được nói giới thiệu người khác sẽ có hoa hồng không?", en: "Were you told you can earn rewards by inviting family or friends?" },
    help: {
      ja: "紹介報酬そのものより、説明より勧誘が先に来る構造に注意します。",
      vi: "Không chỉ hoa hồng, hãy chú ý nếu mời gọi đến trước giải thích.",
      en: "Be careful when recruitment comes before a clear explanation of the product or service.",
    },
    weight: 2,
  },
  {
    id: "registration",
    text: { ja: "会社名・登録番号・公式情報を自分で確認できませんか？", vi: "Bạn không tự kiểm tra được tên công ty, số đăng ký hoặc nguồn chính thức?", en: "Are you unable to verify the company name, registration number, or official information yourself?" },
    help: {
      ja: "金融庁などの公式情報で確認できない場合は、進める前に止まる価値があります。",
      vi: "Nếu không kiểm tra được trên nguồn chính thức như FSA, nên dừng lại trước khi tiếp tục.",
      en: "If you cannot verify it through official sources such as Japan's FSA, pause before moving forward.",
    },
    weight: 3,
  },
  {
    id: "withdrawal",
    text: { ja: "出金条件・解約条件・手数料がはっきり説明されていませんか？", vi: "Điều kiện rút tiền, hủy hợp đồng hoặc phí không được giải thích rõ?", en: "Are the withdrawal rules, cancellation rules, or fees unclear?" },
    help: {
      ja: "入金より出金条件の方が重要です。曖昧なら要注意です。",
      vi: "Điều kiện rút tiền quan trọng hơn nạp tiền. Nếu mơ hồ, cần cảnh giác.",
      en: "Withdrawal conditions matter more than deposit steps. If unclear, be cautious.",
    },
    weight: 3,
  },
  {
    id: "sns",
    text: { ja: "相手はSNS・知人紹介・コミュニティ経由で近づいてきましたか？", vi: "Đối phương tiếp cận qua SNS, người quen hoặc cộng đồng?", en: "Did the person approach you through social media, an acquaintance, or a community?" },
    help: {
      ja: "知っている人経由でも、お金の判断は別に確認しましょう。",
      vi: "Dù qua người quen, quyết định tiền bạc vẫn cần kiểm tra riêng.",
      en: "Even if it came through someone you know, check money decisions separately.",
    },
    weight: 2,
  },
] as const satisfies readonly RiskQuestion[];

export const riskResults = {
  low: {
    label: { ja: "危険度: 低め", vi: "Mức rủi ro: thấp", en: "Risk level: low" },
    title: { ja: "すぐ危険とは限りませんが、公式情報は確認しましょう。", vi: "Chưa chắc nguy hiểm ngay, nhưng vẫn nên kiểm tra nguồn chính thức.", en: "It may not be an immediate danger, but you should still check official sources." },
    advice: {
      ja: "条件、手数料、出金方法を文章で残し、金融庁などの公式情報で確認してから判断してください。",
      vi: "Hãy lưu lại điều kiện, phí, cách rút tiền bằng văn bản và kiểm tra nguồn chính thức trước khi quyết định.",
      en: "Keep conditions, fees, and withdrawal methods in writing, then check official sources before deciding.",
    },
  },
  medium: {
    label: { ja: "危険度: 中", vi: "Mức rủi ro: trung bình", en: "Risk level: medium" },
    title: { ja: "送金・契約を急がず、情報を追加で確認してください。", vi: "Đừng vội chuyển tiền/ký hợp đồng; hãy kiểm tra thêm thông tin.", en: "Do not rush payment or signing. Verify more information first." },
    advice: {
      ja: "会社名、登録番号、契約書、出金条件を確認し、不明点が残るなら進めない選択も考えてください。",
      vi: "Kiểm tra tên công ty, số đăng ký, hợp đồng và điều kiện rút tiền. Nếu còn mơ hồ, hãy cân nhắc không tiếp tục.",
      en: "Check the company name, registration number, contract, and withdrawal terms. If anything remains unclear, consider not moving forward.",
    },
  },
  high: {
    label: { ja: "危険度: 高", vi: "Mức rủi ro: cao", en: "Risk level: high" },
    title: { ja: "今すぐ送金・契約・紹介しないでください。", vi: "Đừng chuyển tiền, ký hợp đồng hoặc giới thiệu ngay lúc này.", en: "Do not send money, sign, or invite others right now." },
    advice: {
      ja: "感情が動いている時ほど、一度止まることが大切です。公式情報を確認し、必要なら公的窓口や専門家へ相談してください。",
      vi: "Khi cảm xúc đang bị thúc đẩy, điều quan trọng là dừng lại. Hãy kiểm tra nguồn chính thức và hỏi cơ quan công hoặc chuyên gia nếu cần.",
      en: "When your emotions are being pushed, stop first. Check official sources and consult public support or a professional if needed.",
    },
  },
} as const satisfies Record<RiskLevel, { label: Bi; title: Bi; advice: Bi }>;

export function getRiskLevel(score: number): RiskLevel {
  if (score >= 9) return "high";
  if (score >= 4) return "medium";
  return "low";
}
