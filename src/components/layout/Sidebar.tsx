import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { label } from "motion/react-client";

interface Navigation {
  label: string;
  route: string;
}

function Sidebar() {
  const location = useLocation();

  const navItems: Navigation[] = [
    {label: "Education", route: "/education"},
    {label: "Projects", route: "/projects"},
    {label: "Stack", route: "/tech-stack"},
    {label: "Socials", route: "/socials"},
  ]

  return (
    <div className="w-50 z-100 sticky top-0 h-screen bg-[#0c0c0f] border border-[#2a2a30] p-5 flex flex-col">

      {/* Name - Navigate to Dashboard */}
      <div className="">
        <Link to="/" className="text-[#f4f4f5] font-pixel text-xl transition duration-200 hover:text-[#a0a0a8]">Elijah Festin</Link>
      </div>

      {/* Routes */}
      <div className="flex flex-col gap-3 text-[#a0a0a8] mt-10 text-sm font-mono">
        {navItems.map((entry, i) => {
          const isActive = location.pathname === entry.route;

          return (
            <Link key={i} to={entry.route}
              className={`inline-flex w-fit items-center transition duration-200 hover:text-[#f4f4f5]
                ${isActive ? "text-white" : ""}
              `}>
              {isActive ? (
                <>
                  <span><ArrowRight size={13} className="text-white mr-2"/></span>
                  {entry.label}
                </>
                ) : (
                <>
                  {entry.label}
                </>
                )}
            </Link>
          )
        })}
      </div>

      {/* Bottom Part */}
      <div className="mt-auto pt-2 border-t border-[#2a2a30]">
      </div>
    </div>
  )
}

export default Sidebar