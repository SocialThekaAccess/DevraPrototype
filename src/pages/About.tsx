import { motion } from "motion/react";
import { Award, Compass, Heart, Users, MapPin, Sparkles } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div id="about-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="About Ar. Rajkumar Devra & Studio Profile | DEVRA Architects"
        description="Learn about DEVRA Architects, founded by Ar. Rajkumar Devra. Discover our design-to-build approach and our architectural philosophy of 'charged voids' inspired by Le Corbusier's modern Chandigarh legacy."
        keywords={[
          "Ar. Rajkumar Devra architect",
          "founder of Devra Architects",
          "New Chandigarh architecture firm",
          "sustainable luxury architects punjab",
          "corbusier style modernism india",
          "luxury home builders tricity",
        ]}
        path="about"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // STUDIO PROFILE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            About the Studio
          </h1>
        </div>

        {/* Studio Profile & Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-medium tracking-tight leading-snug">
              Unifying beauty, comfort, and precise site execution.
            </h2>
            <div className="h-[1px] w-20 bg-stone-300" />
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              We operate at the intersection of craftsmanship and architectural logic. Based out of New Chandigarh, our team is equipped to handle complex private residential plots, modern estate farmhouses, complete interior designs, and corporate hospitality spaces from the very first soil test down to final handover audits.
            </p>
          </div>

          <div className="lg:col-span-7 bg-stone-100 p-8 md:p-12 border border-stone-200">
            <p className="font-serif text-lg text-stone-850 leading-relaxed italic text-stone-800">
              “DEVRA Architects is a New Chandigarh-based architecture and interior design studio focused on creating homes and spaces that balance beauty, comfort, function, and execution. Our work brings together architecture, interiors, materials, site detailing, and design-to-build coordination so that every project is not only designed well, but built with clarity.”
            </p>
          </div>
        </div>

        {/* Full width design inspiration banner */}
        <div className="relative h-[50vh] w-full bg-stone-200 overflow-hidden mb-24">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="Devra workshop detailing"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/25 flex items-center justify-center p-6 text-center">
            <div className="max-w-xl text-stone-50 space-y-3">
              <Sparkles className="w-6 h-6 text-stone-300 mx-auto" />
              <p className="font-serif text-xl md:text-2xl font-light italic">
                “Every junction, every shadow-gap, and every material seam is planned before a single brick is laid on-site.”
              </p>
            </div>
          </div>
        </div>

        {/* Founder & Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-b border-stone-200 pb-20">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold">
              FOUNDERSHIP // DIRECTION
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-medium tracking-tight">
              Our Leadership
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Under the direct vision of our Principal Architect, DEVRA maintains a strict non-compromise standard over visual proportion and on-site build quality.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Ar. Rajkumar Devra bio */}
            <div className="md:col-span-5 bg-stone-200 aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Ar. Rajkumar Devra Principal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-1">
                <h4 className="font-serif text-2xl text-stone-900 font-medium">
                  Ar. Rajkumar Devra
                </h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-semibold">
                  Founder & Principal Architect
                </p>
              </div>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light font-sans">
                Ar. Rajkumar Devra founded the studio with a commitment to create residences that act as spiritual sanctuaries of light, volume, and breeze. Heavily influenced by Le Corbusier's regional modernism in Chandigarh, he rejects standard superficial ornamentation, choosing instead to design with "charged voids"—strategic structural punctures and triple-height courtyards that transform heavy monolithic structures into dynamic, breathing living canvases.
              </p>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light font-sans">
                By taking a hands-on, direct design-to-build approach, he ensures that every cast concrete line, exposed clay brick bond, and shadow-gap detail is carved on-site with flawless craft, preserving the purity of the initial spatial vision.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs">
                <div>
                  <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest block">Core Focus</span>
                  <span className="text-stone-800 font-medium mt-1 block">Spatial Planning & Cavity Masonry</span>
                </div>
                <div>
                  <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest block">Education</span>
                  <span className="text-stone-800 font-medium mt-1 block">B. Arch, COA Registered Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values & Pillars Grid */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
              THE STUDIO PILLARS
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-medium tracking-tight">
              Our Core Philosophy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-100 border border-stone-200 space-y-4">
              <Compass className="w-6 h-6 text-stone-700" />
              <h4 className="font-serif text-lg font-medium text-stone-900">1. Architectural Honesty</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                We design with real structural materials. If it looks like concrete, it is concrete. We avoid superficial stickers, plastic sidings, and cheap paint claddings.
              </p>
            </div>

            <div className="p-8 bg-stone-100 border border-stone-200 space-y-4">
              <Users className="w-6 h-6 text-stone-700" />
              <h4 className="font-serif text-lg font-medium text-stone-900">2. People Over Trends</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                Trends vanish in years, but a residence is built for decades. We plan rooms, storage, kitchens, and yards around the specific micro-routines of your family.
              </p>
            </div>

            <div className="p-8 bg-stone-100 border border-stone-200 space-y-4">
              <Award className="w-6 h-6 text-stone-700" />
              <h4 className="font-serif text-lg font-medium text-stone-900">3. Direct Site Control</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                We do not just hand over drawings and disappear. We visit the brick kilns, review concrete shuttering patterns, and direct artisans on-site to ensure accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Material & Detail Gallery */}
        <div className="mt-24 space-y-12">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
              MATERIAL ARCHIVE // STUDIO DETAILS
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-medium tracking-tight mt-1">
              Craft & Materiality Gallery
            </h3>
            <p className="text-stone-500 text-xs font-light mt-2 max-w-xl">
              We focus heavily on regional material sourcing, textures that age gracefully, and custom timber/concrete joinery executed directly on-site.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
                  alt="Raw Board-marked Concrete"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Cast Concrete</p>
            </div>

            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
                  alt="Wire-cut Exposed Brickwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Exposed Brickwork</p>
            </div>

            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80"
                  alt="Sandalwood & Kota Stone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Kota Stone Flooring</p>
            </div>

            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80"
                  alt="Bespoke Teak Millwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Seasoned Teak</p>
            </div>

            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80"
                  alt="Drafting & Site Layouts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Drafting & Detail</p>
            </div>

            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80"
                  alt="Circulating Courtyard Sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Courtyard Shadows</p>
            </div>
          </div>
        </div>

        {/* Geographic serving locations */}
        <div className="mt-24 p-8 bg-stone-900 text-stone-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-xl font-medium text-stone-100 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-stone-400 shrink-0" />
              Where We Practice
            </h4>
            <p className="text-stone-400 text-xs font-light max-w-xl">
              We operate primarily in New Chandigarh, Chandigarh, Mohali, and Panchkula (Tricity), and handle premium estates and residential projects across Punjab, Haryana, and pan-India.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-stone-50 text-stone-950 hover:bg-stone-200 px-6 py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer rounded-none transition-colors shrink-0"
          >
            Work with us
          </button>
        </div>

      </div>
    </div>
  );
}
