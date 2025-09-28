import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundBlobs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blobs = container.querySelectorAll(".blob");

    // Initial animation for blobs
    gsap.fromTo(
      blobs,
      { scale: 0, opacity: 0, rotation: 0 },
      {
        scale: 1,
        opacity: 1,
        rotation: 360,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    // Continuous floating animation
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        y: `+=${20 + index * 10}`,
        x: `+=${15 + index * 5}`,
        rotation: `+=${45 + index * 15}`,
        duration: 8 + index * 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Apply smooth parallax effect to blobs
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.3;
        const x = xPercent * speed * 50;
        const y = yPercent * speed * 50;

        gsap.to(blob, {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    // Scroll-triggered parallax
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        blobs.forEach((blob, index) => {
          const speed = (index + 1) * 0.5;
          gsap.to(blob, {
            y: progress * 100 * speed,
            rotation: progress * 180 * speed,
            scale: 1 + progress * 0.1 * speed,
            duration: 0.3,
          });
        });
      },
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div
        className="blob absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl parallax-slow"
        style={{
          animation: "float 20s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl parallax-fast"
        style={{
          animation: "float 25s ease-in-out infinite reverse",
          animationDelay: "5s",
        }}
      />
      <div
        className="blob absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-full blur-3xl parallax-slow"
        style={{
          animation: "float 30s ease-in-out infinite",
          animationDelay: "10s",
        }}
      />
      <div
        className="blob absolute top-1/2 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"
        style={{
          animation: "float 22s ease-in-out infinite reverse",
          animationDelay: "7s",
        }}
      />
      <div
        className="blob absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        style={{
          animation: "float 28s ease-in-out infinite",
          animationDelay: "12s",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundBlobs;
