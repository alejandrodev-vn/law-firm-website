"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { Reveal } from "./motion/Reveal";

type Props = {
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary?: string;
};

export default function CtaBanner({ title, subtitle, cta, ctaSecondary }: Props) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-banner-calm.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/88 via-burgundy/70 to-navy/88" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/12 bg-[rgba(8,13,28,0.62)] px-6 py-10 text-center backdrop-blur-md sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(232, 220, 196, 0.1) 0%, transparent 65%)",
            }}
          />
          <p className="relative font-sans text-[10px] font-semibold tracking-[0.28em] text-champagne/90 uppercase sm:text-xs">
            Consultation
          </p>
          <h2 className="relative mt-3 font-display text-2xl font-semibold text-ivory sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-ivory/80 sm:text-base md:text-lg">
            {subtitle}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/15 sm:w-auto sm:max-w-none sm:px-12"
            >
              {cta}
            </Link>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="focus-ring inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-champagne/40 hover:bg-white/10 sm:w-auto"
            >
              <span className="text-ivory/75">{ctaSecondary}</span>
              <span className="font-semibold text-ivory">{siteConfig.phone}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}