import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./ProfileCard";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (!section || !card) return;

    // Set initial states to prevent flash and position jumping
    gsap.set(section, { opacity: 0, y: 0 });
    gsap.set(card, { opacity: 0, y: 0, scale: 1 });
    gsap.set(section.querySelectorAll("[data-tab]"), {
      opacity: 0,
      y: 0,
      scale: 1,
    });
    gsap.set(section.querySelector(".glass-card"), {
      opacity: 0,
      y: 0,
      scale: 1,
    });

    // Enhanced animations for the about section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section entrance and profile card together
    tl.to(section, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }).fromTo(
      card,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Animate tab navigation and content area together
    const tabs = section.querySelectorAll("[data-tab]");
    const contentArea = section.querySelector(".glass-card");

    tl.fromTo(
      tabs,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.4"
    );

    if (contentArea) {
      tl.fromTo(
        contentArea,
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Sequential animation for profile card
    const profileCard = section.querySelector(".pc-card");
    const profileImage = section.querySelector(".avatar");
    const profileName = section.querySelector(".pc-details h3");
    const profileTitle = section.querySelector(".pc-details p");
    const profileButton = section.querySelector(".pc-contact-btn");

    if (
      profileCard &&
      profileImage &&
      profileName &&
      profileTitle &&
      profileButton
    ) {
      // Set initial states
      gsap.set(profileImage, { opacity: 0, scale: 0.8, y: 30 });
      gsap.set([profileName, profileTitle], { opacity: 0, y: 20 });
      gsap.set(profileButton, { opacity: 0, y: 20 });

      // Animate all profile elements together
      tl.to(
        [profileName, profileTitle, profileImage, profileButton],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.6"
      );
    }
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (tabId: string) => {
    if (isTransitioning || selectedTab === tabId) return;

    setIsTransitioning(true);

    // Smooth button transition
    gsap.to(`[data-tab]`, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
    });

    const contentArea = sectionRef.current?.querySelector(".glass-card");
    if (contentArea) {
      // Fade out current content with smooth transition
      gsap.to(contentArea, {
        opacity: 0,
        y: 15,
        scale: 0.98,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          setSelectedTab(tabId);
          // Fade in new content with smooth entrance
          gsap.fromTo(
            contentArea,
            { opacity: 0, y: -15, scale: 1.02 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "back.out(1.2)",
              onComplete: () => {
                setIsTransitioning(false);
                // Reset button scales
                gsap.to(`[data-tab]`, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out",
                });
              },
            }
          );
        },
      });
    } else {
      setSelectedTab(tabId);
      setIsTransitioning(false);
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "👤" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "💼" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  const tabContent = {
    overview: {
      title: "Who I Am",
      content: [
        "Passionate Research and Data Analyst specializing in Machine Learning and Deep Learning for medical applications.",
        "Currently contributing to cutting-edge AI research at Neural Semiconductor Limited, focusing on data processing and ML model development.",
        "Dedicated to leveraging technology to solve real-world healthcare challenges through innovative data science solutions.",
      ],
      stats: [
        { label: "CGPA", value: "3.43", icon: "📊" },
        { label: "Experience", value: "2+ Years", icon: "⏱️" },
        { label: "Projects", value: "15+", icon: "🚀" },
        { label: "Publications", value: "IEEE", icon: "📄" },
      ],
    },
    education: {
      title: "Academic Journey",
      content: [
        "Bachelor of Science in Computer Science and Engineering from North South University (2020-2024)",
        "Higher Secondary Certificate from Ideal College Dhanmondi (2017-2019)",
        "Specialized coursework in Machine Learning, Data Mining, and Software Engineering",
      ],
      stats: [
        { label: "University", value: "NSU", icon: "🏫" },
        { label: "Major", value: "CSE", icon: "💻" },
        { label: "Period", value: "4 Years", icon: "📅" },
        { label: "Focus", value: "AI/ML", icon: "🧠" },
      ],
    },
    skills: {
      title: "Technical Expertise",
      content: [
        "Advanced proficiency in Python, R, and SQL for data analysis and machine learning",
        "Extensive experience with TensorFlow, PyTorch, and scikit-learn for deep learning projects",
        "Expert in data visualization using Matplotlib, Seaborn, and Plotly for insights presentation",
      ],
      stats: [
        { label: "Python", value: "95%", icon: "🐍" },
        { label: "ML/DL", value: "90%", icon: "🤖" },
        { label: "Data Viz", value: "88%", icon: "📈" },
        { label: "Research", value: "92%", icon: "🔬" },
      ],
    },
    achievements: {
      title: "Key Accomplishments",
      content: [
        "Successfully published research papers in IEEE conferences on healthcare AI applications",
        "Led data science initiatives that improved medical prediction accuracy by 25%",
        "Developed innovative ML models for medical data analysis with real-world impact",
      ],
      stats: [
        { label: "Papers", value: "IEEE", icon: "📝" },
        { label: "Accuracy", value: "+25%", icon: "🎯" },
        { label: "Impact", value: "High", icon: "⚡" },
        { label: "Recognition", value: "Award", icon: "🏆" },
      ],
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div ref={cardRef} className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Profile Card */}
          <div className="lg:col-span-2 flex justify-center">
            <div
              className="mt-16 smooth-3d"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <ProfileCard
                name="Tanvir Ahmed Chowdhury"
                title="Research & Data Analyst"
                handle="tanvir_data"
                status="Available for Projects"
                contactText="Get In Touch"
                avatarUrl="/tanvir_profile_card_image.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
                iconUrl=""
                grainUrl=""
                behindGradient=""
                innerGradient=""
                miniAvatarUrl=""
              />
            </div>
          </div>

          {/* Interactive Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  data-tab
                  onClick={() => handleTabChange(tab.id)}
                  disabled={isTransitioning}
                  className={`px-6 py-3 rounded-full font-medium tab-button flex items-center gap-2 smooth-3d transition-all duration-300 ${
                    selectedTab === tab.id
                      ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg scale-105"
                      : "glass-card text-gray-300 hover:text-white hover:scale-105"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div
              className="glass-card p-8 smooth-3d tab-content"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">
                  {tabs.find((t) => t.id === selectedTab)?.icon}
                </span>
                {tabContent[selectedTab as keyof typeof tabContent].title}
              </h3>

              <div className="space-y-4 mb-8">
                {tabContent[selectedTab as keyof typeof tabContent].content.map(
                  (paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tabContent[selectedTab as keyof typeof tabContent].stats.map(
                  (stat, index) => (
                    <div
                      key={index}
                      className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-xl">📍</span>
                Current Location
              </h4>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-neon-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Lalmatia, Dhaka 1207, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
