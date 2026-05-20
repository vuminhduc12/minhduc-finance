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
    ja: "まずは無料PDFから始め、反応がある教材だけ将来の販売・会員機能へ拡張します。",
    vi: "Bắt đầu bằng PDF miễn phí, sau đó mở rộng những tài liệu có nhu cầu sang bán hàng hoặc hội viên.",
  } satisfies Bi,
  title: {
    ja: "PDF教材ライブラリ",
    vi: "Thư viện tài liệu PDF",
  } satisfies Bi,
  lead: {
    ja: "PDF本体は低コストに配信し、教材情報はデータで管理します。将来は同じデータを使ってStripe決済、会員限定、購入履歴に接続できます。",
    vi: "PDF được phân phối chi phí thấp, còn thông tin tài liệu được quản lý bằng dữ liệu. Sau này có thể nối cùng dữ liệu này với Stripe, hội viên và lịch sử mua.",
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
    title: { ja: "家計管理と節約 詳細版", vi: "Quản lý chi tiêu và tiết kiệm - bản chi tiết" },
    description: { ja: "毎月の支出整理、固定費、貯金の考え方を学ぶPDFです。", vi: "Tài liệu học cách quản lý chi tiêu, chi phí cố định và tiết kiệm hàng tháng." },
    audience: { ja: "家計を整えたい人", vi: "Người muốn sắp xếp tài chính gia đình" },
    filename: "01_household_budget_savings_detailed_expert_full.pdf",
    tags: [{ ja: "家計", vi: "Chi tiêu" }, { ja: "節約", vi: "Tiết kiệm" }],
  }),
  freePdfMaterial({
    id: "household-budget-savings-vn",
    title: { ja: "家計管理と節約 ベトナム語版", vi: "Quản lý chi tiêu và tiết kiệm" },
    description: { ja: "ベトナム語で家計管理と節約の基本を学べるPDFです。", vi: "Tài liệu tiếng Việt về quản lý chi tiêu và tiết kiệm cơ bản." },
    audience: { ja: "ベトナム語で学びたい人", vi: "Người muốn học bằng tiếng Việt" },
    filename: "01_quan_ly_chi_tieu_va_tiet_kiem_vn.pdf",
    tags: [{ ja: "家計", vi: "Chi tiêu" }, { ja: "節約", vi: "Tiết kiệm" }],
  }),
  freePdfMaterial({
    id: "tax-social-security-pension-jp",
    title: { ja: "税金・社会保険・年金 詳細版", vi: "Thuế, bảo hiểm xã hội và lương hưu - bản chi tiết" },
    description: { ja: "日本で働く時に必要な税金、社会保険、年金の基本を整理します。", vi: "Tóm tắt thuế, bảo hiểm xã hội và lương hưu khi làm việc tại Nhật." },
    audience: { ja: "給与明細や制度を理解したい人", vi: "Người muốn hiểu bảng lương và chế độ" },
    filename: "02_tax_social_security_pension_detailed_expert_full.pdf",
    tags: [{ ja: "税金", vi: "Thuế" }, { ja: "年金", vi: "Lương hưu" }],
  }),
  freePdfMaterial({
    id: "tax-social-security-pension-vn",
    title: { ja: "税金・社会保険・年金 ベトナム語版", vi: "Thuế, bảo hiểm xã hội, lương hưu tại Nhật" },
    description: { ja: "税金・社会保険・年金をベトナム語で確認できます。", vi: "Giải thích bằng tiếng Việt về thuế, bảo hiểm xã hội và lương hưu." },
    audience: { ja: "制度をベトナム語で確認したい人", vi: "Người muốn kiểm tra chế độ bằng tiếng Việt" },
    filename: "02_thue_bao_hiem_xa_hoi_luong_huu_nhat_vn.pdf",
    tags: [{ ja: "税金", vi: "Thuế" }, { ja: "社会保険", vi: "Bảo hiểm xã hội" }],
  }),
  freePdfMaterial({
    id: "nisa-ideco-basics-jp",
    title: { ja: "NISA・iDeCo 基礎 詳細版", vi: "NISA và iDeCo cơ bản - bản chi tiết" },
    description: { ja: "NISAとiDeCoの基礎、メリット、注意点を整理します。", vi: "Tóm tắt cơ bản, lợi ích và điểm cần chú ý của NISA/iDeCo." },
    audience: { ja: "資産形成を始めたい人", vi: "Người muốn bắt đầu xây dựng tài sản" },
    filename: "03_nisa_ideco_basics_detailed_expert_full.pdf",
    tags: [{ ja: "NISA", vi: "NISA" }, { ja: "iDeCo", vi: "iDeCo" }],
  }),
  freePdfMaterial({
    id: "nisa-ideco-basics-vn",
    title: { ja: "NISA・iDeCo 基礎 ベトナム語版", vi: "NISA và iDeCo cơ bản" },
    description: { ja: "NISAとiDeCoの基本をベトナム語で学べます。", vi: "Tài liệu tiếng Việt về kiến thức cơ bản của NISA và iDeCo." },
    audience: { ja: "NISA/iDeCoをベトナム語で知りたい人", vi: "Người muốn hiểu NISA/iDeCo bằng tiếng Việt" },
    filename: "03_nisa_va_ideco_co_ban_vn.pdf",
    tags: [{ ja: "NISA", vi: "NISA" }, { ja: "投資", vi: "Đầu tư" }],
  }),
  freePdfMaterial({
    id: "investment-trusts-risk-jp",
    title: { ja: "投資信託とリスク 詳細版", vi: "Quỹ đầu tư và rủi ro - bản chi tiết" },
    description: { ja: "投資信託の仕組み、リスク、確認ポイントを学ぶPDFです。", vi: "Tìm hiểu cơ chế quỹ đầu tư, rủi ro và điểm cần kiểm tra." },
    audience: { ja: "投資信託を検討している人", vi: "Người đang cân nhắc quỹ đầu tư" },
    filename: "04_investment_trusts_risk_detailed_expert_full.pdf",
    tags: [{ ja: "投資信託", vi: "Quỹ đầu tư" }, { ja: "リスク", vi: "Rủi ro" }],
  }),
  freePdfMaterial({
    id: "investment-trusts-risk-vn",
    title: { ja: "投資信託とリスク ベトナム語版", vi: "Quỹ đầu tư và rủi ro" },
    description: { ja: "投資信託とリスクをベトナム語で整理します。", vi: "Tài liệu tiếng Việt về quỹ đầu tư và rủi ro." },
    audience: { ja: "投資リスクを理解したい人", vi: "Người muốn hiểu rủi ro đầu tư" },
    filename: "04_quy_dau_tu_va_rui_ro_vn.pdf",
    tags: [{ ja: "投資", vi: "Đầu tư" }, { ja: "リスク", vi: "Rủi ro" }],
  }),
  freePdfMaterial({
    id: "beginner-mistakes-jp",
    title: { ja: "初心者が避けたい失敗 詳細版", vi: "Sai lầm người mới cần tránh - bản chi tiết" },
    description: { ja: "お金や投資で初心者がつまずきやすいポイントを整理します。", vi: "Tóm tắt các sai lầm người mới thường gặp về tiền bạc và đầu tư." },
    audience: { ja: "これから学び始める人", vi: "Người mới bắt đầu học" },
    filename: "05_beginner_mistakes_detailed_expert_full.pdf",
    tags: [{ ja: "初心者", vi: "Người mới" }, { ja: "注意点", vi: "Điểm cần tránh" }],
  }),
  freePdfMaterial({
    id: "beginner-mistakes-vn",
    title: { ja: "初心者が避けたい失敗 ベトナム語版", vi: "Sai lầm người mới cần tránh" },
    description: { ja: "初心者向けの失敗予防をベトナム語で学べます。", vi: "Tài liệu tiếng Việt giúp người mới tránh sai lầm tài chính." },
    audience: { ja: "ベトナム語で基礎から学びたい人", vi: "Người muốn học cơ bản bằng tiếng Việt" },
    filename: "05_sai_lam_nguoi_moi_can_tranh_vn.pdf",
    tags: [{ ja: "初心者", vi: "Người mới" }, { ja: "金融教育", vi: "Giáo dục tài chính" }],
  }),
  freePdfMaterial({
    id: "bank-remittance-fx-jp",
    title: { ja: "銀行口座・送金・為替", vi: "Tài khoản ngân hàng, chuyển tiền, tỷ giá" },
    description: { ja: "銀行口座、海外送金、為替の基本を整理します。", vi: "Tóm tắt tài khoản ngân hàng, chuyển tiền và tỷ giá." },
    audience: { ja: "送金や銀行利用が多い人", vi: "Người thường chuyển tiền hoặc dùng ngân hàng" },
    filename: "06_bank_remittance_fx_jp.pdf",
    tags: [{ ja: "銀行", vi: "Ngân hàng" }, { ja: "送金", vi: "Chuyển tiền" }],
  }),
  freePdfMaterial({
    id: "bank-remittance-fx-vn",
    title: { ja: "銀行口座・送金・為替 ベトナム語版", vi: "Tài khoản ngân hàng, chuyển tiền, tỷ giá" },
    description: { ja: "銀行・送金・為替の注意点をベトナム語で確認できます。", vi: "Kiểm tra bằng tiếng Việt về ngân hàng, chuyển tiền và tỷ giá." },
    audience: { ja: "母国送金をする人", vi: "Người chuyển tiền về quê" },
    filename: "06_tai_khoan_ngan_hang_chuyen_tien_ty_gia_vn.pdf",
    tags: [{ ja: "送金", vi: "Chuyển tiền" }, { ja: "為替", vi: "Tỷ giá" }],
  }),
  freePdfMaterial({
    id: "insurance-review-jp",
    title: { ja: "保険の見直し", vi: "Rà soát bảo hiểm" },
    description: { ja: "必要な保険と不要になりやすい保険を考えるPDFです。", vi: "Tài liệu giúp xem bảo hiểm nào cần thiết và không cần thiết." },
    audience: { ja: "保険を見直したい人", vi: "Người muốn rà soát bảo hiểm" },
    filename: "07_insurance_review_jp.pdf",
    tags: [{ ja: "保険", vi: "Bảo hiểm" }, { ja: "見直し", vi: "Rà soát" }],
  }),
  freePdfMaterial({
    id: "insurance-review-vn",
    title: { ja: "保険の見直し ベトナム語版", vi: "Rà soát bảo hiểm cần thiết" },
    description: { ja: "保険の必要性をベトナム語で整理します。", vi: "Sắp xếp bằng tiếng Việt về bảo hiểm cần thiết." },
    audience: { ja: "保険加入で迷う人", vi: "Người đang phân vân về bảo hiểm" },
    filename: "07_ra_soat_bao_hiem_can_thiet_vn.pdf",
    tags: [{ ja: "保険", vi: "Bảo hiểm" }, { ja: "生活", vi: "Đời sống" }],
  }),
  freePdfMaterial({
    id: "housing-credit-jp",
    title: { ja: "住まい・賃貸・信用", vi: "Nhà ở, thuê nhà và tín dụng" },
    description: { ja: "住まい、賃貸契約、信用情報の基本を整理します。", vi: "Tóm tắt nhà ở, hợp đồng thuê và tín dụng." },
    audience: { ja: "賃貸や信用が不安な人", vi: "Người lo về thuê nhà hoặc tín dụng" },
    filename: "08_housing_credit_jp.pdf",
    tags: [{ ja: "住まい", vi: "Nhà ở" }, { ja: "信用", vi: "Tín dụng" }],
  }),
  freePdfMaterial({
    id: "housing-credit-vn",
    title: { ja: "住まい・賃貸・信用 ベトナム語版", vi: "Nhà ở, thuê nhà và vay tín dụng" },
    description: { ja: "住まいと信用の注意点をベトナム語で学べます。", vi: "Tài liệu tiếng Việt về nhà ở, thuê nhà và tín dụng." },
    audience: { ja: "日本で部屋を借りる人", vi: "Người thuê nhà tại Nhật" },
    filename: "08_nha_o_thue_nha_vay_tin_dung_vn.pdf",
    tags: [{ ja: "賃貸", vi: "Thuê nhà" }, { ja: "信用", vi: "Tín dụng" }],
  }),
  freePdfMaterial({
    id: "lifeplan-jp",
    title: { ja: "日本・ベトナム ライフプラン", vi: "Kế hoạch tài chính Nhật-Việt" },
    description: { ja: "日本とベトナムをまたぐ将来設計とお金の考え方を整理します。", vi: "Sắp xếp kế hoạch tương lai và tiền bạc giữa Nhật và Việt Nam." },
    audience: { ja: "将来設計を考えたい人", vi: "Người muốn lập kế hoạch tương lai" },
    filename: "09_japan_vietnam_lifeplan_jp.pdf",
    tags: [{ ja: "ライフプラン", vi: "Kế hoạch" }, { ja: "日越", vi: "Nhật-Việt" }],
  }),
  freePdfMaterial({
    id: "lifeplan-vn",
    title: { ja: "日本・ベトナム ライフプラン ベトナム語版", vi: "Kế hoạch tài chính Nhật-Việt" },
    description: { ja: "日越の将来設計をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về kế hoạch tài chính Nhật-Việt." },
    audience: { ja: "日本とベトナムの将来を考える人", vi: "Người suy nghĩ về tương lai giữa Nhật và Việt" },
    filename: "09_ke_hoach_tai_chinh_nhat_viet_vn.pdf",
    tags: [{ ja: "将来設計", vi: "Kế hoạch tương lai" }, { ja: "家族", vi: "Gia đình" }],
  }),
  freePdfMaterial({
    id: "fraud-prevention-jp",
    title: { ja: "金融詐欺予防", vi: "Phòng tránh lừa đảo tài chính" },
    description: { ja: "投資詐欺、SNS勧誘、送金前の危険サインを整理します。", vi: "Tóm tắt dấu hiệu nguy hiểm của lừa đảo đầu tư, SNS và chuyển tiền." },
    audience: { ja: "怪しい投資話を確認したい人", vi: "Người muốn kiểm tra lời mời đầu tư đáng ngờ" },
    filename: "10_financial_fraud_prevention_jp.pdf",
    tags: [{ ja: "詐欺予防", vi: "Chống lừa đảo" }, { ja: "投資話", vi: "Lời mời đầu tư" }],
  }),
  freePdfMaterial({
    id: "fraud-prevention-vn",
    title: { ja: "金融詐欺予防 ベトナム語版", vi: "Phòng tránh lừa đảo tài chính" },
    description: { ja: "金融詐欺の危険サインをベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về dấu hiệu lừa đảo tài chính." },
    audience: { ja: "送金・投資前に確認したい人", vi: "Người muốn kiểm tra trước khi chuyển tiền/đầu tư" },
    filename: "10_phong_tranh_lua_dao_tai_chinh_vn.pdf",
    tags: [{ ja: "詐欺", vi: "Lừa đảo" }, { ja: "安全確認", vi: "Kiểm tra an toàn" }],
  }),
  freePdfMaterial({
    id: "emergency-fund-jp",
    title: { ja: "緊急資金", vi: "Quỹ dự phòng khẩn cấp" },
    description: { ja: "急な出費に備える生活防衛資金の考え方を整理します。", vi: "Tóm tắt cách chuẩn bị quỹ dự phòng cho chi phí bất ngờ." },
    audience: { ja: "貯金の優先順位を知りたい人", vi: "Người muốn biết ưu tiên tiết kiệm" },
    filename: "11_emergency_fund_jp.pdf",
    tags: [{ ja: "貯金", vi: "Tiết kiệm" }, { ja: "緊急資金", vi: "Quỹ khẩn cấp" }],
  }),
  freePdfMaterial({
    id: "emergency-fund-vn",
    title: { ja: "緊急資金 ベトナム語版", vi: "Quỹ dự phòng khẩn cấp" },
    description: { ja: "緊急資金の作り方をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về cách xây dựng quỹ dự phòng." },
    audience: { ja: "生活の安心を作りたい人", vi: "Người muốn tạo sự an tâm tài chính" },
    filename: "11_quy_du_phong_khan_cap_vn.pdf",
    tags: [{ ja: "生活防衛", vi: "Bảo vệ đời sống" }, { ja: "貯金", vi: "Tiết kiệm" }],
  }),
  freePdfMaterial({
    id: "payslip-takehome-vn",
    title: { ja: "給与明細・手取り・残業 ベトナム語版", vi: "Bảng lương, thực nhận và tăng ca" },
    description: { ja: "給与明細、手取り、残業代の見方をベトナム語で整理します。", vi: "Giải thích cách xem bảng lương, lương thực nhận và tăng ca." },
    audience: { ja: "給与明細を理解したい人", vi: "Người muốn hiểu bảng lương" },
    filename: "12_bang_luong_thuc_nhan_tang_ca_vn.pdf",
    tags: [{ ja: "給与明細", vi: "Bảng lương" }, { ja: "残業", vi: "Tăng ca" }],
  }),
  freePdfMaterial({
    id: "payslip-takehome-jp",
    title: { ja: "給与明細・手取り・残業", vi: "Bảng lương, thực nhận và tăng ca" },
    description: { ja: "給与明細、控除、手取り、残業代の基本を整理します。", vi: "Tóm tắt bảng lương, khấu trừ, thực nhận và tăng ca." },
    audience: { ja: "給料の内訳を確認したい人", vi: "Người muốn kiểm tra chi tiết lương" },
    filename: "12_payslip_takehome_overtime_jp.pdf",
    tags: [{ ja: "給与", vi: "Lương" }, { ja: "手取り", vi: "Thực nhận" }],
  }),
  freePdfMaterial({
    id: "credit-card-debt-jp",
    title: { ja: "クレジットカードと借金管理", vi: "Thẻ tín dụng và quản lý nợ" },
    description: { ja: "カード利用、リボ払い、借金管理の注意点を整理します。", vi: "Tóm tắt thẻ tín dụng, trả góp/revolving và quản lý nợ." },
    audience: { ja: "カードや借金を整理したい人", vi: "Người muốn quản lý thẻ và nợ" },
    filename: "13_credit_card_debt_management_jp.pdf",
    tags: [{ ja: "カード", vi: "Thẻ" }, { ja: "借金", vi: "Nợ" }],
  }),
  freePdfMaterial({
    id: "credit-card-debt-vn",
    title: { ja: "クレジットカードと借金管理 ベトナム語版", vi: "Thẻ tín dụng và quản lý nợ" },
    description: { ja: "カードと借金管理をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về thẻ tín dụng và quản lý nợ." },
    audience: { ja: "返済やカード利用が不安な人", vi: "Người lo về trả nợ hoặc dùng thẻ" },
    filename: "13_the_tin_dung_quan_ly_no_vn.pdf",
    tags: [{ ja: "クレカ", vi: "Thẻ tín dụng" }, { ja: "返済", vi: "Trả nợ" }],
  }),
  freePdfMaterial({
    id: "education-family-remittance-jp",
    title: { ja: "教育・子育て・仕送り", vi: "Giáo dục, nuôi con và gửi tiền" },
    description: { ja: "教育費、子育て、家族への仕送りの考え方を整理します。", vi: "Tóm tắt chi phí giáo dục, nuôi con và gửi tiền cho gia đình." },
    audience: { ja: "家族のお金を考えたい人", vi: "Người muốn lập kế hoạch tiền bạc cho gia đình" },
    filename: "14_education_family_remittance_jp.pdf",
    tags: [{ ja: "教育費", vi: "Giáo dục" }, { ja: "仕送り", vi: "Gửi tiền" }],
  }),
  freePdfMaterial({
    id: "education-family-remittance-vn",
    title: { ja: "教育・子育て・仕送り ベトナム語版", vi: "Giáo dục, nuôi con, gửi tiền" },
    description: { ja: "教育・子育て・仕送りをベトナム語で整理します。", vi: "Tài liệu tiếng Việt về giáo dục, nuôi con và gửi tiền." },
    audience: { ja: "家族への支援を考える人", vi: "Người hỗ trợ tài chính cho gia đình" },
    filename: "14_giao_duc_nuoi_con_gui_tien_vn.pdf",
    tags: [{ ja: "家族", vi: "Gia đình" }, { ja: "仕送り", vi: "Gửi tiền" }],
  }),
  freePdfMaterial({
    id: "return-residence-retirement-jp",
    title: { ja: "帰国・定住・老後戦略", vi: "Về nước, định cư và tuổi già" },
    description: { ja: "日本に残る、帰国する、老後を考えるためのお金の整理PDFです。", vi: "Tài liệu suy nghĩ về ở lại Nhật, về nước và kế hoạch tuổi già." },
    audience: { ja: "長期の将来設計を考えたい人", vi: "Người muốn lập kế hoạch dài hạn" },
    filename: "15_return_residence_retirement_strategy_jp.pdf",
    tags: [{ ja: "老後", vi: "Tuổi già" }, { ja: "定住", vi: "Định cư" }],
  }),
  freePdfMaterial({
    id: "return-residence-retirement-vn",
    title: { ja: "帰国・定住・老後戦略 ベトナム語版", vi: "Về nước, định cư, tuổi già" },
    description: { ja: "帰国・定住・老後の計画をベトナム語で確認できます。", vi: "Tài liệu tiếng Việt về về nước, định cư và tuổi già." },
    audience: { ja: "日本とベトナムの将来を考える人", vi: "Người suy nghĩ tương lai giữa Nhật và Việt" },
    filename: "15_ve_nuoc_dinh_cu_tuoi_gia_vn.pdf",
    tags: [{ ja: "帰国", vi: "Về nước" }, { ja: "老後", vi: "Tuổi già" }],
  }),
] satisfies readonly PdfMaterial[];

export const pdfExpansionSteps = [
  {
    title: { ja: "今: 無料PDF", vi: "Hiện tại: PDF miễn phí" },
    body: {
      ja: "PDFを public/pdfs に置くだけで公開できます。サーバー代やDBは不要です。",
      vi: "Chỉ cần đặt PDF vào public/pdfs là có thể công khai. Không cần server riêng hay database.",
    },
  },
  {
    title: { ja: "次: 反応を見る", vi: "Tiếp theo: đo phản ứng" },
    body: {
      ja: "よく読まれるテーマを見て、有料教材やLINE相談の候補を絞ります。",
      vi: "Xem chủ đề nào được đọc nhiều để chọn tài liệu trả phí hoặc tư vấn LINE.",
    },
  },
  {
    title: { ja: "将来: 販売・会員", vi: "Tương lai: bán hàng/hội viên" },
    body: {
      ja: "PDFをSupabase StorageやS3/R2へ移し、Stripe決済・ログイン・期限付きURLで保護します。",
      vi: "Chuyển PDF sang Supabase Storage hoặc S3/R2, bảo vệ bằng Stripe, đăng nhập và URL có thời hạn.",
    },
  },
] as const;
