import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tasty",
    title: "Tasty",
    description:
      "This website is designed with SASS and HTML in a responsive way and I use everything I have learned in JS to date.",
    url: "https://ivnvaldz7.github.io/Tasty/",
    icon: "/icons/plato.svg",
    tags: ["HTML", "SASS", "JavaScript"],
    color: "hsl(192, 42%, 23%)",
    featured: true,
    year: 2025,
  },
  {
    id: "generactiva",
    title: "Géneractiva",
    description:
      "Géneractiva was the first website I worked on, it was the one that took me the longest because it has 3 pages included.",
    url: "https://g-neractiva.netlify.app/",
    icon: "/icons/genero.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "hsl(192, 42%, 23%)",
    featured: true,
    year: 2025,
  },
  {
    id: "alebet-manager",
    title: "Alebet Manager",
    description:
      "Logistics management system built with modern technologies to streamline operations and tracking.",
    url: "https://alebet-manager.netlify.app",
    icon: "/icons/tracking-app.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    color: "hsl(161, 49%, 45%)",
    featured: false,
    year: 2025,
  },
  {
    id: "pokeapi",
    title: "PokeApi",
    description:
      "In this project I reused a card that I had made in the Frontend Mentor challenges to give it interaction with the Pokemon API.",
    url: "https://frontmentorpokeapi.netlify.app/",
    icon: "/icons/pokebola.svg",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    color: "hsl(192, 42%, 23%)",
    featured: true,
    year: 2025,
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "This is my GitHub account, where I often upload my projects. I invite you to follow me!",
    url: "https://github.com/ivnvaldz7",
    icon: "/icons/github-logo.svg",
    tags: ["GitHub"],
    color: "hsl(0, 0%, 10%)",
    featured: false,
    year: 2025,
    backgroundImage: "/images/github.png",
  },
];
