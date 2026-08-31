// Tech Stack
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
    description:
      "Currently pursuing a BSCS degree while developing my skills in software development, web technologies, programming, and computer science fundamentals.",
    tags: ["Computer Science", "Software Development", "Web Development", "IoT"],
    current: true,
  },
  {
    date: "2023 — 2025",
    degree: "Senior High School — ICT",
    school: "St. Matthew Academy of Cavite",
    location: "Bacoor, Cavite",
    description:
      "Studied Information and Communications Technology with a focus on java programming, and basics of web development.",
    tags: ["ICT", "Programming", "Web Development"],
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
      "Kabsupanion is a section-centric student portal developed to support the academic needs of students through a centralized and accessible platform. It streamlines academic organization by providing tools for task management, scheduling, activity tracking, and collaborative resource sharing within a section-based environment.",
    link: "https://kabsupanion.vercel.app"
  },
  {
    title: "Echo - GWA Calculator",
    type: "Web App",
    stack: ["React", "TailwindCSS", "Typescript"],
    description:
      "Echo is a client-side web application for calculating a student's General Weighted Average (GWA) and predicting Latin honors. It provides a compact workflow for entering subjects (name, grade, units), reviewing weighted totals, configuring academic policy, and exporting a printable summary report as a PNG image.",
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
