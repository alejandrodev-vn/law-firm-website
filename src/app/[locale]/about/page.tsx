import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import CredentialsBar from "@/components/CredentialsBar";
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
  const valueKeys = ["integrity", "professionalism", "dedication", "confidentiality"] as const;

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
            <div>
              <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
                {t("intro")}
              </p>
              <div className="mt-8 border-l-2 border-gold pl-6">
                <h2 className="font-display text-lg font-semibold text-navy">
                  {t("historyTitle")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {t("history")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="border-l-2 border-gold pl-6">
              <h2 className="font-display text-xl font-semibold text-navy">
                {t("missionTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                {t("mission")}
              </p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <h2 className="font-display text-xl font-semibold text-navy">
                {t("visionTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                {t("vision")}
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy">
              {t("valuesTitle")}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {valueKeys.map((key) => (
                <div
                  key={key}
                  className="border border-cream-dark bg-white p-6"
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

      <CredentialsBar locale={locale} title={tHome("credentialsTitle")} />

      <CtaBanner
        title={tHome("ctaTitle")}
        subtitle={tHome("ctaSubtitle")}
        cta={tHome("ctaButton")}
      />
    </>
  );
}