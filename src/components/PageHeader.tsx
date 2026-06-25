import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Breadcrumb = {
  homeLabel: string;
  currentLabel: string;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: Breadcrumb;
};

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="page-hero-editorial relative overflow-hidden border-b border-[rgba(198,156,77,0.16)] text-cream">
      <div className="absolute inset-0 page-hero-arch-lines" aria-hidden />
      <div className="absolute inset-0 page-hero-grain" aria-hidden />

      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt=""
          fill
          className="object-cover object-[center_35%] opacity-[0.14] sm:opacity-[0.18]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[#08101F]/88" aria-hidden />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-1rem] bottom-[-1.5rem] hidden font-display text-[10rem] font-semibold leading-none text-champagne/[0.045] select-none sm:block md:right-4 md:bottom-[-2rem] md:text-[12rem] lg:text-[14rem] lg:text-champagne/[0.055]"
      >
        S
      </div>

      <div className="relative mx-auto flex min-h-[200px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[240px] sm:py-14 md:min-h-[280px] md:px-6 md:py-16 lg:min-h-[300px] lg:px-8 lg:py-[4.5rem]">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 font-sans text-[11px] tracking-[0.14em] text-cream/45 uppercase sm:mb-5 sm:text-xs"
          >
            <Link
              href="/"
              className="transition-colors hover:text-gold-light/80"
            >
              {breadcrumb.homeLabel}
            </Link>
            <span className="mx-2 text-gold/35" aria-hidden>
              /
            </span>
            <span className="text-cream/62">{breadcrumb.currentLabel}</span>
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-cream sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl font-sans text-sm font-medium tracking-[0.22em] text-champagne/88 uppercase sm:mt-5 sm:text-[15px] md:text-base">
              {subtitle}
            </p>
          )}
          <div
            aria-hidden
            className="mt-5 h-px w-12 bg-gradient-to-r from-gold/70 to-gold/20 sm:mt-6 sm:w-14 md:w-[4.5rem]"
          />
        </div>
      </div>
    </section>
  );
}