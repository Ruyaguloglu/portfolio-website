import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import { FiMenu, FiX } from 'react-icons/fi'; // Menü ikonları

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // Mobil menü açık mı?

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-6 flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-400">Rüya's Portfolio</div>

      {/* Masaüstü Menü */}
      <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-purple-300 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded border border-gray-500 text-xs hover:bg-gray-800 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* Mobil Menü Aç/Kapat Butonu */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-2 py-1 rounded border border-gray-500 text-xs hover:bg-gray-800 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobil Menü Paneli */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 flex flex-col items-center space-y-6 py-6 md:hidden z-40">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-purple-300 transition text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
