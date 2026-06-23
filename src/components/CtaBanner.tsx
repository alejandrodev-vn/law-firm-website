import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  subtitle: string;
  cta: string;
};

export default function CtaBanner({ title, subtitle, cta }: Props) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/abstract-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-cream md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
          {subtitle}
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-gold px-12 py-4 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}