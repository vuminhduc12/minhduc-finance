import type { Metadata } from "next";
import { BiBlock } from "@/components/ui/Bilingual";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProfileBody } from "@/components/sections/profile/ProfileBody";
import { profileCopy } from "@/lib/copy/profile";

const title = "プロフィール";
const description =
  "Vu Minh Duc（ヴー・ミン・ドゥック）。在日ベトナム人向けに、お金の基礎、詐欺予防、将来の相談・研修・法人支援につながる活動を進めています。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/profile" },
  openGraph: { title, description },
};

export default function ProfilePage() {
  return (
    <>
      <PageIntro>
        <BiBlock text={profileCopy.pageIntro} viSize="sm" className="mx-auto max-w-2xl text-left sm:text-center" />
      </PageIntro>
      <ProfileBody />
    </>
  );
}
