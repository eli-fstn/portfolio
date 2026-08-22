import { BadgeCheck } from "lucide-react"
import { Icon } from "@iconify/react"
import Button from "../components/ui/Button"

function Home() {
  const test = () => {
  }
  return (

    // HEADER
    <div className="bg-[#f1f1f1] min-h-screen px-100 py-20">

      {/* Parent Div */}
      <div className="flex flex-row gap-2">
        
        {/* Image */}
        <div className="">
          <img src="" alt="Elijah Festin" loading="lazy"/>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-2">
          <div className="">
            
          </div>
          <p className="font-semibold text-2xl flex flex-row items-center">Elijah Joshua E. Festin <span className="ml-2"><BadgeCheck size={25} className="fill-blue-500 text-white"/></span></p>
          <p className="flex flex-row items-center text-gray-500"><span><Icon className="mr-2" icon="boxicons:location" width="20" height="20" /></span>Cavite, Philippines</p>
          <p>BSCS Student | Aspiring Software Engineer</p>
          <div className="flex flex-row gap-2">
            <Button onClick={test} disabled={false} text="View Resume" typography="text-sm" dimensions="px-5 py-1" designs="bg-black text-white rounded-md font-semibold"></Button>
            <Button onClick={test} disabled={false} text="Send Email" typography="text-sm" dimensions="px-5 py-1" designs="border border-gray-300 bg-white shadow-sm text-black rounded-md font-semibold"></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home