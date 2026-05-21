import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: Props) {
  return (
    <div
      {...props}
      className={`rounded-2xl border border-border/90 bg-card/95 p-4 shadow-[0_18px_45px_rgba(11,31,58,0.07)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
