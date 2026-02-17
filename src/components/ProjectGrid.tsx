"use client";

import { projects } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import ComingSoonCard from "./ComingSoonCard";
import LoadingGrid from "./LoadingGrid";

export default function ProjectGrid() {
  const { t } = useTranslation();
  const isOdd = projects.length % 2 !== 0;

  return (
    <section
      className="relative w-[90%] bg-surface-blush"
      id="projects"
      style={{ marginTop: "var(--spacing-section)" }}
    >
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] font-light leading-none tracking-tight text-text-primary dark:text-on-dark-muted">
        {t.projects.sectionTitle}
      </h2>
      <article className="flex h-auto min-h-[400px] flex-col items-center justify-center px-8 py-20 text-center min-[375px]:min-h-[500px] min-[375px]:px-12 md:min-h-[600px]">
        <p className="pb-16 text-xl leading-relaxed text-text-primary min-[375px]:text-2xl md:pb-24 md:text-3xl md:leading-snug">
          {t.projects.intro}
        </p>
        <LoadingGrid />
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        {isOdd && <ComingSoonCard />}
      </article>
    </section>
  );
}
