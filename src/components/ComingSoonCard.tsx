"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function ComingSoonCard() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center p-8 text-center min-[375px]:min-h-[500px] min-[375px]:p-10 bg-surface-ink/80 md:p-12">
      <p className="text-3xl font-light tracking-tight text-on-dark-muted min-[375px]:text-4xl md:text-5xl">
        {t.comingSoon.title}
      </p>
      <p className="mt-6 w-[70%] text-sm leading-relaxed text-on-dark-tertiary min-[375px]:text-base">
        {t.comingSoon.description}
      </p>
    </div>
  );
}
