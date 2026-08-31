import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Mail } from "lucide-react";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { useEffect, useRef } from "react";
import { getSocialMedias } from "../data/portfolio.ts";

function Socials() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const socialMedias = getSocialMedias();
  
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

  const sendEmail = () => {
    window.open("mailto:festinelijah@gmail.com?subject=Collaboration", "_blank");
  };

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
          <p className="text-[#f4f4f5] font-pixel text-[2rem]">socials</p>
          <p className="text-[#a0a0a8] text-sm font-mono">Find me online and connect with me through my social platforms.</p>
        </div>
        
        <div className="animate-on-scroll mt-20">

          <div className="mb-20 rounded-xl border border-[#2a2a30] bg-[#151518]/80 p-5 sm:p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr] md:items-center">
              <div className="min-w-0">
                <p className="text-[#f4f4f5] font-bold font-pixel text-[1.25rem] sm:text-[1.5rem]">let's get in touch</p>
                <p className="mt-1 text-[#a0a0a8] font-mono text-sm leading-relaxed">Whether you have a project in mind, want to collaborate, or simply want to connect, feel free to reach out.</p>
              </div>
              <div className="flex flex-col items-start justify-center md:items-end">
                <Button
                  text={
                    <>
                      <Mail className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                      Get in touch
                    </>
                  }
                  typography="font-mono text-xs md:text-sm text-black font-semibold"
                  dimensions="px-4 py-2 md:px-6 md:py-3"
                  designs="bg-white rounded-md"
                  disabled={false}
                  onClick={sendEmail}
                />
                <a href="mailto:festinelijah@gmail.com" className="mt-3 break-all text-sm font-mono text-[#a0a0a8] transition duration-200 hover:text-[#f4f4f5]">festinelijah@gmail.com</a>
              </div>
            </div>
          </div>

          {socialMedias.map((entry, i) => (
            <div key={i} className="animate-on-scroll border-y border-y-[#2a2a30] py-5 sm:py-6">
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-pixel text-[#f4f4f5] font-bold sm:text-xl">{entry.platform}</p>
                <a href={entry.link} target="_blank" rel="noferrer" className="flex flex-row items-center text-xs font-mono text-[#a0a0a8] transition duration-200 hover:text-[#f4f4f5] break-all">
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