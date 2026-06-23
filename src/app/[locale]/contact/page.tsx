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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-cream-dark bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-navy">
                {t("formTitle")}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: t("address"), value: siteConfig.address[locale] },
                  { label: t("phone"), value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
                  { label: t("email"), value: siteConfig.email || t("updating") },
                  { label: t("hours"), value: t("hoursValue") },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-cream-dark bg-white p-5"
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