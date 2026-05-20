import type { Bi } from "@/lib/copy/types";

export type ArticleCategory = "risk" | "life-money" | "nisa" | "remittance" | "debt";

export type ArticlePreview = {
  slug: string;
  category: ArticleCategory;
  categoryLabel: Bi;
  title: Bi;
  excerpt: Bi;
  readTime: string;
  status: "published" | "planned";
  url?: string;
  source?: string;
  publishedAt?: string;
  body?: readonly Bi[];
};

export const articleCategories: readonly { id: ArticleCategory; label: Bi }[] = [
  { id: "risk", label: { ja: "詐欺予防", vi: "Phòng tránh lừa đảo", en: "Scam prevention" } },
  { id: "life-money", label: { ja: "生活とお金", vi: "Tiền bạc đời sống", en: "Daily money" } },
  { id: "nisa", label: { ja: "NISA・資産形成", vi: "NISA & tích sản", en: "NISA and asset building" } },
  { id: "remittance", label: { ja: "送金・手続き", vi: "Chuyển tiền & thủ tục", en: "Remittances and procedures" } },
  { id: "debt", label: { ja: "借金・支払い", vi: "Nợ & thanh toán", en: "Debt and payments" } },
] as const;

export const articlePreviews: readonly ArticlePreview[] = [
  {
    slug: "investment-scam-signs",
    category: "risk",
    categoryLabel: articleCategories[0].label,
    title: {
      ja: "怪しい投資話を見分ける5つのサイン",
      vi: "5 dấu hiệu nhận biết lời mời đầu tư đáng ngờ",
      en: "Five signs of a suspicious investment offer",
    },
    excerpt: {
      ja: "「今だけ」「紹介で増える」「元本保証」など、送金前に確認したい言葉を整理します。",
      vi: "Sắp xếp các từ cần cảnh giác trước khi chuyển tiền: chỉ hôm nay, giới thiệu là tăng, bảo đảm vốn...",
      en: "Review phrases to check before sending money, such as “only now,” “earn by referrals,” and “principal guaranteed.”",
    },
    readTime: "6 min",
    status: "planned",
  },
  {
    slug: "salary-tax-basics",
    category: "life-money",
    categoryLabel: articleCategories[1].label,
    title: {
      ja: "給与明細と税金を最初に見るポイント",
      vi: "Các điểm đầu tiên cần xem trong phiếu lương và thuế",
      en: "First points to check on pay slips and taxes",
    },
    excerpt: {
      ja: "手取り、所得税、住民税、社会保険料を生活設計に使える形で理解します。",
      vi: "Hiểu lương thực nhận, thuế thu nhập, thuế cư trú và bảo hiểm xã hội để lập kế hoạch sống.",
      en: "Understand take-home pay, income tax, resident tax, and social insurance in a way you can use for daily planning.",
    },
    readTime: "7 min",
    status: "planned",
  },
  {
    slug: "nisa-first-step",
    category: "nisa",
    categoryLabel: articleCategories[2].label,
    title: {
      ja: "NISAを始める前に知るべきこと",
      vi: "Điều cần biết trước khi bắt đầu NISA",
      en: "What to know before starting NISA",
    },
    excerpt: {
      ja: "制度のメリットだけでなく、投資リスクと長期で考える理由をやさしく整理します。",
      vi: "Không chỉ lợi ích của chế độ, mà còn rủi ro đầu tư và lý do cần nhìn dài hạn.",
      en: "A simple look at not only the benefits, but also investment risk and why long-term thinking matters.",
    },
    readTime: "8 min",
    status: "planned",
  },
  {
    slug: "remittance-checklist",
    category: "remittance",
    categoryLabel: articleCategories[3].label,
    title: {
      ja: "日本からベトナムへ送金するときのチェックリスト",
      vi: "Checklist khi chuyển tiền từ Nhật về Việt Nam",
      en: "Checklist for sending money from Japan to Vietnam",
    },
    excerpt: {
      ja: "手数料、為替、本人確認、送金先情報を確認し、焦った送金を避けます。",
      vi: "Kiểm tra phí, tỷ giá, xác minh danh tính và thông tin người nhận để tránh chuyển tiền vội.",
      en: "Check fees, exchange rates, identity verification, and recipient information to avoid rushed transfers.",
    },
    readTime: "5 min",
    status: "planned",
  },
  {
    slug: "revolving-payment-risk",
    category: "debt",
    categoryLabel: articleCategories[4].label,
    title: {
      ja: "リボ払い・借金で気をつけること",
      vi: "Điều cần chú ý với trả góp revolving và nợ",
      en: "What to watch out for with revolving payments and debt",
    },
    excerpt: {
      ja: "毎月の支払いが小さく見えても、総額と利息が大きくなる仕組みを確認します。",
      vi: "Dù khoản trả hàng tháng có vẻ nhỏ, tổng số tiền và lãi có thể tăng lớn.",
      en: "Even if monthly payments look small, the total amount and interest can grow. Learn how that works.",
    },
    readTime: "6 min",
    status: "planned",
  },
] as const;
