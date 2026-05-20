"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsPayload } from "@/lib/analytics";

type Props = {
  href: string;
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventPayload?: AnalyticsPayload;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

export function TrackedLink({
  href,
  children,
  eventName,
  eventPayload,
  external,
  className,
  onClick,
  ...props
}: Props) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, { href, ...eventPayload });
    onClick?.(event);
  }

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
