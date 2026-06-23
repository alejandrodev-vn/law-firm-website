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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              Clients
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              {title}
            </h2>
            <blockquote className="mt-8 rounded-3xl border-l-4 border-gold bg-cream/50 p-6">
              <p className="text-base leading-relaxed text-charcoal/80 italic">
                &ldquo;{subtitle}&rdquo;
              </p>
            </blockquote>
            {closing && (
              <p className="mt-6 text-sm leading-relaxed text-muted">{closing}</p>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {clientTypes.map((client, i) => (
              <div
                key={client.id}
                className="card-hover flex items-start gap-3 rounded-2xl border border-cream-dark bg-white p-5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-navy text-xs font-bold text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-charcoal/80">
                  {getLocalizedText(client.title, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}