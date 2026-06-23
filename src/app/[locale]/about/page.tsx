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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about-office.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-charcoal/80">{t("intro")}</p>
              <p className="text-base leading-relaxed text-muted">{t("scope")}</p>
              <p className="rounded-2xl border-l-4 border-gold bg-cream/40 p-6 text-base leading-relaxed text-charcoal/75">
                {t("commitment")}
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="card-hover rounded-3xl bg-navy p-8 text-cream">
              <p className="text-xs font-bold tracking-[0.25em] text-gold-light uppercase">
                {t("beyondLawTitle")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-cream/80">
                {t("beyondLawDesc")}
              </p>
            </div>
            <div className="card-hover rounded-3xl border border-cream-dark bg-white p-8">
              <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
                {t("besideYouTitle")}
              </p>
              <p className="mt-5 text-base leading-relaxed text-charcoal/75">
                {t("besideYouDesc")}
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              {t("valuesTitle")}
            </p>
            <p className="mt-2 font-display text-xl font-semibold tracking-widest text-navy">
              {t("valuesSubtitle")}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {t("valuesDesc")}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {valueKeys.map((key) => (
                <div
                  key={key}
                  className="card-hover rounded-2xl border border-cream-dark bg-white p-6 text-left"
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

      <CredentialsBar locale={locale} />

      <CtaBanner
        title={tHome("ctaTitle")}
        subtitle={tHome("ctaSubtitle")}
        cta={tHome("ctaButton")}
      />
    </>
  );
}