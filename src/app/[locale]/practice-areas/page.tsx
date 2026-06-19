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

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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