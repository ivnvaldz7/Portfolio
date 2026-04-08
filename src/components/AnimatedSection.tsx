"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.22 }}
      className="flex w-full justify-center"
    >
      {children}
    </motion.div>
  );
}
