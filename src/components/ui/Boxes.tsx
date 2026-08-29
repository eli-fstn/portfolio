interface BoxProps {
  text: React.ReactNode;
  typography: React.ReactNode;
  dimensions: React.ReactNode;
  designs: React.ReactNode;
}

function Boxes({ text, typography, dimensions, designs}: BoxProps) {
  return (
    <div className={`bg-[#0c0c0f] border border-[#2a2a30] font-mono text-[#a0a0a8] transition duration-150 hover:scale-105 cursor-pointer hover:text-white ${typography} ${dimensions} ${designs}`}>
      {text}
    </div>
  )
}

export default Boxes