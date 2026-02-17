"use client";

import Image from "next/image";
import { Project } from "@/types";
import { useTranslation } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const bgColors = [
  "bg-surface-ocean",
  "bg-surface-ink",
  "bg-accent-ember",
  "bg-surface-earth-deep",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation();
  const projectTranslation = (t.projectData as Record<string, { description: string }>)[project.id];
  const description = projectTranslation?.description ?? project.description;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-h-[420px] flex-col justify-between overflow-hidden p-8 text-white min-[375px]:min-h-[500px] min-[375px]:p-10 md:p-12 ${
        bgColors[index % bgColors.length]
      } ${project.backgroundImage ? "bg-cover bg-center bg-no-repeat" : ""}`}
      style={
        project.backgroundImage
          ? { backgroundImage: `url('${project.backgroundImage}')` }
          : undefined
      }
    >
      {/* Top: Title + Year */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight min-[375px]:text-3xl md:text-4xl">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full border border-on-dark-muted px-3 py-1 font-mono text-xs tracking-wider text-on-dark-tertiary">
          {project.year}
        </span>
      </div>

      {/* Center: Icon */}
      <div className="flex items-center justify-center py-6 min-[375px]:py-10">
        <Image
          src={project.icon}
          alt=""
          aria-hidden="true"
          width={140}
          height={140}
          className="w-[80px] opacity-90 transition-transform duration-300 group-hover:scale-110 min-[375px]:w-[120px]"
        />
      </div>

      {/* Bottom: Description + Tags */}
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-on-dark-secondary min-[375px]:text-base min-[375px]:leading-7">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-on-dark-muted bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-on-dark-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute right-8 bottom-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100 min-[375px]:right-10 min-[375px]:bottom-10 md:right-12 md:bottom-12">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
          <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}
