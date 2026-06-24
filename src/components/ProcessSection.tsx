"use client";

import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

type Step = {
  number: string;
  title: string;
  desc: string;
};

type Props = {
  title: string;
  subtitle: string;
  steps: Step[];
};

export default function ProcessSection({ title, subtitle, steps }: Props) {
  return (
    <section className="mesh-bg relative overflow-hidden py-14 text-cream sm:py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 hero-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-light uppercase">
              Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-cream/60 md:text-[17px]">
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* Desktop / tablet horizontal timeline */}
        <div className="relative mt-10 hidden md:block">
          <div className="absolute top-[2.75rem] right-[12%] left-[12%] h-px timeline-line-h" />
          <Stagger className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group relative">
                  <div className="relative z-10 mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-navy-mid/80 font-display text-sm font-semibold text-gold-light shadow-sm transition-colors group-hover:border-gold/60 group-hover:bg-burgundy/40">
                    {step.number}
                  </div>
                  <div className="card-hover-subtle rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-colors group-hover:border-gold/20 group-hover:bg-white/8 lg:p-6">
                    <span className="font-display text-3xl font-semibold text-gold-light/25 lg:text-4xl">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Mobile vertical timeline */}
        <Stagger className="relative mt-8 space-y-5 md:hidden">
          <div className="absolute top-3 bottom-3 left-[1.35rem] w-px timeline-line-v" />
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative flex gap-4 pl-1">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-mid font-display text-xs font-semibold text-gold-light">
                  {step.number}
                </div>
                <div className="card-hover-subtle flex-1 rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{step.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}