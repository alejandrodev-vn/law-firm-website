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
};

export default function LanguageSwitcher({ compact = false }: Props) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border border-white/10 bg-white/5 p-0.5 sm:p-1 ${
        compact ? "ml-0" : "ml-2 sm:ml-3"
      }`}
    >
      {locales.map((loc) => (
        <button
          key={loc.code}
          type="button"
          onClick={() => switchLocale(loc.code)}
          className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium transition-all sm:px-2.5 sm:py-1 sm:text-xs ${
            locale === loc.code
              ? "bg-gold/20 text-gold-light"
              : "text-cream/50 hover:text-cream/80"
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}