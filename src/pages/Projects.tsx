import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ui/ProjectCard";
import kabsupanionLogo from "../assets/projects/kabsupanion/Kabsupanion-Logo.png";
import echoLogo from "../assets/projects/echo-gwa-calculator/Echo-Logo.png";

function Projects() {
  return (
    <div className="bg-white min-h-screen px-70 pt-20">
      <Link to="/" className="text-xs my-10 text-gray-500 font-medium inline-flex flex-row items-center cursor-pointer transition duration-150 hover:-translate-x-1 hover:text-black">
        <ArrowLeft
          size={14}
          className="mr-1"
        />
        Go Back
      </Link>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-4 gap-5">
        <ProjectCard
          image={kabsupanionLogo}
          title="Kabsupanion"
          description="A section-based student portal designed to organize academic tasks, schedules, and collaborative study materials."
        />
        <ProjectCard
          image={echoLogo}
          title="Echo - GWA Calculautor"
          description="A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released."
        />
        <ProjectCard
          image={echoLogo}
          title="Echo - GWA Calculautor"
          description="A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released."
        />
        <ProjectCard
          image={echoLogo}
          title="Echo - GWA Calculautor"
          description="A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released."
        />
        <ProjectCard
          image={echoLogo}
          title="Echo - GWA Calculautor"
          description="A GWA calculator that helps students predict their final GWA, and track their progress toward Latin honors before official grades are released."
        />``
      </div>
    </div>
  )
}

export default Projects