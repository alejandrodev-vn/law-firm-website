"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Reveal } from "./motion/Reveal";

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
  const sectionRef = useRef<HTMLElement>(null);
  const desktopTimelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const lineHRef = useRef<HTMLDivElement>(null);
  const lineVRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const desktopSteps = desktopTimelineRef.current
        ? gsap.utils.toArray<HTMLElement>(
            "[data-process-step]",
            desktopTimelineRef.current,
          )
        : [];
      const mobileSteps = mobileTimelineRef.current
        ? gsap.utils.toArray<HTMLElement>(
            "[data-process-step]",
            mobileTimelineRef.current,
          )
        : [];

      const setFinalState = () => {
        gsap.set(lineHRef.current, { scaleX: 1 });
        gsap.set(lineVRef.current, { scaleY: 1 });
        gsap.set([...desktopSteps, ...mobileSteps], { opacity: 1, y: 0 });
      };

      if (reduce) {
        setFinalState();
        return;
      }

      gsap.set(lineHRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(lineVRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });
      gsap.set([...desktopSteps, ...mobileSteps], { opacity: 0, y: 20 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopTimelineRef.current,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        tl.to(lineHRef.current, { scaleX: 1, duration: 0.9 }).to(
          desktopSteps,
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.5",
        );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mobileTimelineRef.current,
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        tl.to(lineVRef.current, { scaleY: 1, duration: 0.9 }).to(
          mobileSteps,
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.5",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mesh-bg relative overflow-hidden py-14 text-cream sm:py-16 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hero-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-light uppercase">
              Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-cream/60 md:text-[17px]">
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* Desktop / tablet horizontal timeline */}
        <div ref={desktopTimelineRef} className="relative mt-10 hidden md:block">
          <div
            ref={lineHRef}
            className="absolute top-[2.75rem] right-[12%] left-[12%] h-px origin-left scale-x-0 timeline-line-h"
          />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                data-process-step
                className="group relative opacity-0"
              >
                <div className="relative z-10 mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-navy-mid/80 font-display text-sm font-semibold text-gold-light shadow-sm transition-colors group-hover:border-gold/60 group-hover:bg-burgundy/40">
                  {step.number}
                </div>
                <div className="card-hover-subtle rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-colors group-hover:border-gold/20 group-hover:bg-white/8 lg:p-6">
                  <span className="font-display text-3xl font-semibold text-gold-light/25 lg:text-4xl">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div
          ref={mobileTimelineRef}
          className="relative mt-8 space-y-5 md:hidden"
        >
          <div
            ref={lineVRef}
            className="absolute top-3 bottom-3 left-[1.35rem] w-px origin-top scale-y-0 timeline-line-v"
          />
          {steps.map((step) => (
            <div
              key={step.number}
              data-process-step
              className="group relative flex gap-4 pl-1 opacity-0"
            >
              <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-mid font-display text-xs font-semibold text-gold-light">
                {step.number}
              </div>
              <div className="card-hover-subtle flex-1 rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                <h3 className="font-display text-base font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}