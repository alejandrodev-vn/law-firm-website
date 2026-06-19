import type { Locale } from "@/i18n/routing";
import type { LocalizedText } from "@/data/practice-areas";

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}