import React from "react";
import { motion } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import { Link } from "react-scroll";


const Landing = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white px-4 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-7xl font-gallery text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-400 to-cyan-400 text-center z-10 mb-2"
      >
        Hello , welcome to my portfolio ! <br />
        I'm
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-gallery bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine text-center z-10"
      >
        RÜYA GÜLOĞLU
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-center max-w-xl z-10"
      >
        Building the future through innovative technology solutions
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
        >
          Download My CV
        </a>

        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80} // navbar varsa kaydırma pozisyonunu düzeltmek için
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border hover:bg-gray-100 transition cursor-pointer"
        >
          Get In Touch
        </Link>
      </motion.div>

      {/* 👇 Parallax Fotoğraf */}
      <Parallax speed={-20}>
        <img
          src="/images/myphoto.png"
          alt="Rüya Güloğlu"
          className="absolute bottom-0 w-72 md:w-96 opacity-90"
        />
      </Parallax>
    </section>
  );
};

export default Landing;
