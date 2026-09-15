import { useState } from "react";

interface TechPillProps {
  logoSrc?: string;
  label: string;
}

function TechPill({ logoSrc, label }: TechPillProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <span className="inline-flex items-center justify-center gap-1.5 whitespace-normal wrap-break-word bg-[#0c0c0f] border border-[#2a2a30] font-mono text-[#8a8a92] transition duration-200 hover:scale-[1.02] cursor-pointer hover:text-[#f4f4f5] text-sm px-4 py-1 rounded font-semibold">
      {logoSrc && !logoFailed ? (
        <img
          src={logoSrc}
          alt=""
          aria-hidden="true"
          className="h-[0.8em] w-[0.8em] md:h-[1em] md:w-[1em] shrink-0"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span aria-hidden="true" className="h-[1em] w-[1em] shrink-0 text-center text-xs leading-[1em] text-[#a0a0a8]">
          ◆
        </span>
      )}
      <span className="text-xs md:text-sm">{label}</span>
    </span>
  );
}

export default TechPill;
