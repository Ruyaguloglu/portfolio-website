import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

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
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-10 flex justify-between items-center z-50 shadow-md">
      <div className="text-2xl font-bold text-purple-400">Rüya</div>

      <div className="flex items-center space-x-6 text-sm md:text-base">
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

        {/* Dark Mode Toggle Butonu */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded border border-gray-500 text-xs hover:bg-gray-800 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
