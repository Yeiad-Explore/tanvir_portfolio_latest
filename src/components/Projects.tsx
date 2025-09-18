import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
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

  const projects = [
    {
      title: "Endodontic Image Classification",
      year: "2024",
      description: "Deep learning framework using enhanced VGG-19 with Adaptive Squeeze-and-Excitation modules for endodontic image classification.",
      technologies: ["TensorFlow", "Keras", "VGG-19", "Python"],
      status: "Published",
      publication: "IEEE TENCON 2024"
    },
    {
      title: "Heat-Related Illness Risk Classification",
      year: "2023",
      description: "ML framework for predicting heat-related illnesses using environmental and physiological factors for real-time forecasting.",
      technologies: ["Scikit-learn", "Pandas", "NumPy", "Python"],
      status: "Completed"
    },
    {
      title: "Drug Addiction Predictive Analysis",
      year: "2024",
      description: "ML system analyzing social, economic, and demographic data to identify high-risk groups for targeted prevention in Bangladesh.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      status: "Completed"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card p-6 hover:neon-glow transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-glass/30 text-white rounded-full text-sm border border-glass-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Published' 
                    ? 'bg-neon-blue/20 text-neon-blue' 
                    : 'bg-neon-purple/20 text-neon-purple'
                }`}>
                  {project.status}
                </span>
                
                {project.publication && (
                  <span className="text-xs text-gray-400">
                    {project.publication}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-medium text-white mb-4">Programming</h4>
              <div className="space-y-2">
                {['C', 'C++', 'Java', 'Python'].map((lang, index) => (
                  <div key={index} className="text-gray-300">{lang}</div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-medium text-white mb-4">ML/AI Libraries</h4>
              <div className="space-y-2">
                {['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn'].map((lib, index) => (
                  <div key={index} className="text-gray-300">{lib}</div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-medium text-white mb-4">Data Tools</h4>
              <div className="space-y-2">
                {['Pandas', 'NumPy', 'Power BI', 'Tableau'].map((tool, index) => (
                  <div key={index} className="text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-medium text-white mb-4">Web & Others</h4>
              <div className="space-y-2">
                {['React', 'JavaScript', 'Git', 'Flask'].map((tech, index) => (
                  <div key={index} className="text-gray-300">{tech}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
