import { Link } from "@/i18n/navigation";
import type { NewsArticle } from "@/data/news";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

const categoryColors = [
  "from-navy to-navy-light",
  "from-navy-light to-navy-mid",
  "from-navy-mid to-navy",
];

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
  const gradient = categoryColors[index % categoryColors.length];

  return (
    <Link
      href={`/news/${article.slug}`}
      className="card-hover group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
    >
      <div className={`bg-gradient-to-br ${gradient} px-5 py-6 sm:px-6 sm:py-8`}>
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider text-cream uppercase">
          {getLocalizedText(article.category, locale)}
        </span>
        <time className="mt-3 block text-xs text-cream/60">{formattedDate}</time>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-base font-semibold text-navy transition-colors group-hover:text-gold sm:text-lg">
          {getLocalizedText(article.title, locale)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {getLocalizedText(article.excerpt, locale)}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          {readMore}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}