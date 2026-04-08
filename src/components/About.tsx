"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-[90%]"
      id="about"
      style={{ marginTop: "var(--spacing-section)" }}
    >
      <h2 className="absolute bottom-full left-0 z-10 translate-y-[21%] text-[18vmin] font-light leading-none tracking-tight text-text-primary dark:text-on-dark-muted">
        {t.about.sectionTitle}
      </h2>

      <div
        className="relative overflow-hidden px-8 py-18 text-center text-on-dark min-[375px]:px-12 min-[375px]:py-22"
        style={{
          backgroundImage:
            "linear-gradient(145deg, hsl(156, 48%, 40%), hsl(161, 49%, 45%))",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_32%)]" />
        <div className="relative">
        <h1 className="pb-5 text-[8vmin] font-semibold tracking-tight">{t.about.title}</h1>
        <p className="mx-auto w-[90%] text-base leading-7 text-on-dark-secondary min-[375px]:w-3/4 min-[375px]:text-[1.02rem] min-[375px]:leading-8">
          {t.about.description}
        </p>
        </div>
      </div>
      <article
        className="overflow-hidden bg-cover bg-center px-8 pt-20 pb-10 dark:brightness-[0.7] min-[375px]:px-12 min-[375px]:pt-28 min-[375px]:pb-12"
        style={{
          backgroundImage:
            "linear-gradient(145deg, hsla(193, 30%, 69%, 0.92), hsla(14, 81%, 96%, 0.86)), url('/images/cofee.jpg')",
        }}
      >
        <h2 className="pb-5 text-center text-[7vmin] font-semibold leading-snug tracking-tight text-text-secondary">
          {t.about.moreTitle}
        </h2>
        <p className="text-center text-base leading-7 text-text-secondary md:mx-auto md:my-6 md:w-[60%] md:text-[1.02rem] md:leading-8">
          {t.about.moreDescription}
        </p>
      </article>
    </section>
  );
}
