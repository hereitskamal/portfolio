import React from "react";
import SplitText from "../components/SplitText";

const SkillsSection = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "PWA",
    "HTML5",
    "CSS3",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "SSR",
    "AI/ML Integration",
  ];

  const toolsSkills = [
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
    "Webpack",
  ];

  const uiSkills = [
    "Tailwind CSS",
    "Material UI",
    "Styled Components",
    "Framer Motion",
    "Figma",
    "Adobe XD",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 font-sans">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-gray-400 mb-6 font-light tracking-wide text-sm uppercase">
            Technical Expertise
          </p>
          <SplitText
            text="My Skills"
            className="text-5xl md:text-7xl font-bold leading-none mb-8 text-black"
          />
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-800 rounded-xl text-sm font-mono font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200 hover:scale-105"
                  style={{
                    fontFamily:
                      "'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-800 rounded-xl text-sm font-mono font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-200 hover:scale-105"
                  style={{
                    fontFamily:
                      "'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Databases */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
              Tools & Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-800 rounded-xl text-sm font-mono font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-purple-200 hover:scale-105"
                  style={{
                    fontFamily:
                      "'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
              UI/UX & Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {uiSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white text-gray-800 rounded-xl text-sm font-mono font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-orange-200 hover:scale-105"
                  style={{
                    fontFamily:
                      "'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
