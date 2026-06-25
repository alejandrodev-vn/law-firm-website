"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { NewsArticle } from "@/data/news";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";
import { getNewsCoverImage, NEWS_COVER_FALLBACK } from "@/lib/news-cover";
import { Reveal } from "./motion/Reveal";

type Props = {
  article: NewsArticle;
  locale: Locale;
  readMore: string;
  index?: number;
};

function NewsCoverFallback() {
  return (
    <div className="legal-lines absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy-light">
      <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full bg-champagne/15 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-navy/80 to-transparent" />
    </div>
  );
}

export default function NewsCard({
  article,
  locale,
  readMore,
  index = 0,
}: Props) {
  const coverSrc = getNewsCoverImage(article);
  const [imageSrc, setImageSrc] = useState(coverSrc);
  const [imageFailed, setImageFailed] = useState(false);

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "en" ? "en-US" : "vi-VN",
    { year: "numeric", month: "short", day: "numeric" },
  );

  const title = getLocalizedText(article.title, locale);

  const handleImageError = () => {
    if (imageSrc !== NEWS_COVER_FALLBACK) {
      setImageSrc(NEWS_COVER_FALLBACK);
      return;
    }
    setImageFailed(true);
  };

  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/news/${article.slug}`}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark/80 bg-white shadow-sm sm:rounded-3xl"
      >
        <div className="relative aspect-video overflow-hidden">
          {imageFailed ? (
            <NewsCoverFallback />
          ) : (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={handleImageError}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/10" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="inline-block rounded-full bg-champagne px-3 py-1 text-[10px] font-bold tracking-wider text-navy uppercase shadow-sm sm:text-xs">
              {getLocalizedText(article.category, locale)}
            </span>
            <time className="mt-2.5 block font-sans text-xs text-cream/90 sm:text-sm">
              {formattedDate}
            </time>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-base leading-snug font-semibold text-navy transition-colors duration-300 group-hover:text-burgundy sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-muted">
            {getLocalizedText(article.excerpt, locale)}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold">
            {readMore}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}