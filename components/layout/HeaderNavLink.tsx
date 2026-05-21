"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteSectionIcon, type SiteSectionIconType } from "@/components/brand/SiteSectionIcon";

type Props = {
  href: string;
  icon: SiteSectionIconType;
  labelJa: string;
  labelVi: string;
  labelEn: string;
};

export function HeaderNavLink({ href, icon, labelJa, labelVi, labelEn }: Props) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`inline-flex min-h-9 items-center gap-2 rounded-xl px-3 py-2 text-left text-[0.84rem] font-semibold leading-tight transition-colors ${
        isActive
          ? "bg-accent-muted text-navy ring-1 ring-accent/20"
          : "text-navy-soft hover:bg-accent-muted/60 hover:text-navy"
      }`}
    >
      <SiteSectionIcon type={icon} size="xs" />
      <span className="min-w-0 whitespace-nowrap">
        <span className="lang-ja">{labelJa}</span>
        <span lang="vi" className="lang-vi">{labelVi}</span>
        <span lang="en" className="lang-en">{labelEn}</span>
      </span>
    </Link>
  );
}
