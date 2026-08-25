type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
};

function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <div className="w-55 h-45 rounded-lg bg-white border border-gray-200 overflow-hidden flex flex-col transition duration-150 hover:-translate-y-1 hover:shadowm-sm cursor-pointer">
      {/* Image half */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Info half */}
      <div className="p-4 flex flex-col flex-1">
        <p className="font-bold font-montserrat text-sm line-clamp-2">{title}</p>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;