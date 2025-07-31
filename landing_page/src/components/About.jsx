import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white py-16 px-6 sm:px-10 md:px-20">
      <div 
        ref={sectionRef}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'
        }`}>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About
          </span>{' '}
          <span className="text-gray-800">Finastra</span>
        </h2>
        <p className={`text-gray-700 text-lg leading-relaxed mb-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-5'
        }`}>
          Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. 
          Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
        </p>
        <a
          href="https://www.finastra.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-purple-600 hover:text-purple-800 hover:underline font-medium text-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded ${
            isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-5'
          }`}
        >
          Learn more at www.finastra.com
        </a>
      </div>
    </section>
  );
};

export default About;