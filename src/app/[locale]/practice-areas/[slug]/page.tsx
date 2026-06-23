import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import PageHeader from "@/components/PageHeader";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { getLocalizedText } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const area = getPracticeArea(slug);
  if (!area) notFound();

  return <PracticeAreaDetail locale={locale} slug={slug} />;
}

function PracticeAreaDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const t = useTranslations("practiceDetail");
  const area = getPracticeArea(slug)!;

  return (
    <>
      <PageHeader
        title={getLocalizedText(area.title, locale)}
        subtitle={getLocalizedText(area.shortDesc, locale)}
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
          >
            ← {t("backToList")}
          </Link>

          <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
            {getLocalizedText(area.fullDesc, locale)}
          </p>

          <div className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-navy">
              {t("servicesTitle")}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {area.services.map((service) => (
                <li
                  key={getLocalizedText(service, locale)}
                  className="flex items-start gap-3 rounded-2xl border border-cream-dark bg-white p-4 text-sm text-charcoal/80"
                >
                  <span className="mt-0.5 text-gold">✦</span>
                  {getLocalizedText(service, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-navy px-10 py-4 text-sm font-semibold text-cream transition-all hover:bg-navy-light hover:shadow-lg"
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}