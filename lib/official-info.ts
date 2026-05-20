import type { Bi } from "@/lib/copy/types";

export type OfficialSource = {
  id: string;
  agency: Bi;
  topic: Bi;
  description: Bi;
  url: string;
  tags: readonly Bi[];
  priority: "money" | "tax" | "visa" | "consumer" | "life";
};

export const officialHubCopy = {
  pageIntro: {
    ja: "日本で暮らすベトナム人が、金融・税金・在留・契約トラブルを確認するときの公式情報入口です。",
    vi: "Cổng vào thông tin chính thức về tiền bạc, thuế, tư cách lưu trú và rắc rối hợp đồng cho người Việt tại Nhật.",
    en: "A starting point for Vietnamese residents in Japan to check official information on money, taxes, residence status, and contract trouble.",
  } satisfies Bi,
  title: {
    ja: "公式情報ハブ",
    vi: "Trung tâm thông tin chính thức",
    en: "Official Information Hub",
  } satisfies Bi,
  lead: {
    ja: "Minh Duc Financeの説明だけで判断せず、最後は必ず省庁・公的機関の一次情報を確認できるように整理しています。",
    vi: "Đừng chỉ dựa vào phần giải thích của Minh Duc Finance. Trang này giúp bạn đi đến nguồn thông tin gốc từ cơ quan chính thức.",
    en: "Do not rely only on Minh Duc Finance explanations. This page helps you reach primary information from ministries and public agencies.",
  } satisfies Bi,
} as const;

export const officialUseCases = [
  {
    id: "scam",
    label: { ja: "投資話・送金前に怪しい", vi: "Nghi lừa đảo trước khi đầu tư/chuyển tiền", en: "Something feels suspicious before investing or sending money" },
    guide: {
      ja: "金融庁、消費者庁、警察庁の情報を確認し、急がされても送金しない。",
      vi: "Kiểm tra FSA, CAA và cảnh báo của cảnh sát. Không chuyển tiền khi bị thúc ép.",
      en: "Check the FSA, Consumer Affairs Agency, and police alerts. Do not send money just because you are being rushed.",
    },
    sourceIds: ["fsa-trouble", "consumer-trouble", "police-cyber"],
  },
  {
    id: "nisa-tax",
    label: { ja: "NISA・税金を確認したい", vi: "Muốn kiểm tra NISA và thuế", en: "I want to check NISA or taxes" },
    guide: {
      ja: "NISAは金融庁、税金や確定申告は国税庁で制度の一次情報を確認する。",
      vi: "NISA thì xem FSA; thuế và khai thuế thì xem NTA để kiểm tra thông tin gốc.",
      en: "For NISA, check the FSA. For taxes and tax filing, check the National Tax Agency.",
    },
    sourceIds: ["fsa-nisa", "nta-tax"],
  },
  {
    id: "visa-life",
    label: { ja: "在留資格・生活手続きが不安", vi: "Lo về visa và thủ tục đời sống", en: "I am worried about residence status or daily-life procedures" },
    guide: {
      ja: "在留資格は入管、年金・社会保険は公的機関で確認する。",
      vi: "Tư cách lưu trú xem ISA; lương hưu và bảo hiểm xã hội xem cơ quan chính thức.",
      en: "For residence status, check Immigration Services Agency information. For pensions and social insurance, check public agencies.",
    },
    sourceIds: ["isa-visa", "nenkin", "mhlw-labor"],
  },
] as const;

export const officialSources = [
  {
    id: "fsa-nisa",
    agency: { ja: "金融庁", vi: "Cơ quan Dịch vụ Tài chính Nhật Bản", en: "Financial Services Agency" },
    topic: { ja: "NISA・資産形成", vi: "NISA và xây dựng tài sản", en: "NISA and asset building" },
    description: {
      ja: "NISA制度、投資の基本、金融教育に関する一次情報を確認できます。",
      vi: "Kiểm tra thông tin gốc về NISA, kiến thức đầu tư cơ bản và giáo dục tài chính.",
      en: "Check primary information about NISA, investment basics, and financial education.",
    },
    url: "https://www.fsa.go.jp/policy/nisa2/",
    tags: [
      { ja: "NISA", vi: "NISA", en: "NISA" },
      { ja: "投資の基本", vi: "Cơ bản đầu tư", en: "Investment basics" },
    ],
    priority: "money",
  },
  {
    id: "fsa-trouble",
    agency: { ja: "金融庁", vi: "Cơ quan Dịch vụ Tài chính Nhật Bản", en: "Financial Services Agency" },
    topic: { ja: "金融トラブル・無登録業者", vi: "Rắc rối tài chính và đơn vị không đăng ký", en: "Financial trouble and unregistered operators" },
    description: {
      ja: "怪しい投資勧誘、無登録業者、金融トラブルの注意情報を確認できます。",
      vi: "Xem cảnh báo về lời mời đầu tư đáng ngờ, đơn vị không đăng ký và rắc rối tài chính.",
      en: "Check warnings about suspicious investment solicitations, unregistered operators, and financial trouble.",
    },
    url: "https://www.fsa.go.jp/ordinary/chuui/mutouroku.html",
    tags: [
      { ja: "詐欺予防", vi: "Phòng tránh lừa đảo", en: "Scam prevention" },
      { ja: "無登録", vi: "Không đăng ký", en: "Unregistered" },
    ],
    priority: "money",
  },
  {
    id: "nta-tax",
    agency: { ja: "国税庁", vi: "Cơ quan Thuế Quốc gia Nhật Bản", en: "National Tax Agency" },
    topic: { ja: "税金・確定申告", vi: "Thuế và khai thuế", en: "Taxes and tax filing" },
    description: {
      ja: "所得税、確定申告、源泉徴収など、税金の公式情報を確認できます。",
      vi: "Kiểm tra thông tin chính thức về thuế thu nhập, khai thuế và khấu trừ tại nguồn.",
      en: "Check official information about income tax, tax filing, withholding, and related tax topics.",
    },
    url: "https://www.nta.go.jp/",
    tags: [
      { ja: "確定申告", vi: "Khai thuế", en: "Tax filing" },
      { ja: "源泉徴収", vi: "Khấu trừ thuế", en: "Withholding tax" },
    ],
    priority: "tax",
  },
  {
    id: "isa-visa",
    agency: { ja: "出入国在留管理庁", vi: "Cục Quản lý Xuất nhập cảnh và Lưu trú", en: "Immigration Services Agency" },
    topic: { ja: "在留資格・手続き", vi: "Tư cách lưu trú và thủ tục", en: "Residence status and procedures" },
    description: {
      ja: "在留資格、更新、変更、永住などの手続き情報を確認できます。",
      vi: "Kiểm tra thông tin về tư cách lưu trú, gia hạn, thay đổi và vĩnh trú.",
      en: "Check information about residence status, renewal, changes, permanent residence, and related procedures.",
    },
    url: "https://www.moj.go.jp/isa/",
    tags: [
      { ja: "ビザ", vi: "Visa", en: "Visa" },
      { ja: "在留カード", vi: "Thẻ lưu trú", en: "Residence card" },
    ],
    priority: "visa",
  },
  {
    id: "consumer-trouble",
    agency: { ja: "消費者庁", vi: "Cơ quan Bảo vệ Người tiêu dùng", en: "Consumer Affairs Agency" },
    topic: { ja: "契約・悪質商法", vi: "Hợp đồng và kinh doanh xấu", en: "Contracts and malicious business practices" },
    description: {
      ja: "悪質商法、契約トラブル、消費者被害の注意情報を確認できます。",
      vi: "Xem cảnh báo về kinh doanh xấu, rắc rối hợp đồng và thiệt hại người tiêu dùng.",
      en: "Check warnings about malicious business practices, contract trouble, and consumer harm.",
    },
    url: "https://www.caa.go.jp/",
    tags: [
      { ja: "契約", vi: "Hợp đồng", en: "Contracts" },
      { ja: "悪質商法", vi: "Kinh doanh xấu", en: "Malicious practices" },
    ],
    priority: "consumer",
  },
  {
    id: "police-cyber",
    agency: { ja: "警察庁", vi: "Cơ quan Cảnh sát Quốc gia", en: "National Police Agency" },
    topic: { ja: "サイバー犯罪・詐欺", vi: "Tội phạm mạng và lừa đảo", en: "Cybercrime and scams" },
    description: {
      ja: "フィッシング、SNS型投資詐欺、サイバー犯罪の注意情報を確認できます。",
      vi: "Kiểm tra cảnh báo về phishing, lừa đảo đầu tư qua SNS và tội phạm mạng.",
      en: "Check warnings about phishing, social-media investment scams, and cybercrime.",
    },
    url: "https://www.npa.go.jp/bureau/cyber/",
    tags: [
      { ja: "フィッシング", vi: "Phishing", en: "Phishing" },
      { ja: "SNS詐欺", vi: "Lừa đảo SNS", en: "Social media scams" },
    ],
    priority: "consumer",
  },
  {
    id: "nenkin",
    agency: { ja: "日本年金機構", vi: "Cơ quan Lương hưu Nhật Bản", en: "Japan Pension Service" },
    topic: { ja: "年金", vi: "Lương hưu", en: "Pensions" },
    description: {
      ja: "国民年金、厚生年金、保険料、手続きに関する情報を確認できます。",
      vi: "Kiểm tra thông tin về lương hưu quốc dân, lương hưu phúc lợi, phí và thủ tục.",
      en: "Check information about National Pension, Employees' Pension, premiums, and procedures.",
    },
    url: "https://www.nenkin.go.jp/",
    tags: [
      { ja: "年金", vi: "Lương hưu", en: "Pension" },
      { ja: "社会保険", vi: "Bảo hiểm xã hội", en: "Social insurance" },
    ],
    priority: "life",
  },
  {
    id: "mhlw-labor",
    agency: { ja: "厚生労働省", vi: "Bộ Y tế, Lao động và Phúc lợi", en: "Ministry of Health, Labour and Welfare" },
    topic: { ja: "労働・社会保険", vi: "Lao động và bảo hiểm xã hội", en: "Labor and social insurance" },
    description: {
      ja: "労働条件、健康保険、生活に関係する制度情報を確認できます。",
      vi: "Kiểm tra thông tin về điều kiện lao động, bảo hiểm y tế và các chế độ liên quan đời sống.",
      en: "Check information about working conditions, health insurance, and systems related to daily life.",
    },
    url: "https://www.mhlw.go.jp/",
    tags: [
      { ja: "労働条件", vi: "Điều kiện lao động", en: "Working conditions" },
      { ja: "健康保険", vi: "Bảo hiểm y tế", en: "Health insurance" },
    ],
    priority: "life",
  },
] as const satisfies readonly OfficialSource[];
