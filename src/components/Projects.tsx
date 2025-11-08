import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
  Visual3,
} from "./ui/animated-card-chart";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    gsap.fromTo(
      [projectsRef.current, skillsRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const skills = [
    { name: "Python", level: 95, category: "programming" },
    { name: "Machine Learning", level: 90, category: "ai" },
    { name: "Deep Learning", level: 88, category: "ai" },
    { name: "Data Visualization", level: 85, category: "data" },
    { name: "SQL", level: 82, category: "database" },
    { name: "TensorFlow", level: 87, category: "ai" },
    { name: "PyTorch", level: 85, category: "ai" },
    { name: "R", level: 80, category: "programming" },
    { name: "Statistical Analysis", level: 92, category: "data" },
    { name: "Research", level: 94, category: "academic" },
  ];

  const projects = [
    {
      title: "Heat-Related Illness Risk Prediction using ML & Explainable AI",
      description:
        "Built ML models analyzing environmental & physiological data for early risk detection in high-risk zones. Designed explainability modules for better interpretation.",
      technologies: ["Python", "XAI", "PyTorch", "Medical Data", "Flask"],
      category: "ml",
      github:
        "https://github.com/Tanvir7898/Classification-of-Heat-Related-Illness-Risk-Using-Machine-Learning-and-Explainable-AI",
      demo: "https://github.com/Tanvir7898/Classification-of-Heat-Related-Illness-Risk-Using-Machine-Learning-and-Explainable-AI",
      visual: {
        mainColor: "#3b82f6", // Blue for medical/healthcare
        secondaryColor: "#10b981", // Green for success/accuracy
        gridColor: "#1e40af15",
      },
    },
    {
      title:
        "Adaptive SE + Enhanced VGG-19 for Endodontic Image Classification",
      description:
        "Developed a deep learning-based framework to classify endodontic images by integrating Adaptive Squeeze-and-Excitation modules with a Feature Pyramid Network. Improved robustness against class imbalance and complex feature extraction.",
      technologies: ["Python", "Deep Learning", "SQL", "Data Annotation"],
      category: "data",
      github: "#",
      demo: "#",
      visual: {
        mainColor: "#8b5cf6", // Purple for data processing
        secondaryColor: "#f59e0b", // Amber for data flow
        gridColor: "#7c3aed15",
      },
    },
    {
      title: "Predictive Analytics Dashboard",
      description:
        "Created an interactive dashboard for visualizing healthcare predictions and trends.",
      technologies: ["Python", "Tableau", "PowerBI", "Data Visualization"],
      category: "visualization",
      github: "#",
      demo: "#",
      visual: {
        mainColor: "#ef4444", // Red for analytics/insights
        secondaryColor: "#fbbf24", // Yellow for visualization
        gridColor: "#dc262615",
      },
    },
    {
      title: "Drug Addiction Prediction in Bangladesh with Explainable AI",
      description:
        "Developed a predictive system using socio-economic and demographic data to aid policymakers in identifying high-risk groups.",
      technologies: ["Research", "Machine Learning", "Medical AI", "XAI"],
      category: "research",
      github: "#",
      demo: "#",
      visual: {
        mainColor: "#06b6d4", // Cyan for research/innovation
        secondaryColor: "#84cc16", // Lime for discovery
        gridColor: "#0891b215",
      },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "Machine Learning" },
    { id: "data", label: "Data Science" },
    { id: "visualization", label: "Visualization" },
    { id: "research", label: "Research" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ color: "#F8F8FF" }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "glass-card text-gray-300 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <AnimatedCard className="glass-card group hover:neon-glow-soft transition-all duration-300 hover:scale-105 w-full max-w-2xl">
                <CardVisual>
                  <Visual3
                    mainColor={project.visual.mainColor}
                    secondaryColor={project.visual.secondaryColor}
                    gridColor={project.visual.gridColor}
                  />
                </CardVisual>
                <CardBody>
                  <CardTitle className="text-white group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          techIndex % 2 === 0
                            ? "bg-neon-blue/20 text-neon-blue"
                            : "bg-neon-purple/20 text-neon-purple"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  </div>
                </CardBody>
              </AnimatedCard>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-4 hover:neon-glow-soft transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-neon-blue text-xs font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="skill-progress h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
