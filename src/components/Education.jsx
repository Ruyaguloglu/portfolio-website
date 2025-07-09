import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Computer Engineering",
    institution: "Istanbul Beykent University",
    date: "2021- 2025",
    description: "Focused on software development, data structures, machine learning and AI-related subjects. Participated in various group projects and internships.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-purple-300"
      >
        Education
      </motion.h2>

      <div className="w-full max-w-3xl space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white">
              {edu.title}
            </h3>
            <p className="text-purple-400 font-medium">
              {edu.institution} • {edu.date}
            </p>
            <p className="mt-2 text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
