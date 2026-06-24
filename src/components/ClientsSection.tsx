import Image from "next/image";
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
    <section className="relative overflow-hidden bg-paper py-10 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Clients
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted md:text-[17px] md:leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-8 md:grid-cols-2 md:items-stretch lg:grid-cols-12">
          <div className="relative hidden min-h-0 overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm lg:col-span-4 lg:block">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/clients-deco.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:col-span-1 lg:col-span-8 lg:grid-cols-3">
            {clientTypes.map((client, i) => (
              <div
                key={client.id}
                className="card-hover group flex flex-row items-center gap-2.5 overflow-hidden rounded-xl border border-cream-dark bg-white p-2.5 shadow-sm sm:flex-col sm:gap-0 sm:rounded-2xl sm:p-0"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cream/30 sm:aspect-[5/4] sm:h-auto sm:w-full sm:rounded-none">
                  <Image
                    src={client.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 33vw, 25vw"
                  />
                  <span className="absolute top-2 left-2 hidden rounded-lg bg-navy/90 px-2 py-0.5 text-[10px] font-bold tracking-widest text-gold-light sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="flex flex-1 items-center text-xs leading-snug text-charcoal/80 sm:p-4 sm:text-sm">
                  {getLocalizedText(client.title, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {closing && (
          <p className="mt-6 max-w-3xl font-sans text-sm leading-relaxed text-muted">{closing}</p>
        )}
      </div>
    </section>
  );
}