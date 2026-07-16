import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="devra-footer" className="bg-stone-900 text-stone-300 pt-16 md:pt-20 pb-32 md:pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Column 1: Studio Identity (Span 4) */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <div className="flex flex-col items-start -ml-4">
                <img 
                  src="/assets/DevraFavicon.svg" 
                  alt="DEVRA Architects" 
                  className="w-[280px] h-[100px] object-contain"
                />
              </div>
              <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
                DEVRA Architects is a New Chandigarh-based architecture and interior design studio creating luxury homes, interiors, housing, and design-to-build projects. We balance artistic modern expression with extreme practical execution.
              </p>
            </div>
            <div className="flex flex-col space-y-2 pt-6 text-xs">
              <a 
                href="mailto:info@devra.in" 
                className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                info@devra.in
              </a>
              <a 
                href="tel:+919779662286" 
                className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 9779662286
              </a>
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>New Chandigarh / Chandigarh, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-semibold">
              The Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => handleNavClick("projects")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Architectural Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("services")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Services & Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("vision")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("process")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Execution Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("journal")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Journal & Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("contact")} 
                  className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Areas of Practice / SEO (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-semibold">
              Areas of Practice
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>Luxury Architects in Chandigarh</li>
              <li>Residential Architects in Chandigarh</li>
              <li>Premium Architects in Mohali</li>
              <li>New Chandigarh Architects</li>
              <li>Interior Designers in Chandigarh</li>
              <li>Luxury Home Design Punjab</li>
              <li>Design-to-Build Architecture India</li>
              <li>Farmhouse Design Punjab & Haryana</li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Call Action (Span 2) */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-semibold">
              Inquiries
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Have a plot or space in Chandigarh, Mohali, or Punjab? Let's discuss your vision.
            </p>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold border-b border-stone-100 text-stone-100 hover:text-stone-300 hover:border-stone-300 pb-1 mt-2 cursor-pointer transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-[11px] text-stone-500 font-mono">
          <div className="text-center md:text-left space-y-1 min-w-0">
            <p>© {currentYear} DEVRA Architects. All rights reserved.</p>
            <p className="text-[10px] text-stone-600">
              Serving Chandigarh, Mohali, Panchkula, New Chandigarh, Patiala, Ludhiana, Jalandhar, Amritsar, Punjab, Haryana, and Pan-India.
            </p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            id="scroll-to-top-button"
            className="flex shrink-0 items-center gap-1.5 uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors group cursor-pointer font-sans text-[10px] font-semibold border border-stone-800 hover:border-stone-600 px-3 py-2"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
