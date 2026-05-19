import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-border/90 bg-card/95 p-4 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
