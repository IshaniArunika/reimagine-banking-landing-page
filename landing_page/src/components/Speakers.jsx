import React from "react";
import s1 from '../assets/speakers/1s.png';
import s2 from '../assets/speakers/2s.jpg';
import s3 from '../assets/speakers/3s.jpg';
import s4 from '../assets/speakers/4s.jpg';
import s5 from '../assets/speakers/5s.jpg';
import s6 from '../assets/speakers/6s.jpg';
import s7 from '../assets/speakers/7s.png';
import s8 from '../assets/speakers/8s.png';
import s9 from '../assets/speakers/9s.jpg';
import s10 from '../assets/speakers/10s.jpg';
import s11 from '../assets/speakers/11s.jpg';
import s12 from '../assets/speakers/12s.png';
import s13 from '../assets/speakers/13s.png';
import s14 from '../assets/speakers/14s.jpg';
import s15 from '../assets/speakers/15s.png';

const speakers = [
  {
    name: "Mr. Mohamed Elazzazy",
    title: "Head of IT Governance and Change Management",
    company: "Al-Baraka Bank Egypt",
    image: s1,
  },
  {
    name: "Mr. Shehab Moustafa",
    title: "Country Center of Excellence Director",
    company: "Money Fellows",
    image: s2,
  },
  {
    name: "Mr. Marwan Abouzeid",
    title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
    company: "Finastra",
    image: s3,
  },
  {
    name: "Mr. Karim El Mourabet",
    title: "Solution Consulting Director - MEA",
    company: "Finastra",
    image: s4,
  },
  {
    name: "Ms. Siobhan Byron",
    title: "Executive Vice President, Universal Banking",
    company: "Finastra",
    image: s5,
  },
  {
    name: "Mr. Narendra Mistry",
    title: "Chief Product and Technology Officer Universal Banking",
    company: "Finastra",
    image: s6,
  },
  {
    name: "Mr. Ahmed Hamdy Bahey El Din",
    title: "Head of Information Technology",
    company: "Incolease",
    image: s7,
  },
  {
    name: "Mr. Emad Shawky Habib Hanna",
    title: "Chief Data and Analytics Officer",
    company: "Banque Misr",
    image: s8,
  },
  {
    name: "Ms. Heba Yehia",
    title: "Head of Digital Products",
    company: "Arab African International Bank",
    image: s9,
  },
  {
    name: "Mr. Hamid Nirouzad",
    title: "Managing Director - Africa",
    company: "Finastra Universal",
    image: s10,
  },
  {
    name: "Mr. Rudy Kawmi",
    title: "Managing Director - Middle East, Africa & Asia-Pacific",
    company: "Finastra Universal Banking",
    image: s11,
  },
  {
    name: "Mr. Matthew Hughes",
    title: "Head of FS&I, International Markets",
    company: "Atos",
    image: s12,
  },
  {
    name: "Mr. Daragh O'Byrne",
    title: "Senior Director, Marketing, Universal Banking",
    company: "Finastra",
    image: s13,
  },
  {
    name: "Dr. Ismail Ali",
    title: "Co-Founder and CEO of CARITech",
    company: "",
    image: s14,
  },
  {
    name: "Ms. Riham Muhammad",
    title: "Corporate CEX Senior Analyst",
    company: "FABMISR",
    image: s15,
  },
];

export default function Speakers() {
  return (
    <section className="py-16 px-6 bg-gray-100" id="speakers">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10 uppercase">
        Our Speakers
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4 text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 border border-purple-200 hover:border-purple-400 h-70"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-38 h-38 rounded-full object-cover mb-4 border-3 border-purple-200 mx-auto"
            />
            <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">{speaker.name}</h3>
            <p className="text-xs text-gray-600 mb-1 leading-tight">{speaker.title}</p>
            {speaker.company && (
              <p className="text-xs text-purple-600 font-medium">{speaker.company}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}