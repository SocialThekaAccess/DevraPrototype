import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SEOMeta from "../components/SEOMeta";
import { Project } from "../types";
import { PROJECTS } from "../data";

interface ProjectDetailProps {
  project: Project;
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

function buildRows(images: string[]) {
  const rows: { type: string; items: string[] }[] = [];
  const patterns = ['two', 'full', 'three', 'full', 'two', 'full', 'three'];
  let imageIndex = 0;
  let patternIndex = 0;

  while (imageIndex < images.length) {
    const pattern = patterns[patternIndex % patterns.length];

    if (pattern === 'full') {
      rows.push({ type: 'full', items: [images[imageIndex]] });
      imageIndex += 1;
    } else if (pattern === 'two') {
      const slice = images.slice(imageIndex, imageIndex + 2);
      rows.push({ type: slice.length === 1 ? 'full' : 'two', items: slice });
      imageIndex += slice.length;
    } else {
      const slice = images.slice(imageIndex, imageIndex + 3);
      rows.push({
        type: slice.length === 1 ? 'full' : slice.length === 2 ? 'two' : 'three',
        items: slice,
      });
      imageIndex += slice.length;
    }

    patternIndex += 1;
  }

  return rows;
}

export default function ProjectDetail({ project, onNavigate, onSelectProject }: ProjectDetailProps) {
  const rows = buildRows(project.images || []);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Find adjacent projects for navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const handleNavigateToProject = (id: string) => {
    onSelectProject(id);
    onNavigate(`project-${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div id="project-detail-page" className="bg-stone-50 text-stone-900 min-h-screen pt-20">
      <SEOMeta
        title={`${project.title} | ${project.category} | DEVRA Architects`}
        description={project.description}
        keywords={[
          `${project.category.toLowerCase()} architecture`,
          `${project.location.toLowerCase()} architects`,
          project.title.toLowerCase(),
          "luxury residential design",
          "modern architecture india"
        ]}
        path={`project-${project.id}`}
      />

      {/* Hero Section with Project Image */}
      <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-stone-900">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Hero Title Overlay */}
        <div className="absolute inset-0 z-20 flex items-end max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="text-stone-50 space-y-4 max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-300 font-mono font-bold">
              {project.category} // {project.location}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight font-medium">
              {project.title}
            </h1>
            <p className="text-stone-200 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Metadata Strip */}
      <section className="border-b border-stone-200 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-1">
                  Location
                </p>
                <p className="text-stone-900 text-sm font-medium">
                  {project.location}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Ruler className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-1">
                  Project Size
                </p>
                <p className="text-stone-900 text-sm font-medium">
                  {project.size}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-1">
                  Year
                </p>
                <p className="text-stone-900 text-sm font-medium">
                  {project.year}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                <span className="w-2 h-2 bg-stone-500 rounded-full" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-1">
                  Scope
                </p>
                <p className="text-stone-900 text-sm font-medium">
                  {project.scope}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Narrative Section */}
      {project.narrative && (
        <section className="py-20 md:py-28 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Label Column */}
              <div className="lg:col-span-3">
                <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
                  Project Narrative
                </span>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-9 space-y-10">
                
                {project.narrative.site && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      Site & Context
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {project.narrative.site}
                    </p>
                  </div>
                )}

                {project.narrative.planning && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      Planning & Spatial Organization
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {project.narrative.planning}
                    </p>
                  </div>
                )}

                {project.narrative.materials && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      Material Palette
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {project.narrative.materials}
                    </p>
                  </div>
                )}

                {project.narrative.lightVentilation && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      Light & Ventilation Strategy
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {project.narrative.lightVentilation}
                    </p>
                  </div>
                )}

                {project.narrative.execution && (
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      Execution Details
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed font-light">
                      {project.narrative.execution}
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery with Dynamic Rows */}
      {rows.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={`row-${rowIndex}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: rowIndex * 0.1 }}
                className={`grid gap-6 ${
                  row.type === 'full' ? 'grid-cols-1' :
                  row.type === 'two' ? 'grid-cols-1 md:grid-cols-2' :
                  'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {row.items.map((image, imageIndex) => {
                  const globalIndex = project.images.indexOf(image);
                  return (
                    <div
                      key={`img-${rowIndex}-${imageIndex}`}
                      className="relative overflow-hidden bg-stone-200 aspect-[4/3] group"
                    >
                      <img
                        src={image}
                        alt={`${project.title} detail ${globalIndex + 1}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Project Navigation - Next/Previous */}
      <section className="py-16 border-t border-stone-200 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Previous Project */}
            <button
              onClick={() => handleNavigateToProject(prevProject.id)}
              className="group text-left cursor-pointer hover:bg-stone-50 p-6 border border-stone-200 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-3">
                <ArrowLeft className="w-3 h-3" />
                Previous Project
              </div>
              <h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                {prevProject.title}
              </h3>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-2">
                {prevProject.category}
              </p>
            </button>

            {/* Next Project */}
            <button
              onClick={() => handleNavigateToProject(nextProject.id)}
              className="group text-right cursor-pointer hover:bg-stone-50 p-6 border border-stone-200 transition-all duration-300"
            >
              <div className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-3">
                Next Project
                <ArrowRight className="w-3 h-3" />
              </div>
              <h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-2">
                {nextProject.category}
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-stone-50 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
            START YOUR PROJECT
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight">
            Ready to Create Your Architectural Vision?
          </h3>
          <p className="text-stone-600 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Whether you have a plot, a dream, or just curiosity — let's discuss how we can bring sophisticated, sustainable luxury to your project.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white hover:text-stone-300 transition-colors z-50"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white hover:text-stone-300 transition-colors z-50"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full mx-6"
          >
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={project.images[currentImageIndex]}
              alt={`${project.title} ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-mono">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
