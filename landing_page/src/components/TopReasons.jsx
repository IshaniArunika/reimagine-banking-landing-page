import React from 'react';
import { FaChalkboardTeacher, FaChartLine, FaUsers, FaGraduationCap, FaRegShareSquare } from "react-icons/fa";

const reasons = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-purple-600" />,
    title: "Learn",
    description: "Learn from industry experts.",
  },
  {
    icon: <FaChartLine className="text-3xl text-purple-600" />,
    title: "Trends",
    description: "Stay ahead of emerging trends.",
  },
  {
    icon: <FaUsers className="text-3xl text-purple-600" />,
    title: "Connect",
    description: "Connect with fellow banking professionals.",
  },
  {
    icon: <FaGraduationCap className="text-3xl text-purple-600" />,
    title: "Enhance",
    description: "Enhance your knowledge, skills, and network.",
  },
  {
    icon: <FaRegShareSquare className="text-3xl text-purple-600" />,
    title: "Share",
    description: "Share your expertise and experience with peers.",
  },
];

export default function TopReasons() {
  return (
    <section className="bg-gray-200 py-20 px-6 md:px-12 lg:px-24 text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700">
        TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200 hover:border-purple-400"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}