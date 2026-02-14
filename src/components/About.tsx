"use client";

import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-[350px] w-[90%] bg-brand-green" id="about">
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] leading-none text-brand-text dark:text-white/20">
        {t.about.sectionTitle}
      </h2>
      <div className="px-6 py-24 text-center text-white min-[375px]:px-10 min-[375px]:py-40">
        <h1 className="pb-5 text-[9vmin]">{t.about.title}</h1>
        <p className="mx-auto w-[90%] text-base leading-[30px] min-[375px]:w-3/4">
          {t.about.description}
        </p>
      </div>
      <article
        className="bg-brand-cyan bg-cover bg-center px-6 pt-[120px] pb-6 dark:brightness-[0.7] min-[375px]:px-10 min-[375px]:pt-[180px]"
        style={{ backgroundImage: "url('/images/cofee.jpg')" }}
      >
        <h2 className="pb-5 text-center text-[8vmin] leading-snug text-brand-text-secondary">
          {t.about.moreTitle}
        </h2>
        <p className="text-center text-base leading-[30px] text-brand-text-secondary md:mx-auto md:my-8 md:w-[60%]">
          {t.about.moreDescription}
        </p>
      </article>
    </section>
  );
}
