import React from "react";
import Image from "next/image";
import SplitText from "../components/SplitText";
import AboutSkills from "../components/Skills";

const Homepage = () => {
  return (
    <div className="min-h-screen md:min-h-[calc(100vh-75px)] font-sans bg-white text-gray-900 flex items-center">
      {/* Main Content - Centered Layout */}
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* Left Side - Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <p className="text-gray-400 mb-6 mt-5 md:mt-0 font-light tracking-wide text-sm uppercase">
                Hello, Welcome
              </p>

              <SplitText
                text="I'm Kamal"
                className="text-6xl md:text-9xl font-bold leading-none mb-4 md:mb-8 text-black"
              />

              <h2 className=" md:text-3xl font-light text-gray-600 mb-12 leading-relaxed">
                Senior Full Stack Developer · MERN · React · Next.js
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
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

            <div className="pt-8">
              <p className="text-gray-600 leading-relaxed text-lg text-center md:text-left max-w-lg">
                I create fast & modern interface designs with exceptional UX
                knowledge for companies across the globe.
              </p>
            </div>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="flex flex-col items-center space-y-12">
            {/* Image with Curly Braces */}
            <div className="relative flex items-center">
              {/* Image */}
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/kamal.png"
                  alt="Kamal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center w-full">
              <div>
                <div className="text-3xl font-bold text-black mb-2">5+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Years
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Success
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
