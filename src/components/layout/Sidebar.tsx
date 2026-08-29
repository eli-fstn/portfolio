import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-50 sticky top-0 h-screen bg-[#0c0c0f] border border-[#2a2a30] p-5 flex flex-col">

      {/* Name - Navigate to Dashboard */}
      <div className="">
        <Link to="/" className="text-white font-pixel text-md transition duration-200 hover:text-[#a0a0a8]">Elijah Festin</Link>
      </div>

      {/* Routes */}
      <div className="flex flex-col gap-5 text-[#a0a0a8] transition duration-200 hover:text-white mt-10 text-xs">
        <Link to="" className="">
          Projects
        </Link>
      </div>
    </div>
  )
}

export default Sidebar