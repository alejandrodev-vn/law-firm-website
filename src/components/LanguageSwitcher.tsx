"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="ml-2 flex items-center gap-1 rounded-full bg-white/5 p-1">
      {locales.map((loc) => (
        <button
          key={loc.code}
          type="button"
          onClick={() => switchLocale(loc.code)}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
            locale === loc.code
              ? "bg-white/15 text-gold-light"
              : "text-cream/60 hover:text-cream"
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}