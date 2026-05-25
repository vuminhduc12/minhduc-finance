/**
 * 外部リンク・差し替えポイント（本番前に実URLへ更新）
 */
export const LINE_BOT_URL =
  process.env.NEXT_PUBLIC_LINE_BOT_URL ??
  "https://line.me/R/ti/p/@DUMMY_LINE_BOT_ID_REPLACE_ME";

/** PDF教材ライブラリ */
export const PDF_URL = "/materials";

/** note など、メインの発信ハブ */
export const NOTE_PROFILE_URL = "https://note.com/duc_vu_minh";

/** お問い合わせ */
export const CONTACT_MAILTO =
  process.env.NEXT_PUBLIC_CONTACT_MAILTO ??
  "mailto:contact@example.com?subject=Minh%20Duc%20Finance%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B";
