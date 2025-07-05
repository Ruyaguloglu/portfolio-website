// src/components/Landing.jsx
import React from 'react';

const Landing = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pt-32"
    >
      {/* Sol Kısım */}
      <div className="flex-1 text-left z-10">
        <img 
          src="/your-photo.png"
          alt="Rüya Güloğlu"
          className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl mb-6"
        />
        <h2 className="text-xl font-bold text-[##3d455b]">Hello! I’m</h2>
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#ffffff]">Rüya</h1>
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#ffffff]">Güloğlu</h1>

        <div className="mt-8 border-t border-[#1e55b3] w-3/4" />

        <p className="mt-6 text-[#3d455b] text-xl font-semibold leading-relaxed">
          <span className="block">Scroll To</span>
          <span className="block">Reach</span>
          <span className="block">My Portfolio</span>
        </p>

        <div className="mt-4 text-white text-4xl animate-bounce">↓</div>
      </div>

      {/* Sağ Kısım */}
      <div className="flex-1 mt-10 md:mt-0 text-right z-10">
        <p className="text-3xl font-extrabold text-white">
          I do code<br />and
          <br />
          <span className="text-3xl font-extrabold text-white">create<br />impact!</span>
        </p>

        <div className="mt-10 flex flex-col items-end gap-4">
          <a
            href="#contact  "
            className="border-2 border-white rounded-[30px] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#0d3b8a] transition"
          >
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="border-2 border-white rounded-[30px] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#0d3b8a] transition"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
