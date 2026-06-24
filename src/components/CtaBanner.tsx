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
        <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-burgundy/75 to-navy/90" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-white/10 bg-navy/30 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12 md:px-14 md:py-14">
          <p className="font-sans text-[10px] font-semibold tracking-[0.28em] text-champagne uppercase sm:text-xs">
            Consultation
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ivory sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-cream/75 sm:text-base md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/15 sm:w-auto sm:max-w-none sm:px-12"
            >
              {cta}
            </Link>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="focus-ring inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold/40 hover:text-gold-light sm:w-auto"
            >
              <span className="text-cream/50">{ctaSecondary}</span>
              <span className="font-semibold">{siteConfig.phone}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}