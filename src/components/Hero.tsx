import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonRef.current;
    const background = backgroundRef.current;

    if (!container || !title || !subtitle || !buttons || !background) return;

    // Set initial states
    gsap.set([title, subtitle, buttons], { opacity: 0 });
    gsap.set(title, { y: 100, rotationX: 90 });
    gsap.set(subtitle, { y: 50, scale: 0.8 });
    gsap.set(buttons, { y: 30, scale: 0.9 });

    // Create master timeline
    const tl = gsap.timeline();

    // Animate background first
    tl.fromTo(
      background,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Animate title with 3D effect
    tl.fromTo(
      title,
      { y: 100, rotationX: 90, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        transformOrigin: "center bottom",
      },
      "-=1.5"
    );

    // Animate subtitle with stagger effect
    tl.fromTo(
      subtitle,
      { y: 50, scale: 0.8, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=1"
    );

    // Animate buttons with bounce effect
    tl.fromTo(
      buttons,
      { y: 30, scale: 0.9, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Add continuous floating animation to title
    tl.to(
      title,
      {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      },
      "-=0.5"
    );

    // Add parallax effect on scroll
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(background, {
          y: progress * 100,
          scale: 1 + progress * 0.1,
          duration: 0.3,
        });
        gsap.to(title, {
          y: progress * -50,
          rotationY: progress * 5,
          duration: 0.3,
        });
      },
    });

    // Add hover effects to buttons
    const buttonElements = buttons.querySelectorAll("button");
    buttonElements.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          rotationY: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          rotationY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background gradient */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
        style={{ transform: "translateZ(-100px)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light text-white mb-6 text-shadow"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <span
            className="text-neon-blue font-bold neon-text-glow block"
            style={{
              textShadow:
                "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff",
              transform: "translateZ(50px)",
            }}
          >
            Tanvir
          </span>
          <span
            className="text-4xl md:text-6xl font-thin block mt-2"
            style={{ transform: "translateZ(30px)" }}
          >
            Ahmed Chowdhury
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            transform: "translateZ(20px)",
          }}
        >
          Research & Data Analyst specializing in Machine Learning and Deep
          Learning for medical applications
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-6 justify-center"
          style={{ transform: "translateZ(40px)" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-button glass-card px-8 py-4 text-white hover:neon-glow transition-all duration-300 group relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 transition-all duration-300" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-button glass-card px-8 py-4 text-white hover:neon-glow transition-all duration-300 group relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5 group-hover:from-neon-purple/10 group-hover:to-neon-pink/10 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
