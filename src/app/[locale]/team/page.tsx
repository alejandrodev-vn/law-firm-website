import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/data/team";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TeamContent locale={locale} />;
}

function TeamContent({ locale }: { locale: Locale }) {
  const t = useTranslations("team");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                locale={locale}
                experienceLabel={t("experience")}
                specialtyLabel={t("specialty")}
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}