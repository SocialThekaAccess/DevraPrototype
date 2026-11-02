import { AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { lazy as rLazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroDoorway from "./components/IntroDoorway";
import Home from "./pages/Home";
import { PROJECTS } from "./data";
import { MessageSquare, PhoneCall, Mail } from "lucide-react";

// Lazy load all heavy pages
const Projects = rLazy(() => import("./pages/Projects"));
const ProjectDetail = rLazy(() => import("./pages/ProjectDetail"));
const About = rLazy(() => import("./pages/About"));
const Vision = rLazy(() => import("./pages/Vision"));
const Services = rLazy(() => import("./pages/Services"));
const Process = rLazy(() => import("./pages/Process"));
const Journal = rLazy(() => import("./pages/Journal"));
const Contact = rLazy(() => import("./pages/Contact"));

// Lazy load project pages
const ComDevraArchPage = rLazy(() => import("./Project/ComDevraArchPage"));
const ComFortofinoPage = rLazy(() => import("./Project/ComFortofinoPage"));
const ComMilkPointPage = rLazy(() => import("./Project/ComMilkPointPage"));
const FhGillsFarmhousePage = rLazy(() => import("./Project/FhGillsFarmhousePage"));
const HosCastleGreyPage = rLazy(() => import("./Project/HosCastleGreyPage"));
const HouPanchkulaPage = rLazy(() => import("./Project/HouPanchkulaPage"));
const Res121122Page = rLazy(() => import("./Project/Res121122Page"));
const ResMidhasPage = rLazy(() => import("./Project/ResMidhasPage"));
const ResMinzsPage = rLazy(() => import("./Project/ResMinzsPage"));
const ResSupreetPage = rLazy(() => import("./Project/ResSupreetPage"));
const ResVilla201DPage = rLazy(() => import("./Project/ResVilla201DPage"));
const ResVilla303Page = rLazy(() => import("./Project/ResVilla303Page"));
const ResVilla361Page = rLazy(() => import("./Project/ResVilla361Page"));
const ResVilla58Page = rLazy(() => import("./Project/ResVilla58Page"));
const SchMsSchoolPage = rLazy(() => import("./Project/SchMsSchoolPage"));
const ResKangsPage = rLazy(() => import("./Project/ResKangsPage"));
const SchOakwoodPage = rLazy(() => import("./Project/SchOakwoodPage"));
const ComHlpPage = rLazy(() => import("./Project/ComHlpPage"));
const ResMaisonElanPage = rLazy(() => import("./Project/ResMaisonElanPage"));

// Prefetch all lazy page chunks in background after app loads
function PrefetchAll() {
  useEffect(() => {
    const prefetch = () => {
      import("./pages/Projects");
      import("./pages/ProjectDetail");
      import("./pages/About");
      import("./pages/Vision");
      import("./pages/Services");
      import("./pages/Process");
      import("./pages/Journal");
      import("./pages/Contact");
      import("./Project/ComDevraArchPage");
      import("./Project/ComFortofinoPage");
      import("./Project/ComMilkPointPage");
      import("./Project/FhGillsFarmhousePage");
      import("./Project/HosCastleGreyPage");
      import("./Project/HouPanchkulaPage");
      import("./Project/Res121122Page");
      import("./Project/ResMidhasPage");
      import("./Project/ResMinzsPage");
      import("./Project/ResSupreetPage");
      import("./Project/ResVilla201DPage");
      import("./Project/ResVilla303Page");
      import("./Project/ResVilla361Page");
      import("./Project/ResVilla58Page");
      import("./Project/SchMsSchoolPage");
      import("./Project/ResKangsPage");
      import("./Project/SchOakwoodPage");
      import("./Project/ComHlpPage");
      import("./Project/ResMaisonElanPage");
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 1000);
    }
  }, []);
  return null;
}
function ProjectDetailWrapper({ onNavigate, onSelectProject }: { onNavigate: (p: string) => void; onSelectProject: (id: string) => void }) {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  return <ProjectDetail project={project} onNavigate={onNavigate} onSelectProject={onSelectProject} />;
}

const LoadingSpinner = () => (
  <div className="min-h-screen bg-stone-50 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
  </div>
);

function AppInner() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSelectedProjectId] = useState("sansarg");
  const [showIntro, setShowIntro] = useState(() => {
    try { return !sessionStorage.getItem("devra_intro_seen"); } catch { return true; }
  });

  const handleIntroComplete = () => {
    try { sessionStorage.setItem("devra_intro_seen", "true"); } catch {}
    setShowIntro(false);
  };

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  // Mobile back button guard — push a dummy entry so first back press
  // stays within the app instead of closing the browser tab
  useEffect(() => {
    // Only push the guard entry once per session on the root path
    if (location.pathname === "/" && window.history.state?.__guardPushed !== true) {
      window.history.replaceState({ __guardPushed: true }, "");
      window.history.pushState({ __guardPushed: true }, "", "/");
    }
  }, []);

  // Handle the popstate so that if we're at the root and there's nothing
  // left in the stack, we push the guard entry back instead of letting
  // the browser exit
  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname === "/") {
        window.history.pushState({ __guardPushed: true }, "", "/");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [location.pathname]);

  // onNavigate maps old path keys to real URLs
  const onNavigate = (path: string) => {
    const map: Record<string, string> = {
      home: "/", projects: "/projects", about: "/about",
      vision: "/vision", process: "/process", journal: "/journal",
      contact: "/contact", services: "/services",
    };
    if (map[path]) { navigate(map[path]); return; }
    if (path.startsWith("project-")) { navigate(`/projects/${path.replace("project-", "")}`); return; }
    navigate("/");
  };

  const onSelectProject = (id: string) => {
    setSelectedProjectId(id);
    navigate(`/projects/${id}`);
  };

  // current path string for Navbar active state
  const currentPath = location.pathname === "/" ? "home"
    : location.pathname.startsWith("/projects/") ? `project-${location.pathname.split("/projects/")[1]}`
    : location.pathname.replace("/", "");

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans selection:bg-stone-900 selection:text-stone-50 overflow-x-hidden">
      <AnimatePresence>
        {showIntro && <IntroDoorway onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <PrefetchAll />

      <main className="min-h-[80vh]">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
                <Route path="/" element={<Home onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects" element={<Projects onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/devra-architects" element={<ComDevraArchPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/fortofino" element={<ComFortofinoPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/milk-point" element={<ComMilkPointPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/gills-farmhouse" element={<FhGillsFarmhousePage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/castle-grey" element={<HosCastleGreyPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/panchkula-housing" element={<HouPanchkulaPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/121-122" element={<Res121122Page onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/midhas" element={<ResMidhasPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/maison-elan" element={<ResMaisonElanPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/minzs" element={<ResMinzsPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/col-supreet" element={<ResSupreetPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/villa-201d" element={<ResVilla201DPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/villa-303" element={<ResVilla303Page onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/villa-361" element={<ResVilla361Page onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/villa-58" element={<ResVilla58Page onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/ms-school" element={<SchMsSchoolPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/the-kangs" element={<ResKangsPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/oakwood-school" element={<SchOakwoodPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/hlp-project" element={<ComHlpPage onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/:id" element={<ProjectDetailWrapper onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/about" element={<About onNavigate={onNavigate} />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/process" element={<Process />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:articleId" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services onNavigate={onNavigate} />} />
                <Route path="*" element={<Home onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
            </Routes>
          </Suspense>
      </main>

      <Footer onNavigate={onNavigate} />

      {/* Sticky WhatsApp + Email + Phone */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-40 flex flex-col space-y-2.5 md:space-y-3">
        {/* WhatsApp Button */}
        <a href="https://wa.me/919779662286?text=Hello%20DEVRA%20Architects,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
          target="_blank" rel="noopener noreferrer" id="sticky-whatsapp-shortcut" title="Chat on WhatsApp"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        
        {/* Email Button */}
        <a href="mailto:info@devra.in?subject=Project%20Inquiry&body=Hello%20DEVRA%20Architects,%20I%20would%20like%20to%20discuss%20a%20project." 
          id="sticky-email-shortcut" title="Email Us"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300">
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        
        {/* Phone Button */}
        <a href="tel:+919779662286" id="sticky-phone-shortcut" title="Call DEVRA Desk"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-stone-700">
          <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </HelmetProvider>
  );
}
