import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const experiences = [
    {
      title: "Team lead of Research & Data Team",
      company: "Neural Semiconductor Limited",
      period: "2025 - Present",
      description:
        "Currently serving as the Team Lead of the Research Team at Neural Semiconductor Ltd., where I manage and coordinate data-driven research projects across multiple domains and industries. My role involves overseeing data collection, analysis, and interpretation to generate actionable insights and ensure the accuracy, quality, and consistency of research outcomes.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "SQL",
        "Data Visualization",
      ],
    },
    {
      title: "Research Assistant",
      company: "North South University",
      period: "2023 - 2025",
      description:
        "Previously, I worked as a Research Assistant at North South University (NSU) under the supervision of Dr. Fariah Mahzabin, where I contributed to projects involving data analysis and machine learning applications in Medical Domain.",
      technologies: [
        "Machine Learning",
        "Deep Learning",
        "Python",
        "R",
        "Statistical Analysis",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "North South University",
      period: "2020 - 2024",
      cgpa: "3.43/4.00",
    },
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

        <div ref={experienceRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

          <div className="space-y-12">
            {/* Experience Section */}
            <div className="relative">
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-gray-900 z-10"></div>
              <div className="ml-20">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Professional Experience
                </h3>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="glass-card mb-6 hover:neon-glow-soft transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-neon-blue font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            techIndex % 3 === 0
                              ? "bg-neon-blue/20 text-neon-blue"
                              : techIndex % 3 === 1
                              ? "bg-neon-purple/20 text-neon-purple"
                              : "bg-neon-pink/20 text-neon-pink"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="relative">
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full border-4 border-gray-900 z-10"></div>
              <div className="ml-20">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-card mb-6 hover:neon-glow-soft transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-neon-purple font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
