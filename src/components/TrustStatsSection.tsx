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
        <Stagger className="mt-5 grid grid-cols-3 gap-3 sm:mt-6 sm:gap-5 md:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group rounded-2xl border border-cream-dark/90 bg-white/80 px-3 py-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md sm:px-5 sm:py-5">
                <p className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
                  {"display" in stat ? (
                    stat.display
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-1.5 font-sans text-[10px] leading-snug text-muted sm:text-xs md:text-sm">
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