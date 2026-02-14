export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
  color: string;
  featured: boolean;
  year: number;
  backgroundImage?: string;
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
