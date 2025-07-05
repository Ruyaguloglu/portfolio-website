import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat px-6 md:px-20 py-20 text-[#001c55]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide"> Education</h2>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 text-left border-l-4 border-[#3f69c7]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1a3fa3]">Computer Engineering - Beykent University</h3>
          <p className="text-sm text-gray-600 mt-1 italic">Graduation Date: 25 June 2025</p>
          <p className="text-md mt-4 text-gray-800 leading-relaxed">
            <span className="font-semibold text-[#1d3a78]">Relevant Courses:</span> Data Structures, Algorithms, Web Development, Machine Learning
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
