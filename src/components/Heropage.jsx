import React from "react";
import Image from "next/image";
import SplitText from "../components/SplitText";

const Homepage = () => {
  return (
    <div className="font-sans bg-white text-gray-900 md:min-h-[calc(100vh-75px)] md:flex md:items-center">
      <div className="w-full max-w-6xl mx-auto">

        {/* Desktop layout: side-by-side grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-16 md:items-center md:px-8">
          {/* Left: text */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <p className="text-gray-400 mb-6 font-light tracking-wide text-sm uppercase">
                Hello, Welcome
              </p>
              <SplitText
                text="I'm Kamal"
                className="text-9xl font-bold leading-none mb-8 text-black"
              />
              <h2 className="text-3xl font-light text-gray-600 mb-12 leading-relaxed">
                Senior Full Stack Developer · MERN · React · Next.js
              </h2>
              <div className="flex gap-4">
                <button className="bg-black hover:bg-gray-800 px-10 py-4 rounded-full font-medium transition-all duration-300 text-white text-lg">
                  Get In Touch
                </button>
                <a
                  href="/Kamal_Sharma_Resume.pdf"
                  download
                  className="border border-black text-black hover:bg-gray-50 px-10 py-4 rounded-full font-medium transition-all duration-300 text-lg flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
              I create fast & modern interface designs with exceptional UX
              knowledge for companies across the globe.
            </p>
          </div>

          {/* Right: image + stats */}
          <div className="flex flex-col items-center space-y-12">
            <div className="relative w-72 h-96 rounded-3xl overflow-hidden">
              <Image src="/kamal.png" alt="Kamal" fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-3 gap-8 text-center w-full">
              {[["5+", "Years"], ["100%", "Success"], ["50+", "Projects"]].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-black mb-2">{v}</div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout: stacked */}
        <div className="md:hidden flex flex-col">
          {/* Greeting + Name */}
          <div className="px-5 pt-8 pb-5">
            <p className="text-gray-400 mb-4 font-light tracking-widest text-xs uppercase">
              Hello, Welcome
            </p>
            <SplitText
              text="I'm Kamal"
              className="text-6xl font-bold leading-none text-black"
            />
          </div>

          {/* Full-width image — no border, no radius */}
          <div className="relative w-full h-72">
            <Image
              src="/kamal.png"
              alt="Kamal"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Text + buttons below image */}
          <div className="px-5 pt-5 pb-24 space-y-5">
            <h2 className="text-sm font-light text-gray-500 leading-relaxed">
              Senior Full Stack Developer · MERN · React · Next.js
            </h2>

            {/* Buttons: flex row */}
            <div className="flex gap-3">
              <button className="flex-1 bg-black hover:bg-gray-800 px-4 py-2.5 rounded-full font-medium transition-all duration-300 text-white text-sm text-center">
                Get In Touch
              </button>
              <a
                href="/Kamal_Sharma_Resume.pdf"
                download
                className="flex-1 border border-black text-black hover:bg-gray-50 px-4 py-2.5 rounded-full font-medium transition-all duration-300 text-sm flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm">
              I create fast & modern interface designs with exceptional UX
              knowledge for companies across the globe.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
              {[["5+", "Years"], ["100%", "Success"], ["50+", "Projects"]].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-black">{v}</div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
