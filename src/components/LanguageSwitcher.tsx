"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

type Props = {
  compact?: boolean;
  variant?: "light" | "dark";
};

export default function LanguageSwitcher({
  compact = false,
  variant = "light",
}: Props) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border p-0.5 sm:p-1 ${
        compact ? "ml-0" : "ml-2 sm:ml-3"
      } ${
        variant === "dark"
          ? "border-white/16 bg-white/8"
          : "border-slate-300/60 bg-slate-100/40"
      }`}
    >
      {locales.map((loc) => (
        <button
          key={loc.code}
          type="button"
          onClick={() => switchLocale(loc.code)}
          className={`focus-ring min-h-8 rounded-md px-1.5 py-1 text-[10px] font-semibold transition-all sm:min-h-9 sm:px-2.5 sm:py-1 sm:text-xs ${
            locale === loc.code
              ? variant === "dark"
                ? "bg-gold/25 text-gold-light shadow-sm"
                : "bg-champagne text-navy shadow-sm"
              : variant === "dark"
                ? "text-cream/75 hover:bg-white/10 hover:text-cream"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-800"
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}