import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  tagline: string;
  title: string;
  subtitle: string;
  ctaContact: string;
  ctaPractice: string;
};

export default function HeroSection({
  tagline,
  title,
  subtitle,
  ctaContact,
  ctaPractice,
}: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden mesh-bg text-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-modern.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-navy-light/50 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-24 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              <span className="text-xs font-medium tracking-[0.2em] text-gold-light uppercase">
                {tagline}
              </span>
            </div>
            <h1 className="max-w-xl font-display text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-6xl">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                {ctaContact}
              </Link>
              <Link
                href="/practice-areas"
                className="rounded-full glass px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-white/10"
              >
                {ctaPractice}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-modern.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl glass-light p-6 shadow-2xl">
              <p className="font-display text-3xl font-semibold text-navy">6+</p>
              <p className="mt-1 text-sm text-muted">Practice Areas</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl bg-gold px-5 py-4 shadow-xl">
              <p className="text-xs font-bold tracking-widest text-navy uppercase">Sophys</p>
              <p className="mt-0.5 text-[10px] text-navy/70">Law Firm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}