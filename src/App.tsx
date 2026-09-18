import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { lazy as rLazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroDoorway from "./components/IntroDoorway";
import Home from "./pages/Home";
import { PROJECTS } from "./data";
import { MessageSquare, PhoneCall } from "lucide-react";

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

// Project detail wrapper using URL param
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

      <main className="min-h-[80vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes location={location}>
                <Route path="/" element={<Home onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects" element={<Projects onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/projects/devra-architects" element={<ComDevraArchPage />} />
                <Route path="/projects/fortofino" element={<ComFortofinoPage />} />
                <Route path="/projects/milk-point" element={<ComMilkPointPage />} />
                <Route path="/projects/gills-farmhouse" element={<FhGillsFarmhousePage />} />
                <Route path="/projects/castle-grey" element={<HosCastleGreyPage />} />
                <Route path="/projects/panchkula-housing" element={<HouPanchkulaPage />} />
                <Route path="/projects/121-122" element={<Res121122Page />} />
                <Route path="/projects/midhas" element={<ResMidhasPage />} />
                <Route path="/projects/minzs" element={<ResMinzsPage />} />
                <Route path="/projects/col-supreet" element={<ResSupreetPage />} />
                <Route path="/projects/villa-201d" element={<ResVilla201DPage />} />
                <Route path="/projects/villa-303" element={<ResVilla303Page />} />
                <Route path="/projects/villa-361" element={<ResVilla361Page />} />
                <Route path="/projects/villa-58" element={<ResVilla58Page />} />
                <Route path="/projects/ms-school" element={<SchMsSchoolPage />} />
                <Route path="/projects/:id" element={<ProjectDetailWrapper onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
                <Route path="/about" element={<About onNavigate={onNavigate} />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/process" element={<Process />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services onNavigate={onNavigate} />} />
                <Route path="*" element={<Home onNavigate={onNavigate} onSelectProject={onSelectProject} />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={onNavigate} />

      {/* Sticky WhatsApp + Phone */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-40 flex flex-col space-y-2.5 md:space-y-3">
        <a href="https://wa.me/919779662286?text=Hello%20DEVRA%20Architects,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
          target="_blank" rel="noopener noreferrer" id="sticky-whatsapp-shortcut" title="Chat on WhatsApp"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-600 hover:bg-green-700 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
        <a href="tel:+919779662286" id="sticky-phone-shortcut" title="Call DEVRA Desk"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-stone-800">
          <PhoneCall className="w-5 h-5" />
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
