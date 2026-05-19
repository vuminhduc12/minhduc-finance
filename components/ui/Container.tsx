import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: Props) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}
    >
      {children}
    </Tag>
  );
}
