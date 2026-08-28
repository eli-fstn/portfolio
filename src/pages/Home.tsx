import { BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, FolderGit2, Share2, ArrowRight, FileText, Mail, MapPin, } from "lucide-react"
import Button from "../components/ui/Button"
import profile from "../assets/elijah-festin.jpeg";

function Home() {
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
    <div className="bg-[#0c0c0f] min-h-screen px-70 pt-20">
      
      {/* HEADER */}
      <div className="flex justify-center items-center">

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

            <div className="flex flex-row mt-1">
              <Button
                onClick={sendEmail}
                text={
                  <>
                    <Mail 
                      size={15}
                      className="mr-2"
                    />
                    Get in touch
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
    </div>
  )
}

export default Home