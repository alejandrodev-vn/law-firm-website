import Image from "next/image";
import type { TeamMember } from "@/data/team";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  member: TeamMember;
  locale: Locale;
  experienceLabel: string;
  specialtyLabel: string;
  layout?: "vertical" | "horizontal";
};

export default function TeamCard({
  member,
  locale,
  experienceLabel,
  specialtyLabel,
  layout = "vertical",
}: Props) {
  const image = (
    <div
      className={
        layout === "horizontal"
          ? "relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-cream sm:w-44 md:w-52"
          : "relative aspect-[3/4] w-full overflow-hidden bg-cream"
      }
    >
      <Image
        src={member.image}
        alt={getLocalizedText(member.name, locale)}
        fill
        className="object-cover object-[center_20%]"
        sizes={
          layout === "horizontal"
            ? "208px"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        }
      />
    </div>
  );

  const content = (
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-lg font-semibold text-navy">
        {getLocalizedText(member.name, locale)}
      </h3>
      <p className="mt-1 text-sm text-gold">{getLocalizedText(member.title, locale)}</p>
      <div className="mt-4 space-y-3 border-t border-cream-dark pt-4">
        <div>
          <p className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
            {specialtyLabel}
          </p>
          <p className="mt-1 text-sm text-charcoal/80">
            {getLocalizedText(member.specialty, locale)}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wider text-charcoal/50 uppercase">
            {experienceLabel}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
            {getLocalizedText(member.experience, locale)}
          </p>
        </div>
      </div>
    </div>
  );

  if (layout === "horizontal") {
    return (
      <div className="flex flex-col overflow-hidden border border-cream-dark bg-white sm:flex-row">
        {image}
        {content}
      </div>
    );
  }

  return (
    <div className="border border-cream-dark bg-white">
      {image}
      {content}
    </div>
  );
}