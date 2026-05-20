import type { Bi } from "@/lib/copy/types";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  titleBi?: Bi;
  subtitleBi?: Bi;
  kickerBi?: Bi;
  align?: "left" | "center";
  id?: string;
};

function BiLines({
  text,
  className = "",
  viClassName = "",
}: {
  text: Bi;
  className?: string;
  viClassName?: string;
}) {
  return (
    <span className="block">
      <span className={`lang-ja block ${className}`}>{text.ja}</span>
      <span
        lang="vi"
        className={`lang-vi block text-[0.88em] font-semibold leading-snug text-navy-soft sm:text-[0.92em] ${viClassName}`}
      >
        {text.vi}
      </span>
      <span
        lang="en"
        className={`lang-en block text-[0.88em] font-semibold leading-snug text-navy-soft sm:text-[0.92em] ${viClassName}`}
      >
        {text.en ?? text.vi}
      </span>
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  kicker,
  titleBi,
  subtitleBi,
  kickerBi,
  align = "left",
  id,
}: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`mb-6 max-w-2xl space-y-2 sm:mb-8 ${alignCls}`}>
      {kickerBi ? (
        <p className="text-xs font-medium tracking-normal text-accent sm:text-sm">
          <BiLines text={kickerBi} />
        </p>
      ) : kicker ? (
        <p className="text-xs font-medium tracking-normal text-accent sm:text-sm">{kicker}</p>
      ) : null}
      <h2
        id={id}
        className="text-[1.35rem] font-bold leading-snug tracking-tight text-navy sm:text-2xl sm:leading-tight md:text-[1.75rem]"
      >
        {titleBi ? <BiLines text={titleBi} /> : title}
      </h2>
      {subtitleBi ? (
        <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          <BiLines text={subtitleBi} viClassName="font-normal" />
        </p>
      ) : subtitle ? (
        <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
