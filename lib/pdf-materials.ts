import type { Bi } from "@/lib/copy/types";

export type PdfAccess = "free" | "paid" | "member";
export type PdfDelivery = "public" | "protected" | "external";

export type PdfMaterial = {
  id: string;
  title: Bi;
  description: Bi;
  audience: Bi;
  filename: string;
  href: string;
  access: PdfAccess;
  delivery: PdfDelivery;
  status: "ready" | "draft" | "future";
  pages?: number;
  tags: readonly Bi[];
};

export const materialsCopy = {
  pageIntro: {
    ja: "日本で暮らす中で必要になりやすい、お金・制度・詐欺予防の基礎をPDFで確認できます。",
    vi: "Bạn có thể kiểm tra kiến thức cơ bản về tiền bạc, chế độ và phòng tránh lừa đảo khi sống ở Nhật.",
    en: "Check basic PDF materials on money, Japanese systems, and scam prevention for life in Japan.",
  } satisfies Bi,
  title: {
    ja: "PDF教材ライブラリ",
    vi: "Thư viện tài liệu PDF",
    en: "PDF Materials Library",
  } satisfies Bi,
  lead: {
    ja: "給与、税金、送金、NISA、詐欺予防などをテーマ別に整理しています。まずは自分に近いテーマから読んでください。",
    vi: "Tài liệu được sắp xếp theo chủ đề như lương, thuế, chuyển tiền, NISA và phòng tránh lừa đảo. Hãy bắt đầu từ chủ đề gần với bạn.",
    en: "Materials are organized by themes such as salary, taxes, remittance, NISA, and scam prevention. Start with the topic closest to your situation.",
  } satisfies Bi,
} as const;

function freePdfMaterial({
  id,
  title,
  description,
  audience,
  filename,
  tags,
}: Pick<PdfMaterial, "id" | "title" | "description" | "audience" | "filename" | "tags">): PdfMaterial {
  return {
    id,
    title,
    description,
    audience,
    filename,
    href: `/pdfs/${filename}`,
    access: "free",
    delivery: "public",
    status: "ready",
    tags,
  };
}

export const pdfMaterials = [
  freePdfMaterial({
    id: "household-budget-savings-jp",
    title: { ja: "家計管理と節約 詳細版", vi: "Quản lý chi tiêu và tiết kiệm - bản chi tiết", en: "Household Budgeting and Saving - Detailed Guide" },
    description: { ja: "毎月の支出整理、固定費、貯金の考え方を学ぶPDFです。", vi: "Tài liệu học cách quản lý chi tiêu, chi phí cố định và tiết kiệm hàng tháng.", en: "Learn how to organize monthly spending, fixed costs, and basic saving habits." },
    audience: { ja: "家計を整えたい人", vi: "Người muốn sắp xếp tài chính gia đình", en: "People who want to organize household finances" },
    filename: "01_household_budget_savings_detailed_expert_full.pdf",
    tags: [{ ja: "家計", vi: "Chi tiêu", en: "Budgeting" }, { ja: "節約", vi: "Tiết kiệm", en: "Saving" }],
  }),
  freePdfMaterial({
    id: "household-budget-savings-vn",
    title: { ja: "家計管理と節約 ベトナム語版", vi: "Quản lý chi tiêu và tiết kiệm", en: "Household Budgeting and Saving - Vietnamese Edition" },
    description: { ja: "ベトナム語で家計管理と節約の基本を学べるPDFです。", vi: "Tài liệu tiếng Việt về quản lý chi tiêu và tiết kiệm cơ bản.", en: "A Vietnamese-language PDF for learning basic budgeting and saving." },
    audience: { ja: "ベトナム語で学びたい人", vi: "Người muốn học bằng tiếng Việt", en: "People who want to learn in Vietnamese" },
    filename: "01_quan_ly_chi_tieu_va_tiet_kiem_vn.pdf",
    tags: [{ ja: "家計", vi: "Chi tiêu", en: "Budgeting" }, { ja: "節約", vi: "Tiết kiệm", en: "Saving" }],
  }),
  freePdfMaterial({
    id: "tax-social-security-pension-jp",
    title: { ja: "税金・社会保険・年金 詳細版", vi: "Thuế, bảo hiểm xã hội và lương hưu - bản chi tiết", en: "Taxes, Social Insurance, and Pension - Detailed Guide" },
    description: { ja: "日本で働く時に必要な税金、社会保険、年金の基本を整理します。", vi: "Tóm tắt thuế, bảo hiểm xã hội và lương hưu khi làm việc tại Nhật.", en: "Understand the basics of taxes, social insurance, and pensions when working in Japan." },
    audience: { ja: "給与明細や制度を理解したい人", vi: "Người muốn hiểu bảng lương và chế độ", en: "People who want to understand pay slips and Japanese systems" },
    filename: "02_tax_social_security_pension_detailed_expert_full.pdf",
    tags: [{ ja: "税金", vi: "Thuế", en: "Taxes" }, { ja: "年金", vi: "Lương hưu", en: "Pension" }],
  }),
  freePdfMaterial({
    id: "tax-social-security-pension-vn",
    title: { ja: "税金・社会保険・年金 ベトナム語版", vi: "Thuế, bảo hiểm xã hội, lương hưu tại Nhật", en: "Taxes, Social Insurance, and Pension - Vietnamese Edition" },
    description: { ja: "税金・社会保険・年金をベトナム語で確認できます。", vi: "Giải thích bằng tiếng Việt về thuế, bảo hiểm xã hội và lương hưu.", en: "A Vietnamese-language explanation of taxes, social insurance, and pensions in Japan." },
    audience: { ja: "制度をベトナム語で確認したい人", vi: "Người muốn kiểm tra chế độ bằng tiếng Việt", en: "People who want to check Japanese systems in Vietnamese" },
    filename: "02_thue_bao_hiem_xa_hoi_luong_huu_nhat_vn.pdf",
    tags: [{ ja: "税金", vi: "Thuế", en: "Taxes" }, { ja: "社会保険", vi: "Bảo hiểm xã hội", en: "Social insurance" }],
  }),
  freePdfMaterial({
    id: "nisa-ideco-basics-jp",
    title: { ja: "NISA・iDeCo 基礎 詳細版", vi: "NISA và iDeCo cơ bản - bản chi tiết", en: "NISA and iDeCo Basics - Detailed Guide" },
    description: { ja: "NISAとiDeCoの基礎、メリット、注意点を整理します。", vi: "Tóm tắt cơ bản, lợi ích và điểm cần chú ý của NISA/iDeCo.", en: "Learn the basics, benefits, and key cautions of NISA and iDeCo." },
    audience: { ja: "資産形成を始めたい人", vi: "Người muốn bắt đầu xây dựng tài sản", en: "People who want to start building assets" },
    filename: "03_nisa_ideco_basics_detailed_expert_full.pdf",
    tags: [{ ja: "NISA", vi: "NISA", en: "NISA" }, { ja: "iDeCo", vi: "iDeCo", en: "iDeCo" }],
  }),
  freePdfMaterial({
    id: "nisa-ideco-basics-vn",
    title: { ja: "NISA・iDeCo 基礎 ベトナム語版", vi: "NISA và iDeCo cơ bản", en: "NISA and iDeCo Basics - Vietnamese Edition" },
    description: { ja: "NISAとiDeCoの基本をベトナム語で学べます。", vi: "Tài liệu tiếng Việt về kiến thức cơ bản của NISA và iDeCo.", en: "A Vietnamese-language PDF covering the basic ideas behind NISA and iDeCo." },
    audience: { ja: "NISA/iDeCoをベトナム語で知りたい人", vi: "Người muốn hiểu NISA/iDeCo bằng tiếng Việt", en: "People who want to understand NISA and iDeCo in Vietnamese" },
    filename: "03_nisa_va_ideco_co_ban_vn.pdf",
    tags: [{ ja: "NISA", vi: "NISA", en: "NISA" }, { ja: "投資", vi: "Đầu tư", en: "Investing" }],
  }),
  freePdfMaterial({
    id: "investment-trusts-risk-jp",
    title: { ja: "投資信託とリスク 詳細版", vi: "Quỹ đầu tư và rủi ro - bản chi tiết", en: "Investment Trusts and Risk - Detailed Guide" },
    description: { ja: "投資信託の仕組み、リスク、確認ポイントを学ぶPDFです。", vi: "Tìm hiểu cơ chế quỹ đầu tư, rủi ro và điểm cần kiểm tra.", en: "Learn how investment trusts work, what risks to check, and what questions to ask." },
    audience: { ja: "投資信託を検討している人", vi: "Người đang cân nhắc quỹ đầu tư", en: "People considering investment trusts" },
    filename: "04_investment_trusts_risk_detailed_expert_full.pdf",
    tags: [{ ja: "投資信託", vi: "Quỹ đầu tư", en: "Investment trusts" }, { ja: "リスク", vi: "Rủi ro", en: "Risk" }],
  }),
  freePdfMaterial({
    id: "investment-trusts-risk-vn",
    title: { ja: "投資信託とリスク ベトナム語版", vi: "Quỹ đầu tư và rủi ro", en: "Investment Trusts and Risk - Vietnamese Edition" },
    description: { ja: "投資信託とリスクをベトナム語で整理します。", vi: "Tài liệu tiếng Việt về quỹ đầu tư và rủi ro.", en: "A Vietnamese-language PDF that explains investment trusts and their risks." },
    audience: { ja: "投資リスクを理解したい人", vi: "Người muốn hiểu rủi ro đầu tư", en: "People who want to understand investment risk" },
    filename: "04_quy_dau_tu_va_rui_ro_vn.pdf",
    tags: [{ ja: "投資", vi: "Đầu tư", en: "Investing" }, { ja: "リスク", vi: "Rủi ro", en: "Risk" }],
  }),
  freePdfMaterial({
    id: "beginner-mistakes-jp",
    title: { ja: "初心者が避けたい失敗 詳細版", vi: "Sai lầm người mới cần tránh - bản chi tiết", en: "Beginner Mistakes to Avoid - Detailed Guide" },
    description: { ja: "お金や投資で初心者がつまずきやすいポイントを整理します。", vi: "Tóm tắt các sai lầm người mới thường gặp về tiền bạc và đầu tư.", en: "Review common money and investing mistakes beginners often run into." },
    audience: { ja: "これから学び始める人", vi: "Người mới bắt đầu học", en: "People just starting to learn" },
    filename: "05_beginner_mistakes_detailed_expert_full.pdf",
    tags: [{ ja: "初心者", vi: "Người mới", en: "Beginner" }, { ja: "注意点", vi: "Điểm cần tránh", en: "Cautions" }],
  }),
  freePdfMaterial({
    id: "beginner-mistakes-vn",
    title: { ja: "初心者が避けたい失敗 ベトナム語版", vi: "Sai lầm người mới cần tránh", en: "Beginner Mistakes to Avoid - Vietnamese Edition" },
    description: { ja: "初心者向けの失敗予防をベトナム語で学べます。", vi: "Tài liệu tiếng Việt giúp người mới tránh sai lầm tài chính.", en: "A Vietnamese-language PDF to help beginners avoid common financial mistakes." },
    audience: { ja: "ベトナム語で基礎から学びたい人", vi: "Người muốn học cơ bản bằng tiếng Việt", en: "People who want to learn the basics in Vietnamese" },
    filename: "05_sai_lam_nguoi_moi_can_tranh_vn.pdf",
    tags: [{ ja: "初心者", vi: "Người mới", en: "Beginner" }, { ja: "金融教育", vi: "Giáo dục tài chính", en: "Financial education" }],
  }),
  freePdfMaterial({
    id: "bank-remittance-fx-jp",
    title: { ja: "銀行口座・送金・為替", vi: "Tài khoản ngân hàng, chuyển tiền, tỷ giá", en: "Bank Accounts, Remittances, and Exchange Rates" },
    description: { ja: "銀行口座、海外送金、為替の基本を整理します。", vi: "Tóm tắt tài khoản ngân hàng, chuyển tiền và tỷ giá.", en: "Understand the basics of bank accounts, overseas remittances, and exchange rates." },
    audience: { ja: "送金や銀行利用が多い人", vi: "Người thường chuyển tiền hoặc dùng ngân hàng", en: "People who often use banks or send money overseas" },
    filename: "06_bank_remittance_fx_jp.pdf",
    tags: [{ ja: "銀行", vi: "Ngân hàng", en: "Banking" }, { ja: "送金", vi: "Chuyển tiền", en: "Remittance" }],
  }),
  freePdfMaterial({
    id: "bank-remittance-fx-vn",
    title: { ja: "銀行口座・送金・為替 ベトナム語版", vi: "Tài khoản ngân hàng, chuyển tiền, tỷ giá", en: "Bank Accounts, Remittances, and Exchange Rates - Vietnamese Edition" },
    description: { ja: "銀行・送金・為替の注意点をベトナム語で確認できます。", vi: "Kiểm tra bằng tiếng Việt về ngân hàng, chuyển tiền và tỷ giá.", en: "A Vietnamese-language guide to banking, remittances, and exchange-rate cautions." },
    audience: { ja: "母国送金をする人", vi: "Người chuyển tiền về quê", en: "People who send money back home" },
    filename: "06_tai_khoan_ngan_hang_chuyen_tien_ty_gia_vn.pdf",
    tags: [{ ja: "送金", vi: "Chuyển tiền", en: "Remittance" }, { ja: "為替", vi: "Tỷ giá", en: "Exchange rates" }],
  }),
  freePdfMaterial({
    id: "insurance-review-jp",
    title: { ja: "保険の見直し", vi: "Rà soát bảo hiểm", en: "Insurance Review" },
    description: { ja: "必要な保険と不要になりやすい保険を考えるPDFです。", vi: "Tài liệu giúp xem bảo hiểm nào cần thiết và không cần thiết.", en: "Think through which insurance may be necessary and which coverage may be unnecessary." },
    audience: { ja: "保険を見直したい人", vi: "Người muốn rà soát bảo hiểm", en: "People who want to review their insurance" },
    filename: "07_insurance_review_jp.pdf",
    tags: [{ ja: "保険", vi: "Bảo hiểm", en: "Insurance" }, { ja: "見直し", vi: "Rà soát", en: "Review" }],
  }),
  freePdfMaterial({
    id: "insurance-review-vn",
    title: { ja: "保険の見直し ベトナム語版", vi: "Rà soát bảo hiểm cần thiết", en: "Insurance Review - Vietnamese Edition" },
    description: { ja: "保険の必要性をベトナム語で整理します。", vi: "Sắp xếp bằng tiếng Việt về bảo hiểm cần thiết.", en: "A Vietnamese-language guide to thinking about necessary insurance coverage." },
    audience: { ja: "保険加入で迷う人", vi: "Người đang phân vân về bảo hiểm", en: "People unsure about buying insurance" },
    filename: "07_ra_soat_bao_hiem_can_thiet_vn.pdf",
    tags: [{ ja: "保険", vi: "Bảo hiểm", en: "Insurance" }, { ja: "生活", vi: "Đời sống", en: "Daily life" }],
  }),
  freePdfMaterial({
    id: "housing-credit-jp",
    title: { ja: "住まい・賃貸・信用", vi: "Nhà ở, thuê nhà và tín dụng", en: "Housing, Rentals, and Credit" },
    description: { ja: "住まい、賃貸契約、信用情報の基本を整理します。", vi: "Tóm tắt nhà ở, hợp đồng thuê và tín dụng.", en: "Review the basics of housing, rental contracts, and credit information in Japan." },
    audience: { ja: "賃貸や信用が不安な人", vi: "Người lo về thuê nhà hoặc tín dụng", en: "People worried about rentals or credit" },
    filename: "08_housing_credit_jp.pdf",
    tags: [{ ja: "住まい", vi: "Nhà ở", en: "Housing" }, { ja: "信用", vi: "Tín dụng", en: "Credit" }],
  }),
  freePdfMaterial({
    id: "housing-credit-vn",
    title: { ja: "住まい・賃貸・信用 ベトナム語版", vi: "Nhà ở, thuê nhà và vay tín dụng", en: "Housing, Rentals, and Credit - Vietnamese Edition" },
    description: { ja: "住まいと信用の注意点をベトナム語で学べます。", vi: "Tài liệu tiếng Việt về nhà ở, thuê nhà và tín dụng.", en: "A Vietnamese-language PDF about housing, rentals, and credit cautions." },
    audience: { ja: "日本で部屋を借りる人", vi: "Người thuê nhà tại Nhật", en: "People renting a home in Japan" },
    filename: "08_nha_o_thue_nha_vay_tin_dung_vn.pdf",
    tags: [{ ja: "賃貸", vi: "Thuê nhà", en: "Rentals" }, { ja: "信用", vi: "Tín dụng", en: "Credit" }],
  }),
  freePdfMaterial({
    id: "lifeplan-jp",
    title: { ja: "日本・ベトナム ライフプラン", vi: "Kế hoạch tài chính Nhật-Việt", en: "Japan-Vietnam Life Planning" },
    description: { ja: "日本とベトナムをまたぐ将来設計とお金の考え方を整理します。", vi: "Sắp xếp kế hoạch tương lai và tiền bạc giữa Nhật và Việt Nam.", en: "Organize future planning and money decisions across Japan and Vietnam." },
    audience: { ja: "将来設計を考えたい人", vi: "Người muốn lập kế hoạch tương lai", en: "People who want to plan their future" },
    filename: "09_japan_vietnam_lifeplan_jp.pdf",
    tags: [{ ja: "ライフプラン", vi: "Kế hoạch", en: "Life planning" }, { ja: "日越", vi: "Nhật-Việt", en: "Japan-Vietnam" }],
  }),
  freePdfMaterial({
    id: "lifeplan-vn",
    title: { ja: "日本・ベトナム ライフプラン ベトナム語版", vi: "Kế hoạch tài chính Nhật-Việt", en: "Japan-Vietnam Life Planning - Vietnamese Edition" },
    description: { ja: "日越の将来設計をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về kế hoạch tài chính Nhật-Việt.", en: "A Vietnamese-language PDF for planning your future between Japan and Vietnam." },
    audience: { ja: "日本とベトナムの将来を考える人", vi: "Người suy nghĩ về tương lai giữa Nhật và Việt", en: "People thinking about their future between Japan and Vietnam" },
    filename: "09_ke_hoach_tai_chinh_nhat_viet_vn.pdf",
    tags: [{ ja: "将来設計", vi: "Kế hoạch tương lai", en: "Future planning" }, { ja: "家族", vi: "Gia đình", en: "Family" }],
  }),
  freePdfMaterial({
    id: "fraud-prevention-jp",
    title: { ja: "金融詐欺予防", vi: "Phòng tránh lừa đảo tài chính", en: "Financial Scam Prevention" },
    description: { ja: "投資詐欺、SNS勧誘、送金前の危険サインを整理します。", vi: "Tóm tắt dấu hiệu nguy hiểm của lừa đảo đầu tư, SNS và chuyển tiền.", en: "Review warning signs before investing, responding to social-media offers, or sending money." },
    audience: { ja: "怪しい投資話を確認したい人", vi: "Người muốn kiểm tra lời mời đầu tư đáng ngờ", en: "People who want to check a suspicious investment offer" },
    filename: "10_financial_fraud_prevention_jp.pdf",
    tags: [{ ja: "詐欺予防", vi: "Chống lừa đảo", en: "Scam prevention" }, { ja: "投資話", vi: "Lời mời đầu tư", en: "Investment offers" }],
  }),
  freePdfMaterial({
    id: "fraud-prevention-vn",
    title: { ja: "金融詐欺予防 ベトナム語版", vi: "Phòng tránh lừa đảo tài chính", en: "Financial Scam Prevention - Vietnamese Edition" },
    description: { ja: "金融詐欺の危険サインをベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về dấu hiệu lừa đảo tài chính.", en: "A Vietnamese-language guide to warning signs of financial scams." },
    audience: { ja: "送金・投資前に確認したい人", vi: "Người muốn kiểm tra trước khi chuyển tiền/đầu tư", en: "People who want to check before sending money or investing" },
    filename: "10_phong_tranh_lua_dao_tai_chinh_vn.pdf",
    tags: [{ ja: "詐欺", vi: "Lừa đảo", en: "Scams" }, { ja: "安全確認", vi: "Kiểm tra an toàn", en: "Safety check" }],
  }),
  freePdfMaterial({
    id: "emergency-fund-jp",
    title: { ja: "緊急資金", vi: "Quỹ dự phòng khẩn cấp", en: "Emergency Fund" },
    description: { ja: "急な出費に備える生活防衛資金の考え方を整理します。", vi: "Tóm tắt cách chuẩn bị quỹ dự phòng cho chi phí bất ngờ.", en: "Learn how to prepare a financial cushion for unexpected expenses." },
    audience: { ja: "貯金の優先順位を知りたい人", vi: "Người muốn biết ưu tiên tiết kiệm", en: "People who want to prioritize savings" },
    filename: "11_emergency_fund_jp.pdf",
    tags: [{ ja: "貯金", vi: "Tiết kiệm", en: "Savings" }, { ja: "緊急資金", vi: "Quỹ khẩn cấp", en: "Emergency fund" }],
  }),
  freePdfMaterial({
    id: "emergency-fund-vn",
    title: { ja: "緊急資金 ベトナム語版", vi: "Quỹ dự phòng khẩn cấp", en: "Emergency Fund - Vietnamese Edition" },
    description: { ja: "緊急資金の作り方をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về cách xây dựng quỹ dự phòng.", en: "A Vietnamese-language PDF on how to build an emergency fund." },
    audience: { ja: "生活の安心を作りたい人", vi: "Người muốn tạo sự an tâm tài chính", en: "People who want more financial peace of mind" },
    filename: "11_quy_du_phong_khan_cap_vn.pdf",
    tags: [{ ja: "生活防衛", vi: "Bảo vệ đời sống", en: "Financial safety" }, { ja: "貯金", vi: "Tiết kiệm", en: "Savings" }],
  }),
  freePdfMaterial({
    id: "payslip-takehome-vn",
    title: { ja: "給与明細・手取り・残業 ベトナム語版", vi: "Bảng lương, thực nhận và tăng ca", en: "Pay Slips, Take-Home Pay, and Overtime - Vietnamese Edition" },
    description: { ja: "給与明細、手取り、残業代の見方をベトナム語で整理します。", vi: "Giải thích cách xem bảng lương, lương thực nhận và tăng ca.", en: "A Vietnamese-language guide to reading pay slips, take-home pay, and overtime pay." },
    audience: { ja: "給与明細を理解したい人", vi: "Người muốn hiểu bảng lương", en: "People who want to understand their pay slips" },
    filename: "12_bang_luong_thuc_nhan_tang_ca_vn.pdf",
    tags: [{ ja: "給与明細", vi: "Bảng lương", en: "Pay slips" }, { ja: "残業", vi: "Tăng ca", en: "Overtime" }],
  }),
  freePdfMaterial({
    id: "payslip-takehome-jp",
    title: { ja: "給与明細・手取り・残業", vi: "Bảng lương, thực nhận và tăng ca", en: "Pay Slips, Take-Home Pay, and Overtime" },
    description: { ja: "給与明細、控除、手取り、残業代の基本を整理します。", vi: "Tóm tắt bảng lương, khấu trừ, thực nhận và tăng ca.", en: "Review the basics of pay slips, deductions, take-home pay, and overtime pay." },
    audience: { ja: "給料の内訳を確認したい人", vi: "Người muốn kiểm tra chi tiết lương", en: "People who want to understand salary details" },
    filename: "12_payslip_takehome_overtime_jp.pdf",
    tags: [{ ja: "給与", vi: "Lương", en: "Salary" }, { ja: "手取り", vi: "Thực nhận", en: "Take-home pay" }],
  }),
  freePdfMaterial({
    id: "credit-card-debt-jp",
    title: { ja: "クレジットカードと借金管理", vi: "Thẻ tín dụng và quản lý nợ", en: "Credit Cards and Debt Management" },
    description: { ja: "カード利用、リボ払い、借金管理の注意点を整理します。", vi: "Tóm tắt thẻ tín dụng, trả góp/revolving và quản lý nợ.", en: "Review cautions around credit card use, revolving payments, and debt management." },
    audience: { ja: "カードや借金を整理したい人", vi: "Người muốn quản lý thẻ và nợ", en: "People who want to organize card use and debt" },
    filename: "13_credit_card_debt_management_jp.pdf",
    tags: [{ ja: "カード", vi: "Thẻ", en: "Cards" }, { ja: "借金", vi: "Nợ", en: "Debt" }],
  }),
  freePdfMaterial({
    id: "credit-card-debt-vn",
    title: { ja: "クレジットカードと借金管理 ベトナム語版", vi: "Thẻ tín dụng và quản lý nợ", en: "Credit Cards and Debt Management - Vietnamese Edition" },
    description: { ja: "カードと借金管理をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về thẻ tín dụng và quản lý nợ.", en: "A Vietnamese-language guide to credit cards and debt management." },
    audience: { ja: "返済やカード利用が不安な人", vi: "Người lo về trả nợ hoặc dùng thẻ", en: "People worried about repayment or card use" },
    filename: "13_the_tin_dung_quan_ly_no_vn.pdf",
    tags: [{ ja: "クレカ", vi: "Thẻ tín dụng", en: "Credit cards" }, { ja: "返済", vi: "Trả nợ", en: "Repayment" }],
  }),
  freePdfMaterial({
    id: "education-family-remittance-jp",
    title: { ja: "教育・子育て・仕送り", vi: "Giáo dục, nuôi con và gửi tiền", en: "Education, Parenting, and Family Remittances" },
    description: { ja: "教育費、子育て、家族への仕送りの考え方を整理します。", vi: "Tóm tắt chi phí giáo dục, nuôi con và gửi tiền cho gia đình.", en: "Organize ideas around education costs, parenting, and sending money to family." },
    audience: { ja: "家族のお金を考えたい人", vi: "Người muốn lập kế hoạch tiền bạc cho gia đình", en: "People planning family finances" },
    filename: "14_education_family_remittance_jp.pdf",
    tags: [{ ja: "教育費", vi: "Giáo dục", en: "Education costs" }, { ja: "仕送り", vi: "Gửi tiền", en: "Remittances" }],
  }),
  freePdfMaterial({
    id: "education-family-remittance-vn",
    title: { ja: "教育・子育て・仕送り ベトナム語版", vi: "Giáo dục, nuôi con, gửi tiền", en: "Education, Parenting, and Family Remittances - Vietnamese Edition" },
    description: { ja: "教育・子育て・仕送りをベトナム語で整理します。", vi: "Tài liệu tiếng Việt về giáo dục, nuôi con và gửi tiền.", en: "A Vietnamese-language PDF about education, parenting, and sending money to family." },
    audience: { ja: "家族への支援を考える人", vi: "Người hỗ trợ tài chính cho gia đình", en: "People supporting family financially" },
    filename: "14_giao_duc_nuoi_con_gui_tien_vn.pdf",
    tags: [{ ja: "家族", vi: "Gia đình", en: "Family" }, { ja: "仕送り", vi: "Gửi tiền", en: "Remittances" }],
  }),
  freePdfMaterial({
    id: "return-residence-retirement-jp",
    title: { ja: "帰国・定住・老後戦略", vi: "Về nước, định cư và tuổi già", en: "Returning Home, Settling Down, and Retirement Strategy" },
    description: { ja: "日本に残る、帰国する、老後を考えるためのお金の整理PDFです。", vi: "Tài liệu suy nghĩ về ở lại Nhật, về nước và kế hoạch tuổi già.", en: "Organize money decisions for staying in Japan, returning home, or planning retirement." },
    audience: { ja: "長期の将来設計を考えたい人", vi: "Người muốn lập kế hoạch dài hạn", en: "People thinking about long-term planning" },
    filename: "15_return_residence_retirement_strategy_jp.pdf",
    tags: [{ ja: "老後", vi: "Tuổi già", en: "Retirement" }, { ja: "定住", vi: "Định cư", en: "Settling down" }],
  }),
  freePdfMaterial({
    id: "return-residence-retirement-vn",
    title: { ja: "帰国・定住・老後戦略 ベトナム語版", vi: "Về nước, định cư, tuổi già", en: "Returning Home, Settling Down, and Retirement Strategy - Vietnamese Edition" },
    description: { ja: "帰国・定住・老後の計画をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về về nước, định cư và tuổi già.", en: "A Vietnamese-language PDF about returning home, settling down, and retirement planning." },
    audience: { ja: "日本とベトナムの将来を考える人", vi: "Người suy nghĩ tương lai giữa Nhật và Việt", en: "People thinking about their future between Japan and Vietnam" },
    filename: "15_ve_nuoc_dinh_cu_tuoi_gia_vn.pdf",
    tags: [{ ja: "帰国", vi: "Về nước", en: "Returning home" }, { ja: "老後", vi: "Tuổi già", en: "Retirement" }],
  }),
] satisfies readonly PdfMaterial[];
