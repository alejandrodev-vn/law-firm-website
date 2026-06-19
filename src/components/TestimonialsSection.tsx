import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/i18n/routing";
import { getLocalizedText } from "@/lib/locale";

type Props = {
  locale: Locale;
  title: string;
  subtitle: string;
};

export default function TestimonialsSection({
  locale,
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-navy py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-cream/60">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="border border-navy-light bg-navy-light/40 p-6"
            >
              <p className="text-sm leading-relaxed text-cream/80">
                &ldquo;{getLocalizedText(item.quote, locale)}&rdquo;
              </p>
              <footer className="mt-5 border-t border-cream/10 pt-4">
                <p className="text-sm font-medium text-gold-light">
                  {getLocalizedText(item.author, locale)}
                </p>
                <p className="mt-1 text-xs text-cream/50">
                  {getLocalizedText(item.role, locale)} —{" "}
                  {getLocalizedText(item.company, locale)}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}