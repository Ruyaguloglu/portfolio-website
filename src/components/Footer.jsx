import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm text-center py-6">
      <p>© {new Date().getFullYear()} Rüya Güloğlu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
