import React from "react";
import SplitText from "../components/SplitText";

const ExperienceSection = () => {
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

  return (
    <div className="min-h-screen bg-white py-24 font-sans">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-40">
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-light">
              Professional Journey
            </p>
            <SplitText
              text="Experience"
              className="text-6xl md:text-8xl font-bold text-black leading-none"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
            5+ years building scalable web applications and leading development teams
            across LegalTech, EdTech, IoT, and e-commerce domains.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-100 pb-28 last:border-b-0">
              {/* Position & Company */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-4xl font-semibold text-black mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-gray-700 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 font-light">
                    {exp.duration}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {exp.location}
                  </p>
                  {exp.current && (
                    <p className="text-black text-sm font-medium mt-1">
                      Current
                    </p>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <p key={idx} className="text-gray-700 ">
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-8xl font-bold text-black mb-2">5+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</p>
            </div>
            <div>
              <p className="text-8xl font-bold text-black mb-2">20+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Projects Delivered</p>
            </div>
            <div>
              <p className="text-8xl font-bold text-black mb-2">4</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
