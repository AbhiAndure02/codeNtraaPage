import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import darkLogo from '../assets/darklogo.svg';
import lightLogo from '../assets/lightlogo.svg';

const Header = () => {
  // Get theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 300); // Delay closing menu to allow smooth scrolling
  };


  return (
    <>
    <header className={`p-5 px-6 shadow-md dark:shadow-gray-700 bg-white dark:bg-gray-800 w-full z-50 ${isOpen ? 'fixed' : 'fixed md:fixed'}`}>
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <img src={darkMode ? lightLogo : darkLogo} alt="logo" className="md:h-16 h-10" />

        {/* Desktop Navigation + Theme Toggle (Aligned Right) */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className='flex gap-5'>
            <Link to="/" className="text-black dark:text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1"
            >
            Home</Link>
            <Link to="/" className="text-black dark:text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1"

            >
            About</Link>
            <Link to="/" 
            className="text-black dark:text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1"
                    >
            Services</Link>
            <Link to="/" 
            className="text-black dark:text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1"
>
            Team</Link>
            <Link to="/"  className="text-black dark:text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1"
            >
            Contact Us</Link>
          </nav>

          {/* Dark Mode Toggle Button */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-black dark:text-white text-2xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Button + Dark Mode Toggle (Right Aligned) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Menu Button */}
        

          {/* Dark Mode Toggle Button */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-black dark:text-white text-2xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <nav className="md:hidden ">
          <ul >
           <li>
                <Link
                  to='/'
                  smooth={true}
                  offset={-50} // Adjust this value based on your header height
                  duration={500} // Smooth scrolling duration
                  className="text-black dark:text-white cursor-pointer font-semibold text-lg transition duration-300 transform hover:scale-105 hover:text-[#f7bb47]"
                  onClick={handleLinkClick} // Close menu on click
                >
                 Home
                </Link>
              </li>
          </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu (Opens when clicked) */}
    
       
       
    </header>
    <div className="h-24 md:h-28"></div>

    </>
  );
};

export default Header;
