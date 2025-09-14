import React, { useState, useEffect } from "react";
import Homepage from "../components/Heropage";
import AboutSkills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ConnectSection from "../components/ConnectSection";
import PersonalProjectsSection from "../components/PersonalProjectsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [ctaClicked, setCtaClicked] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Update scroll state for header styling
      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCtaClick = () => {
    setCtaClicked(true);
    scrollToSection("contact");
    
    // Reset the animation after 3 seconds for future interactions
    setTimeout(() => {
      setCtaClicked(false);
    }, 3000);
  };

  return (
    <div className="relative font-sans">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span
                className={`font-bold text-lg transition-all duration-300 ${
                  isScrolled ? "text-black" : "text-gray-900"
                }`}
              >
                Kamal Sharma
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-sm font-light transition-all duration-300 py-2 px-3 rounded-full ${
                    activeSection === section.id
                      ? "text-black bg-black/5 font-medium"
                      : "text-gray-600 hover:text-black hover:bg-gray-50/50"
                  }`}
                >
                  {section.label}
                  
                </button>
              ))}
            </nav>

            {/* Eye-Catching CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={handleCtaClick}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                  ctaClicked
                    ? isScrolled
                      ? "bg-green-500 text-white"
                      : "bg-green-500 text-white"
                    : isScrolled
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-black/90 text-white hover:bg-black backdrop-blur-sm"
                }`}
              >
                {/* Animated Background Gradient */}
                {!ctaClicked && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                
                {/* Pulsing Ring Animation */}
                {!ctaClicked && (
                  <>
                    <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                    <div className="absolute inset-0 rounded-full animate-pulse bg-purple-400 opacity-15 animation-delay-150"></div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-pink-400 opacity-10 animation-delay-300"></div>
                  </>
                )}

                {/* Sparkle Effect */}
                {!ctaClicked && (
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-ping opacity-60 animation-delay-100"></div>
                    <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40 animation-delay-200"></div>
                    <div className="absolute bottom-1 right-2 w-1 h-1 bg-white rounded-full animate-ping opacity-50 animation-delay-300"></div>
                    <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60 animation-delay-400"></div>
                  </div>
                )}

                {/* Button Text */}
                <span className="relative z-10 flex items-center gap-2">
                  {ctaClicked ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Scrolling...
                    </>
                  ) : (
                    <>
                      Get in Touch
                      {!ctaClicked && (
                        <span className="inline-block animate-bounce">✨</span>
                      )}
                    </>
                  )}
                </span>

                {/* Shimmer Effect */}
                {!ctaClicked && (
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-gray-700"
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-gray-700"
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-gray-700"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <nav className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/20">
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-xs font-light transition-all duration-300 py-1 px-2 ${
                    activeSection === section.id
                      ? "text-black font-medium"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        <section id="home">
          <Homepage />
        </section>

        <section id="skills">
          <AboutSkills />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectsSection />
          <PersonalProjectsSection />
        </section>

        <section id="contact">
          <ConnectSection />
        </section>
      </main>

      {/* Custom CSS for animation delays */}
      <style jsx>{`
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
