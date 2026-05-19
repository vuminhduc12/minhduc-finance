# minhduc-finance（サイト用リポジトリ）

在日ベトナム人向けの金融教育・情報サイトの MVP です。[Next.js](https://nextjs.org)（App Router）で構築しています。

## 前提

- [Node.js](https://nodejs.org/)（LTS 推奨）
- パッケージマネージャは **npm** を想定（`yarn` / `pnpm` でも可）

## セットアップと開発

依存関係のインストール:

```bash
npm install
```

開発サーバー起動（既定では http://localhost:3000）:

```bash
npm run dev
```

本番ビルドの確認:

```bash
npm run build
npm run start
```

コード品質:

```bash
npm run lint
```

## 本番公開前に必ず差し替える箇所

外部 URL やプレースホルダは `lib/constants.ts` にまとめています。公開前に実値へ更新してください。

| 定数 | 内容 |
|------|------|
| `LINE_BOT_URL` | LINE 友だち追加・Bot 導線 |
| `PDF_URL` | PDF 教材の案内・購入ページ |
| `NOTE_PROFILE_URL` | note などメインの発信ハブ |
| `CONTACT_MAILTO` | お問い合わせ用 `mailto:` |

## 文言・二言語について

完全な i18n（`/vi` 切り替え等）は MVP では入れていません。代わりに **`lib/copy/`** に日本語・ベトナム語の文言を定数として分離し、画面では併記する形にしています。トップ・詐欺チェックは日越併記、プロフィールは日本語本文＋ベトナム語要約が中心です。

- 型: `lib/copy/types.ts`（`Bi` = `{ ja, vi }`）
- セクション用コピー: `lib/copy/home.ts`, `scam-check.ts`, `profile.ts` など
- CTA 文言の共有: `lib/copy/cta.ts`

## 主要ページ（ルート）

| パス | 概要 |
|------|------|
| `/` | トップ |
| `/scam-check` | 詐欺チェック（LINE Bot）の紹介 |
| `/profile` | 運営者プロフィール |
| `/contact` | お問い合わせ |
| `/privacy` | プライバシーポリシー（ひな形） |
| `/disclaimer` | 免責事項（ひな形） |

## デプロイ

Next.js の標準的なホスティング（例: [Vercel](https://vercel.com)）にそのまま載せられます。詳細は [Next.js のデプロイ手順](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。

## 参考リンク（Next.js 公式）

- [Next.js ドキュメント](https://nextjs.org/docs)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
# minhduc-finance
