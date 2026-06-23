import { clientTypes } from "@/data/clients";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  locale: Locale;
  title: string;
  subtitle: string;
  closing?: string;
};

export default function ClientsSection({
  locale,
  title,
  subtitle,
  closing,
}: Props) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/60">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((client) => (
            <div
              key={client.id}
              className="flex items-start gap-3 border border-cream-dark bg-white p-5"
            >
              <span className="mt-0.5 text-gold">✦</span>
              <p className="text-sm leading-relaxed text-charcoal/80">
                {getLocalizedText(client.title, locale)}
              </p>
            </div>
          ))}
        </div>
        {closing && (
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-charcoal/70">
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}