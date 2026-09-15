import { Link } from "react-router-dom";
import { useEffect, useRef } from "react"
import { getTechLogo, getTechStack } from "../data/portfolio.ts";
import TechPill from "../components/ui/TechPill";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/layout/Footer";

function TechStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { languages, frameworks, tools, currentLearning } = getTechStack();
  const categories = [
    { label: "Currently Learning", items: currentLearning },
    { label: "Languages", items: languages },
    { label: "Frameworks", items: frameworks },
    { label: "Tools", items: tools },
  ];

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
    <div ref={sectionRef} className="relative z-0 bg-[#0c0c0f] min-h-screen overflow-x-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8 sm:pt-10 md:px-12 md:pt-14 lg:px-20 lg:pt-20">
        <Link to="/" className="animate-on-scroll mb-10 inline-flex items-center text-sm font-mono text-[#a0a0a8] transition duration-200 hover:text-[#f4f4f5]">
          <span>
            <ArrowLeft size={13} className="mr-1" />
          </span>
          go back
        </Link>

        {/* Background Elements */}
        <div
          className="
            pointer-events-none
            fixed top-0 left-0
            h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96
            -z-10
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
            h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96
            -z-10
            bg-[radial-gradient(#2a2a30_1px,transparent_1px)]
            bg-size-[15px_15px]
            mask-[linear-gradient(315deg,black_0%,transparent_75%)]
            [-webkit-mask-image:linear-gradient(315deg,black_0%,transparent_70%)]
          "
        />

        {/* Header */}
        <div className="animate-on-scroll flex flex-col gap-5">
          <p className="text-[#f4f4f5] font-pixel text-[1.5rem] sm:text-[2rem]">tech stack</p>
          <p className="text-[#a0a0a8] text-xs sm:text-sm font-mono">The languages, frameworks, libraries, and tools I use to build my projects.</p>
        </div>

        {/* Main Content */}
        <div className="mt-20 flex flex-col gap-15">
          {categories.map(({ label, items }) => (
            <div key={label} className="animate-on-scroll">
              <p className={`text-[#a0a0a8] font-mono uppercase text-xs sm:text-sm`}>{label}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((tech) => (
                  <TechPill key={tech} logoSrc={getTechLogo(tech)} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Footer />
        </div>        
      </div>
    </div>
  )
}

export default TechStack