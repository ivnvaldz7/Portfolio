"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLocalizedText } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onPreview: (project: Project) => void;
}

function buildBackground(project: Project): string {
  const gradient = `linear-gradient(145deg, ${project.theme.from}, ${project.theme.to})`;
  return project.theme.image ? `${gradient}, url('${project.theme.image}')` : gradient;
}

export default function ProjectCard({
  project,
  index,
  onPreview,
}: ProjectCardProps) {
  const { locale, t } = useTranslation();
  const stackLabel = project.stack.join(" / ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.25 }}
      className="group relative overflow-hidden p-5 text-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:p-6 lg:p-7"
      style={{
        backgroundImage: buildBackground(project),
        backgroundSize: project.theme.image ? "cover" : undefined,
        backgroundPosition: "center",
        boxShadow: `0 28px 72px -36px ${project.theme.glow}`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_38%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full min-h-[440px] flex-col justify-between gap-8">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-3">
              <div>
                <h3 className="max-w-[12ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {getLocalizedText(project.title, locale)}
                </h3>
                <p className="mt-2 max-w-[36ch] text-sm leading-6 text-white/70 sm:text-base">
                  {getLocalizedText(project.subtitle, locale)}
                </p>
              </div>
            </div>

            <span className="text-sm font-light tracking-[0.16em] text-white/62 uppercase">
              {project.year}
            </span>
          </div>

          <div className="flex flex-1 items-center gap-4">
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:h-20 sm:w-20">
              <Image
                src={project.icon}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="max-h-11 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="max-w-[30ch] text-sm leading-6 text-white/78 sm:text-base">
              {getLocalizedText(project.summary, locale)}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-center text-sm leading-6 text-white/58 sm:text-base">
            {stackLabel}
          </p>

          <div className="grid justify-center gap-2.5 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => onPreview(project)}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-white/12 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/18"
            >
              {t.projects.quickPreview}
            </button>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-surface-ink hover:brightness-95"
            >
              {t.projects.viewCaseStudy}
            </Link>

            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/18 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.projects.visitDemo}
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
