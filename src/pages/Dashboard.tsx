import { BadgeCheck, ArrowUpRight, MapPin, ArrowRight } from "lucide-react"
import profile from "../assets/elijah-festin.jpeg";
import profile2 from "../assets/yuta.jpg";
import Sidebar from "../components/layout/Sidebar";
import { Link } from "react-router-dom";
import Boxes from "../components/ui/Boxes";
import { GitHubCalendar } from "react-github-calendar";
import Footer from "../components/layout/Footer";
import PixelTransition from "../components/ui/PixelTransition";

function Dashboard() {
  const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL"];
  const frameworks = ["React", "TailwindCSS", "Express", "OpenCV", "Flask"]
  const tools = ["VSCode", "Git", "Github", "Github Actions", "Figma", "Node.js", "Vite", "Vercel", "Postgresql"]

  // const test = () => {
  // }

  // const sendEmail = () => {
  //   window.open(
  //     "https://mail.google.com/mail/?view=cm&fs=1&to=festinelijah@gmail.com",
  //     "_blank"
  //   );
  // };

  return (
    <div className="bg-[#0c0c0f] min-h-screen flex">

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

        {/* HEADER */}
        <div className="flex justify-center items-center z-10">

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
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            {/* Information */}
            <div className="flex flex-col items-start justify-center">
              <div>
                <p className="font-bold font-pixel text-white text-[2rem] flex flex-row items-center">
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

                <p className="font-medium my-2 text-white font-mono">
                  BSCS Student <span className="font-light text-[#a0a0a8]">|</span> Aspiring Software Engineer
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-row gap-5 cursor-pointer">
                <a href="https://github.com/eli-fstn" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#a0a0a8] transition duration-200 hover:text-white">
                  github
                  <span>
                    <ArrowUpRight size={15} className="ml-1"/>
                  </span>
                </a>
                <a href="https://web.facebook.com/itz.thelijah/" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#a0a0a8] transition duration-200 hover:text-white">
                  facebook
                  <span>
                    <ArrowUpRight size={15} className="ml-1"/>
                  </span>
                </a>
                <a href="https://www.instagram.com/e.fstn_/" target="_blank" rel="noreferrer" className="flex items-center font-mono text-xs text-[#a0a0a8] transition duration-200 hover:text-white">
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
            <p className="font-pixel text-md text-[#a0a0a8]">01 — about me</p>
            <p className="text-sm font-mono text-white mt-5">I'm a second-year Bachelor of Science in Computer Science student at Cavite State University – Imus Campus, with a passion for software development and building practical applications. I'm continuously learning and improving my skills in web development while aspiring to become a Software Engineer.</p>
          </div>

          {/* Stack*/}
          <div className="">
            <div className="flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">02 — tech stack</p>
              <Link to="/tech-stack" className="text-md font-pixel text-[#a0a0a8] font-medium flex flex-row items-center cursor-pointer transition duration-200 hover:translate-x-1 hover:text-white">
                VIEW STACK
                <ArrowRight
                  size={10}
                  className="ml-1"
                />
              </Link>
            </div>
            <div className="mt-5">
              <div className="flex flex-row flex-wrap gap-3 my-2">
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

          {/* About Me */}
          <div className="">
            <div className="flex justify-between">
              <p className="font-pixel text-md text-[#a0a0a8]">02 — projects</p>
              <Link to="/projects" className="text-md font-pixel text-[#a0a0a8] font-medium flex flex-row items-center cursor-pointer transition duration-200 hover:translate-x-1 hover:text-white">
                ALL PROJECTS
                <ArrowRight
                  size={10}
                  className="ml-1"
                />
              </Link>
            </div>
          </div>

          {/* Github */}
          <div className="">
            <p className="font-pixel text-md text-[#a0a0a8]">04 — github</p>

            <div className="flex justify-center items-center mt-5 text-[#a0a0a8] [&_svg]:overflow-visible">
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

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard