import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./Modal";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  children: React.ReactNode;
};

function ProjectModal({ isOpen, onClose, images, children }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Image carousel */}
      <div className="relative w-full h-64 bg-gray-100">
        <img
          src={images[imageIndex]}
          alt={`Project preview ${imageIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 border border-gray-200 hover:bg-white transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 border border-gray-200 hover:bg-white transition"
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition ${
                    i === imageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Everything below the image is passed in as children */}
      <div className="p-5">
        {children}
      </div>
    </Modal>
  );
}

export default ProjectModal;