import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Boxes from "../components/ui/Boxes";
import Footer from "../components/layout/Footer";

interface EducationEntry {
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

function Education() {
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
      { threshold: 0.2 }
    );

    const elements = root.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative z-0 bg-[#0c0c0f] min-h-screen overflow-x-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8 sm:pt-10 md:px-12 md:pt-14 lg:px-20 lg:pt-20">
        <Link to="/" className="animate-on-scroll mb-10 inline-flex items-center gap-2 text-sm font-mono text-[#a0a0a8] transition duration-200 hover:text-[#f4f4f5]">
          <span>
            <ArrowLeft size={10} className="mr-1" />
          </span>
          go back
        </Link>

        {/* Background elemetnts */}
        <div
          className="
            pointer-events-none
            fixed top-0 left-0
            h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96
            -z-10
            bg-[radial-gradient(#2a2a30_1px,transparent_1px)]
            bg-size-[15px_15px]
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
            [-webkit-mask-image:linear-gradient(315deg,black_0%,transparent_70%)]
          "
        />

        {/* Header */}
        <div className="animate-on-scroll flex flex-col gap-5">
          <p className="text-[#f4f4f5] font-pixel text-[2rem]">education</p>
          <p className="text-[#a0a0a8] text-sm font-mono">My academic journey and the foundation behind my path in technology.</p>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* vertical line spanning the full timeline */}
          <div className="absolute left-1.5 top-2 bottom-2 block w-px bg-[#2a2a30]" />

          <div className="flex flex-col gap-10 sm:gap-14">
            {education.map((entry, i) => (
              <div key={i} className="animate-on-scroll group relative grid grid-cols-[14px_1fr] gap-x-4 sm:gap-x-6">
                {/* timeline indicator */}
                <div className="relative flex justify-center pt-1.5">
                  {entry.current && (
                    <span className="absolute w-3.5 h-3.5 rounded-full bg-white/20 animate-ping" />
                  )}
                  <span
                    className={`relative w-3.5 h-3.5 rounded-full border transition-colors duration-300 ${
                      entry.current
                        ? "bg-white border-white"
                        : "bg-[#0c0c0f] border-[#2a2a30] group-hover:border-[#a0a0a8]"
                    }`}
                  />
                </div>

                {/* content */}
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-[#8a8a92] transition-colors duration-300 group-hover:text-[#a0a0a8] sm:text-xs">
                    {entry.date}
                  </p>

                  <p
                    className={`mt-2 font-pixel font-bold transition-colors duration-300 ${
                      entry.current
                        ? "text-white text-lg sm:text-xl"
                        : "text-[#e4e4e7] text-base group-hover:text-white sm:text-lg"
                    }`}
                  >
                    {entry.degree}
                  </p>

                  <p className="mt-1 font-mono text-xs sm:text-sm text-[#a0a0a8] wrap-break-word">
                    {entry.school}
                    <span className="text-[#8a8a92] text-xs sm:text-sm"> — {entry.location}</span>
                  </p>

                  <p className="mt-4 font-mono text-xs md:text-sm leading-relaxed text-[#a0a0a8] wrap-break-word">
                    {entry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags?.map((tag, j) => (
                      <Boxes
                        key={j}
                        text={tag}
                        typography="text-xs"
                        dimensions="px-3 py-1"
                        designs="rounded font-semibold"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Education;