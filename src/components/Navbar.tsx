import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="flex flex-col items-start cursor-pointer text-left group"
        >
          <span className="font-serif text-2xl tracking-widest text-stone-900 transition-colors group-hover:text-stone-600">
            D E V R A
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-stone-500 font-sans mt-0.5">
            ARCHITECTS
          </span>
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
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-stone-50 shadow-2xl border-l border-stone-200 z-40 transform transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 justify-between">
          <div className="space-y-8 mt-12">
            <div className="flex justify-between items-center pb-6 border-b border-stone-200">
              <span className="font-serif text-xl tracking-widest text-stone-900">
                D E V R A
              </span>
              <button
                id="mobile-drawer-close"
                onClick={() => setIsOpen(false)}
                className="text-stone-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    id={`mobile-nav-link-${item.path}`}
                    onClick={() => handleNavClick(item.path)}
                    className={`text-sm uppercase tracking-widest text-left font-sans font-medium transition-all py-1 ${
                      isActive ? "text-stone-900 pl-2 border-l-2 border-stone-900" : "text-stone-500"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-6 pb-8">
            <button
              id="mobile-cta-button"
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center gap-1 text-[11px] uppercase tracking-widest font-sans font-medium bg-stone-900 text-stone-50 py-3.5 transition-all duration-300"
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
