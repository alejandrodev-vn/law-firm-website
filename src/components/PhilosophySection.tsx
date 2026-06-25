"use client";

import Image from "next/image";
import { Reveal } from "./motion/Reveal";

type Props = {
  title: string;
  beyondTitle: string;
  beyondDesc: string;
  besideTitle: string;
  besideDesc: string;
};

type ManifestoCardProps = {
  index: string;
  title: string;
  desc: string;
  variant: "dark" | "light";
};

function toManifestoTitle(value: string) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function ManifestoCard({ index, title, desc, variant }: ManifestoCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative flex flex-1 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:rounded-3xl sm:p-6 lg:p-7 motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
        isDark
          ? "border-gold/15 bg-navy text-cream shadow-[0_8px_30px_-20px_rgba(8,13,28,0.55)] hover:border-gold/25"
          : "border-cream-dark/90 bg-ivory text-charcoal shadow-[0_8px_30px_-24px_rgba(15,23,42,0.1)] hover:border-gold/30"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute top-3 right-4 font-display text-5xl font-semibold leading-none select-none sm:top-4 sm:right-5 sm:text-6xl lg:text-[4.5rem] ${
          isDark ? "text-champagne/10" : "text-gold/10"
        }`}
      >
        {index}
      </span>

      <div className="relative flex items-start gap-3 sm:gap-4">
        <span
          aria-hidden
          className={`mt-1 h-10 w-px shrink-0 sm:h-12 ${isDark ? "bg-gold/40" : "bg-gold/50"}`}
        />
        <div className="min-w-0 pr-6 sm:pr-8">
          <p
            className={`font-sans text-[10px] font-semibold tracking-[0.22em] uppercase sm:text-[11px] ${
              isDark ? "text-gold-light/55" : "text-gold/70"
            }`}
          >
            {index}
          </p>
          <h3
            className={`mt-1 font-manifesto text-[1.5rem] leading-[1.12] font-semibold italic sm:mt-1.5 sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.1] ${
              isDark ? "text-champagne" : "text-burgundy"
            }`}
          >
            {toManifestoTitle(title)}
          </h3>
          <p
            className={`mt-3 font-sans text-sm leading-relaxed sm:mt-4 sm:text-[15px] sm:leading-[1.7] ${
              isDark ? "text-cream/82" : "text-charcoal/75"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PhilosophySection({
  title,
  beyondTitle,
  beyondDesc,
  besideTitle,
  besideDesc,
}: Props) {
  return (
    <section className="paper-texture pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-sans text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Philosophy
          </p>
          <h2 className="mt-2 text-center font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:items-stretch lg:gap-5">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:rounded-3xl md:col-span-1 md:aspect-[3/4] lg:col-span-5 lg:aspect-auto lg:min-h-[22rem] lg:self-stretch">
            <Image
              src="/images/abstract-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-navy/10" />
            <div className="absolute top-6 left-6 h-12 w-px bg-gold/40" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <p className="font-display text-3xl font-semibold text-gold-light/30 sm:text-4xl">
                S
              </p>
              <p className="mt-1 text-xs tracking-[0.3em] text-cream/60 uppercase">
                Sophys Law Firm
              </p>
            </div>
          </Reveal>

          <div className="flex min-h-0 flex-col gap-3 md:col-span-1 lg:col-span-7 lg:gap-4">
            <Reveal delay={0.08} className="flex flex-1">
              <ManifestoCard
                index="01"
                title={beyondTitle}
                desc={beyondDesc}
                variant="dark"
              />
            </Reveal>

            <Reveal delay={0.16} className="flex flex-1">
              <ManifestoCard
                index="02"
                title={besideTitle}
                desc={besideDesc}
                variant="light"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}