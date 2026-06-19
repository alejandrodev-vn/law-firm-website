import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { practiceAreas } from "@/data/practice-areas";
import { teamMembers } from "@/data/team";
import { newsArticles } from "@/data/news";
import { siteConfig } from "@/data/site";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TeamCard from "@/components/TeamCard";
import NewsCard from "@/components/NewsCard";
import CredentialsBar from "@/components/CredentialsBar";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
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
  const tTeam = useTranslations("team");
  const tNews = useTranslations("news");
  const tPractice = useTranslations("practiceAreas");

  const whyKeys = ["expertise", "trust", "efficiency"] as const;
  const processSteps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <>
      <section className="relative flex min-h-[520px] items-center bg-navy text-cream md:min-h-[600px]">
        <Image
          src="/images/hero-banner.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-8 md:py-28">
          <p className="mb-4 text-sm tracking-widest text-gold-light uppercase">
            {tMeta("tagline")}
          </p>
          <h1 className="max-w-3xl font-display text-3xl leading-tight font-semibold md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-gold px-8 py-3 text-sm font-medium tracking-wide text-navy transition-colors hover:bg-gold-light"
            >
              {t("ctaContact")}
            </Link>
            <Link
              href="/practice-areas"
              className="border border-cream/30 px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/5"
            >
              {t("ctaPractice")}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-dark bg-white py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-4 lg:px-8">
          {[
            { value: siteConfig.stats.years, label: t("statsYears") },
            { value: `${siteConfig.stats.cases}+`, label: t("statsCases") },
            { value: `${siteConfig.stats.clients}+`, label: t("statsClients") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CredentialsBar locale={locale} title={t("credentialsTitle")} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-navy md:text-3xl">
            {t("whyTitle")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyKeys.map((key) => (
              <div key={key} className="border-t-2 border-gold pt-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {t(`whyItems.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {t(`whyItems.${key}.desc`)}
                </p>
              </div>
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

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                {t("practiceTitle")}
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">{t("practiceSubtitle")}</p>
            </div>
            <Link href="/practice-areas" className="hidden text-sm font-medium text-gold hover:text-gold-light sm:block">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 3).map((area) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                locale={locale}
                learnMore={tPractice("learnMore")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                {t("teamTitle")}
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">{t("teamSubtitle")}</p>
            </div>
            <Link href="/team" className="hidden text-sm font-medium text-gold hover:text-gold-light sm:block">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                locale={locale}
                experienceLabel={tTeam("experience")}
                specialtyLabel={tTeam("specialty")}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        locale={locale}
        title={t("testimonialsTitle")}
        subtitle={t("testimonialsSubtitle")}
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                {t("newsTitle")}
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">{t("newsSubtitle")}</p>
            </div>
            <Link href="/news" className="hidden text-sm font-medium text-gold hover:text-gold-light sm:block">
              {t("viewAll")} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {newsArticles.map((article) => (
              <NewsCard
                key={article.slug}
                article={article}
                locale={locale}
                readMore={tNews("readMore")}
              />
            ))}
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