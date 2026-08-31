import { Icon } from "@iconify/react"

function LoadingScreen() {
  return (
    <div className="bg-[#0c0c0f] min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <Icon icon="svg-spinners:3-dots-move" className="text-[#f4f4f5] text-[2rem]" />
      </div>
    </div>
  )
}

export default LoadingScreen