import React from "react";
import Image from "next/image";
import SplitText from "../components/SplitText";

const Homepage = () => {
  return (
    <div className="min-h-screen md:min-h-[calc(100vh-75px)] font-sans bg-white text-gray-900 flex items-center py-10 md:py-0">
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 items-center">

          {/* Main Content */}
          <div className="md:col-span-2 space-y-5 md:space-y-12">
            <div>
              <p className="text-gray-400 mb-4 font-light tracking-wide text-xs md:text-sm uppercase">
                Hello, Welcome
              </p>

              <SplitText
                text="I'm Kamal"
                className="text-6xl md:text-9xl font-bold leading-none mb-4 md:mb-8 text-black"
              />

              {/* Mobile image — visible right after the name */}
              <div className="md:hidden flex justify-center my-5">
                <div className="relative w-40 h-52 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/kamal.png"
                    alt="Kamal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <h2 className="text-sm md:text-3xl font-light text-gray-600 mb-5 md:mb-12 leading-relaxed">
                Senior Full Stack Developer · MERN · React · Next.js
              </h2>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <button className="bg-black hover:bg-gray-800 px-6 py-2.5 md:px-10 md:py-4 rounded-full font-medium transition-all duration-300 text-white text-sm md:text-lg">
                  Get In Touch
                </button>
                <a
                  href="/Kamal_Sharma_Resume.pdf"
                  download
                  className="border border-black text-black hover:bg-gray-50 px-6 py-2.5 md:px-10 md:py-4 rounded-full font-medium transition-all duration-300 text-sm md:text-lg flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-center md:text-left max-w-lg">
                I create fast & modern interface designs with exceptional UX
                knowledge for companies across the globe.
              </p>
            </div>

            {/* Stats — mobile only, shown below description */}
            <div className="md:hidden grid grid-cols-3 gap-4 text-center pt-2 pb-4">
              <div>
                <div className="text-2xl font-bold text-black mb-1">5+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black mb-1">100%</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black mb-1">50+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Side — desktop only */}
          <div className="hidden md:flex flex-col items-center space-y-12">
            <div className="relative flex items-center">
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

            <div className="grid grid-cols-3 gap-8 text-center w-full">
              <div>
                <div className="text-3xl font-bold text-black mb-2">5+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Success</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;
