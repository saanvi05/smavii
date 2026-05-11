import { useState, useEffect, useRef } from "react";
import Cursor from "./components/Cursor";
import Sidebar from "./components/Sidebar";
import Marquee from "./components/Marquee";
import MenuOverlay from "./components/MenuOverlay";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Works from "./components/Works";
import CaseStudyViewer from "./components/CaseStudyViewer"; 
import { type DesignProject } from "./data/projects"; 
import Lenis from "lenis";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(
    null
  );
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) {
      if (selectedProject || isMenuOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [selectedProject, isMenuOpen]);

  return (
    <div className="bg-idex-black min-h-screen text-white font-sans selection:bg-idex-teal selection:text-black antialiased">
      <Cursor />

      {/* 4. Side Navigation */}
      <Sidebar onMenuClick={() => setIsMenuOpen(true)} />

      {/* 5. The Full-Screen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* 6. The Behance-Style Case Study Viewer (Independent Component) */}
      <CaseStudyViewer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <main
        className={`pl-16 md:pl-24 transition-all duration-1000 ease-in-out ${
          isMenuOpen || selectedProject
            ? "blur-2xl scale-95 opacity-30"
            : "blur-0 scale-100 opacity-100"
        }`}
      >
        <Home />

        <Marquee />

        {/* 7. Pass the function to Works to fix the TypeScript error */}
        <Works onProjectClick={(project) => setSelectedProject(project)} />

        <About />

        <Contact />

        <footer className="py-20 text-center opacity-20 text-[10px] uppercase tracking-[0.4em]">
          © 2026 SAANVI SMAKSHI SAHOO • CRAFTING HISTORY
        </footer>
      </main>
    </div>
  );
}

export default App;
