import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import CredentialsBar from "@/components/CredentialsBar";
import ClientsSection from "@/components/ClientsSection";
import CtaBanner from "@/components/CtaBanner";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent locale={locale} />;
}

function AboutContent({ locale }: { locale: Locale }) {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const valueKeys = ["partnership", "integrity", "synergy"] as const;

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-office.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
                {t("intro")}
              </p>
              <p className="text-sm leading-relaxed text-charcoal/70">
                {t("scope")}
              </p>
              <p className="border-l-2 border-gold pl-6 text-sm leading-relaxed text-charcoal/70">
                {t("commitment")}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border-t-2 border-gold bg-white p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                {t("beyondLawTitle")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                {t("beyondLawDesc")}
              </p>
            </div>
            <div className="border-t-2 border-navy bg-navy p-8 text-cream">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
                {t("besideYouTitle")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                {t("besideYouDesc")}
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-display text-2xl font-semibold text-navy">
              {t("valuesTitle")}
            </h2>
            <p className="mt-2 text-sm tracking-widest text-gold uppercase">
              {t("valuesSubtitle")}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-charcoal/70">
              {t("valuesDesc")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {valueKeys.map((key) => (
                <div
                  key={key}
                  className="border border-cream-dark bg-white p-6 text-left"
                >
                  <p className="text-sm leading-relaxed text-charcoal/80">
                    {t(`values.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientsSection
        locale={locale}
        title={t("clientsTitle")}
        subtitle={tHome("clientsSubtitle")}
        closing={t("clientsClosing")}
      />

      <CredentialsBar locale={locale} title={tHome("keywordsTitle")} />

      <CtaBanner
        title={tHome("ctaTitle")}
        subtitle={tHome("ctaSubtitle")}
        cta={tHome("ctaButton")}
      />
    </>
  );
}