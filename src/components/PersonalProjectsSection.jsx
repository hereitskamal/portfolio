import Image from "next/image";
import SplitText from "./SplitText";

const PersonalProjectsSection = () => {
  const personalProjects = [
    {
      name: "AI Resume Analyser",
      description:
        "AI-powered resume analysis tool with OpenAI integration that provides detailed feedback and improvement suggestions",
      technologies: ["Next.js", "MongoDB", "OpenAI API", "TypeScript"],
      link: "https://resume-analyser-xi.vercel.app",
      category: "AI Tool",
      views: "2.3k",
      featured: true,
      snapshot: "/resume_analyser_snapshot.png",
      type: "desktop"
    },
    {
      name: "Chatbot Builder",
      description:
        "Custom chatbot-building interface with intuitive drag-and-drop functionality for creating conversational flows",
      technologies: ["Next.js", "Tailwind CSS", "React Flow", "TypeScript"],
      link: "https://chatboatbuilder.vercel.app",
      category: "Development Tool",
      views: "1.8k",
      featured: false,
      snapshot: "/chatbot.png",
      type: "desktop"
    },
    {
      name: "FinoTrack PWA",
      description:
        "Progressive web app for comprehensive expense tracking with AI-powered financial insights and budgeting",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "PWA"],
      link: "https://finotrack.vercel.app/",
      category: "Finance App",
      views: "892",
      featured: false,
      snapshot: "/finotrack.jpg",
      type: "mobile"
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24 font-sans">
      <div className="w-full max-w-5xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-light">
              Personal Work
            </p>
            <SplitText
              text="Live Projects"
              className="text-5xl md:text-7xl font-bold text-black leading-none"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
            Interactive applications and tools built for real-world use,
            currently serving users worldwide.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {personalProjects.map((project, index) => (
            <div key={index} className="border-b border-gray-100 pb-20 last:border-b-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Project Content - Left Side */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-700 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 font-light text-sm">
                        {project.views} views
                      </p>
                      {project.type === "mobile" && (
                        <p className="text-gray-400 text-xs mt-1">PWA</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
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

                  {/* Link */}
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 transition-colors font-medium underline"
                    >
                      {project.type === "mobile" ? "Open PWA →" : "View Live Project →"}
                    </a>
                  </div>
                </div>

                {/* Project Visual - Right Side */}
                <div className="relative">
                  {project.type === "mobile" ? (
                    // Mobile PWA Display
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Simple Phone Frame */}
                        <div className="w-56 h-auto bg-black rounded-3xl p-1.5 shadow-lg">
                          <div className="w-full rounded-2xl overflow-hidden bg-white relative">
                            <Image
                              src={project.snapshot}
                              alt={`${project.name} Screenshot`}
                              width={224}
                              height={448}
                              className="w-full h-auto object-contain"
                              sizes="224px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Desktop Display
                    <div className="relative group">
                      <div className="bg-gray-50 rounded-lg p-3">
                        {/* Simple Browser Header */}
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-white rounded px-2 py-1">
                            <span className="text-xs text-gray-400">
                              {project.name.toLowerCase().replace(/\s+/g, '-')}.vercel.app
                            </span>
                          </div>
                        </div>
                        
                        {/* Screenshot */}
                        <div className="aspect-[4/3] rounded overflow-hidden relative">
                          <Image
                            src={project.snapshot}
                            alt={`${project.name} Screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="pt-16 border-t border-gray-100 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-black mb-1">3</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Live Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">5k+</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Total Views</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">1</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">PWA</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">2</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">AI-Powered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsSection;
