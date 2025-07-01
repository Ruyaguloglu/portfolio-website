import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
  const [showLinks, setShowLinks] = useState(false); // bağlantı kutusunu açma/kapatma

  return (
    <motion.section
      id="summary"
      className="min-h-screen flex justify-center items-center bg-black text-white pt-32 md:pt-24  px-4"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center max-w-3xl">

        {/* Profil Fotoğrafı */}
        <motion.img
          src="/your-photo.png"
          alt="Your avatar"
          className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Slogan */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-gray-400">Hello! I'm</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Rüya Güloğlu</span><br />
          <span className="text-gray-400">I do code and</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            create impact!
          </span>
        </motion.h1>

        {/* Kısa Açıklama */}
        <p className="text-gray-300 mt-6 max-w-xl">
          I'm a recent Computer Engineering graduate driven by curiosity and a strong desire to learn. During my studies and internships, I explored various fields—from software development to data visualization and UI/UX design. 
          I enjoy stepping out of my comfort zone, taking on new challenges, and building real things that solve problems or simply look and feel better. I'm now focused on growing both personally and professionally, one project at a time.
        </p>

        {/* Butonlar */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
          >
            Get In Touch
          </button>

          <a
            href="/cv.pdf"
            download
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>

        {/* Bağlantı Kutusu */}
        {showLinks && (
          <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white space-y-3">
            <a
              href="mailto:gulogluruya2@gmail.com"
              className="block hover:underline"
            >
              📧 Email: gulogluruya2@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rüya-güloğlu-950b3b234"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              🔗 LinkedIn Profile
            </a>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Summary;
