"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function FloatingActions() {
  const t = useTranslations("float");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-5 z-40 flex flex-col items-end gap-2.5 sm:right-6 sm:bottom-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("scrollTop")}
        className={`focus-ring pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark/90 bg-ivory text-navy shadow-md transition-all duration-300 hover:border-gold/35 hover:shadow-lg motion-reduce:transition-none ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <a
        href={`tel:${siteConfig.phoneTel}`}
        aria-label={`${t("call")}: ${siteConfig.phone}`}
        className="focus-ring pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:shadow-xl motion-reduce:transition-none lg:h-auto lg:w-auto lg:gap-2.5 lg:px-5 lg:py-3"
      >
        <svg
          className="h-5 w-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="hidden whitespace-nowrap font-sans text-sm font-semibold tracking-wide lg:inline">
          {siteConfig.phone}
        </span>
      </a>
    </div>
  );
}