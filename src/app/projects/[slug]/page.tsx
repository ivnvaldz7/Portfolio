import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getLocalizedText, getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = getLocalizedText(project.title, "en");
  const description = getLocalizedText(project.summary, "en");

  return {
    title: `${title} | Ivan Valdez`,
    description,
    openGraph: {
      title: `${title} | Ivan Valdez`,
      description,
      type: "article",
      url: `https://ivnvaldz.com/projects/${project.slug}`,
    },
    alternates: {
      canonical: `https://ivnvaldz.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
