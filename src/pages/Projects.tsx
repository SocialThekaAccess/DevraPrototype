import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import SEOMeta from "../components/SEOMeta";

interface ProjectsProps {
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

const CATEGORIES = ["All", "Residential", "Interiors", "Farm Houses", "Housing", "Schools"];

export default function Projects({ onNavigate, onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (id: string) => {
    onSelectProject(id);
    onNavigate(`project-${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="projects-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="Our Architecture & Interiors Portfolio | DEVRA Architects"
        description="Explore DEVRA Architects' portfolio of premium residential villas, modern farmhouses, luxury interiors, schools, and group housing projects in Chandigarh, Mohali, and Punjab."
        keywords={[
          "architecture portfolio chandigarh",
          "modern house designs mohali",
          "punjabi farmhouse portfolio",
          "luxury residential architects india",
          "sustainable building design archive",
          "exposed brick home portfolio",
        ]}
        path="projects"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // ARCHIVE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            A quiet showcase of luxurious residences, detailed interiors, estate farmhouses, and progressive institutional masterplans. Each project represents our rigorous commitment to structural authenticity and beautiful utility.
          </p>
        </div>

        {/* Filters bar */}
        <div id="project-filters" className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase().replace(" ", "-")}`}
                onClick={() => setSelectedCategory(category)}
                className={`text-[11px] uppercase tracking-widest font-sans font-medium py-1.5 transition-all duration-300 relative cursor-pointer hover:text-stone-950 ${
                  isActive ? "text-stone-950 font-semibold" : "text-stone-400"
                }`}
              >
                {category}
                {isActive && (
                  <motion.span
                    layoutId="category-underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-950"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid of Projects */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer space-y-4"
              >
                {/* Image Card Container */}
                <div className="relative overflow-hidden bg-stone-200 aspect-[4/3] w-full">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                  {/* Subtle hover overlay and zoom */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-stone-50 text-stone-950 text-[10px] uppercase tracking-widest font-semibold py-2.5 px-5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Explore Case Study
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="flex justify-between items-start pt-1 border-t border-stone-200/50">
                  <div>
                    <h3 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-mono uppercase tracking-widest mt-1">
                      {project.category} // {project.location}
                    </p>
                  </div>
                  <span className="text-xs text-stone-400 font-mono">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if nothing matches */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center border border-dashed border-stone-300">
            <p className="text-stone-500 text-xs uppercase tracking-widest">
              No projects available in this category yet.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
