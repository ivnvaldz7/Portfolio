"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLocalizedText } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import type { Project, ProjectSection } from "@/types";

function SectionCard({
  section,
  locale,
}: {
  section: ProjectSection;
  locale: "en" | "es";
}) {
  return (
    <article className="rounded-[28px] border border-border-subtle bg-white p-6 shadow-[0_24px_70px_-42px_rgba(0,0,0,0.18)] dark:border-border-default dark:bg-white/4">
      <h2 className="text-xl font-semibold tracking-tight text-text-primary">
        {getLocalizedText(section.title, locale)}
      </h2>
      <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
        {getLocalizedText(section.body, locale)}
      </p>
    </article>
  );
}

export default function ProjectDetailPage({ project }: { project: Project }) {
  const { locale, t } = useTranslation();

  return (
    <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-4 pb-20 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 self-start rounded-full border border-border-default bg-white/70 px-4 py-2 text-sm font-medium text-text-primary backdrop-blur-sm dark:bg-white/6"
      >
        <span aria-hidden="true">←</span>
        {t.projects.backToProjects}
      </Link>

      <section
        className="relative overflow-hidden rounded-[34px] border border-white/8 px-5 py-8 text-white sm:px-8 sm:py-10"
        style={{
          backgroundImage: project.theme.image
            ? `linear-gradient(145deg, ${project.theme.from}, ${project.theme.to}), url('${project.theme.image}')`
            : `linear-gradient(145deg, ${project.theme.from}, ${project.theme.to})`,
          backgroundPosition: "center",
          backgroundSize: project.theme.image ? "cover" : undefined,
          boxShadow: `0 28px 72px -36px ${project.theme.glow}`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/72">
              {t.projects.caseStudyLabel}
            </span>
            <div className="space-y-3">
              <h1 className="max-w-[14ch] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {getLocalizedText(project.title, locale)}
              </h1>
              <p className="max-w-[48ch] text-base leading-7 text-white/78 sm:text-lg">
                {getLocalizedText(project.subtitle, locale)}
              </p>
            </div>
            <p className="max-w-[58ch] text-sm leading-7 text-white/84 sm:text-base">
              {getLocalizedText(project.summary, locale)}
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-surface-ink hover:brightness-95"
                >
                  {t.projects.visitDemo}
                </a>
              ) : null}
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.projects.backToProjects}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid gap-4"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
              <Image
                src={project.icon}
                alt=""
                aria-hidden="true"
                width={144}
                height={144}
                className="max-h-16 w-auto object-contain brightness-0 invert"
              />
            </div>

            <div className="rounded-[28px] border border-white/12 bg-black/12 p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
                {t.projects.roleLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">
                {getLocalizedText(project.role, locale)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-5">
          <SectionCard section={project.sections.overview} locale={locale} />
          <SectionCard section={project.sections.challenge} locale={locale} />
          <SectionCard section={project.sections.solution} locale={locale} />
          <SectionCard section={project.sections.impact} locale={locale} />
        </div>

        <aside className="space-y-5">
          <div className="rounded-[28px] border border-border-subtle bg-surface-warm p-6 dark:border-border-default dark:bg-white/4">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-text-muted">
              {t.projects.stackLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border-default bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-text-primary dark:bg-white/6"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-border-subtle bg-surface-warm p-6 dark:border-border-default dark:bg-white/4">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-text-muted">
              {t.projects.outcomesLabel}
            </p>
            <ul className="mt-4 grid gap-3">
              {project.outcomes.map((item) => (
                <li
                  key={item.en}
                  className="rounded-[20px] border border-border-subtle bg-white/75 px-4 py-3 text-sm leading-6 text-text-secondary dark:bg-white/5"
                >
                  {getLocalizedText(item, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-border-subtle bg-surface-warm p-6 dark:border-border-default dark:bg-white/4">
            <ul className="grid gap-3">
              {project.metrics.map((metric) => (
                <li
                  key={metric.label.en}
                  className="flex items-start justify-between gap-4 border-b border-border-subtle pb-3 last:border-b-0 last:pb-0 dark:border-border-default"
                >
                  <span className="text-sm text-text-muted">
                    {getLocalizedText(metric.label, locale)}
                  </span>
                  <span className="max-w-[14ch] text-right text-sm font-medium text-text-primary">
                    {getLocalizedText(metric.value, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
