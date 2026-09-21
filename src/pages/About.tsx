import { motion } from "motion/react";
import { Award, Compass, Heart, Users, MapPin, Sparkles } from "lucide-react";
import SEOMeta from "../components/SEOMeta";
import residentialImg from "../../assets/residential.avif";
import varunDevraImg from "../../assets/VarunDevra.png";
import resVilla361 from "../../assets/projects/res-villa-361.avif";
import fhGills from "../../assets/projects/fh-gills-1.avif";
import resVilla201d from "../../assets/projects/res-villa-201d.jpg";
import resVilla58 from "../../assets/projects/res-villa-58.jpg";
import comDevra from "../../assets/projects/com-devra-arch-1.jpg";
import houSansarg from "../../assets/projects/hou-sansarg-1.avif";

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div id="about-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="About Ar. Varun Devra & Studio Profile | DEVRA Architects"
        description="Learn about DEVRA Architects, led by Ar. Varun Devra. Discover our design approach focused on context, natural light, functionality, and refined architecture built to remain relevant over time."
        keywords={[
          "Ar. Varun Devra architect",
          "principal architect DEVRA",
          "New Chandigarh architecture firm",
          "sustainable luxury architects punjab",
          "corbusier style modernism india",
          "luxury home builders tricity",
        ]}
        path="about"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header section */}
        <div className="border-b border-stone-200 pb-8 mb-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // STUDIO PROFILE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            About the Studio
          </h1>
        </div>

        {/* Founder & Leadership Section — shown first */}
        <div className="mb-24 border-b border-stone-200 pb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block mb-12">
            LEADERSHIP // PRINCIPAL ARCHITECT
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-stone-200">
            {/* Left — Image */}
            <div className="bg-stone-200 aspect-[4/5] overflow-hidden">
              <img
                src={varunDevraImg}
                alt="Ar. Varun Devra — Principal Architect"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right — Bio */}
            <div className="flex flex-col justify-between p-10 md:p-14 bg-stone-50 border-l border-stone-200">
              <div className="space-y-8">
                {/* Name & Title */}
                <div className="space-y-1 pb-8 border-b border-stone-200">
                  <h3 className="font-serif text-2xl text-stone-900 font-medium tracking-tight">
                    Ar. Varun Devra
                  </h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold">
                    Principal Architect | DEVRA Architects
                  </p>
                </div>

                {/* Bio paragraphs */}
                <div className="space-y-4">
                  <p className="text-stone-600 text-sm leading-loose font-light text-justify hyphens-auto">
                    Ar. Varun Devra is the Principal Architect and creative lead at DEVRA Architects, with over 13 years of professional experience in architecture and design.
                  </p>
                  <p className="text-stone-600 text-sm leading-loose font-light text-justify hyphens-auto">
                    An alumnus of the School of Planning and Architecture, New Delhi, his work is defined by thoughtful planning, contemporary expression, and a strong understanding of how people experience space.
                  </p>
                  <p className="text-stone-600 text-sm leading-loose font-light text-justify hyphens-auto">
                    His approach goes beyond aesthetics — focusing on context, natural light, functionality, proportion, and the aspirations of the people who inhabit each project. Under his leadership, DEVRA Architects creates architecture that is purposeful, refined, and built to remain relevant over time.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-stone-200">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block">Experience</span>
                  <span className="font-serif text-2xl text-stone-900 font-medium">13+</span>
                  <span className="text-[10px] text-stone-500 font-light block">Years</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block">Education</span>
                  <span className="text-xs text-stone-800 font-medium leading-snug block mt-1">School of Planning & Architecture</span>
                  <span className="text-[10px] text-stone-500 font-light block">New Delhi</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-mono font-bold block">Firm</span>
                  <span className="text-xs text-stone-800 font-medium leading-snug block mt-1">DEVRA Architects</span>
                  <span className="text-[10px] text-stone-500 font-light block">New Chandigarh</span>
                </div>
              </div>
            </div>
          </div>
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
              "DEVRA Architects is a New Chandigarh-based architecture and interior design studio focused on creating homes and spaces that balance beauty, comfort, function, and execution. Our work brings together architecture, interiors, materials, site detailing, and design-to-build coordination so that every project is not only designed well, but built with clarity."
            </p>
          </div>
        </div>

        {/* Full width design inspiration banner */}
        <div className="relative h-[50vh] w-full bg-stone-200 overflow-hidden mb-24">
          <img
            src={residentialImg}
            alt="Devra workshop detailing"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/25 flex items-center justify-center p-6 text-center">
            <div className="max-w-xl text-stone-50 space-y-3">
              <Sparkles className="w-6 h-6 text-stone-300 mx-auto" />
              <p className="font-serif text-xl md:text-2xl font-light italic">
                "Every junction, every shadow-gap, and every material seam is planned before a single brick is laid on-site."
              </p>
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
            <h3 className="font-serif text-3xl text-stone-900 font-medium tracking-tight mt-1"
              dangerouslySetInnerHTML={{
                __html: 'Craft <span style="font-family:Inter,sans-serif;font-style:normal">&</span> Materiality Gallery'
              }}
            />
            <p className="text-stone-500 text-xs font-light mt-2 max-w-xl">
              We focus heavily on regional material sourcing, textures that age gracefully, and custom timber/concrete joinery executed directly on-site.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Pic 1: res-villa-361 → Contemporary Architecture */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={resVilla361}
                  alt="Contemporary Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Contemporary Architecture</p>
            </div>

            {/* Pic 2: fh-gills → Exposed Brickwork ✅ */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={fhGills}
                  alt="Wire-cut Exposed Brickwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Exposed Brickwork</p>
            </div>

            {/* Pic 3: res-villa-201d → Vernacular Architecture */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={resVilla201d}
                  alt="Vernacular Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Vernacular Architecture</p>
            </div>

            {/* Pic 4: res-villa-58 → Facade Geometry */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={resVilla58}
                  alt="Facade Geometry & Elevation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Facade Geometry</p>
            </div>

            {/* Pic 5: com-devra-arch → Drafting & Detail ✅ */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={comDevra}
                  alt="Drafting & Site Layouts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-800 font-medium text-center">Drafting & Detail</p>
            </div>

            {/* Pic 6: hou-sansarg → Housing ✅ */}
            <div className="space-y-2">
              <div className="aspect-square bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={houSansarg}
                  alt="Housing Project"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
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
