"use client";

import { Reveal } from "./motion/Reveal";

type Pillar = {
  index: string;
  title: string;
  subtitle: string;
  desc: string;
  variant: "light" | "dark";
  icon: "partnership" | "integrity" | "synergy";
};

type Props = {
  label: string;
  headline: string;
  desc: string;
  pillars: Pillar[];
};

function toEditorialTitle(value: string) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function PillarIcon({
  type,
  className,
}: {
  type: Pillar["icon"];
  className?: string;
}) {
  const shared = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (type === "partnership") {
    return (
      <svg {...shared}>
        <circle cx="10" cy="14" r="4.5" />
        <circle cx="22" cy="14" r="4.5" />
        <path d="M6 24c0-3.5 2.5-6 8-6s8 2.5 8 6" />
        <path d="M14 24c0-3.5 2.5-6 8-6" />
      </svg>
    );
  }

  if (type === "integrity") {
    return (
      <svg {...shared}>
        <path d="M16 4l9 4v8c0 5.5-3.8 9.5-9 12-5.2-2.5-9-6.5-9-12V8l9-4z" />
        <path d="M12 16l3 3 6-7" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="16" cy="16" r="3" />
      <circle cx="8" cy="10" r="2.5" />
      <circle cx="24" cy="10" r="2.5" />
      <circle cx="8" cy="22" r="2.5" />
      <circle cx="24" cy="22" r="2.5" />
      <path d="M10.2 11.5L13.5 14.2" />
      <path d="M21.8 11.5L18.5 14.2" />
      <path d="M10.2 20.5L13.5 17.8" />
      <path d="M21.8 20.5L18.5 17.8" />
    </svg>
  );
}

function ValuePillar({ index, title, subtitle, desc, variant, icon }: Pillar) {
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border p-6 transition-all duration-300 sm:p-7 motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
        isDark
          ? "border-gold/25 bg-navy text-cream shadow-[0_10px_36px_-22px_rgba(8,13,28,0.5)] hover:border-gold/40 hover:shadow-[0_14px_40px_-18px_rgba(8,13,28,0.55)]"
          : "border-cream-dark/80 bg-ivory text-charcoal shadow-[0_8px_30px_-24px_rgba(15,23,42,0.12)] hover:border-gold/35 hover:shadow-[0_12px_36px_-20px_rgba(15,23,42,0.16)]"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute top-3 right-4 font-display text-5xl font-semibold leading-none select-none sm:top-4 sm:right-5 sm:text-6xl ${
          isDark ? "text-champagne/10" : "text-gold/[0.08]"
        }`}
      >
        {index}
      </span>

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start gap-3 sm:gap-4">
          <span
            aria-hidden
            className={`mt-1 h-9 w-px shrink-0 sm:h-10 ${isDark ? "bg-gold/45" : "bg-gold/55"}`}
          />
          <div className="min-w-0 flex-1 pr-8 sm:pr-10">
            <p
              className={`font-sans text-[10px] font-semibold tracking-[0.22em] uppercase sm:text-[11px] ${
                isDark ? "text-gold-light/60" : "text-gold/75"
              }`}
            >
              {index}
            </p>
            <h3
              className={`mt-1 font-manifesto text-[1.45rem] leading-[1.12] font-semibold italic sm:mt-1.5 sm:text-[1.65rem] lg:text-[1.85rem] ${
                isDark ? "text-champagne" : "text-burgundy"
              }`}
            >
              {toEditorialTitle(title)}
            </h3>
            <p
              className={`mt-2 font-sans text-xs font-semibold tracking-[0.12em] uppercase sm:text-[13px] ${
                isDark ? "text-gold-light/70" : "text-navy/55"
              }`}
            >
              {subtitle}
            </p>
            <p
              className={`mt-3 font-sans text-sm leading-relaxed sm:mt-3.5 sm:text-[15px] sm:leading-[1.65] ${
                isDark ? "text-cream/80" : "text-charcoal/72"
              }`}
            >
              {desc}
            </p>
          </div>
        </div>

        <div
          className={`mt-5 flex items-end justify-between border-t pt-4 sm:mt-6 ${
            isDark ? "border-gold/12" : "border-cream-dark/90"
          }`}
        >
          <PillarIcon
            type={icon}
            className={`h-7 w-7 sm:h-8 sm:w-8 ${
              isDark ? "text-gold-light/35" : "text-gold/40"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function CoreValuesSection({
  label,
  headline,
  desc,
  pillars,
}: Props) {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <Reveal>
        <div className="text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {label}
          </p>
          <p className="mt-3 font-display text-xl font-semibold tracking-[0.28em] text-navy sm:text-2xl md:text-[1.75rem] md:tracking-[0.32em]">
            {headline}
          </p>
          <div
            aria-hidden
            className="mx-auto mt-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50 sm:w-14" />
            <span className="h-1 w-1 rotate-45 border border-gold/60 bg-gold/20" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50 sm:w-14" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-[1.7]">
            {desc}
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5 lg:mt-11">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.index} delay={0.08 * (i + 1)} className="flex">
            <ValuePillar {...pillar} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}