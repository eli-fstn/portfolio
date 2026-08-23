interface BoxProps {
  text: React.ReactNode;
  typography: React.ReactNode;
  dimensions: React.ReactNode;
  designs: React.ReactNode;
}

function Boxes({ text, typography, dimensions, designs}: BoxProps) {
  return (
    <div className={`bg-white border border-gray-200 transition duration-150 hover:scale-105 hover:bg-black hover:text-white cursor-pointer ${typography} ${dimensions} ${designs}`}>
      {text}
    </div>
  )
}

export default Boxes