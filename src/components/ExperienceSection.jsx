import React from "react";
import SplitText from "../components/SplitText";
import { useTheme } from "../contexts/ThemeContext";

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();
  const experiences = [
    {
      company: "Galaxy Weblinks",
      position: "Senior Frontend Engineer",
      location: "Indore",
      duration: "Nov 2025 – Present",
      current: true,
      achievements: [
        "Migrating scalable Law Firm Management platform in Next.js for US client Thomson Reuters",
        "Built saleable Boat booking software for US client using Next.js, Tailwind CSS, and ShadCN"
      ]
    },
    {
      company: "Squadra Media",
      position: "Senior Frontend Developer",
      location: "Bengaluru",
      duration: "Oct 2024 – Oct 2025",
      current: false,
      achievements: [
        "Architected scalable LMS platform using React, TypeScript, and GraphQL serving 5,000+ users with 99.9% uptime",
        "Built responsive marketing site with Next.js and Framer Motion, achieving 95+ Lighthouse scores and 40% faster load times",
        "Led team of 3 frontend engineers, implementing CI/CD pipelines that reduced deployment time by 60%",
        "Enhanced performance by implementing lazy loading and code-splitting across routes and components"
      ]
    },
    {
      company: "Insignia Consultancy Solutions",
      position: "MERN Stack Developer",
      location: "Remote",
      duration: "Jan 2023 – Oct 2024",
      current: false,
      achievements: [
        "Designed advanced e-commerce features supporting product filtering for 500+ daily transactions",
        "Created 50+ reusable Storybook components, reducing development time by 30% across 8 projects",
        "Built universal dashboard with real-time analytics serving 10+ stakeholders, improving efficiency by 45%",
        "Refactored legacy codebase with TypeScript, improving application performance by 50% and reducing bugs"
      ]
    },
    {
      company: "VJ Smart Living",
      position: "Web Developer",
      location: "Bengaluru",
      duration: "Feb 2021 – Jan 2023",
      current: false,
      achievements: [
        "Developed IoT device dashboard controlling 80+ devices with mobile optimization and 98% user satisfaction",
        "Built CRM/ERP system with role-based access serving 200+ users, reducing manual workflows by 70%",
        "Automated alert workflows using WebSocket and Node.js, decreasing response times by 80%"
      ]
    }
  ];

  const bg = isDarkMode ? "bg-[#0a0a0a]" : "bg-white";
  const heading = isDarkMode ? "text-white" : "text-black";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";
  const company = isDarkMode ? "text-gray-300" : "text-gray-700";
  const meta = isDarkMode ? "text-gray-500" : "text-gray-500";
  const border = isDarkMode ? "border-gray-800" : "border-gray-100";
  const achievement = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`min-h-screen ${bg} py-24 font-sans transition-colors duration-300`}>
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-40">
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-light">
              Professional Journey
            </p>
            <SplitText
              text="Experience"
              className={`text-5xl md:text-8xl font-bold ${heading} leading-none`}
            />
          </div>
          <p className={`text-base md:text-lg ${sub} max-w-2xl leading-relaxed font-light`}>
            5+ years building scalable web applications and leading development teams
            across LegalTech, EdTech, IoT, and e-commerce domains.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-10 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`border-b ${border} pb-10 md:pb-28 last:border-b-0`}>

              {/* ── Mobile header ── */}
              <div className="md:hidden mb-4">
                {/* Meta row: duration · location · badge */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-light ${meta}`}>{exp.duration}</span>
                  <span className={isDarkMode ? "text-gray-700" : "text-gray-300"}>·</span>
                  <span className="text-xs text-gray-400">{exp.location}</span>
                  {exp.current && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                      Now
                    </span>
                  )}
                </div>
                <h3 className={`text-2xl font-bold ${heading} leading-tight mb-1`}>{exp.position}</h3>
                <p className={`text-sm font-medium ${company}`}>{exp.company}</p>
              </div>

              {/* ── Desktop header ── */}
              <div className="hidden md:flex md:items-baseline justify-between mb-8">
                <div>
                  <h3 className={`text-4xl font-black ${heading} mb-1`}>{exp.position}</h3>
                  <p className={`text-xl ${company} font-medium`}>{exp.company}</p>
                </div>
                <div className="text-right shrink-0 ml-8">
                  <p className={`${meta} font-light`}>{exp.duration}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  {exp.current && <p className={`${heading} text-sm font-medium mt-1`}>Current</p>}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2.5 mt-4 md:mt-0">
                {exp.achievements.map((a, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className={`text-gray-400 shrink-0 mt-px text-sm`}>—</span>
                    <p className={`text-sm md:text-base ${achievement} leading-relaxed`}>{a}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`mt-20 pt-16 border-t ${border}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[["5+", "Years Experience"], ["20+", "Projects Delivered"], ["4", "Companies"]].map(([v, l]) => (
              <div key={l}>
                <p className={`stat-num text-8xl ${heading} mb-2`}>{v}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
