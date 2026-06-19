import { credentials } from "@/data/credentials";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  locale: Locale;
  title: string;
};

export default function CredentialsBar({ locale, title }: Props) {
  return (
    <section className="border-b border-cream-dark bg-navy py-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <p className="mb-5 text-center text-xs font-medium tracking-widest text-gold-light uppercase">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {credentials.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 text-sm text-cream/80"
            >
              <span className="text-gold">✦</span>
              {getLocalizedText(item.label, locale)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}