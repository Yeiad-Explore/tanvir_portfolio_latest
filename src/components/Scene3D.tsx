import React, { useEffect, useRef } from "react";

const Scene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating geometric shapes
    const shapes = [
      { type: "cube", size: 20, speed: 0.5 },
      { type: "pyramid", size: 15, speed: 0.3 },
      { type: "sphere", size: 12, speed: 0.7 },
      { type: "cube", size: 18, speed: 0.4 },
      { type: "pyramid", size: 22, speed: 0.6 },
    ];

    shapes.forEach((shape, index) => {
      const element = document.createElement("div");
      element.className = `shape-3d ${shape.type}`;
      element.style.cssText = `
        position: absolute;
        width: ${shape.size}px;
        height: ${shape.size}px;
        background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1));
        border: 1px solid rgba(0, 212, 255, 0.3);
        backdrop-filter: blur(10px);
        animation: float3D ${15 + index * 3}s ease-in-out infinite;
        animation-delay: ${index * 2}s;
        left: ${20 + index * 15}%;
        top: ${30 + index * 10}%;
        transform-style: preserve-3d;
      `;

      if (shape.type === "cube") {
        element.style.borderRadius = "4px";
      } else if (shape.type === "sphere") {
        element.style.borderRadius = "50%";
      } else if (shape.type === "pyramid") {
        element.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
      }

      container.appendChild(element);
    });

    // Add CSS keyframes for 3D animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float3D {
        0%, 100% {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg);
        }
        25% {
          transform: translateZ(50px) rotateX(90deg) rotateY(90deg);
        }
        50% {
          transform: translateZ(0) rotateX(180deg) rotateY(180deg);
        }
        75% {
          transform: translateZ(-30px) rotateX(270deg) rotateY(270deg);
        }
      }
    `;
    document.head.appendChild(style);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const rotateX = (clientY / innerHeight - 0.5) * 20;
      const rotateY = (clientX / innerWidth - 0.5) * 20;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up created elements
      const shapes = container.querySelectorAll(".shape-3d");
      shapes.forEach((shape) => shape.remove());
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    />
  );
};

export default Scene3D;
