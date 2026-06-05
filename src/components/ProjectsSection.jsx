import React from "react";
import SplitText from "../components/SplitText";
import { useTheme } from "../contexts/ThemeContext";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const mainProjects = [
    {
      name: "Law Firm Management Platform",
      description: "Migrating a scalable law firm management system for US client Thomson Reuters. Complex legal workflows, document handling, and role-based access built with Next.js.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      metrics: "Enterprise · US client · Thomson Reuters",
      category: "Thomson Reuters",
      company: "Galaxy Weblinks"
    },
    {
      name: "E-Learning Platform (LYNQ)",
      description: "Architected a scalable LMS platform with user subscriptions, payment integration, and 99.9% uptime. Built with server-side rendering for performance and SEO.",
      technologies: ["React", "TypeScript", "GraphQL", "Node.js", "MongoDB", "AWS"],
      metrics: "5,000+ users · 99.9% uptime · subscriptions & payments",
      category: "EdTech SaaS",
      company: "Squadra Media"
    },
    {
      name: "Marketing Website",
      description: "Responsive marketing site with advanced animations achieving 95+ Lighthouse performance scores and 40% faster load times than the previous version.",
      technologies: ["Next.js", "Framer Motion", "TypeScript"],
      metrics: "95+ Lighthouse · 40% faster loads",
      category: "Marketing",
      company: "Squadra Media"
    },
    {
      name: "E-Commerce Platform",
      description: "Advanced e-commerce solution with multi-filter product discovery, cart management, and checkout flows supporting 500+ daily transactions.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      metrics: "500+ daily transactions · advanced filtering",
      category: "E-Commerce",
      company: "Insignia Consultancy"
    },
    {
      name: "Component Library",
      description: "Built 50+ reusable, documented Storybook components used across 8 projects, reducing feature development time by 30% across the organisation.",
      technologies: ["React", "TypeScript", "Storybook", "Styled Components"],
      metrics: "50+ components · 8 projects · 30% dev time saved",
      category: "Design System",
      company: "Insignia Consultancy"
    },
    {
      name: "Universal Dashboard",
      description: "Real-time analytics platform serving 10+ stakeholders with live insights across 1M+ datapoints. Refactored legacy code with TypeScript, improving performance by 50%.",
      technologies: ["React", "D3.js", "Express", "Node.js", "MongoDB"],
      metrics: "1M+ datapoints · 45% efficiency gain · 50% perf improvement",
      category: "Analytics",
      company: "Insignia Consultancy"
    },
    {
      name: "CRM / ERP System",
      description: "Role-based CRM and ERP platform serving 200+ users with workflow automation, reporting dashboards, and access control. Reduced manual workflows by 70%.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      metrics: "200+ users · 70% workflow reduction",
      category: "Enterprise",
      company: "VJ Smart Living"
    },
    {
      name: "Smart Home IoT Platform",
      description: "IoT device management system controlling 80+ smart devices with real-time WebSocket alerts, mobile-first design, and offline support. 98% user satisfaction.",
      technologies: ["React", "Node.js", "Socket.io", "WebSocket", "MongoDB"],
      metrics: "80+ devices · 98% satisfaction · offline support",
      category: "IoT Platform",
      company: "VJ Smart Living"
    }
  ];

  const bg = isDarkMode ? "bg-[#111111]" : "bg-gray-50";
  const heading = isDarkMode ? "text-white" : "text-black";
  const sub = isDarkMode ? "text-gray-400" : "text-gray-600";
  const desc = isDarkMode ? "text-gray-400" : "text-gray-600";
  const tech = isDarkMode ? "text-gray-400" : "text-gray-600";
  const border = isDarkMode ? "border-gray-800" : "border-gray-100";

  return (
    <div className={`min-h-screen ${bg} py-24 font-sans transition-colors duration-300`}>
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-light">
              Featured Work
            </p>
            <SplitText
              text="Projects"
              className={`text-6xl md:text-8xl font-bold ${heading} leading-none`}
            />
          </div>
          <p className={`md:text-lg ${sub} max-w-2xl leading-relaxed font-light`}>
            Production systems built across LegalTech, EdTech, IoT, e-commerce, and
            enterprise — serving thousands of users for clients in the US and India.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-20 md:mb-32">
          <h3 className={`text-sm uppercase tracking-widest text-gray-400 mb-12 md:mb-20`}>Professional Projects</h3>
          <div className="space-y-10 md:space-y-16">
            {mainProjects.map((project, index) => (
              <div key={index} className={`border-b ${border} pb-10 md:pb-28 last:border-b-0`}>

                {/* ── Mobile layout ── */}
                <div className="md:hidden mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500 font-light">{project.category}</span>
                    {project.company && (
                      <>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <span className="text-xs text-gray-400 font-light">{project.company}</span>
                      </>
                    )}
                  </div>
                  <h4 className={`text-2xl font-semibold ${heading} leading-tight mb-3`}>{project.name}</h4>
                  <p className={`text-sm ${desc} leading-relaxed mb-3`}>{project.description}</p>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className={`text-xs ${tech} font-light`}>
                        {t}{idx < project.technologies.length - 1 && " /"}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-light">{project.metrics}</p>
                </div>

                {/* ── Desktop layout ── */}
                <div className="hidden md:block">
                  <div className="flex md:items-baseline justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h4 className={`text-4xl font-semibold ${heading} mb-8`}>{project.name}</h4>
                      <p className={`${desc} leading-relaxed max-w-2xl`}>{project.description}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className="text-sm text-gray-500 font-light block">{project.category}</span>
                      {project.company && (
                        <span className="text-xs text-gray-400 font-light">{project.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className={`text-sm ${tech} font-light`}>
                        {t}{idx < project.technologies.length - 1 && " / "}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-light">{project.metrics}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`pt-16 border-t ${border}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["50+", "Projects Delivered"], ["20+", "Technologies"], ["5k+", "Users Served"], ["5+", "AI Projects"]].map(([v, l]) => (
              <div key={l}>
                <p className={`stat-num text-5xl ${heading} mb-1`}>{v}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wide">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;