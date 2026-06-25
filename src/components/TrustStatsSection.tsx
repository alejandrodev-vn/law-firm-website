"use client";

import { useTranslations } from "next-intl";
import { practiceAreas } from "@/data/practice-areas";
import Counter from "./motion/Counter";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export default function TrustStatsSection() {
  const t = useTranslations("home.stats");

  const stats = [
    { value: practiceAreas.length, suffix: "+", label: t("practiceAreas") },
    { value: 3, suffix: "", label: t("languages") },
    { value: 1, suffix: "", label: t("location"), display: "HCMC" as const },
  ];

  return (
    <section className="border-b border-cream-dark/80 bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <Reveal>
          <p className="text-center font-sans text-[10px] font-semibold tracking-[0.28em] text-gold uppercase sm:text-xs">
            {t("label")}
          </p>
        </Reveal>
        <Stagger className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-6 sm:gap-5 md:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <div className="group flex h-full min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border border-cream-dark/90 bg-white/80 px-2 py-3.5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md sm:min-h-0 sm:px-5 sm:py-5">
                <p className="flex min-h-[1.75rem] items-center justify-center font-display text-xl font-semibold text-navy sm:min-h-0 sm:text-3xl md:text-4xl">
                  {"display" in stat ? (
                    stat.display
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-1 flex min-h-[2.25rem] items-center justify-center font-sans text-[9px] leading-tight text-balance text-muted sm:mt-1.5 sm:min-h-0 sm:text-xs sm:leading-snug md:text-sm">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}