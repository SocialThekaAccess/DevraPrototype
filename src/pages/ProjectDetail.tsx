import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, CornerDownRight, ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import SEOMeta from "../components/SEOMeta";

interface ProjectDetailProps {
  project: Project;
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

export default function ProjectDetail({ project, onNavigate, onSelectProject }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  
  // Find previous and next project index
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[currentIndex === 0 ? PROJECTS.length - 1 : currentIndex - 1];
  const nextProject = PROJECTS[currentIndex === PROJECTS.length - 1 ? 0 : currentIndex + 1];

  const handlePrevClick = () => {
    onSelectProject(prevProject.id);
    onNavigate(`project-${prevProject.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextClick = () => {
    onSelectProject(nextProject.id);
    onNavigate(`project-${nextProject.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (activeImageIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => 
          prev !== null ? (prev === project.images.length - 1 ? 0 : prev + 1) : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => 
          prev !== null ? (prev === 0 ? project.images.length - 1 : prev - 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex, project.images.length]);

  return (
    <div id={`project-detail-${project.id}`} className="bg-stone-50 text-stone-900 min-h-screen pb-20">
      <SEOMeta
        title={`${project.title} - ${project.category} in ${project.location}`}
        description={`${project.description} Custom architecture, interiors, and spatial design in Punjab and Chandigarh executed by DEVRA Architects.`}
        keywords={[
          project.title.toLowerCase(),
          `${project.title.toLowerCase()} archidust`,
          `${project.title.toLowerCase()} buildofy`,
          `${project.category.toLowerCase()} design ${project.location.toLowerCase()}`,
          `luxury living ${project.location.toLowerCase()}`,
          `exposed brick ${project.location.toLowerCase()}`,
          "top home design punjab",
        ]}
        ogImage={project.heroImage}
        ogType="article"
        path={`project-${project.id}`}
      />
      
      {/* 1. Full-Screen Top Hero Image */}
      <section className="relative h-[80vh] w-full bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="space-y-3 text-stone-50">
            <button
              onClick={() => {
                onNavigate("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-300 hover:text-stone-100 transition-colors cursor-pointer mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Projects
            </button>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-300 font-mono">
              {project.category} // {project.location}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-50 font-medium tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Project Factsheet Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main summary descriptive statement */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-2">
              <CornerDownRight className="w-3.5 h-3.5" />
              Overview & Narrative
            </h2>
            <p className="text-stone-800 text-sm md:text-base font-light leading-relaxed tracking-wide">
              {project.description}
            </p>
          </div>

          {/* Right facts panel */}
          <div className="md:col-span-5 bg-stone-100 p-8 border border-stone-200 space-y-5">
            <h3 className="text-xs uppercase tracking-widest text-stone-900 font-mono font-bold pb-2 border-b border-stone-300">
              Project Facts
            </h3>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="text-stone-400 uppercase tracking-widest font-mono text-[10px]">Location</span>
              <span className="col-span-2 text-stone-800 font-medium">{project.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="text-stone-400 uppercase tracking-widest font-mono text-[10px]">Category</span>
              <span className="col-span-2 text-stone-800 font-medium">{project.category}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="text-stone-400 uppercase tracking-widest font-mono text-[10px]">Project Size</span>
              <span className="col-span-2 text-stone-800 font-medium">{project.size}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="text-stone-400 uppercase tracking-widest font-mono text-[10px]">Year</span>
              <span className="col-span-2 text-stone-800 font-medium">{project.year}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="text-stone-400 uppercase tracking-widest font-mono text-[10px]">Scope</span>
              <span className="col-span-2 text-stone-800 font-medium">{project.scope}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Deep Architectural Chapters / Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold">
              DESIGN CHAPTERS
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-medium tracking-tight">
              Form, Site, and Detail
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              We design with a severe respect for natural physics, client behaviors, and structural craftsmanship. Here is the physical reasoning behind our design.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Site & Context */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono">
                01 // Site & Context
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                {project.narrative.site}
              </p>
            </div>

            {/* Spatial Planning */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono">
                02 // Spatial Planning Idea
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                {project.narrative.planning}
              </p>
            </div>

            {/* Material Language */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono">
                03 // Material Palette
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                {project.narrative.materials}
              </p>
            </div>

            {/* Light, Ventilation & Passive Comfort */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono">
                04 // Climate, Light & Ventilation
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                {project.narrative.lightVentilation}
              </p>
            </div>

            {/* Execution / Detail Oversight */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono">
                05 // On-site detailing & execution
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                {project.narrative.execution}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Large Editorial Rhythm Project Gallery */}
      <section className="bg-stone-100 py-20 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
              THE PORTFOLIO GALLERY
            </span>
            <h3 className="font-serif text-2xl text-stone-900 font-medium">
              Editorial Showcase
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img, index) => {
              // Create dynamic spans for a beautiful editorial rhythm layout
              const isFullWidth = index % 3 === 2;
              return (
                <div
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative overflow-hidden bg-stone-200 aspect-[4/3] cursor-zoom-in group ${
                    isFullWidth ? "md:col-span-2 aspect-[16/9]" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-stone-900/85 p-3 rounded-full text-stone-50 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg border border-stone-800/40">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-stone-900/80 text-stone-300 font-mono text-[9px] uppercase tracking-widest py-1 px-2.5">
                    {project.title} // DET. 0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Bottom Navigation Slider (Prev/Next) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 flex justify-between items-center border-t border-stone-200 mt-20">
        <button
          onClick={handlePrevClick}
          className="flex items-center gap-3 group text-left cursor-pointer transition-all hover:translate-x-[-4px]"
        >
          <ArrowLeft className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
          <div>
            <p className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">
              PREVIOUS PROJECT
            </p>
            <p className="font-serif text-base text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
              {prevProject.title}
            </p>
          </div>
        </button>

        <button
          onClick={handleNextClick}
          className="flex items-center gap-3 group text-right cursor-pointer transition-all hover:translate-x-[4px]"
        >
          <div>
            <p className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">
              NEXT PROJECT
            </p>
            <p className="font-serif text-base text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
              {nextProject.title}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
        </button>
      </section>

      {/* 6. Detail Page CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-24 space-y-6">
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 font-medium">
          Start your project with DEVRA
        </h3>
        <p className="text-stone-600 text-xs leading-relaxed max-w-lg mx-auto font-light">
          We bring precise structural craftsmanship, tailored spatial planning, and direct execution control to Chandigarh, Mohali, and pan-India sites.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-1 bg-stone-900 hover:bg-stone-800 text-stone-50 py-3.5 px-7 text-xs uppercase tracking-widest font-semibold cursor-pointer"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. Full-Screen Interactive Lightbox */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-stone-950/98 backdrop-blur-md flex flex-col justify-between p-6 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full text-stone-400 font-mono text-xs tracking-wider">
              <div>
                <span className="text-stone-200">{project.title}</span>
                <span className="mx-2 text-stone-700">//</span>
                <span>DET. 0{activeImageIndex + 1}</span>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(null);
                }}
                className="p-2 hover:text-stone-50 transition-colors cursor-pointer flex items-center gap-2 group text-[10px] uppercase tracking-[0.2em]"
              >
                Close
                <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Central Media Container */}
            <div className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-4 md:px-12 my-4">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => 
                    prev !== null ? (prev === 0 ? project.images.length - 1 : prev - 1) : null
                  );
                }}
                className="absolute left-0 md:left-4 z-10 p-3 bg-stone-900/40 hover:bg-stone-900/80 text-stone-300 hover:text-stone-50 transition-all rounded-full cursor-pointer border border-stone-800/40 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 h-6" />
              </button>

              {/* Dynamic Image Display with animations */}
              <div 
                className="w-full h-full max-h-[70vh] flex items-center justify-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={activeImageIndex}
                  src={project.images[activeImageIndex]}
                  alt={`${project.title} detail ${activeImageIndex + 1}`}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="max-w-full max-h-full object-contain shadow-2xl border border-stone-900/50"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => 
                    prev !== null ? (prev === project.images.length - 1 ? 0 : prev + 1) : null
                  );
                }}
                className="absolute right-0 md:right-4 z-10 p-3 bg-stone-900/40 hover:bg-stone-900/80 text-stone-300 hover:text-stone-50 transition-all rounded-full cursor-pointer border border-stone-800/40 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 md:w-6 h-6" />
              </button>
            </div>

            {/* Bottom Bar / Thumbnail Progress */}
            <div className="flex flex-col items-center gap-4 w-full text-stone-400 font-mono text-[10px] tracking-widest">
              <div>
                <span className="text-stone-100">{activeImageIndex + 1}</span>
                <span className="mx-2 text-stone-700">/</span>
                <span>{project.images.length}</span>
              </div>
              
              {/* Thumbnail indicator dots */}
              <div className="flex gap-2.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(idx);
                    }}
                    className={`h-[3px] transition-all duration-300 cursor-pointer ${
                      idx === activeImageIndex ? "w-8 bg-stone-200" : "w-2 bg-stone-800 hover:bg-stone-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
