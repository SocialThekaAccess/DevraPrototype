import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import IntroDoorway from "./components/IntroDoorway";
import { PROJECTS } from "./data";
import { MessageSquare, PhoneCall } from "lucide-react";

export default function App() {
  const [currentPath, setCurrentPath] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState("sansarg");
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
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* 3. Global Footer */}
        <Footer onNavigate={setCurrentPath} />

        {/* 4. Global Sticky WhatsApp Quick-Action (Only displayed once scrolled down) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
          <a
            href="https://wa.me/919779662286?text=Hello%20DEVRA%20Architects,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            id="sticky-whatsapp-shortcut"
            title="Chat on WhatsApp"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>

          <a
            href="tel:+919779662286"
            id="sticky-phone-shortcut"
            title="Call DEVRA Desk"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-stone-800"
          >
            <PhoneCall className="w-5 h-5" />
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
