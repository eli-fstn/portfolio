import Sidebar from "../components/layout/Sidebar"
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";

interface Socials {
  platform: string;
  description: string
  username: string;
  link: string;
}

function Socials() {

  const socialMedias: Socials[] = [
    {platform: "Facebook", description: "School Purposes", username: "Elijah Festin", link: "https://web.facebook.com/itz.thelijah/"},
    {platform: "Instagram", description: "Personal & Activities", username: "e.fstn_", link: "https://www.instagram.com/e.fstn_/"},
    {platform: "Github", description: "Projects", username: "eli-fstn", link: "https://github.com/eli-fstn"},
  ]

  const sendEmail = () => {
    window.open("mailto:festinelijah@gmail.com?subject=Collaboration", "_blank");
  };

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

        {/* Header */}
        <div className="flex flex-col gap-5">
          <p className="text-[#f4f4f5] font-pixel text-[2rem]">socials</p>
          <p className="text-[#a0a0a8] text-sm font-mono">Find me online and connect with me through my social platforms.</p>
        </div>
        
        <div className="mt-20">

          <div className="rounded-xl p-15 bg-linear-to-br from-white/5 to-transparent mb-20">
            <div className="grid grid-cols-[2fr_1fr]">
              <div className="">
                <p className="text-white font-bold font-pixel text-[1.5rem]">let's get in touch</p>
                <p className="text-[#a0a0a8] font-mono text-sm mt-1">Whether you have a project in mind, want to collaborate, or simply want to connect, feel free to reach out.</p>
              </div>
              <div className="flex flex-col justify-center items-end">
                <Button
                  text={
                    <>
                      <Mail size={15} className="mr-2" />
                      Get in touch
                    </>
                  }
                  typography="font-mono text-black font-semibold"
                  dimensions="px-6 py-3"
                  designs="bg-white rounded-md"
                  disabled={false}
                  onClick={sendEmail}
                />
                <a href="mailto:festinelijah@gmail.com" className="text-[#a0a0a8] text-sm font-mono mt-3 duration-200 transition hover:text-white">festinelijah@gmail.com</a>
              </div>
            </div>
          </div>

          {socialMedias.map((entry, i) => (
            <div key={i} className="border-y border-y-[#2a2a30] p-10">
              <div className="flex flex-row justify-between items-center mb-1">
                <p className="text-xl font-pixel text-white font-bold">{entry.platform}</p>
                <a href={entry.link} target="_blank" rel="noferrer" className="text-[#a0a0a8] text-xs font-mono flex flex-row items-center duration-200 transition hover:text-white">
                  {entry.username}
                  <span>
                    <ArrowUpRight size={13} className="ml-1" />
                  </span>
                </a>
              </div>
              <p className="text-[#a0a0a8] font-mono text-sm">{entry.description}</p>
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

export default Socials