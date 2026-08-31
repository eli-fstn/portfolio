import { BadgeCheck, ArrowUpRight, MapPin, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react";
import profile from "../assets/elijah-festin.jpeg";
import profile2 from "../assets/yuta.jpg";
import { Link } from "react-router-dom";
import Boxes from "../components/ui/Boxes";
import { GitHubCalendar } from "react-github-calendar";
import Footer from "../components/layout/Footer";
import PixelTransition from "../components/ui/PixelTransition";
import kabsupanion from "../assets/projects/kabsupanion/Kabsupanion.png";
import echo from "../assets/projects/echo-gwa-calculator/Echo.png";
import CoverflowCarousel from "../components/ui/CoverflowCarousel";
import { getTechStack } from "../data/portfolio";

interface EducationEntry {
  date: string;
  degree: string;
  school: string;
}

interface Socials {
  platform: string;
  username: string;
}

function Dashboard() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { languages, frameworks, tools } = getTechStack();

  const Education: EducationEntry[] = [
    {
      date: "2025 - Present",
      degree: "Bachelor of Science in Computer Science",
      school: "Cavite State University - Imus Campus"
    },
    {
      date: "2023 - 2025",
      degree: "Information and Communication Technology (ICT)",
      school: "St. Matthew Academy of Cavite"
    },
  ]

  const socialMedias: Socials[] = [
    {platform: "Facebook", username: "Elijah Festin", },
    {platform: "Instagram", username: "e.fstn_",},
    {platform: "Github", username: "eli-fstn",},
  ]

  const projects = [
    { image: kabsupanion, title: "Kabsupanion", description: "A section-based student portal designed to organize academic tasks, schedules, and collaborative study materials." },
    { image: echo, title: "Echo - GWA Calculator", description: "A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released." },
  ];
  const carouselSlideWidth = Math.min(340, typeof window !== "undefined" ? window.innerWidth - 56 : 340);

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
    <div className="relative z-0 bg-[#0c0c0f] min-h-screen overflow-x-hidden">
      <div ref={sectionRef} className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 sm:pt-10 md:px-12 md:pt-14 lg:px-20 pt-20">

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

        {/* HEADER */}
        <div className="animate-on-scroll z-10 flex justify-center">

          {/* Parent Div */}
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-stretch sm:text-left">
            
            {/* Image */}
            <div className="w-28 shrink-0 sm:w-32 lg:w-36">
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
            <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
              <div>
                <p className="flex flex-row items-center justify-center gap-2 font-bold font-pixel text-[#f4f4f5] text-[1.5rem] sm:text-[2rem] sm:justify-start">
                  Elijah Festin
                  <span className="inline-flex">
                    <BadgeCheck
                      size={24}
                      className="fill-blue-500 text-[#0c0c0f] sm:size-7.5"
                    />
                  </span>
                </p>

                <p className="mt-1 flex flex-row items-center justify-center text-[#a0a0a8] text-sm sm:justify-start">
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
              <div className="mt-2 flex flex-wrap justify-center gap-5 sm:justify-start">
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

          {/* Projects */}
          <div className="">
            <div className="animate-on-scroll flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">02 — projects</p>
              <Link to="/projects" className="text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:translate-x-1 hover:text-[#f4f4f5]">
                ALL PROJECTS
                <ArrowRight
                  size={13}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5 animate-on-scroll overflow-hidden">
              <CoverflowCarousel items={projects} slideWidth={carouselSlideWidth} slideHeight={191} />
            </div>
          </div>

          {/* Stack*/}
          <div className="">
            <div className="animate-on-scroll flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">03 — tech stack</p>
              <Link to="/tech-stack" className="text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:translate-x-1 hover:text-[#f4f4f5]">
                VIEW STACK
                <ArrowRight
                  size={13}
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

          {/* Education */}
          <div className="">
            <div className="animate-on-scroll flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">04 — education</p>
              <Link to="/education" className="text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:translate-x-1 hover:text-[#f4f4f5]">
                VIEW EDUCATION
                <ArrowRight
                  size={13}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {Education.map((entry, i) => (
                <div key={i} className="animate-on-scroll rounded-xl border border-[#2a2a30] bg-[#151518]/80 p-4 sm:p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-pixel text-[#f4f4f5] font-bold text-sm sm:text-md wrap-break-word">{entry.degree}</p>
                    <p className="font-mono text-xs text-[#8a8a92] sm:text-sm">{entry.date}</p>
                  </div>
                  <p className="mt-1 font-mono text-sm text-[#a0a0a8] wrap-break-word">{entry.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="">
            <div className="animate-on-scroll flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">05 — socials</p>
              <Link to="/socials" className="text-md font-pixel text-[#8a8a92] font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:translate-x-1 hover:text-[#f4f4f5]">
                VIEW SOCIALS
                <ArrowRight
                  size={13}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5 space-y-0">
              {socialMedias.map((entry, i) => (
                <div key={i} className="animate-on-scroll border-y border-y-[#2a2a30] py-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-pixel text-[#f4f4f5] font-bold sm:text-md">{entry.platform}</p>
                    <p className="text-[#a0a0a8] cursor-pointer text-xs font-mono flex flex-row items-center duration-200 transition hover:text-[#f4f4f5] break-all">{entry.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Github */}
          <div className="">
            <p className="animate-on-scroll font-pixel text-md text-[#a0a0a8]">06 — github</p>

            <div className="animate-on-scroll [&_.react-activity-calendar__footer]:hidden mt-5 w-full overflow-x-auto font-mono text-[#8a8a92] [&_svg]:overflow-visible">
              <a href="https://github.com/eli-fstn" target="_blank" className="flex items-center justify-center">
                <GitHubCalendar
                  username="eli-fstn"
                  colorScheme="light"
                  blockSize={15}
                  blockMargin={0}
                  fontSize={13}
                  showColorLegend={false}
                  renderColorLegend={() => <></>}
                  renderBlock={(block, activity) => {
                    const radiusByLevel = [1.5, 3, 4, 5, 6];
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