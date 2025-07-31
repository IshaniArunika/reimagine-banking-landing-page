import { useState } from "react";
import { FaList } from "react-icons/fa";
import logo from '../assets/cogent-logo-01.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/4 shadow-md backdrop-blur-md relative z-50 top-0 w-full  px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto"  />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-semibold tracking-wide uppercase text-sm">
          <li><a href="#overview" className="hover:text-[#d500ff]">Event Overview</a></li>
          <li><a href="#agenda" className="hover:text-[#d500ff]">Agenda</a></li>
          <li><a href="#about" className="hover:text-[#d500ff]">About</a></li>
        </ul>

        {/* Right Side - Register Now (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <a
            href="#register"
            className="bg-white text-[#d500ff] px-4 py-2 rounded-full font-semibold text-sm uppercase hover:bg-purple-600 hover:text-white transition"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-xl"
        >
          <FaList />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-white py-4 px-6 space-y-4">
          <a href="#overview" className="block hover:text-white font-semibold">Event Overview</a>
          <a href="#agenda" className="block hover:text-white font-semibold">Agenda</a>
          <a
            href="#register"
            className="block bg-[#d500ff] text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-red-700"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
