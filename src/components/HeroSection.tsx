"use client";

import { useLayoutEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import HeroVideo from "./HeroVideo";

type Props = {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  coreValues: string;
  subtitle: string;
  ctaContact: string;
  ctaPractice: string;
  statHotline: string;
};

export default function HeroSection({
  tagline,
  titleLine1,
  titleLine2,
  coreValues,
  subtitle,
  ctaContact,
  ctaPractice,
  statHotline,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const coreValuesRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hotlineRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const fadeTargets = [
        badgeRef.current,
        titleLine1Ref.current,
        titleLine2Ref.current,
        coreValuesRef.current,
        subtitleRef.current,
        ctaRef.current,
      ].filter(Boolean);

      if (reduce) {
        gsap.set(fadeTargets, { opacity: 1, y: 0 });
        gsap.set(goldLineRef.current, { scaleX: 1 });
        gsap.set(hotlineRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(fadeTargets, { opacity: 0, y: 24 });
      gsap.set(goldLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(hotlineRef.current, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(
          goldLineRef.current,
          { scaleX: 1, duration: 0.8 },
          "-=0.45",
        )
        .to(
          titleLine1Ref.current,
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.55",
        )
        .to(
          titleLine2Ref.current,
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.6",
        )
        .to(
          coreValuesRef.current,
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.65",
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.55",
        )
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
        .to(
          hotlineRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-0 overflow-hidden text-cream sm:min-h-[62vh] sm:max-h-[680px] md:min-h-[68vh]"
    >
      <div className="absolute inset-0">
        <HeroVideo
          src={siteConfig.heroVideo}
          poster={siteConfig.heroPoster}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/60 to-navy/35 sm:from-navy/88 sm:via-navy/50 sm:to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/15 to-transparent" />
        <div className="hero-pattern absolute inset-0 opacity-25" />
      </div>

      <div className="hero-float-1 absolute -right-20 top-1/4 hidden h-72 w-72 rounded-full bg-gold/5 blur-3xl sm:block md:h-96 md:w-96" />
      <div className="hero-float-2 absolute -left-20 bottom-1/4 hidden h-56 w-56 rounded-full bg-navy-light/20 blur-3xl sm:block md:h-72 md:w-72" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-10 sm:min-h-[62vh] sm:max-h-[680px] sm:py-14 md:min-h-[68vh] md:px-6 md:py-16 lg:px-8">
        <div className="max-w-xl sm:max-w-3xl">
          <div
            ref={badgeRef}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 opacity-0 sm:mb-5 sm:px-4 sm:py-2"
          >
            <span className="hero-pulse-dot h-1.5 w-1.5 rounded-full bg-gold-light" />
            <span className="text-[10px] font-medium tracking-[0.18em] text-gold-light uppercase sm:text-xs sm:tracking-[0.2em]">
              {tagline}
            </span>
          </div>
          <div
            ref={goldLineRef}
            className="mb-4 h-px w-12 origin-left scale-x-0 bg-gradient-to-r from-gold/70 to-transparent sm:mb-5 sm:w-16"
          />
          <h1 className="font-display text-[1.65rem] leading-[1.12] font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span ref={titleLine1Ref} className="block text-cream opacity-0">
              {titleLine1}
            </span>
            <span
              ref={titleLine2Ref}
              className="mt-0.5 block text-champagne opacity-0 sm:mt-1"
            >
              {titleLine2}
            </span>
          </h1>
          <p
            ref={coreValuesRef}
            className="mt-2.5 font-display text-[9px] font-medium tracking-[0.22em] text-gold-light/42 uppercase opacity-0 sm:mt-3 sm:text-[10px] sm:tracking-[0.28em] md:text-[11px] md:tracking-[0.32em]"
          >
            {coreValues}
          </p>
          <p
            ref={subtitleRef}
            className="mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-cream/75 opacity-0 sm:mt-4 sm:line-clamp-none sm:text-base sm:text-cream/80 md:text-lg"
          >
            {subtitle}
          </p>
          <div
            ref={ctaRef}
            className="mt-5 flex w-fit flex-col gap-2.5 opacity-0 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
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
            ref={hotlineRef}
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-4 inline-flex max-w-full items-center gap-2 whitespace-nowrap font-sans text-sm opacity-0 sm:mt-5"
          >
            <span className="text-cream/55">{statHotline}</span>
            <span className="text-cream/30">·</span>
            <span className="font-semibold text-gold-light">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}