"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      type="button"
      aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
      onClick={toggleLocale}
      className="flex h-9 items-center rounded-full px-2 text-sm font-semibold text-brand-text transition-colors hover:bg-brand-text/10"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
