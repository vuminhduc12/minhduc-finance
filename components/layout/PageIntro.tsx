import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Props = {
  children?: ReactNode;
  className?: string;
};

/** ページ先頭の補足（複数行・ブロック可） */
export function PageIntro({ children, className = "" }: Props) {
  if (!children) return null;
  return (
    <Container className={`pt-3 pb-1 sm:pt-4 sm:pb-2 ${className}`}>
      <div className="text-center text-[13px] leading-relaxed text-muted sm:text-sm">{children}</div>
    </Container>
  );
}
