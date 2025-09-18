import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import BackgroundBlobs from './components/BackgroundBlobs';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out'
      }
    );

    // Parallax effect for background elements
    gsap.to('.parallax-slow', {
      y: -50,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    gsap.to('.parallax-fast', {
      y: -100,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      }
    });
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <BackgroundBlobs />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
