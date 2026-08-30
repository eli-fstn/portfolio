import Sidebar from "../components/layout/Sidebar"
import { useEffect, useRef } from "react"
import { getTechStack } from "../data/techStack";
import Boxes from "../components/ui/Boxes";

function TechStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { languages, frameworks, tools } = getTechStack();

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
      { threshold: 0.2 }
    );

    const elements = root.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
          <p className="text-[#f4f4f5] font-pixel text-[2rem]">tech stack</p>
          <p className="text-[#a0a0a8] text-sm font-mono">The languages, frameworks, libraries, and tools I use to build my projects.</p>
        </div>

        {/* Main Content */}
        <div className="mt-20 flex flex-col gap-15">
          <div className="animate-on-scroll">
            <p className="text-[#a0a0a8] font-mono text-xs uppercase">Languages</p>
            <div className="flex flex-row flex-wrap gap-3 mt-3">
              {languages.map((language, i) => (
                <Boxes 
                  key={i}
                  text={language}
                  typography="text-sm"
                  dimensions="px-4 py-1"
                  designs="rounded font-semibold"
                />
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <p className="text-[#a0a0a8] font-mono text-xs uppercase">Frameworks</p>
            <div className="flex flex-row flex-wrap gap-3 mt-3">
              {frameworks.map((framework, i) => (
                <Boxes 
                  key={i}
                  text={framework}
                  typography="text-sm"
                  dimensions="px-4 py-1"
                  designs="rounded font-semibold"
                />
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-[#a0a0a8] font-mono text-xs uppercase">Tools</p>
            <div className="flex flex-row flex-wrap gap-3 mt-3">
              {tools.map((tool, i) => (
                <Boxes 
                  key={i}
                  text={tool}
                  typography="text-sm"
                  dimensions="px-4 py-1"
                  designs="rounded font-semibold"
                />
              ))}
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default TechStack