import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaUsers } from "react-icons/fa";

const infoCards = [
  {
    icon: <FaBrain size={24} className="text-purple-400" />,
    title: "Current Focus",
    text: "AI projects with Python, full-stack apps using React and Node.js.",
  },
  {
    icon: <FaLaptopCode size={24} className="text-purple-400" />,
    title: "Interests",
    text: "Machine learning, UI/UX design, mobile app development.",
  },
  {
    icon: <FaUsers size={24} className="text-purple-400" />,
    title: "Soft Skills",
    text: "Teamwork, time management, and communication.",
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 text-white bg-black flex flex-col items-center justify-center"
    >
      {/* Başlık */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-purple-300"
      >
        About Me
      </motion.h2>

      {/* İçerik */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* 👤 Profil Fotoğrafı */}
        <motion.img
          src="/images/myphoto.jpg"
          alt="Rüya Güloğlu"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-52 h-52 rounded-full object-cover shadow-lg border-4 border-purple-400"
        />

        {/* Yazı ve Kartlar */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 max-w-xl mb-6"
          >
            I’m a computer engineer passionate about creating meaningful digital experiences that combine technology, design, and problem-solving.
          </motion.p>

          {/* Bilgi Kartları */}
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="bg-gray-800 p-5 rounded-xl shadow-md w-full"
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h3 className="text-lg font-semibold text-purple-300">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
