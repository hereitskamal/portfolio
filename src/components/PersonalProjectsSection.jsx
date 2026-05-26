import { useState, useEffect, useRef } from "react";
import SplitText from "./SplitText";

const DESKTOP_W = 1280;
const DESKTOP_H = 800;
const MOBILE_W = 390;
const MOBILE_H = 844;
const PHONE_INNER_W = 212;
const MOBILE_SCALE = PHONE_INNER_W / MOBILE_W;

const MacbookPreview = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const screenRef = useRef(null);
  const [scale, setScale] = useState(0.35);

  useEffect(() => {
    const update = () => {
      if (screenRef.current) {
        setScale(screenRef.current.offsetWidth / DESKTOP_W);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (screenRef.current) ro.observe(screenRef.current);
    return () => ro.disconnect();
  }, []);

  const containerH = Math.round(DESKTOP_H * scale);

  return (
    <div className="w-full select-none">
      {/* Lid — thin top bezel */}
      <div
        style={{
          background: "linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)",
          borderRadius: "10px 10px 0 0",
          padding: "6px 6px 0",
          boxShadow: "inset 0 0 0 1px #3a3a3c, 0 20px 50px rgba(0,0,0,0.3)",
          
        }}
      >
        {/* Screen with notch overlay */}
        <div
          ref={screenRef}
          style={{
            background: "#000",
            borderRadius: "3px 3px 0 0",
            overflow: "hidden",
            height: containerH,
            position: "relative",
          }}
        >
          {/* Notch — overlays the screen at the top center */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "16%",
              height: 16,
              background: "#1c1c1e",
              borderRadius: "0 0 8px 8px",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                background: "#3a3a3c",
                borderRadius: "50%",
                border: "1px solid #525254",
              }}
            />
          </div>
          {!loaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  border: "2px solid #444",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                }}
              />
            </div>
          )}
          <iframe
            src={src}
            title={title}
            style={{
              width: DESKTOP_W,
              height: DESKTOP_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              border: "none",
              display: "block",
            }}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      {/* Hinge strip */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(180deg, #48484a, #3a3a3c)",
          borderLeft: "1px solid #3a3a3c",
          borderRight: "1px solid #3a3a3c",
        }}
      />

      {/* Base / keyboard deck — slim */}
      <div
        style={{
          height: 14,
          background: "linear-gradient(180deg, #d2d2d2 0%, #b8b8b8 55%, #a8a8a8 100%)",
          borderRadius: "0 0 6px 6px",
          border: "1px solid #aaa",
          borderTop: "none",
          boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
        }}
      />

      {/* Bottom shadow strip */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(180deg, #9a9a9a, transparent)",
          borderRadius: "0 0 4px 4px",
        }}
      />

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

const PhonePreview = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const containerH = Math.round(MOBILE_H * MOBILE_SCALE);

  return (
    <div className="flex justify-center">
      <div
        style={{
          width: 224,
          background: "linear-gradient(160deg, #2e2e30, #1c1c1e)",
          borderRadius: 36,
          padding: "4px 6px 10px",
          boxShadow: "inset 0 0 0 1px #3a3a3c, 0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Screen — flush to thin bezel */}
        <div
          style={{
            width: PHONE_INNER_W,
            height: containerH,
            borderRadius: 32,
            overflow: "hidden",
            background: "#000",
            position: "relative",
          }}
        >
          {/* Notch — pill overlay matching frame color */}
          <div
            style={{
              position: "absolute",
              top: 7,
              left: "50%",
              transform: "translateX(-50%)",
              width: 66,
              height: 13,
              background: "#1c1c1e",
              borderRadius: 8,
              zIndex: 20,
            }}
          />

          {!loaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  border: "2px solid #444",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                }}
              />
            </div>
          )}
          <iframe
            src={src}
            title={title}
            style={{
              width: MOBILE_W,
              height: MOBILE_H,
              transform: `scale(${MOBILE_SCALE})`,
              transformOrigin: "top left",
              border: "none",
              display: "block",
            }}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* Home bar */}
        <div
          style={{
            width: 72,
            height: 4,
            background: "#48484a",
            borderRadius: 2,
            margin: "6px auto 0",
          }}
        />
      </div>
    </div>
  );
};

const PersonalProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const personalProjects = [
    {
      name: "Gaia Trails",
      description:
        "Responsive travel and trail admin + client web application with full-stack Next.js — explore trails, manage destinations, and book adventures",
      technologies: ["Next.js", "Tailwind CSS", "Full Stack"],
      link: "https://gaia-trails.vercel.app/",
      category: "Travel App",
      type: "desktop",
    },
    {
      name: "The Earthy Touch",
      description:
        "Full ecommerce platform for interior artifacts with product catalog, admin dashboard, and seamless checkout powered by Supabase",
      technologies: ["Next.js", "Supabase", "Full Stack", "Admin Panel"],
      link: "https://theearthytouch.vercel.app/",
      category: "E-Commerce",
      type: "desktop",
    },
    {
      name: "AI Resume Analyser",
      description:
        "AI-powered resume analysis tool with OpenAI integration that provides detailed feedback and improvement suggestions",
      technologies: ["Next.js", "MongoDB", "OpenAI API", "TypeScript"],
      link: "https://resume-analyser-xi.vercel.app",
      category: "AI Tool",
      type: "desktop",
    },
    {
      name: "Chatbot Builder",
      description:
        "Custom chatbot-building interface with intuitive drag-and-drop functionality for creating conversational flows",
      technologies: ["Next.js", "Tailwind CSS", "React Flow", "TypeScript"],
      link: "https://chatboatbuilder.vercel.app",
      category: "Development Tool",
      type: "desktop",
    },
    {
      name: "FinoTrack",
      description:
        "Personal finance management PWA with mobile-first UI, expense tracking, and financial insights powered by Supabase PostgreSQL",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "PWA"],
      link: "https://finotrack.vercel.app/",
      category: "Finance App",
      type: "mobile",
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
            <div
              key={index}
              className="border-b border-gray-100 pb-20 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {project.name}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-sm text-gray-600 font-light">
                        {tech}
                        {idx < project.technologies.length - 1 && " / "}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 transition-colors font-medium underline"
                    >
                      {project.type === "mobile"
                        ? "Open PWA →"
                        : "View Live Project →"}
                    </a>
                  </div>
                </div>

                {/* Device Frame — 3D tilt + hover lift */}
                <div
                  style={{ position: "relative" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
                      transform:
                        hoveredIndex === index
                          ? "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px)"
                          : "perspective(1000px) rotateX(4deg) rotateY(-8deg)",
                    }}
                  >
                    {project.type === "mobile" ? (
                      <PhonePreview src={project.link} title={project.name} />
                    ) : (
                      <MacbookPreview src={project.link} title={project.name} />
                    )}
                  </div>

                  {/* Visit Site overlay */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: hoveredIndex === index ? "auto" : "none",
                      zIndex: 30,
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: 600,
                        background: "rgba(0,0,0,0.55)",
                        padding: "10px 26px",
                        borderRadius: 30,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        transition: "transform 0.3s ease",
                        transform: hoveredIndex === index ? "translateY(0)" : "translateY(10px)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Visit Site →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="pt-16 border-t border-gray-100 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-black mb-1">5</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">Live Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black mb-1">Full Stack</p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">2 Apps</p>
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
