import { BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, FolderGit2, Share2 } from "lucide-react"
import { Icon } from "@iconify/react"
import Button from "../components/ui/Button"
import profile from "../assets/elijah-festin.jpeg";

function Home() {
  const test = () => {
  }
  return (

    // BODY
    <div className="bg-white min-h-screen px-70 py-20">

      {/* HEADER */}
      <div >

        {/* Parent Div */}
        <div className="flex flex-row items-stretch gap-3">
          
          {/* Image */}
          <div className="w-35">
            <img
              src={profile}
              className="w-full h-full object-cover rounded-md transition duration-200 hover:scale-105 hover:-rotate-1 hover:shadow-md"
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
                    className="fill-blue-500 text-[#f1f1f1]"
                  />
                </span>
              </p>

              <p className="flex flex-row items-center text-gray-500 text-sm mt-1">
                <Icon
                  className="mr-0.5"
                  icon="boxicons:location"
                  width="17"
                  height="17"
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
                    <Icon
                      className="mr-1"
                      icon="mingcute:paper-line"
                      width="15"
                      height="15"
                    />
                    View Resume
                  </>
                }
                typography="text-xs"
                dimensions="px-4 py-2"
                designs="bg-black text-white rounded-md font-semibold"
              />

              <Button
                onClick={test}
                text={
                  <>
                    <Icon
                      className="mr-1"
                      icon="ic:outline-email"
                      width="15"
                      height="15"
                    />
                    Send Email
                  </>
                }
                typography="text-xs"
                dimensions="px-4 py-2"
                designs="border border-gray-300 bg-white shadow-sm text-black rounded-md font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  MAIN CONTENT */}
      <div className="mt-10">
        <div className="grid grid-cols-3 grid-rows-10 gap-5">

          {/* About */}
          <div className="col-span-2 row-span-3 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center"><BriefcaseBusiness size={20} className="mr-2"/>About</p>
          </div>

          {/* Tech Stack */}
          <div className="col-span-2 row-span-3 col-start-1 row-start-4 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center"><Code2 size={20} className="mr-2"/>Tech Stack</p>
          </div>

          {/*  Education */}
          <div className="col-start-3 row-start-1 row-span-6 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center"><GraduationCap size={20} className="mr-2"/>Education</p>
          </div>

          {/*  Projects */}
          <div className="col-span-3 row-span-2 row-start-7 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center"><FolderGit2 size={20} className="mr-2"/>Projects</p>
          </div>

          {/*  Socials */}
          <div className="col-span-3 row-span-2 row-start-9 rounded-lg bg-white p-5 border border-gray-200">
            <p className="font-bold font-montserrat text-md flex flex-row items-center"><Share2 size={20} className="mr-2"/>Socials</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home