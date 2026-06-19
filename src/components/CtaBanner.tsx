import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  subtitle: string;
  cta: string;
};

export default function CtaBanner({ title, subtitle, cta }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream py-16 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,39,68,0.04)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal/70">
          {subtitle}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-navy px-10 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-light"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}