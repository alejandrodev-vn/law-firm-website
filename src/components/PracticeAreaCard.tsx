import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { PracticeArea } from "@/data/practice-areas";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

const icons: Record<string, ReactNode> = {
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
    </svg>
  ),
  home: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  scale: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
    </svg>
  ),
  document: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  globe: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const gradients: Record<string, string> = {
  "fdi-corporate": "from-navy to-navy-light",
  "investment-construction": "from-navy-light to-navy-mid",
  "contracts-commerce": "from-navy-mid to-navy",
  "dispute-litigation": "from-[#1a2744] to-navy",
  "customs-trade": "from-navy to-[#2a3550]",
  "retainer-advisory": "from-navy-light to-[#1e2a4a]",
};

type Props = {
  area: PracticeArea;
  locale: Locale;
  learnMore: string;
  featured?: boolean;
};

export default function PracticeAreaCard({
  area,
  locale,
  learnMore,
  featured = false,
}: Props) {
  const gradient = gradients[area.slug] ?? "from-navy to-navy-light";

  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className={`card-hover group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ${
        featured ? "lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      <div className={`bg-gradient-to-br ${gradient} p-6 text-gold-light`}>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          {icons[area.icon]}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-navy transition-colors group-hover:text-gold">
          {getLocalizedText(area.title, locale)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {getLocalizedText(area.shortDesc, locale)}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          {learnMore}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}