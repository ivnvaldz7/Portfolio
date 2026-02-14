"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-soft-pink px-6 text-center">
      <h1 className="text-[25vmin] font-bold leading-none text-brand-logo">
        {t.notFound.title}
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-brand-text md:text-4xl">
        {t.notFound.subtitle}
      </h2>
      <p className="mt-4 max-w-md text-lg text-brand-text-secondary">
        {t.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand-logo px-8 py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
      >
        {t.notFound.button}
      </Link>
    </div>
  );
}
