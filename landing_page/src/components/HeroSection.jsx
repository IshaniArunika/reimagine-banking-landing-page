import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection() {
  const [showDetails, setShowDetails] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + (i % 3) * 20}%`,
        animationDelay: `${i * 0.5}s`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
      }}
    />
  ));

  return (
    <div id='hero' className="bg-gradient-to-br from-black via-gray-900 to-purple-900/20 text-white min-h-screen overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <div
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: '10%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center flex-col min-h-screen pt-30">
        <div
          className={`transition-transform duration-1500 ease-out ${
            showDetails ? 'transform -translate-y-32 scale-100' : 'scale-125'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className={`text-6xl md:text-9xl font-black text-center leading-tight mb-4 transition-all duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          >
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% drop-shadow-2xl">
              Reimagine Banking
            </span>
            <span className="block text-2xl md:text-4xl font-semibold text-gray-300 mt-4 tracking-wider">
              Adapt. Evolve. Thrive.
            </span>
          </h1>

          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-4 right-8 text-purple-400 animate-spin" size={24} />
              <Sparkles className="absolute bottom-8 left-12 text-pink-400 animate-bounce" size={20} />
              <Sparkles className="absolute top-12 left-1/4 text-purple-300 animate-pulse" size={16} />
            </div>
          )}
        </div>

        {showDetails && (
          <div className="mt-0 space-y-0 animate-fade-in-up px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Date</span>
                <p className="text-lg font-semibold text-white mt-2">9th April 2025</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Time</span>
                <p className="text-lg font-semibold text-white mt-2">9:30 AM - 2:00 PM</p>
                <p className="text-xs text-gray-400">GMT+2</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Location</span>
                <p className="text-lg font-semibold text-white mt-2">The Nile Ritz-Carlton</p>
                <p className="text-xs text-gray-400">Cairo, Egypt</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <a href="#register" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#footer" className="group px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-lg text-gray-300 hover:bg-gray-300 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-300/25">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
