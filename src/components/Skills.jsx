import React from "react";
import SplitText from "../components/SplitText";
import { useTheme } from "../contexts/ThemeContext";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
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

  const bg = isDarkMode ? "bg-[#111111]" : "bg-gray-50";
  const heading = isDarkMode ? "text-white" : "text-black";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";
  const chip = isDarkMode
    ? "bg-[#1a1a1a] text-gray-200 border-gray-700 hover:border-gray-500"
    : "bg-white text-gray-800 border-gray-100 hover:border-blue-200";

  return (
    <div className={`min-h-screen ${bg} py-20 font-sans transition-colors duration-300`}>
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-gray-400 mb-6 font-light tracking-wide text-sm uppercase">
            Technical Expertise
          </p>
          <SplitText
            text="My Skills"
            className={`text-5xl md:text-7xl font-bold leading-none mb-8 ${heading}`}
          />
          <p className={`md:text-xl ${sub} max-w-2xl leading-relaxed`}>
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Frontend Development", skills: frontendSkills },
            { title: "Backend Development", skills: backendSkills },
            { title: "Tools & Databases", skills: toolsSkills },
            { title: "UI/UX & Design", skills: uiSkills },
          ].map(({ title, skills }) => (
            <div key={title} className="space-y-6">
              <h3 className={`text-2xl font-semibold ${heading} mb-6`}>{title}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm font-mono font-medium shadow-md hover:shadow-lg transition-all duration-200 ${chip}`}
                    style={{ fontFamily: "'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
