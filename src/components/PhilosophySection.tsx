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

const IconScale = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" />
  </svg>
);

const IconHandshake = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2M17 13l-2 2m0 0l-2 2m2-2l2-2m-2 2l-2-2" />
  </svg>
);

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

        <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:items-stretch">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:rounded-3xl md:col-span-1 md:aspect-[3/4] lg:col-span-5 lg:aspect-auto lg:min-h-0 lg:self-stretch">
            <Image
              src="/images/abstract-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-navy/10" />
            <div className="absolute top-6 left-6 h-12 w-px bg-gold/40" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <p className="font-display text-3xl font-semibold text-gold-light/30 sm:text-4xl">S</p>
              <p className="mt-1 text-xs tracking-[0.3em] text-cream/60 uppercase">
                Sophys Law Firm
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="card-hover group flex flex-1 flex-col rounded-2xl border border-transparent bg-navy p-4 text-cream transition-colors hover:border-gold/25 sm:rounded-3xl sm:p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 text-gold-light transition-colors group-hover:border-gold/50 group-hover:text-gold">
                    <IconScale />
                  </span>
                  <p className="font-sans text-xs font-bold tracking-[0.25em] text-gold-light uppercase">
                    {beyondTitle}
                  </p>
                </div>
                <p className="mt-4 flex-1 font-sans text-sm leading-snug text-cream/80 md:text-[15px] md:leading-relaxed">
                  {beyondDesc}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="card-hover group flex flex-1 flex-col rounded-2xl border border-cream-dark bg-white p-4 transition-colors hover:border-burgundy/20 sm:rounded-3xl sm:p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 text-gold transition-colors group-hover:border-burgundy/30 group-hover:text-burgundy">
                    <IconHandshake />
                  </span>
                  <p className="font-sans text-xs font-bold tracking-[0.25em] text-gold uppercase">
                    {besideTitle}
                  </p>
                </div>
                <p className="mt-4 flex-1 font-sans text-sm leading-snug text-charcoal/75 md:text-[15px] md:leading-relaxed">
                  {besideDesc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}