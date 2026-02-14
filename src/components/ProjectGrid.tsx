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
      className="relative mt-[350px] w-[90%] bg-brand-pink"
      id="projects"
    >
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] leading-none text-brand-text dark:text-white/20">
        {t.projects.sectionTitle}
      </h2>
      <article className="flex h-auto min-h-[400px] flex-col items-center justify-center px-6 py-16 text-center min-[375px]:min-h-[500px] min-[375px]:px-12 md:min-h-[600px]">
        <p className="pb-12 text-xl leading-relaxed text-brand-text min-[375px]:text-2xl md:pb-20 md:text-[30px] md:leading-[30px]">
          {t.projects.intro}
        </p>
        <LoadingGrid />
      </article>
      <article className="grid grid-cols-1 bg-brand-strong-blue md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        {isOdd && <ComingSoonCard />}
      </article>
    </section>
  );
}
