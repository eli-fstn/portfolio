import Boxes from "./Boxes";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  stack: string[];
  title: string;
  description: string;
  type: string;
  link: string;
}

interface CardProps {
  items: Project[];
}

export default function ProjectCard({ items }: CardProps) {
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

  return (
    <div ref={sectionRef} className="flex flex-col gap-10 w-full">
      {items.map((item, i) => (
        <div key={i} className="animate-on-scroll rounded-xl p-5 bg-linear-to-br from-white/5 to-transparent">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="font-pixel font-bold text-[#f4f4f5] text-xl lg:text-[1.5rem]">{item.title}</p>
              <p className="font-pixel font-bold text-[#8a8a92] text-xs md:text-sm">{item.type}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-1 my-1">
              {item.stack.map((s, j) => (
                <Boxes
                  key={j}
                  text={s}
                  typography="text-xs"
                  dimensions="px-4 py-1"
                  designs="rounded font-semibold"
                />
              ))}
            </div>
            <p className="font-mono text-xs md:text-sm text-[#a0a0a8] mt-5">{item.description}</p>
            <a href={item.link} rel="noferrer" target="_blank" className="transition duration-200 hover:text-white cursor-pointer font-pixel text-xs text-[#a0a0a8] mt-3 flex flex-row justify-end items-center">
              VISIT
              <span>
                <ArrowUpRight size={13} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}