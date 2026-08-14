import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, ShieldCheck, Paintbrush, Compass, Home as HomeIcon } from "lucide-react";
import { PROJECTS } from "../data";
import SEOMeta from "../components/SEOMeta";
import FeaturedWebsiteExperience from "../components/FeaturedWebsiteExperience";
import slider1 from "../../assets/slider1.jpeg";
import slider2 from "../../assets/projects/Villaa58.png";
import slider3 from "../../assets/slider3.jpeg";
import slider4 from "../../assets/projects/Villaa303.png";
import slider5 from "../../assets/projects/UnwalledImage.png";
import residentialImg from "../../assets/residential.avif";
import hospitalityImg from "../../assets/hospitality.avif";
import commercialImg from "../../assets/commercial.jpg";
import housingImg from "../../assets/housing.avif";

interface HomeProps {
  onNavigate: (path: string) => void;
  onSelectProject: (id: string) => void;
}

const HERO_SLIDES = [
  {
    image: slider1,
    subtitle: "FEATURED ARCHITECTURE // PATIALA",
    title: "Sansarg Residence",
    text: "Shaped around courtyards, light, and honest tactile materials."
  },
  {
    image: slider2,
    subtitle: "MODERN RESIDENCE // MOHALI",
    title: "Villa 58",
    text: "Linear forms, structural cantilevers, and flowing cross-ventilation."
  },
  {
    image: slider3,
    subtitle: "ESTATE LIVING // PUNJAB BORDER",
    title: "The Kangs Farmhouse",
    text: "A sprawling brick and stone pavilion connecting family with native nature."
  },
  {
    image: slider4,
    subtitle: "CONTEMPORARY RESIDENCE // NEW CHANDIGARH",
    title: "Villa 303",
    text: "A striking façade with sculpted terrace and floating living spaces above the pool."
  },
  {
    image: slider5,
    subtitle: "LUXURY HOUSING // NEW CHANDIGARH",
    title: "UNWALLED",
    text: "Where boundaries dissolve into curated landscapes. Premium living redefined for the discerning."
  }
];

export default function Home({ onNavigate, onSelectProject }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all hero images
  useEffect(() => {
    const imageUrls = HERO_SLIDES.map(slide => slide.image);
    let loadedCount = 0;
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % 5; // 5 slides
        return nextSlide;
      });
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
        {!imagesLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-stone-900">
            <div className="w-8 h-8 border-2 border-stone-500 border-t-stone-200 rounded-full animate-spin" />
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: imagesLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Dark overlay for readability - lighter for slide 4 */}
            <div className={`absolute inset-0 z-10 ${
              currentSlide === 1 ? 'bg-black/50 md:bg-black/40' :
              currentSlide === 3 ? 'bg-black/20' : 
              'bg-black/40'
            }`} />
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              referrerPolicy="no-referrer"
              className={`w-full h-full ${
                currentSlide === 1 ? 'object-cover object-[center_35%] md:object-[center_40%] scale-110 md:scale-100' :
                currentSlide === 3 ? 'object-cover object-center' :
                currentSlide === 4 ? 'object-cover object-center brightness-110' : 
                'object-cover object-center'
              }`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Slider Content - only show when images are loaded */}
        {imagesLoaded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute inset-0 z-20 flex items-center justify-start max-w-7xl mx-auto px-6 md:px-12 ${
                currentSlide === 1 ? 'items-end pb-32 md:items-center md:pb-0' : ''
              }`}
            >
              <div className="max-w-2xl text-stone-50 space-y-4 md:space-y-6 pt-20">
                <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-stone-300 font-mono font-bold">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
                
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-medium">
                  {HERO_SLIDES[currentSlide].title}
                </h1>

                <p className="text-stone-200 text-xs md:text-sm font-light leading-relaxed tracking-wide">
                  {HERO_SLIDES[currentSlide].text}
                </p>

                <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
                  <button
                    id="hero-view-projects"
                    onClick={() => onNavigate("projects")}
                    className="group flex items-center gap-2 bg-stone-50 hover:bg-stone-900 text-stone-900 hover:text-stone-50 px-5 md:px-6 py-3 md:py-3.5 text-[10px] md:text-xs font-sans uppercase tracking-widest font-semibold rounded-none transition-all duration-300 cursor-pointer"
                  >
                    View Projects
                    <ArrowRight className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    id="hero-start-project"
                    onClick={() => onNavigate("contact")}
                    className="text-[10px] md:text-xs uppercase tracking-widest font-semibold border-b border-stone-50 text-stone-50 hover:text-stone-300 hover:border-stone-300 pb-1 cursor-pointer transition-colors"
                  >
                    Start a Project
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Floating Slide Indicators - only show when images are loaded */}
        {imagesLoaded && (
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
        )}
      </section>

      {/* Featured Website Experience */}
      <FeaturedWebsiteExperience websiteUrl="https://www.devrabuildtech.com/" />

      {/* 4. Selected Projects (6 featured projects) */}
      <section id="home-selected-projects" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
                ARCHIV // PORTFOLIO
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

      {/* 5. What We Do Capabilities Grid */}
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
                  src={residentialImg}
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
                  src={hospitalityImg}
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
                  src={commercialImg}
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
                  src={housingImg}
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

      {/* 6. Why DEVRA / Regional Strength */}
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

      {/* 7. Final CTA */}
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
