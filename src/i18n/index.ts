import en from "./en.json";
import es from "./es.json";

export type Translations = typeof en;
export type Locale = "en" | "es";

const translations: Record<Locale, Translations> = { en, es };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
