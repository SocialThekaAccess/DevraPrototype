import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, ShieldCheck, Paintbrush, Compass, Home as HomeIcon } from "lucide-react";
import { PROJECTS } from "../data";
import SEOMeta from "../components/SEOMeta";

interface HomeProps {
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    subtitle: "FEATURED ARCHITECTURE // PATIALA",
    title: "Sansarg Residence",
    text: "Shaped around courtyards, light, and honest tactile materials."
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    subtitle: "MODERN RESIDENCE // MOHALI",
    title: "Villa 58",
    text: "Linear forms, structural cantilevers, and flowing cross-ventilation."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    subtitle: "ESTATE LIVING // PUNJAB BORDER",
    title: "The Kangs Farmhouse",
    text: "A sprawling brick and stone pavilion connecting family with native nature."
  }
];

export default function Home({ onNavigate, onSelectProject }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleProjectClick = (id: string) => {
    onSelectProject(id);
    onNavigate(`project-${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home-page" className="bg-stone-50 text-stone-900 min-h-screen">
      <SEOMeta
        title="Top Luxury Architects in Chandigarh & Mohali | DEVRA Architects"
        description="DEVRA Architects is a premier Chandigarh-based architecture and interior design studio. We specialize in luxury residences, modern Punjabi farmhouses, sustainable courtyard villas, and design-to-build projects with direct site execution."
        keywords={[
          "best residential architect chandigarh",
          "luxury villa design mohali",
          "modern house planner new chandigarh",
          "sustainable farmhouse architect punjab",
          "devra architects patiala",
          "courtyard home designers",
          "top architect in chandigarh list",
        ]}
        path="home"
      />
      
      {/* 1. Full-screen Hero Slider */}
      <section id="home-hero" className="relative h-screen w-full overflow-hidden bg-stone-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Slider Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-start max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl text-stone-50 space-y-6 pt-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[10px] tracking-[0.3em] uppercase text-stone-300 font-mono"
            >
              {HERO_SLIDES[currentSlide].subtitle}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] font-medium"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-stone-200 text-sm md:text-base font-light leading-relaxed tracking-wide"
            >
              {HERO_SLIDES[currentSlide].text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <button
                id="hero-view-projects"
                onClick={() => onNavigate("projects")}
                className="group flex items-center gap-2 bg-stone-50 hover:bg-stone-900 text-stone-900 hover:text-stone-50 px-6 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold rounded-none transition-all duration-300 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-start-project"
                onClick={() => onNavigate("contact")}
                className="text-xs uppercase tracking-widest font-semibold border-b border-stone-50 text-stone-50 hover:text-stone-300 hover:border-stone-300 pb-1 cursor-pointer transition-colors"
              >
                Start a Project
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Slide Indicators */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20 flex items-center space-x-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-500 cursor-pointer ${
                currentSlide === index ? "w-8 bg-stone-50" : "w-2 bg-stone-50/40 hover:bg-stone-50/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Brand Statement & Studio Intro (The Philosophy of Voids) */}
      <section id="home-intro" className="py-24 md:py-32 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-6 space-y-8">
              <span className="text-[10px] tracking-[0.35em] uppercase text-stone-500 font-mono font-bold block">
                PHILOSOPHY // THE CHARGED VOID
              </span>
              
              <h2 className="font-serif text-3.5xl sm:text-4xl md:text-5xl text-stone-950 font-light leading-[1.15] tracking-tight">
                "The architectural void is not empty space; it is a vital vessel charged with natural light, flowing wind, and the quiet rhythm of human interaction."
              </h2>
              
              <div className="h-[1px] w-24 bg-stone-900/40" />
              
              <p className="text-stone-700 text-sm leading-relaxed tracking-wide font-light font-sans">
                Drawing inspiration from Le Corbusier's monumental Chandigarh legacy, DEVRA Architects approaches residential design as a dialogue between heavy mass and soaring void. We believe true luxury lies not in applied ornamentation, but in the transcendental quality of light playing against raw, honest materials.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="aspect-[16/11] bg-stone-200 overflow-hidden border border-stone-200 relative group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Interplay of concrete mass and overhead sky void"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-102"
                />
                <div className="absolute bottom-4 left-4 bg-stone-900/90 text-stone-300 font-mono text-[9px] uppercase tracking-widest py-1 px-2.5">
                  THE COURTYARD SCOOP // EXPERIMENTAL STUDY
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-stone-600 font-sans font-light leading-relaxed">
                <p>
                  By cutting deep vertical lightwells into heavy monolithic plans, we pull cool air through subterranean wind-scoops, achieving organic cross-ventilation. This natural stack-effect completely bypasses the need for intensive mechanical cooling during peak Punjab summers.
                </p>
                <p>
                  Our work celebrates raw regional materials: wire-cut exposed clay bricks, hand-chiselled local stone, and board-marked cast concrete. These tactile surfaces age gracefully, retaining the story of the artisans who crafted them.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Selected Projects (6 featured projects) */}
      <section id="home-selected-projects" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
                ARCHIVE // PORTFOLIO
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight">
                Selected Works
              </h3>
            </div>
            <button
              onClick={() => onNavigate("projects")}
              className="mt-4 md:mt-0 flex items-center gap-1 text-xs uppercase tracking-widest font-semibold hover:text-stone-600 text-stone-900 cursor-pointer transition-colors"
            >
              Browse All Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                onClick={() => handleProjectClick(project.id)}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative overflow-hidden bg-stone-200 aspect-[4/3] w-full">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-stone-50 text-stone-950 text-[10px] uppercase tracking-widest font-sans font-semibold py-2.5 px-5 shadow-lg border-none rounded-none transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      View Case Study
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-1 border-t border-stone-200/50">
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-stone-500 font-mono uppercase tracking-widest mt-1">
                      {project.category} — {project.location}
                    </p>
                  </div>
                  <span className="text-xs text-stone-400 font-mono font-medium">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. What We Do Capabilities Grid */}
      <section id="home-capabilities" className="py-24 md:py-32 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-semibold">
              OUR CAPABILITIES
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-50 font-medium tracking-tight">
              A Complete Architectural Vision
            </h3>
            <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-2xl font-light">
              We operate across all phases of planning, design, and execution. By treating architecture, interiors, and structural detailing as a single combined practice, we ensure our projects look beautiful and perform perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-stone-800 hover:border-stone-700 transition-all overflow-hidden flex flex-col bg-stone-950">
              <div className="h-44 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80"
                  alt="Residential Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-stone-400 shrink-0" />
                    <h4 className="font-serif text-base font-medium text-stone-100">Residential Architecture</h4>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light">
                    Tailor-made luxury homes, plotted residences, modern villas, and private estates built for generations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-stone-800 hover:border-stone-700 transition-all overflow-hidden flex flex-col bg-stone-950">
              <div className="h-44 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury Interiors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Paintbrush className="w-4 h-4 text-stone-400 shrink-0" />
                    <h4 className="font-serif text-base font-medium text-stone-100">Luxury Interiors</h4>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light">
                    Warm minimalist interior environments, custom lighting plans, bespoke millwork, and furniture layout styling.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-stone-800 hover:border-stone-700 transition-all overflow-hidden flex flex-col bg-stone-950">
              <div className="h-44 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                  alt="Design to Build"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
                    <h4 className="font-serif text-base font-medium text-stone-100">Design to Build</h4>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light">
                    Unifying site supervision, contractor management, material testing, and direct execution control.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-stone-800 hover:border-stone-700 transition-all overflow-hidden flex flex-col bg-stone-950">
              <div className="h-44 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                  alt="Masterplanning & Housing"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-stone-400 shrink-0" />
                    <h4 className="font-serif text-base font-medium text-stone-100">Masterplanning & Housing</h4>
                  </div>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light">
                    Diagonally staggered premium residential housing blocks and communities designed for high privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("services")}
              className="text-xs uppercase tracking-widest font-semibold border-b border-stone-400 text-stone-400 hover:text-stone-100 hover:border-stone-100 pb-1 cursor-pointer transition-colors"
            >
              Explore Services in Detail
            </button>
          </div>

        </div>
      </section>

      {/* 5. Why DEVRA / Regional Strength */}
      <section id="home-why-devra" className="py-24 md:py-32 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
              TRUSTED REGIONAL LEADER
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight">
              Why Discerning Clients Choose DEVRA
            </h3>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              We understand the lifestyle requirements of Indian families. We have spent years executing high-profile residential and commercial architectures in Chandigarh, Mohali, Panchkula, and Punjab.
            </p>
            <div className="h-[1px] w-20 bg-stone-300" />
            <ul className="space-y-4 text-xs font-mono text-stone-700">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Architecture + Interiors under a unified vision</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Meticulous material curation & Climate-sensitive planning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Extreme oversight over structural execution & supervision</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Durable luxury that is usable, not just visual</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-stone-50 p-8 border border-stone-200 shadow-sm">
                <h4 className="font-serif text-4xl text-stone-900 font-medium">10+</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-1">Years experience in region</p>
              </div>
              <div className="bg-stone-50 p-8 border border-stone-200 shadow-sm">
                <h4 className="font-serif text-4xl text-stone-900 font-medium">50+</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-1">Luxury Homes Designed</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-stone-50 p-8 border border-stone-200 shadow-sm">
                <h4 className="font-serif text-4xl text-stone-900 font-medium">100%</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-1">Custom Detailing Focus</p>
              </div>
              <div className="bg-stone-50 p-8 border border-stone-200 shadow-sm">
                <h4 className="font-serif text-4xl text-stone-900 font-medium">Chandigarh</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-1">New Chandigarh Core</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Final CTA */}
      <section id="home-cta" className="py-24 md:py-32 bg-stone-50 text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
            START A CONVERSATION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight leading-tight">
            “Your ideas matter — together, we’ll turn them into timeless spaces.”
          </h3>
          <p className="text-stone-600 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your residential plot, your lifestyle requirements, or your next interior workspace. Let's build something exceptional.
          </p>
          <div className="pt-4">
            <button
              id="cta-get-in-touch"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-100 text-stone-50 hover:text-stone-950 px-8 py-4 text-xs font-sans uppercase tracking-widest font-bold border border-stone-900 rounded-none transition-all duration-300 cursor-pointer shadow-lg hover:shadow-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
