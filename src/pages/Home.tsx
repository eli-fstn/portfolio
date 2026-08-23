import { BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, FolderGit2, Share2, ArrowRight, FileText, Mail, MapPin, } from "lucide-react"
import { Icon } from "@iconify/react";
import { GitHubCalendar } from "react-github-calendar";
import Button from "../components/ui/Button"
import profile from "../assets/elijah-festin.jpeg";
import Boxes from "../components/ui/Boxes";
import Footer from "../components/layout/Footer";

function Home() {

  const educationData = [
    { level: "BS Computer Science", school: "Cavite State University - Imus Campus", year: "2025 - Ongoing" },
    { level: "Senior High School", school: "St. Matthew Academy of Cavite", year: "2023 - 2025" },
    { level: "Junior High School", school: "St. Matthew Academy of Cavite", year: "2019 - 2023" },
    { level: "Elementary", school: "Gov. P.F Espiritu Elementary School", year: "2013 - 2019" },
  ];

  const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL"];
  const frameworks = ["React", "TailwindCSS", "Express", "OpenCV", "Flask"]
  const tools = ["VSCode", "Git", "Github", "Github Actions", "Figma", "Node.js", "Vite", "Vercel", "Postgresql"]

  const test = () => {
  }

  const sendEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=festinelijah@gmail.com",
      "_blank"
    );
  };

  return (

    // BODY
    <div className="bg-white min-h-screen px-70 pt-20">

      {/* HEADER */}
      <div >

        {/* Parent Div */}
        <div className="flex flex-row items-stretch gap-3">
          
          {/* Image */}
          <div className="w-35 cursor-pointer">
            <img
              src={profile}
              className="w-full h-full object-cover rounded-md transition duration-200 hover:scale-105 hover:-rotate-1 hover:shadow-xl"
              alt="Elijah Festin"
              loading="lazy"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col items-start justify-center">
            <div>
              <p className="font-bold text-2xl flex flex-row items-center font-montserrat">
                Elijah Joshua Festin
                <span className="ml-1">
                  <BadgeCheck
                    size={25}
                    className="fill-blue-500 text-white"
                  />
                </span>
              </p>

              <p className="flex flex-row items-center text-gray-500 text-sm mt-1">
                <MapPin
                  size={15}
                  className="mr-1"
                />
                Cavite, Philippines
              </p>

              <p className="font-medium my-2">
                BSCS Student <span className="font-light text-gray-500">|</span> Aspiring Software Engineer
              </p>
            </div>

            <div className="flex flex-row gap-2 mt-1">
              <Button
                onClick={test}
                text={
                  <>
                    <FileText 
                      size={15}
                      className="mr-1"
                    />
                    View Resume
                  </>
                }
                typography="text-xs"
                dimensions="px-4 py-2"
                designs="bg-black text-white rounded-md font-semibold"
              />

              <Button
                onClick={sendEmail}
                text={
                  <>
                    <Mail 
                      size={15}
                      className="mr-1"
                    />
                    Send Email
                  </>
                }
                typography="text-xs"
                dimensions="px-4 py-2"
                designs="border border-gray-300 bg-white text-black rounded-md font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  MAIN CONTENT */}
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-5">

          {/* About */}
          <div className="col-span-3 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center">
              <BriefcaseBusiness size={20} className="mr-2"/>
              About
            </p>
            <p className="text-xs mt-2 text-justify">I'm a second-year Bachelor of Science in Computer Science student at Cavite State University – Imus Campus, with a passion for software development and building practical applications. I'm continuously learning and improving my skills in web development while aspiring to become a Software Engineer.</p>
          </div> 

          {/* Tech Stack */}
          <div className="col-span-3 col-start-1 rounded-lg bg-white p-5 border border-gray-200">
            <div className="flex justify-between">
              <p className="font-bold font-montserrat text-md flex flex-row items-center">
                <Code2 size={20} className="mr-2"/>
                Tech Stack
              </p>
              <p className="text-xs text-gray-500 font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:scale-105 hover:text-black">
                View All
                <ArrowRight
                  size={14}
                  className="ml-1"
                />
              </p>
            </div>
            

            {/* Category */}
            <div className="mt-2">
              <p className="font-semibold text-sm">Languages</p>
              <div className="flex flex-row flex-wrap gap-1 my-2">
                {languages.map((language, i) => (
                  <Boxes 
                    key={i}
                    text={language}
                    typography="text-xs"
                    dimensions="px-4 py-1"
                    designs="rounded font-semibold"
                  />
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-sm">Frameworks & Libraries</p>
              <div className="flex flex-row flex-wrap gap-1 my-2">
                {frameworks.map((framework, i) => (
                  <Boxes 
                    key={i}
                    text={framework}
                    typography="text-xs"
                    dimensions="px-4 py-1"
                    designs="rounded font-semibold"
                  />
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-sm">Tools</p>
              <div className="flex flex-row flex-wrap gap-1 my-2">
                {tools.map((tool, i) => (
                  <Boxes 
                    key={i}
                    text={tool}
                    typography="text-xs"
                    dimensions="px-4 py-1"
                    designs="rounded font-semibold"
                  />
                ))}
              </div>
            </div>
          </div>

          {/*  Education */}
          <div className="col-span-2 col-start-4 row-start-1 row-span-2 rounded-lg bg-white p-5 border border-gray-200 flex flex-col">
            <p className="font-bold font-montserrat text-md flex flex-row items-center">
              <GraduationCap size={20} className="mr-2" />
              Education
            </p>

            <div className="mt-2 flex-1 flex flex-col">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex gap-3 flex-1">
                  {/* Graph column: node + connecting line */}
                  <div className="flex flex-col items-center">
                    <div className="relative top-0.5 w-4 h-4 rounded-full bg-white border-2 border-gray-200" />
                    {idx !== educationData.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200" />
                    )} 
                  </div>

                  {/* Info column */}
                  <div className="flex-1 flex flex-col justify-start">
                    <div className="flex flex-row justify-between">
                      <p className="text-sm font-semibold font-montserrat">{edu.level}</p>
                      <p className="text-xs text-gray-400">{edu.year}</p>
                    </div>
                    <p className="text-xs font-medium text-gray-800">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  Projects */}
          <div className="col-span-5 rounded-lg bg-white p-5 border border-gray-200">
            <div className="flex justify-between">
              <p className="font-bold font-montserrat text-md flex flex-row items-center">
                <FolderGit2 size={20} className="mr-2"/>
                Projects
              </p>
              <p className="text-xs text-gray-500 font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:scale-105 hover:text-black">
                View All
                <ArrowRight
                  size={14}
                  className="ml-1"
                />
              </p>
            </div>
          </div>

          {/*  Socials */}
          <div className="col-span-5 rounded-lg bg-white p-5 border border-gray-200">
            <div className="flex justify-between">
              <p className="font-bold font-montserrat text-md flex flex-row items-center">
                <Share2 size={20} className="mr-2"/>
                Socials
              </p>
              <p className="text-xs text-gray-500 font-medium flex flex-row items-center cursor-pointer transition duration-150 hover:scale-105 hover:text-black">
                View All
                <ArrowRight
                  size={14}
                  className="ml-1"
                />
              </p>
            </div>
          </div>

          {/*  Github */}
          <div className="col-span-5 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center">
              <Icon className="mr-1" icon="mdi:github" width="20" height="20" />
              Github
            </p>
            
            <div className="flex justify-center items-center mt-2">
              <a href="https://github.com/eli-fstn" target="_blank">
                <GitHubCalendar 
                  username="eli-fstn"
                  theme={{
                    light: [
                      "#EBEDF0", // no contributions
                      "#9BE9A8", // low
                      "#40C463", // moderate
                      "#30A14E", // high
                      "#216E39"  // very high
                    ],
                  }}
                  colorScheme="light"
                  blockSize={10}
                  blockMargin={4}
                  fontSize={13}
                />
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default Home