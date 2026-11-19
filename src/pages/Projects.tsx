import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_CARDS } from "../projectsData";
import SEOMeta from "../components/SEOMeta";

interface ProjectsProps {
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

const CATEGORIES = ["All", "Residential", "Housing", "Commercial", "Schools", "Farm Houses"];


const BOX_RATIO = 4 / 3; // card ka ratio (width / height)

// Poori image dikhata hai. Image ka ratio card se alag ho to bachi jagah usi image ki
// mirror copy se bharta hai (seam nahi dikhta, crop nahi hota, patti nahi aati).
function MirrorFillImage({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  const [ratio, setRatio] = useState<number | null>(null);

  const common = {
    referrerPolicy: "no-referrer" as const,
    decoding: "async" as const,
  };

  // Jab tak image load nahi hui, normal cover dikhao
  if (!ratio) {
    return (
      <img
        src={src}
        alt={alt}
        {...common}
        loading="lazy"
        onLoad={(e) => {
          const el = e.currentTarget;
          if (el.naturalWidth && el.naturalHeight) setRatio(el.naturalWidth / el.naturalHeight);
        }}
        onError={(e) => {
          const el = e.currentTarget;
          if (el.dataset.fallback !== "1") {
            el.dataset.fallback = "1";
            el.src = fallback;
          }
        }}
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      />
    );
  }

  const wide = ratio > BOX_RATIO; // image card se zyada wide -> upar/neeche mirror
  const pct = wide ? 100 * (BOX_RATIO / ratio) : 100 * (ratio / BOX_RATIO);
  const start = (100 - pct) / 2;

  const layer = (offset: number, flip: boolean, key: string, label: string) => (
    <img
      key={key}
      src={src}
      alt={label}
      aria-hidden={label === "" ? true : undefined}
      {...common}
      className="absolute"
      style={
        wide
          ? {
              left: 0,
              width: "100%",
              top: `${offset}%`,
              height: `${pct}%`,
              objectFit: "fill",
              transform: flip ? "scaleY(-1)" : undefined,
            }
          : {
              top: 0,
              height: "100%",
              left: `${offset}%`,
              width: `${pct}%`,
              objectFit: "fill",
              transform: flip ? "scaleX(-1)" : undefined,
            }
      }
    />
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {layer(start - pct, true, "a", "")}
      {layer(start + pct, true, "c", "")}
      {layer(start, false, "b", alt)}
    </div>
  );
}

export default function Projects({ onNavigate, onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setActiveHover(id), 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setActiveHover(null);
  };

  const filteredProjects = selectedCategory === "All"
    ? PROJECT_CARDS
    : PROJECT_CARDS.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (id: string) => {
    // Store current category in sessionStorage so ProjectDetail can use it
    sessionStorage.setItem('lastProjectCategory', selectedCategory);
    onSelectProject(id);
    onNavigate(`project-${id}`);
    window.scrollTo(0, 0);
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
            {filteredProjects.map((project) => {
              const isContain = project.cardFit === 'contain';
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="group cursor-pointer space-y-4"
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Image Card Container */}
                  <div
                    className="relative overflow-hidden bg-stone-200 w-full"
                    style={{
                      aspectRatio: project.cardAspectRatio || '4/3',
                      background: isContain ? (project.cardBg || '#111') : undefined,
                    }}
                  >
                    <div
                      className={`absolute inset-0 transition-transform duration-700 ease-out ${activeHover === project.id ? 'scale-[1.03]' : 'scale-100'}`}
                    >
                      {project.cardMirror ? (
                        <MirrorFillImage
                          src={project.cardImage || project.heroImage}
                          alt={project.title}
                          fallback={project.heroImage}
                        />
                      ) : (
                        <img
                          src={project.cardImage || project.heroImage}
                          onError={(e) => {
                            // card wali image load na ho to hero image dikhao (card kabhi toota hua na dikhe)
                            const el = e.currentTarget as HTMLImageElement;
                            if (el.dataset.fallback !== "1") {
                              el.dataset.fallback = "1";
                              el.src = project.heroImage;
                            }
                          }}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          {...({ fetchpriority: "low" } as any)}
                          className="w-full h-full"
                          style={{
                            objectFit: project.cardFit || 'cover',
                            objectPosition: project.cardPosition || 'center',
                          }}
                        />
                      )}
                    </div>

                    {/* Subtle hover overlay and zoom */}
                    <div className={`absolute inset-0 bg-stone-950/20 transition-opacity duration-500 flex items-center justify-center ${activeHover === project.id ? 'opacity-100' : 'opacity-0'}`}>
                      <span className={`bg-stone-50 text-stone-950 text-[10px] uppercase tracking-widest font-semibold py-2.5 px-5 shadow-lg transition-all duration-500 ${activeHover === project.id ? 'translate-y-0' : 'translate-y-2'}`}>
                        Explore Case Study
                      </span>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="flex justify-between items-start pt-1 border-t border-stone-200/50">
                    <div>
                      <h3 className={`font-serif text-lg font-medium transition-colors ${activeHover === project.id ? 'text-stone-600' : 'text-stone-900'}`}>
                        {project.title}
                      </h3>
                      <p className="text-[9px] md:text-[10px] tracking-wide uppercase text-stone-900 font-light mt-1">
                        {project.category} // {project.location}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
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