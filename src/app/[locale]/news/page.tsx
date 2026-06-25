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
  const tNav = useTranslations("nav");

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={{
          homeLabel: tNav("home"),
          currentLabel: tNav("news"),
        }}
      />
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
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