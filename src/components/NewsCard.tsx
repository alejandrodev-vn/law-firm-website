"use client";

import { Link } from "@/i18n/navigation";
import type { NewsArticle } from "@/data/news";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";
import { Reveal } from "./motion/Reveal";

type Props = {
  article: NewsArticle;
  locale: Locale;
  readMore: string;
  index?: number;
};

export default function NewsCard({ article, locale, readMore, index = 0 }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "en" ? "en-US" : "vi-VN",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/news/${article.slug}`}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/80 bg-white shadow-sm sm:rounded-3xl"
      >
        <div className="legal-lines relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-light px-5 py-6 sm:px-6 sm:py-8">
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />
          <span className="relative inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-champagne uppercase sm:text-xs">
            {getLocalizedText(article.category, locale)}
          </span>
          <time className="relative mt-3 block font-sans text-xs text-cream/55">{formattedDate}</time>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-base font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-burgundy sm:text-lg">
            {getLocalizedText(article.title, locale)}
          </h3>
          <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted line-clamp-3">
            {getLocalizedText(article.excerpt, locale)}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold">
            {readMore}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}