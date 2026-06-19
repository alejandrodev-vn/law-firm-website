import { Link } from "@/i18n/navigation";
import type { NewsArticle } from "@/data/news";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  article: NewsArticle;
  locale: Locale;
  readMore: string;
};

export default function NewsCard({ article, locale, readMore }: Props) {
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "en" ? "en-US" : "vi-VN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block border border-cream-dark bg-white transition-all hover:border-gold/40 hover:shadow-md"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-medium tracking-wider text-gold uppercase">
            {getLocalizedText(article.category, locale)}
          </span>
          <span className="text-charcoal/40">|</span>
          <time className="text-charcoal/50">{formattedDate}</time>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-navy group-hover:text-gold">
          {getLocalizedText(article.title, locale)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
          {getLocalizedText(article.excerpt, locale)}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-gold">
          {readMore} →
        </span>
      </div>
    </Link>
  );
}