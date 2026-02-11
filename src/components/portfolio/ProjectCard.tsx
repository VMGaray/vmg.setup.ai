interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      
      {/* Imagen */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-[#7971AE]">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>

       

        {/* Botón */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center px-4 py-2 rounded-xl bg-[#7971AE] text-white font-semibold hover:bg-[#6a63c7] transition-all duration-300"
          >
            Ver proyecto
          </a>
        )}
      </div>
    </div>
  );
}
