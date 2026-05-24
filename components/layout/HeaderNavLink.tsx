"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteSectionIconType } from "@/components/brand/SiteSectionIcon";

type Props = {
  href: string;
  icon: SiteSectionIconType;
  labelJa: string;
  labelVi: string;
  labelEn: string;
};

export function HeaderNavLink({ href, labelJa, labelVi, labelEn }: Props) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`nav-compact inline-flex min-h-9 items-center rounded-xl px-2.5 py-2 text-left text-[0.82rem] font-semibold leading-tight transition-colors 2xl:px-3 ${
        isActive
          ? "bg-accent-muted text-navy ring-1 ring-accent/20"
          : "text-navy-soft hover:bg-accent-muted/60 hover:text-navy"
      }`}
    >
      <span className="min-w-0 whitespace-nowrap">
        <span className="lang-ja">{labelJa}</span>
        <span lang="vi" className="lang-vi">{labelVi}</span>
        <span lang="en" className="lang-en">{labelEn}</span>
      </span>
    </Link>
  );
}
