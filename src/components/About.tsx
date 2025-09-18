import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div ref={cardRef} className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-white mb-6">
                Research & Data Analyst
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Research and Data Analyst with expertise in Machine Learning and Deep Learning, 
                particularly focused on medical applications. Currently working at Neural Semiconductor Limited, 
                I specialize in data scraping, preprocessing, and visualization for AI/ML research datasets.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                With a Bachelor's degree in Computer Science and Engineering from North South University, 
                I've led multiple research projects in healthcare, developing ML models for data analysis 
                and predictions. My work has been published in IEEE conferences and I'm passionate about 
                using technology to solve real-world problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">3.43</div>
                  <div className="text-sm text-gray-300">CGPA</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <h4 className="text-lg font-medium text-white mb-3">Education</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-white font-medium">BSc in CSE</div>
                    <div className="text-sm text-gray-300">North South University (2020-2024)</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">HSC</div>
                    <div className="text-sm text-gray-300">Ideal College Dhanmondi (2017-2019)</div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-lg font-medium text-white mb-3">Location</h4>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lalmatia, Dhaka 1207
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
