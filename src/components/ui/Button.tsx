interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: React.ReactNode;
  typography: React.ReactNode;
  dimensions: React.ReactNode;
  designs: React.ReactNode;
}

function Button({ text, typography, dimensions, designs, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition-transform duration-200 hover:scale-105 active:scale-95 disabled:active:scale-100 flex flex-row items-center cursor-pointer ${typography} ${dimensions} ${designs}`}
    >
      {text}
    </button>
  );
}

export default Button;