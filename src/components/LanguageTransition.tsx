"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function LanguageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={locale}
        initial={reduceMotion ? { opacity: 0.98 } : { opacity: 0, y: 10 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0.98 } : { opacity: 0, y: -8 }}
        transition={{ duration: reduceMotion ? 0.12 : 0.22, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
