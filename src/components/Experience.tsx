import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.timeline-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const experiences = [
    {
      title: "Research and Data Analyst",
      company: "Neural Semiconductor Limited",
      period: "Jan 2025 - Present",
      description: "Data scraping for AI/ML research datasets, preprocessing, dataset annotation for supervised learning, and data visualization development.",
      type: "work"
    },
    {
      title: "Research Assistant",
      company: "North South University",
      period: "Feb 2024 - Dec 2024",
      description: "Led end-to-end Machine/Deep Learning research projects in healthcare, designed ML models for data analysis and predictions.",
      type: "work"
    },
    {
      title: "Bachelor of Science in CSE",
      company: "North South University",
      period: "2020 - 2024",
      description: "Focus on Machine Learning and Deep Learning for medical applications. CGPA: 3.43/4.00",
      type: "education"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Content card */}
                <div className="ml-16 glass-card p-6 flex-1 hover:neon-glow transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">{exp.title}</h3>
                      <p className="text-neon-blue font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  {exp.type === 'work' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.title.includes('Neural') ? (
                        <>
                          <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">Data Scraping</span>
                          <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">ML Research</span>
                          <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-sm">Data Visualization</span>
                        </>
                      ) : (
                        <>
                          <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">Deep Learning</span>
                          <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">Healthcare AI</span>
                          <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-sm">Research</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
