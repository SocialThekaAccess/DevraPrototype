import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  return (
    <header
      id="devra-header"
      className="fixed top-0 left-0 w-full z-50 bg-stone-50 border-b border-stone-200 py-4 shadow-sm transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center cursor-pointer group"
        >
          <img 
            src="/assets/DEVRAlogo.png" 
            alt="DEVRA Architects" 
            className="w-[200px] h-[70px] object-contain transition-opacity group-hover:opacity-80"
          />
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                id={`nav-link-${item.path}`}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 relative py-1 cursor-pointer hover:text-stone-900 ${
                  isActive ? "text-stone-900" : "text-stone-500"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-cta-button"
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-1 text-[11px] uppercase tracking-widest font-sans font-medium border border-stone-900/10 hover:border-stone-900 text-stone-900 px-5 py-2.5 rounded-none bg-transparent hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 cursor-pointer"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-950 p-1 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-x-0 top-[80px] bottom-0 bg-stone-50 shadow-2xl border-t border-stone-200 z-40 transform transition-transform duration-500 md:hidden overflow-y-auto ${
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
    </header>
  );
}
