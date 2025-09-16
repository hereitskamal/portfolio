import React from "react";
import Image from "next/image";
import SplitText from "../components/SplitText";
import AboutSkills from "../components/Skills";

const Homepage = () => {
  return (
    <div className="min-h-[calc(100vh-75px)] font-sans bg-white text-gray-900 flex items-center">
      {/* Main Content - Centered Layout */}
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* Left Side - Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <p className="text-gray-400 mb-6 font-light tracking-wide text-sm uppercase">
                Hello, Welcome
              </p>

              <SplitText
                text="I'm Kamal"
                className="text-7xl md:text-9xl font-bold leading-none mb-8 text-black"
              />

              <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-12 leading-relaxed">
                Full Stack Developer crafting digital experiences
              </h2>

              <button className="bg-black hover:bg-gray-800 px-10 py-4 rounded-full font-medium transition-all duration-300 text-white text-lg">
                Get In Touch
              </button>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
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
