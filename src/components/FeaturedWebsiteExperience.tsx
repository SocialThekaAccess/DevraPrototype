import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface FeaturedWebsiteExperienceProps {
  websiteUrl: string;
  previewImage?: string;
}

export default function FeaturedWebsiteExperience({
  websiteUrl,
}: FeaturedWebsiteExperienceProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Website preview slides - you can add actual screenshot images here later
  const slides = [
    { id: 0, name: "Hero Section" },
    { id: 1, name: "About Section" },
    { id: 2, name: "Projects Section" },
  ];

  useEffect(() => {
    // Auto-change slides every 4 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleVisitWebsite = () => {
    window.open(websiteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="featured-website-experience"
      className="py-24 md:py-32 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[10px] tracking-[0.35em] uppercase text-stone-500 font-mono font-bold block">
              DIGITAL PRESENCE // LIVE WEBSITE
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-950 font-light leading-[1.15] tracking-tight">
              Experience DEVRA BuildTech
            </h2>
            
            <div className="h-[1px] w-24 bg-stone-900/40" />
            
            <p className="text-stone-700 text-sm leading-relaxed tracking-wide font-light font-sans">
              Explore our complete portfolio, detailed project case studies, and comprehensive architectural services on our main website. Discover how we transform spaces through innovative design, sustainable practices, and meticulous execution.
            </p>

            <ul className="space-y-3 text-xs font-mono text-stone-600">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Complete project portfolio with detailed case studies</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Comprehensive service offerings & process insights</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Client testimonials & featured publications</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900" />
                <span>Direct consultation & project inquiry forms</span>
              </li>
            </ul>

            <button
              onClick={handleVisitWebsite}
              className="group inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 text-xs font-sans uppercase tracking-widest font-semibold rounded-none transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
            >
              devrabuildtech
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* RIGHT SIDE - Clickable Browser Mockup with Slider */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative group"
            >
              {/* Clickable Browser Mockup Container */}
              <div 
                onClick={handleVisitWebsite}
                className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200 cursor-pointer transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]"
              >
                {/* Website Content Area - Single Iframe (No Blinking) */}
                <div className="relative w-full aspect-[16/10] bg-white overflow-hidden rounded-2xl">
                  {/* Single iframe that stays loaded */}
                  <iframe
                    src={websiteUrl}
                    title="DEVRA BuildTech Website Preview"
                    className="w-full h-full border-0 pointer-events-none"
                    sandbox="allow-same-origin allow-scripts"
                    loading="lazy"
                  />

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 transition-all duration-500 ${
                          currentSlide === index 
                            ? "w-8 bg-stone-50" 
                            : "w-1.5 bg-stone-50/40"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Click hint on hover */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-50 text-stone-900 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold shadow-lg">
                      Click to Visit
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
