import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const current = sectionElements.find((section) => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });

    if (current) {
      setActiveSection(current.id);
    }
  }, [sections]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Initial animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(nav, {
          y: progress > 0.1 ? 0 : -20,
          scale: progress > 0.1 ? 1 : 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonHover = (button: HTMLElement, isEntering: boolean) => {
    if (isEntering) {
      gsap.to(button, {
        scale: 1.1,
        rotationY: 10,
        rotationX: 5,
        z: 20,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(button, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="glass-nav backdrop-blur-xl bg-glass/60 rounded-full px-8 py-3 border border-glass-border/50 shadow-lg"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === section.id
                  ? "text-white bg-glass/40 neon-glow-soft"
                  : "text-gray-300 hover:text-cyan-400 hover:bg-glass/20"
              }`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <span className="relative z-10">{section.label}</span>
              {activeSection === section.id && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"
                  style={{ transform: "translateZ(-1px)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
