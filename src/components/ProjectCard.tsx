import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const bgColors = [
  "bg-brand-strong-blue",
  "bg-brand-black",
  "bg-brand-salmon",
  "bg-brand-green-dark",
  "bg-brand-strong-blue",
  "bg-brand-black",
  "bg-brand-salmon",
  "bg-brand-green-dark",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-[400px] flex-col items-center justify-evenly text-center text-[8vmin] text-white transition-transform duration-300 hover:scale-[1.02] min-[375px]:h-[500px] md:text-[6vmin] ${
        bgColors[index % bgColors.length]
      } ${project.backgroundImage ? "bg-cover bg-center bg-no-repeat" : ""}`}
      style={
        project.backgroundImage
          ? { backgroundImage: `url('${project.backgroundImage}')` }
          : undefined
      }
    >
      <h3>{project.title}</h3>
      <Image
        src={project.icon}
        alt={`${project.title} project icon`}
        width={140}
        height={140}
        className="w-[100px] min-[375px]:w-[140px] transition-transform duration-300 hover:scale-110"
      />
      <p className="w-[85%] text-center text-sm leading-relaxed text-white min-[375px]:w-[70%] min-[375px]:text-base min-[375px]:leading-[30px]">
        {project.description}
      </p>
    </a>
  );
}
