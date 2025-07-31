import React, { useState } from 'react';

const overviewText = [
  `Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.`,
  `Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.`,
  `Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.`,
  `Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!`
];

export default function EventOverview() {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);

  // Generate floating squares with random positions and animations
  const generateSquares = () => {
    const squares = [];
    for (let i = 0; i < 15; i++) {
      squares.push(
        <div
          key={i}
          className="absolute opacity-5 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg rotate-45 transform"
            style={{
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite alternate`
            }}
          />
        </div>
      );
    }
    return squares;
  };

  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24 overflow-hidden" id="overview">
      <div className="absolute inset-0 pointer-events-none">
        {generateSquares()}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/20 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent animate-pulse">
                Event Overview
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 blur-2xl opacity-20 animate-pulse" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full transform transition-all duration-500 hover:w-32 hover:h-2" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:border-purple-300">
            <div className="space-y-4">
              {overviewText.map((text, index) => (
                <p key={index} className="text-base md:text-lg leading-relaxed text-gray-700">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}