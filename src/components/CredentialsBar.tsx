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
    <section
      className="overflow-hidden border-y border-cream-dark/90 bg-ivory py-4"
      aria-label="Areas of expertise"
    >
      <div className="flex animate-marquee gap-10 whitespace-nowrap sm:gap-14">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-3 font-sans text-xs font-medium tracking-wide text-slate sm:text-sm"
          >
            <span className="h-1 w-1 rounded-full bg-gold/80" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}