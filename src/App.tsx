import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleField from "./components/ParticleField";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Scene3D from "./components/Scene3D";
import { Footer } from "./components/ui/footer-section";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden smooth-scroll">
      <ParticleField />
      <BackgroundBlobs />
      <Scene3D />
      <Navigation />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
