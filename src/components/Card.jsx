"use client";
import { useState, useEffect, useRef } from "react";

const HangingIDCard = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const animationRef = useRef(null);
  const velocityRef = useRef({ rotation: 0, swing: 0 });
  const positionRef = useRef({ rotation: 0, swing: 0 });

  useEffect(() => {
    let time = 0;

    const animate = () => {
      time += 0.016; // ~60fps

      // Natural pendulum motion with damping
      const naturalSwing = Math.sin(time * 0.8) * 2; // Base swaying motion
      const naturalRotation = Math.cos(time * 0.6) * 1; // Base rotation

      // Mouse influence (when hovered)
      let mouseInfluence = { swing: 0, rotation: 0 };
      if (isHovered && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (mousePos.x - centerX) * 0.02;
        const deltaY = (mousePos.y - centerY) * 0.01;

        mouseInfluence.swing = deltaX;
        mouseInfluence.rotation = deltaX * 0.5 + deltaY * 0.3;
      }

      // Physics simulation with spring damping
      const springForce = 0.95;
      const damping = 0.98;

      // Calculate target positions
      const targetSwing = naturalSwing + mouseInfluence.swing;
      const targetRotation = naturalRotation + mouseInfluence.rotation;

      // Apply spring physics
      velocityRef.current.swing +=
        (targetSwing - positionRef.current.swing) * 0.02;
      velocityRef.current.rotation +=
        (targetRotation - positionRef.current.rotation) * 0.02;

      // Apply damping
      velocityRef.current.swing *= damping;
      velocityRef.current.rotation *= damping;

      // Update positions
      positionRef.current.swing += velocityRef.current.swing;
      positionRef.current.rotation += velocityRef.current.rotation;

      // Apply transforms
      if (cardRef.current) {
        const lanyard = cardRef.current.querySelector(".lanyard");
        const card = cardRef.current.querySelector(".id-card");

        if (lanyard && card) {
          lanyard.style.transform = `rotate(${
            positionRef.current.swing * 0.3
          }deg)`;
          card.style.transform = `
            translateX(${positionRef.current.swing * 3}px) 
            rotate(${positionRef.current.rotation}deg)
            rotateY(${positionRef.current.swing * 0.5}deg)
          `;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, mousePos]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
    >
      {/* Hanging Point */}
      <div >
        {/* Complete ID Card System */}
        <div
          ref={cardRef}
          className="absolute z-10 top-0 left-1/2 -translate-x-1/2 transform  origin-top"
          style={{
            transformOrigin: "center top",
            perspective: "1000px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Lanyard */}
          <div
            className="lanyard absolute top-0 left-1/2 transform -translate-x-1/2 origin-top"
            style={{
              transformOrigin: "center top",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Lanyard Strap */}
            <div
              className="w-6 bg-blue-500 mx-auto relative shadow-lg h-[200px]"
            >
              {/* Lanyard Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-white text-xs font-bold tracking-wider transform -rotate-90 whitespace-nowrap"
                  style={{ fontSize: "8px" }}
                >
                  Squadra media
                </div>
              </div>

              {/* Lanyard Texture Lines */}
              <div className="absolute inset-0 flex flex-col justify-evenly">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-px bg-blue-400 opacity-30"></div>
                ))}
              </div>
            </div>
          </div>

          {/* ID Card */}
          <div
            className="id-card mt-36 w-80 h-48 bg-white rounded-lg shadow-2xl relative overflow-hidden"
            style={{
              transformOrigin: "center top",
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))",
            }}
          >
            {/* Card Clip Attachment Area */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-white to-gray-100 rounded-t-lg shadow-lg border-l border-r border-t border-gray-300">
              {/* Reinforced attachment point */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-radial from-gray-100 to-gray-200 rounded-full border-2 border-gray-400 shadow-inner">
                <div className="absolute inset-1 border border-gray-300 rounded-full bg-white"></div>
                {/* Actual hole where clip goes */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-inner"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #666",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
                  }}
                ></div>
              </div>
            </div>

            {/* Card Content */}
            <div className="relative h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-16 flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <div className="text-white font-bold text-lg">squadra</div>
                </div>
                <div className="text-white text-xs opacity-80">
                  Design Partners For You
                </div>
              </div>

              {/* Main Content */}
              <div className="p-4 flex space-x-4 h-32">
                {/* Profile Photo */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    {/* Simplified avatar representation */}
                    <div className="w-12 h-12 bg-gray-600 rounded-full relative">
                      <div className="absolute top-2 left-3 w-6 h-6 bg-gray-500 rounded-full"></div>
                      <div className="absolute bottom-0 left-1 w-10 h-6 bg-gray-500 rounded-t-full"></div>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="text-lg font-bold text-gray-800">
                      Kamal sharma
                    </div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs inline-block">
                      Software Engineer
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div>
                      Employee ID: <span className="font-mono">DJ2024001</span>
                    </div>
                    <div>
                      Department: <span className="text-gray-800">IT</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-black">
                    <div className="grid grid-cols-6 gap-px p-1 h-full">
                      {[...Array(36)].map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.5 ? "bg-white" : "bg-black"
                          } aspect-square`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Shine Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Ambient lighting effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default HangingIDCard;
