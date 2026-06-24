"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { PracticeArea } from "@/data/practice-areas";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";
import { Reveal } from "./motion/Reveal";

const icons: Record<string, ReactNode> = {
  building: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
    </svg>
  ),
  home: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  scale: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
    </svg>
  ),
  document: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  globe: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

type Props = {
  area: PracticeArea;
  locale: Locale;
  learnMore: string;
  featured?: boolean;
  featuredLabel?: string;
  index?: number;
};

export default function PracticeAreaCard({
  area,
  locale,
  learnMore,
  featured = false,
  featuredLabel,
  index = 0,
}: Props) {
  return (
    <Reveal delay={index * 0.06} className={featured ? "md:col-span-2 lg:col-span-2" : ""}>
      <Link
        href={`/practice-areas/${area.slug}`}
        className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/70 bg-white shadow-sm transition-colors hover:border-gold/25 sm:rounded-3xl"
      >
        <div
          className={`relative overflow-hidden ${
            featured
              ? "aspect-[16/10] sm:aspect-[2/1] md:aspect-[2.4/1]"
              : "aspect-[16/10] sm:aspect-[3/2]"
          }`}
        >
          <Image
            src={area.image}
            alt={getLocalizedText(area.title, locale)}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes={
              featured
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
          {featured && featuredLabel && (
            <span className="absolute top-3 right-3 rounded-full border border-gold/30 bg-burgundy/80 px-2.5 py-1 text-[10px] font-bold tracking-widest text-champagne uppercase backdrop-blur-sm sm:top-4 sm:right-4">
              {featuredLabel}
            </span>
          )}
          <div className="absolute top-2.5 left-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-gold-light backdrop-blur-sm sm:top-4 sm:left-4 sm:h-10 sm:w-10 sm:rounded-xl">
            {icons[area.icon]}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="font-display text-sm font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-burgundy sm:text-base md:text-lg">
            {getLocalizedText(area.title, locale)}
          </h3>
          <p className="mt-1.5 hidden flex-1 text-sm leading-snug text-muted sm:block">
            {getLocalizedText(area.shortDesc, locale)}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 font-sans text-xs font-semibold text-gold sm:text-sm">
            {learnMore}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}