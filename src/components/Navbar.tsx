import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = currentPath === 'home';
  const shouldShowWhiteLogo = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = currentPath === "home";
  const showWhiteText = isHome && !isScrolled;

  const navItems = [
    { label: "Projects", path: "projects" },
    { label: "Services", path: "services" },
    { label: "Vision", path: "vision" },
    { label: "Process", path: "process" },
    { label: "Journal", path: "journal" },
    { label: "Contact", path: "contact" },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return createPortal(
    <header
      id="devra-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-stone-50 border-b border-stone-200 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full h-[70px] md:h-[80px] px-4 md:px-6 flex flex-nowrap items-center justify-between gap-8">
        {/* Brand Logo - Two separate logos for different states */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center cursor-pointer group shrink-0 -ml-2 md:-ml-4 overflow-visible relative"
        >
          {/* White Logo - for transparent navbar */}
          <img 
            src="/assets/DevraWhiteLogo.png"
            alt="DEVRA Architects" 
            className={`w-[180px] h-auto object-contain transition-opacity ${
              shouldShowWhiteLogo ? 'opacity-100' : 'opacity-0 absolute inset-0'
            } group-hover:opacity-80`}
          />
          
          {/* Black Logo - for scrolled navbar */}
          <img 
            src="/assets/DEVRAlogo.png"
            alt="DEVRA Architects" 
            className={`w-[140px] h-auto object-contain transition-opacity ${
              shouldShowWhiteLogo ? 'opacity-0 absolute inset-0' : 'opacity-100'
            } group-hover:opacity-80`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center h-full flex-nowrap space-x-5 xl:space-x-8 shrink-0">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                id={`nav-link-${item.path}`}
                onClick={() => handleNavClick(item.path)}
                className={`whitespace-nowrap text-sm uppercase tracking-widest font-sans font-medium transition-all duration-300 relative py-1 cursor-pointer ${
                  isActive
                    ? showWhiteText ? "text-white" : "text-stone-900"
                    : showWhiteText ? "text-white/90 hover:text-white" : "text-stone-700 hover:text-stone-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] transition-all ${showWhiteText ? "bg-white" : "bg-stone-900"}`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center h-full shrink-0">
          <button
            id="nav-cta-button"
            onClick={() => handleNavClick("contact")}
            className={`flex items-center gap-1 whitespace-nowrap text-[11px] uppercase tracking-widest font-sans font-medium px-5 py-2.5 rounded-none transition-all duration-300 cursor-pointer ${
              showWhiteText
                ? 'border border-white/30 hover:border-white text-white bg-transparent hover:bg-white hover:text-stone-900'
                : 'border border-stone-900/10 hover:border-stone-900 text-stone-900 bg-transparent hover:bg-stone-900 hover:text-stone-50'
            }`}
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile / Tablet Menu Button (now covers landscape too, up to lg) */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden shrink-0 h-full flex items-center p-1 cursor-pointer focus:outline-none ${showWhiteText ? "text-white" : "text-stone-950"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-x-0 top-[70px] md:top-[80px] bottom-0 bg-stone-50 shadow-2xl border-t border-stone-200 z-40 transform transition-transform duration-500 lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col p-6 sm:p-8 justify-between gap-10">
          <div className="space-y-8 pt-2">
            <nav className="flex flex-col divide-y divide-stone-200">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    id={`mobile-nav-link-${item.path}`}
                    onClick={() => handleNavClick(item.path)}
                    className={`text-base uppercase tracking-widest text-left font-sans font-medium transition-all py-5 ${
                      isActive ? "text-stone-900 pl-2 border-l-2 border-stone-900" : "text-stone-500"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              id="mobile-cta-button"
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center gap-1 text-[11px] uppercase tracking-widest font-sans font-medium bg-stone-900 text-stone-50 py-4 transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-center">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                New Chandigarh / Chandigarh / Mohali
              </p>
              <p className="text-[10px] text-stone-400 tracking-wider mt-1">
                info@devra.in | +91 9779662286
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>,
    document.body
  );
}