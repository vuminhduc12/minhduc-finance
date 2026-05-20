import type { Bi } from "@/lib/copy/types";

/** サイト全体で使う CTA（日本語行 + ベトナム語行。ButtonLink の children / subLabelVi に対応） */
export const cta = {
  lineCheckNow: {
    ja: "LINEで「この話」が危ないか見る",
    vi: "Kiểm tra trên LINE: lời mời này có nguy hiểm không?",
    en: "Check on LINE: is this offer risky?",
  },
  lineOrganizeFree: {
    ja: "LINEで話を整理する（無料）",
    vi: "Sắp xếp lại trên LINE (miễn phí)",
    en: "Organize the situation on LINE (free)",
  },
  lineCheckCurrent: {
    ja: "LINEでいまの話をチェック",
    vi: "Kiểm tra ngay trên LINE",
    en: "Check it on LINE now",
  },
  readScamCheckFirst: {
    ja: "先に読む（詐欺チェックとは）",
    vi: "Đọc trước (giới thiệu “kiểm tra lừa đảo”)",
    en: "Read first: what is scam checking?",
  },
  readMechanismFirst: {
    ja: "仕組みだけ先に読む",
    vi: "Chỉ đọc phần cách hoạt động",
    en: "Read how it works first",
  },
  lineCheckNowShort: {
    ja: "いまLINEでチェックする",
    vi: "Kiểm tra trên LINE ngay",
    en: "Check on LINE now",
  },
  flowOnlyLater: {
    ja: "あとでいい：流れだけ見る",
    vi: "Để sau: chỉ xem các bước",
    en: "Later: just view the flow",
  },
  pdfContentAndPurchase: {
    ja: "無料PDF教材を見る",
    vi: "Xem tài liệu PDF miễn phí",
    en: "View free PDF materials",
  },
  pdfConfirmContent: {
    ja: "PDFの内容を確認する",
    vi: "Xem nội dung PDF",
    en: "Check PDF contents",
  },
  profileRead: {
    ja: "どんな人かを見る",
    vi: "Xem người vận hành là ai",
    en: "See who runs this site",
  },
  profileCareer: {
    ja: "経歴と考え方を読む",
    vi: "Đọc kinh nghiệm và quan điểm",
    en: "Read background and approach",
  },
  noteOpen: {
    ja: "noteの記事を開く",
    vi: "Mở bài viết trên note",
    en: "Open the note article",
  },
  noteOpenShort: {
    ja: "noteを開く",
    vi: "Mở note",
    en: "Open note",
  },
  contact: {
    ja: "取材・連絡はこちら",
    vi: "Liên hệ / phỏng vấn",
    en: "Contact / interview request",
  },
  topBack: {
    ja: "トップへ戻る",
    vi: "Về trang chủ",
    en: "Back to top",
  },
  openMailApp: {
    ja: "メールアプリを開く",
    vi: "Mở ứng dụng email",
    en: "Open mail app",
  },
  scamCheckAboutLink: {
    ja: "詐欺チェックとは",
    vi: "Giới thiệu kiểm tra lừa đảo",
    en: "About scam checking",
  },
  lineCheckExternal: {
    ja: "LINEでチェック（外部）",
    vi: "Kiểm tra trên LINE (liên kết ngoài)",
    en: "Check on LINE (external)",
  },
} as const satisfies Record<string, Bi>;
