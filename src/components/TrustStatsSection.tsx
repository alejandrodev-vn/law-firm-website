"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { practiceAreas } from "@/data/practice-areas";
import Counter from "./motion/Counter";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

type StatIconType = "practice" | "languages" | "location";

type Stat = {
  icon: StatIconType;
  value: number;
  suffix: string;
  label: string;
  display?: "HCMC";
};

const statIcons: Record<StatIconType, { src: string; alt: string }> = {
  practice: {
    src: "/images/stats/stat-practice.png",
    alt: "Practice areas",
  },
  languages: {
    src: "/images/stats/stat-languages.png",
    alt: "Languages supported",
  },
  location: {
    src: "/images/stats/stat-location.png",
    alt: "Office location",
  },
};

function StatValue({ stat }: { stat: Stat }) {
  if (stat.display) {
    return stat.display;
  }

  return <Counter value={stat.value} suffix={stat.suffix} />;
}

export default function TrustStatsSection() {
  const t = useTranslations("home.stats");

  const stats: Stat[] = [
    {
      icon: "practice",
      value: practiceAreas.length,
      suffix: "+",
      label: t("practiceAreas"),
    },
    { icon: "languages", value: 3, suffix: "", label: t("languages") },
    { icon: "location", value: 1, suffix: "", label: t("location"), display: "HCMC" },
  ];

  return (
    <section className="border-b border-cream-dark/80 bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 md:px-6 md:py-10 lg:px-8">
        <Reveal>
          <p className="text-center font-sans text-[10px] font-semibold tracking-[0.28em] text-gold uppercase sm:text-xs">
            {t("label")}
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-4 grid w-full max-w-sm grid-cols-3 gap-3 sm:mt-6 sm:max-w-lg sm:gap-5 md:max-w-xl md:gap-6 lg:max-w-2xl">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <div className="group flex h-full flex-col items-center px-1 py-2 text-center sm:px-3 sm:py-3">
                <div className="relative mb-2 h-9 w-9 transition-transform duration-300 group-hover:scale-105 sm:mb-3 sm:h-11 sm:w-11">
                  <Image
                    src={statIcons[stat.icon].src}
                    alt={statIcons[stat.icon].alt}
                    fill
                    className="object-contain"
                    sizes="44px"
                  />
                </div>
                <p className="font-display text-lg font-semibold leading-none text-navy sm:text-3xl md:text-4xl">
                  <StatValue stat={stat} />
                </p>
                <p className="mt-1.5 max-w-[7rem] font-sans text-[10px] leading-snug text-balance text-muted sm:mt-2 sm:max-w-none sm:text-xs md:text-sm">
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