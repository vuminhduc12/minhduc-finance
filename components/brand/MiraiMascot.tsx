type Props = {
  className?: string;
  title?: string;
  compact?: boolean;
};

export function MiraiMascot({
  className = "",
  title = "ミライくん",
  compact = false,
}: Props) {
  return (
    <svg
      viewBox={compact ? "28 8 164 204" : "0 0 220 260"}
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="miraiJacket" x1="52" y1="124" x2="168" y2="229" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D2B45" />
          <stop offset="1" stopColor="#17486C" />
        </linearGradient>
        <linearGradient id="miraiAccent" x1="52" y1="34" x2="168" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#008F88" />
          <stop offset="1" stopColor="#3ECFC2" />
        </linearGradient>
      </defs>

      <ellipse cx="110" cy="236" rx="62" ry="11" fill="#D8F2EF" opacity="0.75" />
      <path
        d="M72 136c-17 16-25 42-22 77h120c3-35-5-61-22-77-10-10-23-15-38-15s-28 5-38 15z"
        fill="url(#miraiJacket)"
      />
      <path d="M89 126h42l8 92H80l9-92z" fill="#FFFFFF" />
      <path d="M74 139c8 11 15 25 19 42l-29 12c-2-24 1-42 10-54z" fill="#0B1F3A" opacity="0.72" />
      <path d="M146 139c-8 11-15 25-19 42l29 12c2-24-1-42-10-54z" fill="#0B1F3A" opacity="0.72" />
      <path d="M89 125l21 25 21-25" fill="none" stroke="#DDE5EF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 218h68c9 0 17-8 17-17v-2H91c-9 0-15 7-15 15v4z" fill="#0F9F8F" />
      <path d="M91 194h71v8H91z" fill="#FFFFFF" opacity="0.9" />
      <path d="M104 205h43" stroke="#D5F7F1" strokeWidth="4" strokeLinecap="round" />

      <circle cx="110" cy="80" r="50" fill="#FDF6EF" />
      <path
        d="M60 78c9-31 28-47 50-47s41 16 50 47c-14-13-28-19-50-19S74 65 60 78z"
        fill="url(#miraiAccent)"
      />
      <path d="M99 42c-2-15 3-27 15-34 7 13 3 25-15 34z" fill="#0F9F8F" />
      <path d="M115 42c5-14 15-22 30-23 0 15-9 24-30 23z" fill="#28B7AA" />
      <circle cx="91" cy="85" r="5" fill="#172033" />
      <circle cx="129" cy="85" r="5" fill="#172033" />
      <path d="M99 104c8 8 22 8 30 0" fill="none" stroke="#172033" strokeWidth="4" strokeLinecap="round" />
      <circle cx="75" cy="98" r="8" fill="#F2B8A8" opacity="0.55" />
      <circle cx="145" cy="98" r="8" fill="#F2B8A8" opacity="0.55" />
      <path d="M62 84c-8 1-14 8-13 17 1 8 8 14 16 13" fill="#FDF6EF" stroke="#172033" strokeWidth="3" />
      <path d="M158 84c8 1 14 8 13 17-1 8-8 14-16 13" fill="#FDF6EF" stroke="#172033" strokeWidth="3" />
      <path d="M61 80c4-34 24-55 49-55s45 21 49 55" fill="none" stroke="#172033" strokeWidth="4" strokeLinecap="round" />
      <path d="M77 126c-13 2-22 12-25 29" stroke="#0B1F3A" strokeWidth="9" strokeLinecap="round" />
      <path d="M143 126c13 2 22 12 25 29" stroke="#0B1F3A" strokeWidth="9" strokeLinecap="round" />
      <circle cx="53" cy="158" r="10" fill="#FDF6EF" stroke="#172033" strokeWidth="3" />
      <circle cx="167" cy="158" r="10" fill="#FDF6EF" stroke="#172033" strokeWidth="3" />
      <path d="M154 82c11 0 20 9 20 20" stroke="#0F9F8F" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      <path d="M139 53c7 5 12 11 16 19" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
