import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-light text-white mb-6 text-shadow"
        >
          <span className="gradient-text">Tanvir</span>
          <br />
          <span className="text-4xl md:text-6xl font-thin">Ahmed Chowdhury</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Research & Data Analyst specializing in Machine Learning and Deep Learning for medical applications
        </p>
        
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="glass-card px-8 py-4 text-white hover:neon-glow transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="glass-card px-8 py-4 text-white hover:neon-glow transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
