"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="mt-12 w-[90%] bg-surface-warm">
      <article className="px-4 py-12 pb-20 min-[375px]:px-6 min-[375px]:pb-28">
        <h2 className="text-left text-[15vw] font-light leading-[0.9] tracking-tight text-text-primary dark:text-accent-coral min-[375px]:text-[18vw] md:text-[16vmin] lg:w-[60%]">
          {t.banner.greeting}
          <br />
          {t.banner.name}
          <br /> {t.banner.role}
        </h2>
      </article>
    </div>
  );
}
