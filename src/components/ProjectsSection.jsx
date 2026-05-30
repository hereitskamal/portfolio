import React from "react";
import SplitText from "../components/SplitText";

const ProjectsSection = () => {
  const mainProjects = [
    {
      name: "E-Learning Platform (LYNQ)",
      description: "Architected a scalable LMS platform with user subscriptions, payment integration, and 99.9% uptime. Built with server-side rendering for performance and SEO.",
      technologies: ["React", "TypeScript", "GraphQL", "Node.js", "MongoDB", "AWS"],
      metrics: "5,000+ users · subscriptions · payments",
      category: "SaaS Platform",
      link: "#"
    },
    {
      name: "Universal Dashboard",
      description: "Real-time analytics dashboard serving 10+ stakeholders with live data visualisation across 1M+ datapoints. Improved operational efficiency by 45%.",
      technologies: ["React", "D3.js", "Express", "Node.js", "MongoDB"],
      metrics: "1M+ datapoints · 10+ stakeholders · 45% efficiency gain",
      category: "Analytics",
      link: "#"
    },
    {
      name: "Smart Home Platform",
      description: "IoT device management system controlling 80+ devices with mobile-first design, offline support, and WebSocket-powered real-time alerts. Achieved 98% user satisfaction.",
      technologies: ["React", "Node.js", "Socket.io", "WebSocket", "MongoDB"],
      metrics: "80+ devices · offline support · 98% satisfaction",
      category: "IoT Platform",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24 font-sans">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-light">
              Featured Work
            </p>
            <SplitText
              text="Projects"
              className="text-6xl md:text-8xl font-bold text-black leading-none"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
            A selection of projects spanning SaaS platforms, analytics dashboards, 
            IoT systems, and AI-powered tools.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-black mb-12">Professional Projects</h3>
          
          <div className="space-y-16">
            {mainProjects.map((project, index) => (
              <div key={index} className="border-b border-gray-100 pb-16 last:border-b-0">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-black mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 font-light">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-gray-600 font-light"
                      >
                        {tech}{idx < project.technologies.length - 1 && " / "}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <p className="text-sm text-gray-500 font-light">
                  {project.metrics}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-black mb-1">50+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">20+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Technologies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">5k+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Users Served</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">5+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">AI Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;