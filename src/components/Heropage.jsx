import React from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const Homepage = () => {
  const { isDarkMode } = useTheme();

  const bg      = isDarkMode ? "bg-[#0a0a0a]"  : "bg-white";
  const fg      = isDarkMode ? "text-white"     : "text-black";
  const muted   = isDarkMode ? "text-gray-400"  : "text-gray-500";
  const border  = isDarkMode ? "border-gray-800": "border-gray-200";
  const line    = isDarkMode ? "bg-gray-700"    : "bg-gray-300";
  const nameFont = { fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em", lineHeight: 0.86 };

  return (
    <div className={`font-sans ${bg} transition-colors duration-300`}>

      {/* ───────────────── DESKTOP ───────────────── */}
      <div className="hidden md:flex min-h-[calc(100vh-75px)] items-center">
        <div className="w-full max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-5 gap-16 items-center">

            {/* LEFT — content */}
            <div className="col-span-3 flex flex-col gap-9">

              {/* Greeting */}
              <p className={`text-sm font-light tracking-wide ${muted}`}>Hey, I&apos;m a Sr. Full Stack Developer</p>

              {/* Name block */}
              <div>
                <h1
                  className={`font-black ${fg}`}
                  style={{ ...nameFont, fontSize: "clamp(3.6rem, 8.5vw, 6.8rem)" }}
                >
                  Kamal<br />Sharma.
                </h1>

                {/* Role line */}
                <div className={`flex items-center gap-3 mt-5 ${muted}`}>
                  <div className={`h-px w-8 shrink-0 ${line}`} />
                  <span className="text-sm font-light tracking-wide">
                    Senior Full Stack Developer · MERN · React · Next.js
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className={`${muted} text-base leading-relaxed max-w-sm font-light`}>
                Building fast, scalable web applications with exceptional UX
                for clients across the globe.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3">
                <button
                  className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Get In Touch
                </button>
                <a
                  href="/Kamal_Sharma_Resume.pdf"
                  download
                  className={`px-7 py-3 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2 ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:bg-white/5"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>

              {/* Stats row */}
              <div className={`grid grid-cols-3 border-t border-b ${border} py-6`}>
                {[
                  ["5+",   "Years experience"],
                  ["20+",  "Projects delivered"],
                  ["100%", "Client success rate"],
                ].map(([val, label], i) => (
                  <div
                    key={label}
                    className={`flex flex-col gap-1 ${i > 0 ? `pl-8 border-l ${border}` : "pr-8"}`}
                  >
                    <p className={`stat-num text-4xl ${fg} leading-none`}>{val}</p>
                    <p className={`text-[11px] ${muted} font-light tracking-widest uppercase`}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — photo */}
            <div className="col-span-2 h-full flex justify-center items-center">
              <div className="relative w-full max-w-[420px]">
                <div className="relative aspect-[5/6] overflow-hidden">
                  <Image
                    src="/kamal.jpg"
                    alt="Kamal Sharma"
                    fill
                    className={`hidden md:block flip-vertical object-cover object-top ${isDarkMode ? "invert opacity-75" : ""}`}
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ───────────────── MOBILE ───────────────── */}
      <div className="md:hidden flex flex-col px-5 pt-10 pb-28">

        {/* Greeting */}
        <p className={`text-sm font-light tracking-wide ${muted} mb-7`}>Hey, I&apos;m a Sr. Full Stack Developer</p>

        {/* Name */}
        <h1
          className={`font-bold ${fg} mb-5`}
          style={{ ...nameFont, fontSize: "clamp(5rem, 14vw, 4.5rem)" }}
        >
          Kamal<br />Sharma.
        </h1>

        {/* Role */}
        <div className={`flex items-center gap-2.5 ${muted} mb-2`}>
          <div className={`h-px w-6 shrink-0 ${line}`} />
          <span className="text-xs font-light tracking-wide">Senior Full Stack Developer</span>
        </div>

        {/* Photo */}
        <div className="relative w-[70%] aspect-[4/5] rounded-2xl overflow-hidden mb-2 flex mx-auto">
          <Image
            src="/kamal.jpg"
            alt="Kamal Sharma"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Bio */}
        <p className={`${muted} text-sm leading-relaxed mb-7 font-light`}>
          Building fast, scalable web apps with exceptional UX for companies across the globe.
        </p>

        {/* Buttons — full width side by side */}
        <div className="flex gap-3 mb-8">
          <button
            className={`flex-1 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isDarkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Get In Touch
          </button>
          <a
            href="/Kamal_Sharma_Resume.pdf"
            download
            className={`flex-1 py-3.5 rounded-full text-sm font-medium border text-center transition-all duration-300 ${
              isDarkMode ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-700"
            }`}
          >
            Resume ↓
          </a>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 border-t border-b ${border} py-5`}>
          {[
            ["5+",   "Years exp."],
            ["20+",  "Projects"],
            ["100%", "Success"],
          ].map(([val, label], i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 ${i > 0 ? `border-l ${border}` : ""}`}
            >
              <p className={`stat-num text-2xl ${fg} leading-none`}>{val}</p>
              <p className={`text-[10px] ${muted} uppercase tracking-widest font-light`}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Homepage;
