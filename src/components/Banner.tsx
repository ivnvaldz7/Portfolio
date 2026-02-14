"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="mt-[50px] w-[90%] bg-brand-soft-pink dark:bg-[var(--color-brand-soft-pink)]">
      <article className="px-2 py-8 pb-16 min-[375px]:pb-24">
        <h2 className="text-left text-[15vw] leading-[0.9] text-brand-text dark:text-brand-logo min-[375px]:text-[18vw] md:text-[16vmin] lg:w-[60%]">
          {t.banner.greeting}
          <br />
          {t.banner.name}
          <br /> {t.banner.role}
        </h2>
      </article>
    </div>
  );
}
