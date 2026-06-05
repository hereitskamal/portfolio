import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Homepage from "../components/Heropage";
import AboutSkills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ConnectSection from "../components/ConnectSection";
import PersonalProjectsSection from "../components/PersonalProjectsSection";
import ChatWidget from "../components/ChatWidget";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
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

  if (!loaded) return <LoadingScreen onComplete={() => setLoaded(true)} />;

  return (
    <div className="relative font-sans">
      {/* Fixed Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDarkMode
            ? isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/60 backdrop-blur-sm"
            : isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isDarkMode ? "bg-white" : "bg-black"}`}>
                <span className={`font-bold text-sm ${isDarkMode ? "text-black" : "text-white"}`}>K</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-sm font-light transition-all duration-300 py-2 px-3 rounded-full ${
                    activeSection === section.id
                      ? isDarkMode ? "text-white bg-white/10 font-medium" : "text-black bg-black/5 font-medium"
                      : isDarkMode ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-600 hover:text-black hover:bg-gray-50/50"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Right: theme toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/5 hover:bg-black/10 text-gray-700"}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.166a.75.75 0 001.06 1.06l1.59-1.59a.75.75 0 00-1.06-1.061L6.166 6.166z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                  </svg>
                )}
              </button>

              {/* CTA */}
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
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 transition-all duration-300 ${isDarkMode ? "bg-white" : isScrolled ? "bg-black" : "bg-gray-700"}`}></div>
                <div className={`w-full h-0.5 transition-all duration-300 ${isDarkMode ? "bg-white" : isScrolled ? "bg-black" : "bg-gray-700"}`}></div>
                <div className={`w-full h-0.5 transition-all duration-300 ${isDarkMode ? "bg-white" : isScrolled ? "bg-black" : "bg-gray-700"}`}></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <nav className={`backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border flex items-center gap-1 ${isDarkMode ? "bg-black/90 border-white/10" : "bg-white/95 border-white/20"}`}>
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-xs font-light transition-all duration-300 py-1 px-2 ${
                    activeSection === section.id
                      ? isDarkMode ? "text-white font-medium" : "text-black font-medium"
                      : isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${isDarkMode ? "bg-white" : "bg-black"}`}></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? "text-yellow-300" : "text-gray-600"}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.166a.75.75 0 001.06 1.06l1.59-1.59a.75.75 0 00-1.06-1.061L6.166 6.166z"/>
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        <section id="home" className="md:pt-[75px]">
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

      <ChatWidget />

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
