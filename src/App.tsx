import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { lazy as rLazy, Suspense as rSuspense } from "react";
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

export default function App() {
  const [currentPath, setCurrentPath] = useState("home");
  const [, setSelectedProjectId] = useState("sansarg");
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem("devra_intro_seen");
    } catch (e) {
      return true;
    }
  });

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem("devra_intro_seen", "true");
    } catch (e) {
      // fallback if session storage is disabled
    }
    setShowIntro(false);
  };

  useEffect(() => {
    // Smooth scroll to top on path changes
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Routing Handler
  const renderPage = () => {
    // New project pages
    if (currentPath === "project-devra-architects") return <ComDevraArchPage />;
    if (currentPath === "project-fortofino") return <ComFortofinoPage />;
    if (currentPath === "project-milk-point") return <ComMilkPointPage />;
    if (currentPath === "project-gills-farmhouse") return <FhGillsFarmhousePage />;
    if (currentPath === "project-castle-grey") return <HosCastleGreyPage />;
    if (currentPath === "project-panchkula-housing") return <HouPanchkulaPage />;
    if (currentPath === "project-121-122") return <Res121122Page />;
    if (currentPath === "project-midhas") return <ResMidhasPage />;
    if (currentPath === "project-minzs") return <ResMinzsPage />;
    if (currentPath === "project-col-supreet") return <ResSupreetPage />;
    if (currentPath === "project-villa-201d") return <ResVilla201DPage />;
    if (currentPath === "project-villa-303") return <ResVilla303Page />;
    if (currentPath === "project-villa-361") return <ResVilla361Page />;
    if (currentPath === "project-villa-58") return <ResVilla58Page />;
    if (currentPath === "project-ms-school") return <SchMsSchoolPage />;
    
    // Existing project detail pages from data.ts
    if (currentPath.startsWith("project-")) {
      const id = currentPath.replace("project-", "");
      const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
      return (
        <ProjectDetail
          project={project}
          onNavigate={setCurrentPath}
          onSelectProject={setSelectedProjectId}
        />
      );
    }

    switch (currentPath) {
      case "home":
        return (
          <Home
            onNavigate={setCurrentPath}
            onSelectProject={setSelectedProjectId}
          />
        );
      case "projects":
        return (
          <Projects
            onNavigate={setCurrentPath}
            onSelectProject={setSelectedProjectId}
          />
        );
      case "about":
        return <About onNavigate={setCurrentPath} />;
      case "vision":
        return <Vision />;
      case "process":
        return <Process />;
      case "journal":
        return <Journal />;
      case "contact":
        return <Contact />;
      case "services":
        return <Services onNavigate={setCurrentPath} />;
      default:
        return (
          <Home
            onNavigate={setCurrentPath}
            onSelectProject={setSelectedProjectId}
          />
        );
    }
  };

  return (
    <HelmetProvider>
      <div className="bg-stone-50 min-h-screen text-stone-900 font-sans selection:bg-stone-900 selection:text-stone-50 overflow-x-hidden">
        {/* 0. Immersive Entrance Doorway Loader */}
        <AnimatePresence>
          {showIntro && (
            <IntroDoorway onComplete={handleIntroComplete} />
          )}
        </AnimatePresence>

        {/* 1. Global Navigation Header */}
        <Navbar currentPath={currentPath} onNavigate={setCurrentPath} />

        {/* 2. Main Page Render with Animated Route Transition */}
        <main className="min-h-[80vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <rSuspense fallback={
                <div className="min-h-screen bg-stone-50 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
                </div>
              }>
                {renderPage()}
              </rSuspense>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* 3. Global Footer */}
        <Footer onNavigate={setCurrentPath} />

        {/* 4. Global Sticky WhatsApp Quick-Action (Only displayed once scrolled down) */}
        <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-40 flex flex-col space-y-2.5 md:space-y-3">
          <a
            href="https://wa.me/919779662286?text=Hello%20DEVRA%20Architects,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            id="sticky-whatsapp-shortcut"
            title="Chat on WhatsApp"
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-600 hover:bg-green-700 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>

          <a
            href="tel:+919779662286"
            id="sticky-phone-shortcut"
            title="Call DEVRA Desk"
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-stone-800"
          >
            <PhoneCall className="w-5 h-5" />
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
