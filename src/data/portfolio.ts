// Tech Stack
export interface TechStack {
  languages: string[];
  frameworks: string[];
  tools: string[];
  currentLearning: string[];
}

const techStack: TechStack = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL"],
  frameworks: ["React", "TailwindCSS", "Express", "OpenCV"],
  tools: ["Visual Studio Code", "Git", "Github", "Github Actions", "Figma", "Node.js", "Vite", "Vercel", "Postgresql"],
  currentLearning: ["PostgreSQL", "Express", "React", "Typescript", "SQL"],
};

export const techLogos: Record<string, string> = {
  html: "https://cdn.simpleicons.org/html5",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  javascript: "https://cdn.simpleicons.org/javascript",
  typescript: "https://cdn.simpleicons.org/typescript",
  java: "https://cdn.simpleicons.org/openjdk/437291",
  python: "https://cdn.simpleicons.org/python",
  sql: "https://cdn.simpleicons.org/sqlite",
  react: "https://cdn.simpleicons.org/react",
  tailwindcss: "https://cdn.simpleicons.org/tailwindcss",
  express: "https://cdn.simpleicons.org/express/ffffff",
  opencv: "https://cdn.simpleicons.org/opencv",
  "visual studio code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  git: "https://cdn.simpleicons.org/git",
  github: "https://cdn.simpleicons.org/github",
  "github actions": "https://cdn.simpleicons.org/githubactions",
  figma: "https://cdn.simpleicons.org/figma",
  "node.js": "https://cdn.simpleicons.org/nodedotjs",
  vite: "https://cdn.simpleicons.org/vite",
  vercel: "https://cdn.simpleicons.org/vercel/ffffff",
  postgresql: "https://cdn.simpleicons.org/postgresql",
};

export function getTechLogo(name: string): string | undefined {
  return techLogos[name.trim().toLowerCase()];
}

export function getTechStack(): TechStack {
  return techStack;
}

// Education
export interface EducationEntry {
  date: string;
  degree: string;
  school: string;
  location: string;
  description?: string;
  tags?: string[];
  current?: boolean;
}

const education: EducationEntry[] = [
  {
    date: "2025 — Present",
    degree: "Bachelor of Science in Computer Science",
    school: "Cavite State University — Imus Campus",
    location: "Imus, Cavite",
    description: "Currently pursuing a BSCS degree while developing my skills in software development, web technologies, programming, and computer science fundamentals.",
    current: true,
  },
  {
    date: "2023 — 2025",
    degree: "Senior High School — ICT",
    school: "St. Matthew Academy of Cavite",
    location: "Bacoor, Cavite",
    description: "Studied Information and Communications Technology with a focus on java programming, and basics of web development.",
  },
  {
    date: "2019 — 2023",
    degree: "Junior High School",
    school: "St. Matthew Academy of Cavite",
    location: "Bacoor, Cavite",
  },
  {
    date: "2013 — 2019",
    degree: "Elementary",
    school: "Gov P.F Espiritu Elementary School",
    location: "Bacoor, Cavite",
  },
];

export function getEducation(): EducationEntry[] {
  return education;
}

export interface Experience {
  title: string;
  position: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Computer Science Clique (CSC)",
    position: "Internal Affairs Committee",
    date: "2025 - 2026",
    description: "Maintained and organized the organization's online documents, including Google Forms, certificates, and other digital records."
  }
]

export function getExperience(): Experience[] {
  return experiences;
}

// Projects
export interface Project {
  title: string;
  type: string;
  stack: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Kabsupanion",
    type: "Front-end Dev | Web App",
    stack: ["React", "TailwindCSS", "Javascript", "Vite"],
    description:
      "Kabsupanion is a section-based student portal developed to support the academic needs of students through a centralized and accessible platform. It streamlines academic organization by providing tools for task management, scheduling, activity tracking, and collaborative resource sharing within a section-based environment. DISCLAIMER: This is only accesible for our block.",
    link: "https://kabsupanion.vercel.app"
  },
  {
    title: "Echo - GWA Calculator",
    type: "Web App",
    stack: ["React", "TailwindCSS", "Typescript", "Vite"],
    description:
      "Echo is a web application for calculating a student's General Weighted Average (GWA) and predicting Latin honors. It provides a compact workflow for entering subjects (name, grade, units), reviewing weighted totals, configuring academic policy, and exporting a printable summary report as a PNG image.",
    link: "https://echo-gwa-calculator.vercel.app"
  },
  {
    title: "SMAC - Student Portal",
    type: "Web App",
    stack: ["HTML", "CSS", "Javascript"],
    description:
      "A student portal built as our ICT strand's final project in Grade 12 at St. Matthew Academy of Cavite. After logging in, students can view their profile, subjects, grades, tuition balance, and school announcements, all from a single dashboard.",
    link: "https://smac-student-portal.vercel.app/"
  },
];

export function getProjects(): Project[] {
  return projects;
}

// Socials
export interface Social {
  platform: string;
  description: string;
  username: string;
  link: string;
}

const socialMedias: Social[] = [
  {platform: "Facebook", description: "School Purposes", username: "Elijah Festin", link: "https://web.facebook.com/itz.thelijah/"},
  {platform: "Instagram", description: "Personal & Activities", username: "e.fstn_", link: "https://www.instagram.com/e.fstn_/"},
  {platform: "Github", description: "Projects", username: "eli-fstn", link: "https://github.com/eli-fstn"},
];

export function getSocialMedias(): Social[] {
  return socialMedias;
}

// Profile
export interface Profile {
  name: string;
  nickname: string;
  age: number;
  birthday: string;
  gender: string;
  location: string;
  education: string;
  status: string;
  goal: string;
  email: string;
  github: string;
  facebook: string;
  instagram: string;
}

const profile: Profile = {
  name: "Elijah Joshua E. Festin",
  nickname: "Elijah / Eli / Festin",
  age: 19,
  birthday: "November 20, 2006",
  gender: "Male",
  location: "Bacoor, Cavite, Philippines",
  education: "2nd-year BS Computer Science student at Cavite State University – Imus Campus",
  status: "Single",
  goal: "Aspiring Software Engineer | current focus is Front-end",
  email: "festinelijah@gmail.com",
  github: "eli-fstn",
  facebook: "Elijah Festin",
  instagram: "e.fstn_",
};

export function getProfile(): Profile {
  return profile;
}
