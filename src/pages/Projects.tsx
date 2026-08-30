import Sidebar from "../components/layout/Sidebar";
import ProjectCard from "../components/ui/ProjectCard";
import kabsupanion from "../assets/projects/kabsupanion/Kabsupanion.png";
import echo from "../assets/projects/echo-gwa-calculator/Echo.png";
import Footer from "../components/layout/Footer";
import { useEffect, useRef } from "react";

function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = root.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: kabsupanion,
      title: "Kabsupanion",
      type: "Front-end Dev | Web App",
      stack: ["React", "TailwindCSS", "Javascript", "Vite"],
      description:
        "Kabsupanion is a section-centric academic web application developed to support the academic needs of students through a centralized and accessible platform. It streamlines academic organization by providing tools for task management, scheduling, activity tracking, and collaborative resource sharing within a section-based environment.",
    },
    {
      image: echo,
      title: "Echo - GWA Calculator",
      type: "Web App",
      stack: ["React", "TailwindCSS", "Typescript"],
      description:
        "Echo is a client-side web application for calculating a student's General Weighted Average (GWA) and predicting Latin honors. It provides a compact workflow for entering subjects (name, grade, units), reviewing weighted totals, configuring academic policy, and exporting a printable summary report as a PNG image.",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-[#0c0c0f] min-h-screen flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* BODY */}
      <div className="relative flex-1 px-50 pt-20">

        {/* Background Elements */}
        <div
          className="
            pointer-events-none
            fixed top-0 left-50
            w-70 h-70 z--10
            bg-[radial-gradient(#2a2a30_1px,transparent_1px)]
            bg-size-[15px_15px]
            mask-[linear-gradient(135deg,black_0%,transparent_75%)]
            [-webkit-mask-image:linear-gradient(135deg,black_0%,transparent_70%)]
          "
        />
        <div
          className="
            pointer-events-none
            fixed bottom-0 right-0
            w-70 h-70 z--10
            bg-[radial-gradient(#2a2a30_1px,transparent_1px)]
            bg-size-[15px_15px]
            mask-[linear-gradient(315deg,black_0%,transparent_75%)]
            [-webkit-mask-image:linear-gradient(315deg,black_0%,transparent_70%)]
          "
        />

        {/* Header */}
        <div className="animate-on-scroll flex flex-col gap-5">
          <p className="text-[#f4f4f5] font-pixel text-[2rem]">projects</p>
          <p className="text-[#a0a0a8] text-sm font-mono">A collection of applications and projects I've built while learning and developing my skills.</p>
        </div>
        
        <div className="mt-20">
          <ProjectCard items={projects}/>
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Projects