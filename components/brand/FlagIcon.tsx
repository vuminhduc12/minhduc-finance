type FlagCode = "jp" | "vn";

type Props = {
  code: FlagCode;
  className?: string;
  title?: string;
};

export function FlagIcon({ code, className = "", title }: Props) {
  const label = title ?? (code === "jp" ? "日本の国旗" : "ベトナムの国旗");

  if (code === "jp") {
    return (
      <svg
        viewBox="0 0 90 60"
        role="img"
        aria-label={label}
        className={className}
      >
        <rect width="90" height="60" rx="7" fill="#fff" />
        <rect width="90" height="60" rx="7" fill="none" stroke="#DDE5EF" />
        <circle cx="45" cy="30" r="18" fill="#BC002D" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 90 60"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width="90" height="60" rx="7" fill="#DA251D" />
      <path
        fill="#FFFF00"
        d="M45 11.5l4.4 13.6h14.3L52.1 33.5l4.4 13.6L45 38.7 33.5 47.1l4.4-13.6-11.6-8.4h14.3L45 11.5z"
      />
    </svg>
  );
}
