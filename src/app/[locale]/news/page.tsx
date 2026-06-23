import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/data/news";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NewsContent locale={locale} />;
}

function NewsContent({ locale }: { locale: Locale }) {
  const t = useTranslations("news");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, i) => (
              <NewsCard
                key={article.slug}
                article={article}
                locale={locale}
                readMore={t("readMore")}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}