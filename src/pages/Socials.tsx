import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

function Socials() {
  return (
    <div className="bg-white min-h-screen px-70 pt-20">
      <Link to="/" className="text-xs text-gray-500 font-medium inline-flex flex-row items-center cursor-pointer transition duration-150 hover:-translate-x-1 hover:text-black">
        <ArrowLeft size={14} className="mr-1" />
        Go Back
      </Link>

      {/* MAIN CONTENT */}
      <div className="">
      </div>
    </div>
  )
}

export default Socials