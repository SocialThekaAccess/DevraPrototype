import { SERVICES } from "../data";
import { CornerDownRight, Check, ArrowUpRight } from "lucide-react";
import SEOMeta from "../components/SEOMeta";

interface ServicesProps {
  onNavigate: (path: string) => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  "residential-architecture": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "interior-design": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  "design-to-build": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  "housing": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "commercial-hospitality": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
};

export default function Services({ onNavigate }: ServicesProps) {
  
  const handleContactClick = () => {
    onNavigate("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="services-page" className="bg-stone-50 text-stone-900 min-h-screen pt-28 pb-20">
      <SEOMeta
        title="Architectural & Interior Design Services | DEVRA Architects"
        description="Discover our range of premium services including luxury residential architecture, bespoke interior styling, design-to-build turnkeys, and commercial campus design in Chandigarh and Punjab."
        keywords={[
          "luxury architecture services chandigarh",
          "home interior decorators mohali",
          "design to build turnkeys punjab",
          "housing masterplanners new chandigarh",
          "commercial space designers tricity",
        ]}
        path="services"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <div className="border-b border-stone-200 pb-10 mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-mono font-bold mb-3">
            DEVRA ARCHITECTS // SERVICES
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Our Services & Expertise
          </h1>
          <p className="text-stone-600 text-xs md:text-sm mt-3 max-w-2xl font-light leading-relaxed">
            By combining architecture, interior design, material specification, and direct execution oversight under a single contract, we remove contractor confusion and protect visual quality.
          </p>
        </div>

        {/* Services List Loop */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceImg = SERVICE_IMAGES[service.id] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
            return (
              <section
                key={service.id}
                id={`service-${service.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Title, Short Description, and Reference Image (Span 5) */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? "lg:order-last" : ""}`}>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-mono font-bold flex items-center gap-1.5">
                      <CornerDownRight className="w-3.5 h-3.5" />
                      SERVICE 0{index + 1}
                    </span>
                    <h2 className="font-serif text-3xl text-stone-900 font-medium tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-stone-800 font-serif text-base italic leading-relaxed text-stone-700">
                      “{service.tagline}”
                    </p>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Stunning illustrative project photo */}
                  <div className="aspect-[16/10] overflow-hidden border border-stone-200">
                    <img
                      src={serviceImg}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-stone-400 font-mono uppercase tracking-widest">
                    <span>Related Projects:</span>
                    {service.projects.map((proj, idx) => (
                      <span key={idx} className="text-stone-700 font-medium bg-stone-100 py-0.5 px-2 border border-stone-200">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details List & Target Clients (Span 7) */}
                <div className="lg:col-span-7 bg-stone-100 p-8 md:p-10 border border-stone-200 space-y-8">
                  
                  {/* Detailed scopes list */}
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-stone-900 font-semibold font-mono pb-2 border-b border-stone-300">
                      What DEVRA Handles
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed font-light">
                          <Check className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal client type */}
                  <div className="space-y-2 pt-2 border-t border-stone-300/60">
                    <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-mono font-bold">
                      Ideal Client Profile
                    </h3>
                    <p className="text-stone-700 text-xs leading-relaxed font-light">
                      {service.clientType}
                    </p>
                  </div>

                  {/* CTA button inside card */}
                  <div className="pt-4 flex justify-start">
                    <button
                      onClick={handleContactClick}
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest font-sans font-semibold text-stone-900 border-b border-stone-900 hover:text-stone-600 hover:border-stone-600 pb-0.5 transition-colors cursor-pointer"
                    >
                      Inquire About This Service
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom General CTA */}
        <div className="mt-32 text-center max-w-2xl mx-auto space-y-6 pt-16 border-t border-stone-200">
          <h3 className="font-serif text-2xl text-stone-900 font-medium">
            Unsure which service matches your project?
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed font-light">
            Tell us about your plot dimension, locations, and expectations. We will recommend the ideal scope package (Architecture only, Interior styling, or complete design-to-build supervision).
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 py-3.5 px-8 text-xs uppercase tracking-widest font-semibold cursor-pointer"
          >
            Schedule a Free Site Consultation
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
