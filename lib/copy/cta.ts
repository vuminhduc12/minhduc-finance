import type { Bi } from "@/lib/copy/types";

/** サイト全体で使う CTA（日本語行 + ベトナム語行。ButtonLink の children / subLabelVi に対応） */
export const cta = {
  lineCheckNow: {
    ja: "LINEで「この話」が危ないか見る",
    vi: "Kiểm tra trên LINE: lời mời này có nguy hiểm không?",
  },
  lineOrganizeFree: {
    ja: "LINEで話を整理する（無料）",
    vi: "Sắp xếp lại trên LINE (miễn phí)",
  },
  lineCheckCurrent: {
    ja: "LINEでいまの話をチェック",
    vi: "Kiểm tra ngay trên LINE",
  },
  readScamCheckFirst: {
    ja: "先に読む（詐欺チェックとは）",
    vi: "Đọc trước (giới thiệu “kiểm tra lừa đảo”)",
  },
  readMechanismFirst: {
    ja: "仕組みだけ先に読む",
    vi: "Chỉ đọc phần cách hoạt động",
  },
  lineCheckNowShort: {
    ja: "いまLINEでチェックする",
    vi: "Kiểm tra trên LINE ngay",
  },
  flowOnlyLater: {
    ja: "あとでいい：流れだけ見る",
    vi: "Để sau: chỉ xem các bước",
  },
  pdfContentAndPurchase: {
    ja: "無料PDF教材を見る",
    vi: "Xem tài liệu PDF miễn phí",
  },
  pdfConfirmContent: {
    ja: "PDFの内容を確認する",
    vi: "Xem nội dung PDF",
  },
  profileRead: {
    ja: "どんな人かを見る",
    vi: "Xem người vận hành là ai",
  },
  profileCareer: {
    ja: "経歴と考え方を読む",
    vi: "Đọc kinh nghiệm và quan điểm",
  },
  noteOpen: {
    ja: "noteの記事を開く",
    vi: "Mở bài viết trên note",
  },
  noteOpenShort: {
    ja: "noteを開く",
    vi: "Mở note",
  },
  contact: {
    ja: "取材・連絡はこちら",
    vi: "Liên hệ / phỏng vấn",
  },
  topBack: {
    ja: "トップへ戻る",
    vi: "Về trang chủ",
  },
  openMailApp: {
    ja: "メールアプリを開く",
    vi: "Mở ứng dụng email",
  },
  scamCheckAboutLink: {
    ja: "詐欺チェックとは",
    vi: "Giới thiệu kiểm tra lừa đảo",
  },
  lineCheckExternal: {
    ja: "LINEでチェック（外部）",
    vi: "Kiểm tra trên LINE (liên kết ngoài)",
  },
} as const satisfies Record<string, Bi>;
