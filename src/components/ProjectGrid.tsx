"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/types";
import ComingSoonCard from "./ComingSoonCard";
import LoadingGrid from "./LoadingGrid";
import ProjectCard from "./ProjectCard";
import ProjectPreviewModal from "./ProjectPreviewModal";

export default function ProjectGrid() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [],
  );

  const isOdd = orderedProjects.length % 2 !== 0;

  return (
    <section
      id="projects"
      className="relative w-[90%] max-w-[1240px]"
      style={{ marginTop: "var(--spacing-section)" }}
    >
      <h2 className="absolute bottom-full left-0 z-10 translate-y-[21%] text-[18vmin] font-light leading-none tracking-tight text-text-primary dark:text-on-dark-muted">
        {t.projects.sectionTitle}
      </h2>

      <div
        className="relative overflow-hidden bg-surface-blush px-8 py-20 sm:px-12 sm:py-24"
        style={{
          backgroundImage:
            "linear-gradient(145deg, hsl(13, 53%, 82%), hsl(14, 81%, 96%))",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.62),transparent_34%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_280px] lg:items-end">
          <div className="space-y-4">
            <p className="max-w-[58ch] text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              {t.projects.intro}
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="bg-white/35 px-6 py-5 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.25)] backdrop-blur-sm dark:bg-white/5">
              <LoadingGrid />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-6">
        {orderedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onPreview={setActiveProject}
          />
        ))}
        {isOdd ? <ComingSoonCard /> : null}
      </div>

      <ProjectPreviewModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
