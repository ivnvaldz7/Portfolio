"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      type="button"
      aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
      onClick={toggleLocale}
      className="flex h-9 items-center rounded-full px-2 font-mono text-xs font-semibold tracking-wider text-text-primary dark:text-[#EAAD9A] hover:bg-text-primary/10 dark:hover:bg-[#EAAD9A]/10"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
