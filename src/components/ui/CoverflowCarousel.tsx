import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CoverflowItem {
  image: string;
  title: string;
  description: string;
}

interface CoverflowCarouselProps {
  items: CoverflowItem[];
  /** px distance between each slide's center */
  spacing?: number;
  /** px width of the centered slide */
  slideWidth?: number;
  /** px height of the centered slide */
  slideHeight?: number;
}

export default function CoverflowCarousel({
  items,
  spacing = 220,
  slideWidth = 320,
  slideHeight = 200,
}: CoverflowCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, i));
      setIndex(clamped);
    },
    [items.length]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const current = items[index];

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Stage */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center"
        style={{ height: slideHeight + 60, perspective: "1200px" }}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous project"
          className="absolute left-2 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-[#151518] border border-[#2a2a30] text-[#a0a0a8] transition duration-200 hover:text-white hover:border-[#3a3a42] disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>

        {items.map((item, i) => {
          const offset = i - index;
          const distance = Math.abs(offset);

          // only render nearby slides for perf, hide the rest
          if (distance > 3) return null;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : Math.max(0.55, 1 - distance * 0.22);
          const translateX = offset * spacing;
          const translateZ = isCenter ? 0 : -distance * 80;
          const rotateY = offset === 0 ? 0 : offset < 0 ? 35 : -35;
          const blurPx = isCenter ? 0 : Math.min(6, distance * 2.5);
          const opacity = distance > 3 ? 0 : isCenter ? 1 : Math.max(0.25, 0.7 - distance * 0.15);
          const zIndex = 20 - distance;

          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={item.title}
              className="absolute rounded-md overflow-hidden cursor-pointer bg-[#151518] transition-[transform,filter,opacity] duration-500 ease-out"
              style={{
                width: slideWidth,
                height: slideHeight,
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                filter: `blur(${blurPx}px)`,
                opacity,
                zIndex,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              {!isCenter && (
                <div className="absolute inset-0 bg-black/30" />
              )}
              {isCenter && (
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-md" />
              )}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={next}
          disabled={index === items.length - 1}
          aria-label="Next project"
          className="absolute right-2 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-[#151518] border border-[#2a2a30] text-[#a0a0a8] transition duration-200 hover:text-white hover:border-[#3a3a42] disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Title / description — swaps with a soft fade+rise each time index changes */}
      <div key={index} className="text-center coverflow-fade-in">
        <p className="font-pixel font-bold text-white text-[1.5rem]">{current.title}</p>
        <p className="font-mono text-sm text-[#a0a0a8] mt-2">{current.description}</p>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === index ? "#ffffff" : "#3a3a42",
              width: i === index ? 16 : 6,
            }}
          />
        ))}
      </div>

      <style>{`
        .coverflow-fade-in {
          animation: coverflowFadeIn 0.45s ease-out;
        }
        @keyframes coverflowFadeIn {
          from { opacity: 0; transform: translateY(8px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </div>
  );
}