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
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={{
          homeLabel: tNav("home"),
          currentLabel: tNav("contact"),
        }}
      />
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
            <div className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold text-navy">
                {t("formTitle")}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {[
                  { label: t("address"), value: siteConfig.address[locale] },
                  { label: t("phone"), value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
                  { label: t("email"), value: siteConfig.email || t("updating") },
                  { label: t("hours"), value: t("hoursValue") },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-cream-dark bg-white p-4 sm:rounded-2xl sm:p-5"
                  >
                    <p className="text-xs font-bold tracking-wider text-muted uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block text-lg font-semibold text-navy hover:text-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-charcoal/80">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-3xl border border-cream-dark shadow-sm">
                <div className="px-6 py-4">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {t("mapTitle")}
                  </h3>
                </div>
                <div className="aspect-video">
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