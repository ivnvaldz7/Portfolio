export interface LocalizedText {
  en: string;
  es: string;
}

export interface ProjectTheme {
  from: string;
  to: string;
  glow: string;
  image?: string;
}

export interface ProjectLinks {
  live?: string;
  repository?: string;
}

export interface ProjectMetric {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ProjectSection {
  title: LocalizedText;
  body: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  year: number;
  featured: boolean;
  status: "live" | "concept";
  icon: string;
  stack: string[];
  theme: ProjectTheme;
  links: ProjectLinks;
  previewBullets: LocalizedText[];
  metrics: ProjectMetric[];
  sections: {
    overview: ProjectSection;
    challenge: ProjectSection;
    solution: ProjectSection;
    impact: ProjectSection;
  };
  outcomes: LocalizedText[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  avatar?: string;
  date: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  email: string;
  location: string;
  whatsapp?: string;
  socials: {
    github: string;
    linkedin?: string;
    twitter?: string;
  };
}
