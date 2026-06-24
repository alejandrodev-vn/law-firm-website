import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/PageHeader";
import { newsArticles, getNewsArticle } from "@/data/news";
import { getLocalizedText } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getNewsArticle(slug);
  if (!article) notFound();

  return <NewsDetail locale={locale} slug={slug} />;
}

function NewsDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const t = useTranslations("news");
  const article = getNewsArticle(slug)!;

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "en" ? "en-US" : "vi-VN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <PageHeader title={getLocalizedText(article.title, locale)} />
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
          >
            ← {t("backToList")}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cream px-4 py-1.5 text-xs font-semibold tracking-wider text-gold uppercase">
              {getLocalizedText(article.category, locale)}
            </span>
            <span className="text-sm text-muted">
              {t("publishedOn")}: {formattedDate}
            </span>
          </div>

          <article className="prose-custom mt-10 space-y-6 text-base leading-relaxed text-charcoal/80">
            {getLocalizedText(article.content, locale)
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
          </article>
        </div>
      </section>
    </>
  );
}