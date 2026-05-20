type FlagCode = "jp" | "vn" | "us";

type Props = {
  code: FlagCode;
  className?: string;
  title?: string;
};

export function FlagIcon({ code, className = "", title }: Props) {
  const label =
    title ??
    (code === "jp" ? "日本の国旗" : code === "vn" ? "ベトナムの国旗" : "アメリカの国旗");

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

  if (code === "us") {
    return (
      <svg
        viewBox="0 0 90 60"
        role="img"
        aria-label={label}
        className={className}
      >
        <rect width="90" height="60" rx="7" fill="#fff" />
        {Array.from({ length: 7 }).map((_, index) => (
          <rect
            key={index}
            y={index * (60 / 7)}
            width="90"
            height={60 / 14}
            fill="#B22234"
          />
        ))}
        <rect width="38" height="32.3" rx="4" fill="#3C3B6E" />
        {Array.from({ length: 18 }).map((_, index) => (
          <circle
            key={index}
            cx={6 + (index % 6) * 5.2}
            cy={5.3 + Math.floor(index / 6) * 8.2}
            r="1.15"
            fill="#fff"
          />
        ))}
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
