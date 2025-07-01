import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-10 py-4 z-50'>
        <div className='text-2xl font-bold'>Welcome to My Portfolio ! </div>
        <ul className='flex space-x-8'>
            <li><a href="#summary" className='hover:text-purple-400'>Home</a></li>
            <li><a href="#experience" className='hover:text-purple-400'>Experience</a></li>
            <li><a href="#projects" className='hover:text-purple-400'>Projects</a></li>
            <li><a href="#skills" className='hover:text-purple-400'>Skills</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;