import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white px-6 py-4 z-50'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Başlık */}
        <div className='text-xl md:text-2xl font-bold mb-2 md:mb-0 text-center md:text-left'>
          Welcome to My Portfolio!
        </div>

        {/* Menü */}
        <ul className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base'>
          <li><a href="#summary" className='hover:text-purple-400'>Home</a></li>
          <li><a href="#experience" className='hover:text-purple-400'>Experience</a></li>
          <li><a href="#projects" className='hover:text-purple-400'>Projects</a></li>
          <li><a href="#skills" className='hover:text-purple-400'>Skills</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
