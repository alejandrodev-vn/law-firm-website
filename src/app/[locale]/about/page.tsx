import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import BrandMottoQuote from "@/components/BrandMottoQuote";
import ProgressiveImage from "@/components/ProgressiveImage";
import PageHeader from "@/components/PageHeader";
import CredentialsBar from "@/components/CredentialsBar";
import ClientsSection from "@/components/ClientsSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import CtaBanner from "@/components/CtaBanner";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

function toManifestoTitle(value: string) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent locale={locale} />;
}

function AboutContent({ locale }: { locale: Locale }) {
  const t = useTranslations("about");
  const tMeta = useTranslations("meta");
  const tNav = useTranslations("nav");
  const tHome = useTranslations("home");
  const valueKeys = ["partnership", "integrity", "synergy"] as const;
  const valueVariants = ["light", "dark", "light"] as const;
  const valueIcons = ["partnership", "integrity", "synergy"] as const;

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={{
          homeLabel: tNav("home"),
          currentLabel: tNav("about"),
        }}
      />
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-dark shadow-2xl">
              <ProgressiveImage
                src="/images/about-office.jpg"
                fallbackSrc="/images/about-office-fallback.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-charcoal/80">{t("intro")}</p>
              <p className="text-base leading-relaxed text-muted">{t("scope")}</p>
              <BrandMottoQuote
                line1={tMeta("taglineLine1")}
                line2={tMeta("taglineLine2")}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:mt-20 md:grid-cols-2 md:items-stretch md:gap-6">
            <div className="card-hover flex flex-col rounded-2xl bg-navy p-6 text-cream sm:rounded-3xl sm:p-8 lg:p-9">
              <h3 className="font-manifesto text-[1.5rem] leading-[1.12] font-semibold italic text-champagne sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.1]">
                {toManifestoTitle(t("beyondLawTitle"))}
              </h3>
              <p className="mt-3 max-w-prose flex-1 font-sans text-[15px] leading-[1.75] text-cream/82 sm:mt-4">
                {t("beyondLawDesc")}
              </p>
            </div>
            <div className="card-hover flex flex-col rounded-2xl border border-cream-dark bg-white p-6 sm:rounded-3xl sm:p-8 lg:p-9">
              <h3 className="font-manifesto text-[1.5rem] leading-[1.12] font-semibold italic text-burgundy sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.1]">
                {toManifestoTitle(t("besideYouTitle"))}
              </h3>
              <p className="mt-3 max-w-prose flex-1 font-sans text-[15px] leading-[1.75] text-charcoal/78 sm:mt-4">
                {t("besideYouDesc")}
              </p>
            </div>
          </div>

          <CoreValuesSection
            label={t("valuesTitle")}
            headline={t("valuesSubtitle")}
            desc={t("valuesDesc")}
            pillars={valueKeys.map((key, i) => ({
              index: `0${i + 1}`,
              title: t(`values.${key}.title`),
              subtitle: t(`values.${key}.subtitle`),
              desc: t(`values.${key}.desc`),
              variant: valueVariants[i],
              icon: valueIcons[i],
            }))}
          />
        </div>
      </section>

      <ClientsSection
        locale={locale}
        title={t("clientsTitle")}
        subtitle={tHome("clientsSubtitle")}
        closing={t("clientsClosing")}
      />

      <CredentialsBar locale={locale} />

      <CtaBanner
        title={tHome("ctaTitle")}
        subtitle={tHome("ctaSubtitle")}
        cta={tHome("ctaButton")}
      />
    </>
  );
}