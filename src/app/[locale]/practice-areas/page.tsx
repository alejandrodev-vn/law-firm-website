import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import { practiceAreas } from "@/data/practice-areas";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function PracticeAreasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PracticeAreasContent locale={locale} />;
}

function PracticeAreasContent({ locale }: { locale: Locale }) {
  const t = useTranslations("practiceAreas");
  const tNav = useTranslations("nav");

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={{
          homeLabel: tNav("home"),
          currentLabel: tNav("practiceAreas"),
        }}
      />
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                locale={locale}
                learnMore={t("learnMore")}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}