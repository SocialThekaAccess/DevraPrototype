import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, ShieldCheck, Paintbrush, Compass, Home as HomeIcon } from "lucide-react";
import { PROJECTS } from "../data";
import type { Project } from "../types";
import SEOMeta from "../components/SEOMeta";
import slider1 from "../../assets/projects/Villaa303.png";
import slider1Mobile from "../../assets/projects/Villa303Risponsiveimg.png";
import slider2 from "../../assets/projects/res-villa-361.avif";
import slider2Mobile from "../../assets/projects/Villa361Mobileview.png";
import slider3 from "../../assets/projects/Unwalledimageproject.png";
import slider3Mobile from "../../assets/projects/Unwalledimagemobileview.png";
import slider4 from "../../assets/projects/Villaa58.png";
import slider4Mobile from "../../assets/projects/Villa58Mobilerisponsive.png";
import slider5 from "../../assets/PanchkulaHousing.png";
import slider5Mobile from "../../assets/projects/Panchkulamobilerisponsivesliderig.png";
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
    mobileImage: slider1Mobile,
    subtitle: "CONTEMPORARY RESIDENCE // NEW CHANDIGARH",
    title: "Villa 303",
    text: "A striking façade with sculpted terrace and floating living spaces above the pool."
  },
  {
    image: slider2,
    mobileImage: slider2Mobile,
    subtitle: "LUXURY RESIDENCE // NEW CHANDIGARH",
    title: "Villa 361",
    text: "A dramatic floating cantilever stair, double-height glazing, and integrated high-end home automation."
  },
  {
    image: slider3,
    mobileImage: slider3Mobile,
    subtitle: "LUXURY HOUSING // NEW CHANDIGARH",
    title: "UNWALLED",
    text: "Where boundaries dissolve into curated landscapes. Premium living redefined for the discerning."
  },
  {
    image: slider4,
    mobileImage: slider4Mobile,
    subtitle: "MODERN RESIDENCE // MOHALI",
    title: "Villa 58",
    text: "Linear forms, structural cantilevers, and flowing cross-ventilation."
  },
  {
    image: slider5,
    mobileImage: slider5Mobile,
    subtitle: "PREMIUM HOUSING // PANCHKULA",
    title: "Panchkula Housing",
    text: "Elegant multi-family units offering high visual privacy and shared central greens."
  }
];

export default function Home({ onNavigate, onSelectProject }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  // Handle window resize for responsive images
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload all hero images (both desktop and mobile)
  useEffect(() => {
    const allImages = HERO_SLIDES.flatMap(slide => [slide.image, slide.mobileImage]);
    let loadedCount = 0;
    
    allImages.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === allImages.length) {
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
              src={isMobile ? HERO_SLIDES[currentSlide].mobileImage : HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              className={`w-full h-full ${
                isMobile 
                  ? 'object-contain object-center' 
                  : currentSlide === 1 
                    ? 'object-cover object-[center_35%] md:object-[center_40%] scale-110 md:scale-100' 
                    : currentSlide === 3 
                      ? 'object-cover object-center' 
                      : currentSlide === 4 
                        ? 'object-cover object-center brightness-110' 
                        : 'object-cover object-center'
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
              className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent py-6 md:py-10"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-2xl text-stone-50 space-y-3 md:space-y-4">
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
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Floating Slide Indicators - only show when images are loaded */}
        {imagesLoaded && (
          <div className="absolute bottom-32 sm:bottom-24 md:bottom-10 right-6 md:right-12 z-20 flex items-center space-x-3">
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

      {/* 4. Selected Projects (6 featured projects) */}
      <section id="home-selected-projects" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
                PORTFOLIO
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Projects: Villa 303, Villa 361, Unwalled, Villa 58, Panchkula Housing */}
            {PROJECTS.filter(p => 
              ['villa-303', 'villa-361', 'unwalled-housing', 'villa-58', 'panchkula-housing'].includes(p.id)
            ).sort((a, b) => {
              const order = ['villa-303', 'villa-361', 'unwalled-housing', 'villa-58', 'panchkula-housing'];
              return order.indexOf(a.id) - order.indexOf(b.id);
            }).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative overflow-hidden bg-stone-200 aspect-[3/2] w-full">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:delay-150"
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
                    <p className="text-[9px] md:text-[10px] tracking-wide uppercase text-stone-500 font-light mt-1">
                      {project.category} — {project.location}
                    </p>
                  </div>
                  <span className="text-xs text-stone-400 font-mono font-medium">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Empty placeholder for future content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <div className="text-center space-y-4 py-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-3"
                >
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-normal tracking-tight leading-tight">
                    The Art of Thoughtful Architecture
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-[1px] bg-stone-300 mx-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Client Testimonials — Infinite Marquee */}
      <section className="py-14 md:py-20 bg-stone-50 border-t border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold block mb-3">
                CLIENT TESTIMONIALS
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight">
                What Our Clients Say
              </h3>
            </div>
          </div>
        </div>

        {/* Marquee track */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #fafaf9, transparent)'}} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #fafaf9, transparent)'}} />

          <div className="flex gap-6 reviews-marquee">
            {[
              { name: "Mohd Sarfaraz", time: "4 months ago", text: "I recently visited the office of Devra Architect and had a great experience. The team is highly professional, creative, and detail-oriented. They listen carefully to your requirements and deliver designs that truly reflect your vision.", initials: "MS", color: "bg-orange-500" },
              { name: "Rupin Dang", time: "4 months ago", text: "We had a great experience working with Devra Architects on our home. They understood our vision perfectly and delivered exceptional results. The attention to detail and quality of work was outstanding. Highly recommend!", initials: "RD", color: "bg-blue-600" },
              { name: "A Pr", time: "5 months ago", text: "Very innovative and out of the box thinking of Mr. Devra. Had great experience, built a wonderful home with his guidance. His design sensibility is remarkable and he brings a unique perspective to every project.", initials: "AP", color: "bg-green-600" },
              { name: "Deepak Katoch", time: "1 year ago", text: "Great experience, she has given ample time to solve our every small query. Excellent work and professionalism throughout the entire project. The team is responsive and truly cares about client satisfaction.", initials: "DK", color: "bg-purple-600" },
              { name: "Anandambha Sharma", time: "6 months ago", text: "Working with Devra Architects was an absolute pleasure. Their design concepts are fresh, modern and perfectly tailored to our lifestyle. The final result exceeded all our expectations.", initials: "AS", color: "bg-red-500" },
              { name: "Navdeep Singh", time: "8 months ago", text: "Ar. Varun Devra and his team are truly passionate about architecture. They transformed our plot into a dream home. The blend of functionality and aesthetics in the design is exceptional.", initials: "NS", color: "bg-teal-600" },
              { name: "Priya Malhotra", time: "10 months ago", text: "One of the best decisions we made was choosing Devra Architects for our farmhouse project. Professional, punctual, and incredibly creative. Every corner reflects thoughtful design and superior craftsmanship.", initials: "PM", color: "bg-pink-600" },
              // duplicate set for seamless loop
              { name: "Mohd Sarfaraz", time: "4 months ago", text: "I recently visited the office of Devra Architect and had a great experience. The team is highly professional, creative, and detail-oriented. They listen carefully to your requirements and deliver designs that truly reflect your vision.", initials: "MS", color: "bg-orange-500" },
              { name: "Rupin Dang", time: "4 months ago", text: "We had a great experience working with Devra Architects on our home. They understood our vision perfectly and delivered exceptional results. The attention to detail and quality of work was outstanding. Highly recommend!", initials: "RD", color: "bg-blue-600" },
              { name: "A Pr", time: "5 months ago", text: "Very innovative and out of the box thinking of Mr. Devra. Had great experience, built a wonderful home with his guidance. His design sensibility is remarkable and he brings a unique perspective to every project.", initials: "AP", color: "bg-green-600" },
              { name: "Deepak Katoch", time: "1 year ago", text: "Great experience, she has given ample time to solve our every small query. Excellent work and professionalism throughout the entire project. The team is responsive and truly cares about client satisfaction.", initials: "DK", color: "bg-purple-600" },
              { name: "Anandambha Sharma", time: "6 months ago", text: "Working with Devra Architects was an absolute pleasure. Their design concepts are fresh, modern and perfectly tailored to our lifestyle. The final result exceeded all our expectations.", initials: "AS", color: "bg-red-500" },
              { name: "Navdeep Singh", time: "8 months ago", text: "Ar. Varun Devra and his team are truly passionate about architecture. They transformed our plot into a dream home. The blend of functionality and aesthetics in the design is exceptional.", initials: "NS", color: "bg-teal-600" },
              { name: "Priya Malhotra", time: "10 months ago", text: "One of the best decisions we made was choosing Devra Architects for our farmhouse project. Professional, punctual, and incredibly creative. Every corner reflects thoughtful design and superior craftsmanship.", initials: "PM", color: "bg-pink-600" },
            ].map((review, i) => (
              <div key={i} className="bg-white border border-stone-200 p-6 flex flex-col gap-4 shrink-0 w-[320px]">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      <p className="text-[10px] text-stone-400 font-mono">{review.time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-stone-600 text-xs leading-relaxed font-light">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Hover Popup Overlay */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          >
            {/* Blurred dark backdrop */}
            <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm" />

            {/* Popup card */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[90vw] max-w-2xl shadow-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={hoveredProject.heroImage}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover scale-105"
                />
              </div>

              {/* Info bar */}
              <div className="bg-stone-950 text-stone-50 px-6 py-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl font-medium tracking-tight">
                    {hoveredProject.title}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-light mt-0.5">
                    {hoveredProject.category} — {hoveredProject.location}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-stone-400">{hoveredProject.year}</span>
                  <span className="text-[9px] uppercase tracking-widest border border-stone-600 text-stone-300 px-3 py-1.5">
                    View Project →
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. What We Do Capabilities Grid */}
      <section id="home-capabilities" className="py-12 md:py-16 bg-stone-900 text-stone-50">
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
                  loading="lazy"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
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

      {/* 7. Final CTA */}
      <section id="home-cta" className="py-12 md:py-16 bg-stone-50 text-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-semibold">
            START A CONVERSATION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight leading-tight">
            "Your ideas matter — together, we'll turn them into timeless spaces."
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