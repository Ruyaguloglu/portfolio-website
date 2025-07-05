// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 text-white bg-transparent backdrop-blur-md shadow-sm">
      <div className="text-2xl font-extrabold tracking-wide">Rüya Güloğlu</div>
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li><a href="#home" className="hover:text-blue-200 transition">Home</a></li>
        <li><a href="#experience" className="hover:text-blue-200 transition">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-200 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-200 transition">Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
