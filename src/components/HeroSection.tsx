import { Link } from "@/i18n/navigation";
import { practiceAreas } from "@/data/practice-areas";
import { siteConfig } from "@/data/site";
import HeroVideo from "./HeroVideo";

type Props = {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaContact: string;
  ctaPractice: string;
  statPractice: string;
  statHotline: string;
};

export default function HeroSection({
  tagline,
  titleLine1,
  titleLine2,
  subtitle,
  ctaContact,
  ctaPractice,
  statPractice,
  statHotline,
}: Props) {
  const areaCount = practiceAreas.length;

  return (
    <section className="relative min-h-0 overflow-hidden text-cream sm:min-h-[62vh] sm:max-h-[680px] md:min-h-[68vh]">
      <div className="absolute inset-0">
        <HeroVideo
          src={siteConfig.heroVideo}
          poster={siteConfig.heroPoster}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/82 via-navy/45 to-navy/25 sm:from-navy/78 sm:via-navy/30 sm:to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/20" />
        <div className="hero-pattern absolute inset-0 opacity-35" />
      </div>

      <div className="hero-float-1 absolute -right-20 top-1/4 hidden h-72 w-72 rounded-full bg-gold/5 blur-3xl sm:block md:h-96 md:w-96" />
      <div className="hero-float-2 absolute -left-20 bottom-1/4 hidden h-56 w-56 rounded-full bg-navy-light/20 blur-3xl sm:block md:h-72 md:w-72" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-10 sm:min-h-[62vh] sm:max-h-[680px] sm:py-14 md:min-h-[68vh] md:px-6 md:py-16 lg:px-8">
        <div className="max-w-xl sm:max-w-3xl">
          <div className="hero-fade-up-1 mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 sm:mb-5 sm:px-4 sm:py-2">
            <span className="hero-pulse-dot h-1.5 w-1.5 rounded-full bg-gold-light" />
            <span className="text-[10px] font-medium tracking-[0.18em] text-gold-light uppercase sm:text-xs sm:tracking-[0.2em]">
              {tagline}
            </span>
          </div>
          <div className="hero-fade-up-2 mb-4 h-px w-12 bg-gradient-to-r from-gold/70 to-transparent sm:mb-5 sm:w-16" />
          <h1 className="font-display text-[1.65rem] leading-[1.12] font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="hero-fade-up-2 block text-cream">{titleLine1}</span>
            <span className="hero-fade-up-3 mt-0.5 block text-champagne sm:mt-1">
              {titleLine2}
            </span>
          </h1>
          <p className="hero-fade-up-4 mt-4 line-clamp-3 font-sans text-sm leading-relaxed text-cream/75 sm:mt-5 sm:line-clamp-none sm:text-base sm:text-cream/80 md:text-lg">
            {subtitle}
          </p>
          <div className="hero-fade-up-5 mt-5 flex w-fit flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light sm:px-8 sm:py-3.5"
            >
              {ctaContact}
            </Link>
            <Link
              href="/practice-areas"
              className="focus-ring hidden min-h-11 items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold/30 hover:bg-white/8 sm:inline-flex sm:px-8 sm:py-3.5"
            >
              {ctaPractice}
            </Link>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-gold-light sm:hidden"
          >
            <span className="text-cream/50">{statHotline}</span>
            <span className="font-semibold">{siteConfig.phone}</span>
          </a>
        </div>

        <div className="mt-8 hidden flex-wrap items-end justify-between gap-4 md:mt-10 md:flex">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-gold-light uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            Ho Chi Minh City
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/practice-areas"
              className="hero-float-1 rounded-2xl glass-light px-5 py-4 shadow-2xl transition-transform hover:scale-[1.03]"
            >
              <p className="font-display text-2xl font-semibold text-navy">{areaCount}</p>
              <p className="mt-0.5 text-xs text-muted">{statPractice}</p>
            </Link>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="hero-float-2 rounded-2xl bg-gold px-5 py-4 shadow-xl transition-transform hover:scale-[1.03]"
            >
              <p className="text-[10px] font-bold tracking-widest text-navy uppercase">{statHotline}</p>
              <p className="mt-0.5 text-sm font-semibold text-navy">{siteConfig.phone}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}