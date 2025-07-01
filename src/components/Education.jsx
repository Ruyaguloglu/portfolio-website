import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="bg-black text-white px-4 py-16"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-white">Computer Engineering - Beykent University</h3>
          <p className="text-sm text-gray-400 mt-1">Graduation Date: 25 June 2025</p>
          <p className="text-sm mt-3 text-gray-300">
            <span className="font-semibold text-white">Relevant Courses:</span> Data Structures, Algorithms, Web Development, Machine Learning
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
