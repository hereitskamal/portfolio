import React, { useState, useEffect } from 'react';
import Homepage from '../components/Heropage';
import AboutSkills from '../components/Skills';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';

const FixedSidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach(section => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Sidebar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <nav className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-100">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-black text-white'
                      : 'bg-transparent text-gray-400 hover:text-black hover:bg-gray-50'
                  }`}
                  aria-label={`Go to ${section.label} section`}
                >
                  {/* Dot indicator */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id ? 'bg-white' : 'bg-current'
                  }`} />
                  
                  {/* Tooltip */}
                  <span className={`absolute right-16 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    activeSection === section.id
                      ? 'bg-black text-white opacity-100'
                      : 'bg-gray-900 text-white opacity-0 group-hover:opacity-100'
                  }`}>
                    {section.label}
                    {/* Arrow */}
                    <div className={`absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 rotate-45 ${
                      activeSection === section.id ? 'bg-black' : 'bg-gray-900'
                    }`} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <nav className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
          <ul className="flex space-x-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-black text-white'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {section.label}
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
        </section>
      </main>
    </div>
  );
};

const Index = () => {
  return <FixedSidebar />;
};

export default Index;
