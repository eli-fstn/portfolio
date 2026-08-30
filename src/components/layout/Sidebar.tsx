import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-50 z-100 sticky top-0 h-screen bg-[#0c0c0f] border border-[#2a2a30] p-5 flex flex-col">

      {/* Name - Navigate to Dashboard */}
      <div className="">
        <Link to="/" className="text-[#f4f4f5] font-pixel text-xl transition duration-200 hover:text-[#a0a0a8]">Elijah Festin</Link>
      </div>

      {/* Routes */}
      <div className="flex flex-col gap-3 text-[#a0a0a8] mt-10 text-sm font-mono">
        <Link to="/projects" className="inline-flex w-fit items-center transition duration-200 hover:text-[#f4f4f5] hover:translate-x-1.5">
          Projects
        </Link>

        <Link to="/tech-stack" className="inline-flex w-fit items-center transition duration-200 hover:text-[#f4f4f5] hover:translate-x-1.5">
          Stack
        </Link>

        <Link to="/socials" className="inline-flex w-fit items-center transition duration-200 hover:text-[#f4f4f5] hover:translate-x-1.5">
          Socials
        </Link>
      </div>

      {/* Bottom Part */}
      <div className="mt-auto pt-2 border-t border-[#2a2a30]">
      </div>
    </div>
  )
}

export default Sidebar