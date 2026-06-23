import { credentials } from "@/data/credentials";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  locale: Locale;
};

export default function CredentialsBar({ locale }: Props) {
  const items = credentials.map((item) => getLocalizedText(item.label, locale));
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-cream-dark bg-white py-5">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-3 text-sm font-medium text-navy/70"
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}