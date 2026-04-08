"use client";

import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          {locale === "en" ? "ES" : "EN"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
