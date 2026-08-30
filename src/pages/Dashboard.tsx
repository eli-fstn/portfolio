import { BadgeCheck, ArrowUpRight, MapPin, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react";
import profile from "../assets/elijah-festin.jpeg";
import profile2 from "../assets/yuta.jpg";
import Sidebar from "../components/layout/Sidebar";
import { Link } from "react-router-dom";
import Boxes from "../components/ui/Boxes";
import { GitHubCalendar } from "react-github-calendar";
import Footer from "../components/layout/Footer";
import PixelTransition from "../components/ui/PixelTransition";
import kabsupanion from "../assets/projects/kabsupanion/Kabsupanion.png";
import echo from "../assets/projects/echo-gwa-calculator/Echo.png";
import CoverflowCarousel from "../components/ui/CoverflowCarousel";
import { getTechStack } from "../data/techStack";

function Dashboard() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { languages, frameworks, tools } = getTechStack();

  const projects = [
    { image: kabsupanion, title: "Kabsupanion", description: "A section-based student portal designed to organize academic tasks, schedules, and collaborative study materials." },
    { image: echo, title: "Echo - GWA Calculator", description: "A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released." },
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
      { threshold: 0.5 }
    );

    const elements = root.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0c0c0f] min-h-screen flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* BODY */}
      <div ref={sectionRef} className="relative flex-1 px-50 pt-20">

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

        {/* HEADER */}
        <div className="animate-on-scroll flex justify-center items-center z-10">

          {/* Parent Div */}
          <div className="flex flex-row items-stretch gap-5">
            
            {/* Image */}
            <div className="w-35 cursor-pointer">
              <PixelTransition
                firstContent={
                  <img
                    src={profile}
                    alt="Elijah Festin"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <img
                    src={profile2}
                    alt="Yuta Okkotsu"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                gridSize={10}
                pixelColor="#f4f4f5"
                once={false}
                animationStepDuration={0.3}
                className="custom-pixel-card"
              />
            </div>

            {/* Information */}
            <div className="flex flex-col items-start justify-center">
              <div>
                <p className="font-bold font-pixel text-[#f4f4f5] text-[2rem] flex flex-row items-center">
                  Elijah Festin
                  <span className="ml-1">
                    <BadgeCheck
                      size={30}
                      className="fill-blue-500 text-[#0c0c0f]"
                    />
                  </span>
                </p>

                <p className="flex flex-row items-center text-[#a0a0a8] text-sm mt-1">
                  <MapPin
                    size={15}
                    className="mr-1"
                  />
                  Cavite, Philippines
                </p>

                <p className="font-medium my-2 text-[#f4f4f5] font-mono">
                  BSCS Student <span className="font-light text-[#a0a0a8]">|</span> Aspiring Software Engineer
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-row gap-5 cursor-pointer">
                <a href="https://github.com/eli-fstn" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#8a8a92] transition duration-200 hover:text-[#f4f4f5]">
                  github
                  <span>
                    <ArrowUpRight size={15} className="ml-1"/>
                  </span>
                </a>
                <a href="https://web.facebook.com/itz.thelijah/" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#8a8a92] transition duration-200 hover:text-[#f4f4f5]">
                  facebook
                  <span>
                    <ArrowUpRight size={15} className="ml-1"/>
                  </span>
                </a>
                <a href="https://www.instagram.com/e.fstn_/" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#8a8a92] transition duration-200 hover:text-[#f4f4f5]">
                  instagram
                  <span>
                    <ArrowUpRight size={15} className="ml-1"/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-20 z-10 flex flex-col gap-20">

          {/* About Me */}
          <div className="">
            <p className="animate-on-scroll font-pixel text-md text-[#a0a0a8]">01 — about me</p>
            <p className="animate-on-scroll text-sm font-mono text-[#f4f4f5] mt-5">I'm a second-year Bachelor of Science in Computer Science student at Cavite State University – Imus Campus, with a passion for software development and building practical applications. I'm continuously learning and improving my skills in web development while aspiring to become a Software Engineer.</p>
          </div>

          {/* Stack*/}
          <div className="">
            <div className="flex justify-between">
              <p className="animate-on-scroll font-pixel text-md text-[#a0a0a8]">02 — tech stack</p>
              <Link to="/tech-stack" className="animate-on-scroll text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-200 hover:translate-x-1 hover:text-[#f4f4f5]">
                VIEW STACK
                <ArrowRight
                  size={10}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5">
              <div className="animate-on-scroll flex flex-row flex-wrap gap-3 my-2">
                {languages.map((language, i) => (
                  <Boxes 
                    key={i}
                    text={language}
                    typography="text-sm"
                    dimensions="px-4 py-1"
                    designs="rounded font-semibold"
                  />
                ))}
                {frameworks.map((framework, i) => (
                  <Boxes 
                    key={i}
                    text={framework}
                    typography="text-sm"
                    dimensions="px-4 py-1"
                    designs="rounded font-semibold"
                  />
                ))}
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

          {/* Projects */}
          <div className="">
            <div className="flex justify-between">
              <p className="animate-on-scroll font-pixel text-md text-[#a0a0a8]">03 — projects</p>
              <Link to="/projects" className="animate-on-scroll text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-200 hover:translate-x-1 hover:text-[#f4f4f5]">
                ALL PROJECTS
                <ArrowRight
                  size={10}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5 animate-on-scroll">
              <CoverflowCarousel items={projects}  slideWidth={340} slideHeight={191} />
            </div>
          </div>

          {/* Github */}
          <div className="">
            <p className="animate-on-scroll font-pixel text-md text-[#a0a0a8]">04 — github</p>

            <div className="animate-on-scroll flex justify-center items-center mt-5 text-[#8a8a92] [&_svg]:overflow-visible">
              <a href="https://github.com/eli-fstn" target="_blank">
                <GitHubCalendar
                  username="eli-fstn"
                  colorScheme="light"
                  blockSize={13}
                  blockMargin={0}
                  fontSize={12}
                  renderColorLegend={() => <></>}
                  renderBlock={(block, activity) => {
                    const radiusByLevel = [1.1, 2.7, 3.8, 4.8, 5.7];
                    const radius = radiusByLevel[activity.level] ?? radiusByLevel[0];
                    const opacity = activity.count === 0 ? 0.12 : 0.92;

                    const x = Number(block.props.x);
                    const y = Number(block.props.y);
                    const w = Number(block.props.width);
                    const h = Number(block.props.height);
                    const cx = x + w / 2;
                    const cy = y + h / 2;

                    return (
                      <circle
                        key={block.key}
                        cx={cx}
                        cy={cy}
                        r={radius}
                        fill="#ffffff"
                        opacity={opacity}
                      />
                    );
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard