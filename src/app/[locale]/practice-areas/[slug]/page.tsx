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

function PracticeAreaDetail({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const t = useTranslations("practiceDetail");
  const area = getPracticeArea(slug)!;

  return (
    <>
      <PageHeader
        title={getLocalizedText(area.title, locale)}
        subtitle={getLocalizedText(area.shortDesc, locale)}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Link
            href="/practice-areas"
            className="mb-8 inline-block text-sm text-gold hover:text-gold-light"
          >
            ← {t("backToList")}
          </Link>

          <p className="max-w-3xl text-base leading-relaxed text-charcoal/80">
            {getLocalizedText(area.fullDesc, locale)}
          </p>

          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-navy">
              {t("servicesTitle")}
            </h2>
            <ul className="mt-6 space-y-3">
              {area.services.map((service) => (
                <li
                  key={getLocalizedText(service, locale)}
                  className="flex items-start gap-3 border-b border-cream-dark pb-3 text-sm text-charcoal/80"
                >
                  <span className="mt-1 text-gold">■</span>
                  {getLocalizedText(service, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block bg-navy px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-light"
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}