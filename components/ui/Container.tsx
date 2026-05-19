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
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
