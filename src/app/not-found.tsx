"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-warm px-8 text-center">
      <h1 className="text-[25vmin] font-light leading-none tracking-tight text-accent-coral">
        {t.notFound.title}
      </h1>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {t.notFound.subtitle}
      </h2>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-text-secondary">
        {t.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-10 rounded-[var(--radius-md)] bg-accent-coral px-8 py-3 text-base font-semibold text-white hover:brightness-110 active:brightness-95"
      >
        {t.notFound.button}
      </Link>
    </div>
  );
}
