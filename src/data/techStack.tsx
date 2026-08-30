export interface TechStack {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

const techStack: TechStack = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL"],
  frameworks: ["React", "TailwindCSS", "Express", "OpenCV", "Flask"],
  tools: ["VSCode", "Git", "Github", "Github Actions", "Figma", "Node.js", "Vite", "Vercel", "Postgresql"],
};

export function getTechStack(): TechStack {
  return techStack;
}