import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import award1 from '../assets/bestwork-01.png';
import award2 from '../assets/bestwork-03.png';
import award3 from '../assets/bestwork-04.png';
import award4 from '../assets/BPW-2024_2.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 px-6 sm:px-12" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-8">
            {/* Company Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Cogent Solutions™
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Through our conferences we transform your business challenges into opportunities. 
                Our clients and customers are leading government entities and the Fortune 500 companies.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-400" />
                Our Offices
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Middle East & Africa HQ:</strong><br />
                    Office No: 209, The Metropolis Tower, Business Bay, Dubai, UAE
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Asia Pacific HQ:</strong><br />
                    2nd floor Green Lanka Tower, Colombo, Sri Lanka
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Saudi Arabia HQ:</strong><br />
                    Riyadh, Saudi Arabia
                  </div>
                </div>
              </div>
            </div>

      
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <FaPhone className="mr-3 text-purple-400 flex-shrink-0" />
                <span>+971 4 576 1039 / +971 50 643 5244</span>
              </div>
              <div className="flex items-center text-sm">
                <FaEnvelope className="mr-3 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:partnerships@cogentsolutions.ae" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
                >
                  partnerships@cogentsolutions.ae
                </a>
              </div>
            </div>

             
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, href: "#", color: "hover:text-blue-500" },
                  { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
                  { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-500" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 ${color} transform hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Awards */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <FaTrophy className="mr-3 text-purple" />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h4>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Actual award images */}
              {[
                { src: award1, alt: "Best Work Award 1"  },
                { src: award2, alt: "Best Work Award 2" },
                { src: award3, alt: "Best Work Award 3"  },
                { src: award4, alt: "BPW 2024 Award"  }
              ].map((award, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="w-32 h-32 mx-auto mb-3 flex items-center justify-center">
                    <img 
                      src={award.src}
                      alt={award.alt}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">{award.title}</p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              ))}
            </div>


          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Cogent Solutions Event Management LLC. All Rights Reserved.
            </p>
            <div className="mt-2 flex justify-center items-center space-x-4 text-xs text-gray-600">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;