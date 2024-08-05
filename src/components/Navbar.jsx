import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between">
        
        <div className="hidden sm:flex space-x-4 items-center text-sm font-sans font-medium">
          <Link to='/' className="hover:text-gray-400">Home</Link>
          <Link to='/about' className="hover:text-gray-400">About</Link>
        </div>
        <div className="text-3xl sm:text-2xl font-extrabold font-serif">
          <a href="/">Santosh's Portfolio</a>
        </div>
        <div className="hidden sm:flex space-x-4 items-center text-sm font-sans-serif font-medium">
          <Link to='/projects' className="hover:text-gray-400">Projects</Link>
          <Link to='/experience' className="hover:text-gray-400">Experience</Link>
          <Link to='/contact' className="hover:text-gray-400">Contact</Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4 font-sans">
            <li><Link to='/' onClick={closeMobileMenu} className="hover:text-gray-400">Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu} className="hover:text-gray-400">About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu} className="hover:text-gray-400">Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu} className="hover:text-gray-400">Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu} className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
