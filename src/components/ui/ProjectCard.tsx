import Boxes from "./Boxes";
import { useEffect, useRef } from "react";

export interface Project {
  image: string;
  stack: string[];
  title: string;
  description: string;
  type: string;
}

interface CardProps {
  items: Project[];
}

export default function ProjectCard({ items }: CardProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
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
    <div ref={sectionRef} className="flex flex-col gap-20 w-190">
      {items.map((item, i) => (
        <div key={i} className="animate-on-scroll rounded-xl p-5 bg-linear-to-br from-white/5 to-transparent">
          <div className="flex justify-center items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-100 object-contain rounded"
            />
          </div>
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <p className="font-pixel font-bold text-white text-[1.5rem]">{item.title}</p>
              <p className="font-pixel font-bold text-[#a0a0a8] text-sm">{item.type}</p>
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
            <p className="font-mono text-sm text-[#a0a0a8] mt-5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}