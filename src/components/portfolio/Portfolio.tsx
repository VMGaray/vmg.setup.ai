import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 md:py-40 bg-[#f0f0fe]"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#7971AE]">
          Proyectos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

