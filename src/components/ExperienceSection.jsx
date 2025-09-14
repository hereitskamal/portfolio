import React from "react";
import SplitText from "../components/SplitText";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Squadra Media",
      position: "Senior Frontend Developer",
      location: "Bengaluru",
      duration: "Oct 2024 – Present",
      current: true,
      achievements: [
        "Architected a scalable LMS platform using React, TypeScript, GraphQL, Node.js and Tailwind CSS, tailored for learning flows",
        "Built a dynamic & responsive marketing site with Next.js and Framer Motion; achieved excellent PSI and Lighthouse scores",
        "Led and mentored a team of 3 frontend engineers, streamlining development through reviews and CI/CD integration",
        "Enhanced performance by implementing lazy loading and code-splitting across routes and components"
      ]
    },
    {
      company: "Insignia Consultancy Solutions",
      position: "MERN Stack Developer",
      location: "Remote",
      duration: "Jan 2024 – Oct 2024",
      current: false,
      achievements: [
        "Designed and implemented advanced e-commerce features to support product filtering, and user dashboards",
        "Created 50+ reusable components with Storybook, improving consistency across modules and accelerating team velocity",
        "Built a cross-platform universal dashboard showing real-time analytics and activity logs for internal stakeholders",
        "Refactored legacy frontend and backend code for better maintainability, security, and developer experience"
      ]
    },
    {
      company: "VJ Smart Living",
      position: "Web Developer",
      location: "Bengaluru",
      duration: "Feb 2021 – Jan 2024",
      current: false,
      achievements: [
        "Developed a modern dashboard (Front-end + Back-end) for controlling IoT devices, optimized for mobile and tablet views",
        "Built a CRM, ERP system for sales and support teams with role-based access and ticket management workflows",
        "Automated device and alert workflows using WebSocket and backend triggers to reduce repetitive manual work"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24 font-sans">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
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
            across EdTech, IoT, and e-commerce domains.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-100 pb-16 last:border-b-0">
              {/* Position & Company */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-2xl font-bold text-black mb-1">
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
              <div className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
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
              <p className="text-3xl font-bold text-black mb-2">5+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black mb-2">50+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black mb-2">3</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
