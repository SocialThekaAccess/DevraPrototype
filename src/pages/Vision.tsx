import { CornerDownRight, Wind, Sun, Layers, Hammer, ShieldCheck } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

export default function Vision() {
  return (
    <div id="vision-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="Our Climate-Responsive Architectural Philosophy | DEVRA Architects"
        description="Explore DEVRA Architects' philosophical roots. We combine the legacy of Chandigarh modernism with passive solar designs, cavity brick walls, and local materials to create low-energy luxury homes."
        keywords={[
          "passive cooling architecture india",
          "thermal insulation homes punjab",
          "sustainable building materials chandigarh",
          "modern haveli courtyard designs",
          "honest material architecture",
        ]}
        path="vision"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // PHILOSOPHY
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Our Architectural Philosophy
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            We believe that a house is not a machine for living, nor is it a showpiece. It is a slow sanctuary for family dynamics, built to last generations under Indian climate realities.
          </p>
        </div>

        {/* Philosophy chapters */}
        <div className="space-y-24">
          
          {/* Chapter 1: Planned Around Real Life */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                <CornerDownRight className="w-3.5 h-3.5" />
                CHAPTER 01
              </span>
              <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                Planned Around Real Life, Not Trends
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              <p>
                Too much of modern architecture is designed for the camera lens, resulting in cold, glass-box homes that look impressive in magazines but are highly impractical for daily living. In Chandigarh and broader Punjab, homes must accommodate joint-family dynamics, seasonal rituals, spontaneous hospitality, and intensive, spice-heavy culinary routines.
              </p>
              <p>
                We believe that true spatial luxury begins with customized planning. We design separate wet and dry kitchens so cooking residues never enter social areas. We layout staggered private suites with sound-dampened partitions to give parents and children absolute personal peace.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Real life luxury home courtyard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Chapter 2: Light, Air, and Everyday Comfort */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                <CornerDownRight className="w-3.5 h-3.5" />
                CHAPTER 02
              </span>
              <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                Light, Air, and Everyday Comfort
              </h2>
              <div className="flex gap-4 pt-2 text-stone-400">
                <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest"><Sun className="w-3.5 h-3.5" /> Daylight</span>
                <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest"><Wind className="w-3.5 h-3.5" /> Stack Effect</span>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              <p>
                With temperatures crossing 45°C in North Indian summers, glass-walled boxes turn into literal greenhouses, driving massive electricity loads for mechanical cooling. Comfort should be a structural feature, not an afterthought.
              </p>
              <p>
                We plan homes centered around double-height voids and central courtyards that act as wind-scoops. By calculating the sun's angles for summer and winter, we engineer deep concrete cantilever overhangs that completely shade glass openings in summer while allowing therapeutic winter sun.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
                  alt="Therapeutic winter sun and stack ventilation courtyard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Chapter 3: Materials That Age Well */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                <CornerDownRight className="w-3.5 h-3.5" />
                CHAPTER 03
              </span>
              <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                Honest Materials That Age Gracefully
              </h2>
              <div className="flex gap-4 pt-2 text-stone-400">
                <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest"><Layers className="w-3.5 h-3.5" /> Tactile</span>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              <p>
                We believe that paint, composite paneling, and synthetic finishes are superficial layers that demand heavy maintenance and age terribly under harsh monsoon rains and dust. We prefer honest, raw materials that communicate their physical weight, origin, and craftsmanship.
              </p>
              <p>
                We build facades with regional wire-cut bricks left exposed, local hand-chiselled stone, and textured board-marked concrete. Indoors, we use polished regional sandstones, Kota stone, and seasoned solid CP teak wood.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
                  alt="Aesthetic regional masonry and board-marked concrete"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Chapter 4: Design and Execution Together */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                <CornerDownRight className="w-3.5 h-3.5" />
                CHAPTER 04
              </span>
              <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                Design and Execution under One Vision
              </h2>
              <div className="flex gap-4 pt-2 text-stone-400">
                <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest"><Hammer className="w-3.5 h-3.5" /> Supervision</span>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              <p>
                The separation between drafting and constructing is the primary source of project delay and visual degradation. A gorgeous rendering has no value if on-site contractors misinterpret structural joinery, flush alignments, or concrete casting lines.
              </p>
              <p>
                We run a unified design-to-build studio. Our architects personally coordinate with execution supervisors, draft detailed joinery drawings for carpentry mills, verify structural concrete shuttering grids, and visit stone yards to handpick marble lots.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="On-site detailing and structural coordination"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Chapter 5: Luxury Without Waste */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                <CornerDownRight className="w-3.5 h-3.5" />
                CHAPTER 05
              </span>
              <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                Luxury Born of Planning & Proportion
              </h2>
              <div className="flex gap-4 pt-2 text-stone-400">
                <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest"><ShieldCheck className="w-3.5 h-3.5" /> Quiet Luxury</span>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed font-light">
              <p>
                Luxury is often falsely equated with loud gold trimmings, heavy classical moldings, and extreme material excess. To us, luxury is quiet. It is found in perfect visual proportions, the gentle play of natural light on a concrete wall, and the smell of seasoned wood.
              </p>
              <p>
                We design homes that are highly usable. We avoid massive, wastefully open spaces that serve no purpose and feel drafty. Instead, we structure cozy, human-scaled niches and functional, easily accessible zones that look and feel luxurious.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Quiet luxury interiors and cozy human scale spaces"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
