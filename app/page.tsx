import type { Metadata } from "next";
import { HomePageSections } from "@/components/sections/home/HomePageSections";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "在日ベトナム人 金融教育の学び場。日本 お金 勉強 ベトナム人向けに、給与明細 税金 社会保険、NISA ベトナム人 日本、詐欺予防 日本 ベトナム人の情報をやさしく整理します。",
  keywords: [
    "在日ベトナム人 金融教育",
    "日本 お金 勉強 ベトナム人",
    "NISA ベトナム人 日本",
    "詐欺予防 日本 ベトナム人",
    "給与明細 税金 社会保険",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomePageSections />;
}
