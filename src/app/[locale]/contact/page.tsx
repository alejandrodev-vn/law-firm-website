import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">
                {t("formTitle")}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <div className="space-y-6 border border-cream-dark bg-white p-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
                    {t("address")}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/80">
                    {siteConfig.address[locale]}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
                    {t("phone")}
                  </h3>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="mt-2 block text-lg font-medium text-navy hover:text-gold"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
                    {t("email")}
                  </h3>
                  {siteConfig.email ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-2 block text-sm text-navy hover:text-gold"
                    >
                      {siteConfig.email}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-charcoal/50">{t("updating")}</p>
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
                    {t("hours")}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/80">{t("hoursValue")}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-display text-lg font-semibold text-navy">
                  {t("mapTitle")}
                </h3>
                <div className="aspect-video overflow-hidden border border-cream-dark">
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}