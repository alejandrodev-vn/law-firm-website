import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  subtitle: string;
  cta: string;
};

export default function CtaBanner({ title, subtitle, cta }: Props) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-banner-calm.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-cream/70 md:text-lg">
          {subtitle}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block w-full max-w-xs rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 sm:mt-10 sm:w-auto sm:max-w-none sm:px-12 sm:py-4"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}