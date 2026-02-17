"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="relative w-[90%] bg-surface-earth" id="about" style={{ marginTop: "var(--spacing-section)" }}>
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] font-light leading-none tracking-tight text-text-primary dark:text-on-dark-muted">
        {t.about.sectionTitle}
      </h2>
      <div className="px-8 py-24 text-center text-on-dark min-[375px]:px-12 min-[375px]:py-32">
        <h1 className="pb-6 text-[9vmin] font-semibold tracking-tight">{t.about.title}</h1>
        <p className="mx-auto w-[90%] text-base leading-7 text-on-dark-secondary min-[375px]:w-3/4 min-[375px]:text-lg min-[375px]:leading-8">
          {t.about.description}
        </p>
      </div>
      <article
        className="bg-surface-sand bg-cover bg-center px-8 pt-28 pb-8 dark:brightness-[0.7] min-[375px]:px-12 min-[375px]:pt-40"
        style={{ backgroundImage: "url('/images/cofee.jpg')" }}
      >
        <h2 className="pb-6 text-center text-[8vmin] font-semibold leading-snug tracking-tight text-text-secondary">
          {t.about.moreTitle}
        </h2>
        <p className="text-center text-base leading-7 text-text-secondary md:mx-auto md:my-8 md:w-[60%] md:text-lg md:leading-8">
          {t.about.moreDescription}
        </p>
      </article>
    </section>
  );
}
