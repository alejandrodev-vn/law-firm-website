import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { practiceAreas } from "@/data/practice-areas";
import { newsArticles } from "@/data/news";
import HeroSection from "@/components/HeroSection";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import NewsCard from "@/components/NewsCard";
import CredentialsBar from "@/components/CredentialsBar";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import ClientsSection from "@/components/ClientsSection";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: Locale }) {
  const t = useTranslations("home");
  const tMeta = useTranslations("meta");
  const tNews = useTranslations("news");
  const tPractice = useTranslations("practiceAreas");

  const processSteps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <>
      <HeroSection
        tagline={tMeta("tagline")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        ctaContact={t("ctaContact")}
        ctaPractice={t("ctaPractice")}
      />

      <CredentialsBar locale={locale} />

      <PhilosophySection
        title={t("philosophyTitle")}
        beyondTitle={t("beyondLawTitle")}
        beyondDesc={t("beyondLawDesc")}
        besideTitle={t("besideYouTitle")}
        besideDesc={t("besideYouDesc")}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Services"
            title={t("practiceTitle")}
            subtitle={t("practiceSubtitle")}
            linkHref="/practice-areas"
            linkText={t("viewAll")}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                locale={locale}
                learnMore={tPractice("learnMore")}
                featured={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        title={t("processTitle")}
        subtitle={t("processSubtitle")}
        steps={processSteps.map((key, i) => ({
          number: String(i + 1).padStart(2, "0"),
          title: t(`processSteps.${key}.title`),
          desc: t(`processSteps.${key}.desc`),
        }))}
      />

      <ClientsSection
        locale={locale}
        title={t("clientsTitle")}
        subtitle={t("clientsSubtitle")}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Insights"
            title={t("newsTitle")}
            subtitle={t("newsSubtitle")}
            linkHref="/news"
            linkText={t("viewAll")}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {newsArticles.map((article, i) => (
              <NewsCard
                key={article.slug}
                article={article}
                locale={locale}
                readMore={tNews("readMore")}
                index={i}
              />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/news" className="text-sm font-semibold text-gold">
              {t("viewAll")} →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        cta={t("ctaButton")}
      />
    </>
  );
}