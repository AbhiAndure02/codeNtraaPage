import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import darkLogo from '../assets/darklogo.svg';
import lightLogo from '../assets/lightlogo.svg';
import { useTheme } from '../context/ThemeProvider';
import { useState } from 'react';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 300);
  };


  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 p-7 px-6 shadow-md dark:shadow-gray-700 bg-white dark:bg-gray-800 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img 
            src={darkMode ? lightLogo : darkLogo} 
            alt="logo" 
            className="md:h-16 h-10 transition-all duration-300 hover:scale-105" 
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className='flex gap-5'>
              {['home', 'about', 'services', 'teams', 'contact'].map((item) => (
                <Link 
                  key={item}
                  smooth={true}
                  to={item} 
                  offset={-80}
                  className="text-black dark:text-white cursor-pointer font-semibold text-lg transition-all duration-300 hover:scale-105 hover:text-[#f7bb47]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="text-black dark:text-white text-2xl transition-all duration-300 hover:scale-110"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="text-black dark:text-white text-2xl transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button 
              className="text-black dark:text-white p-2 text-3xl cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
            <ul className="flex flex-col space-y-4 p-6">
              {['home', 'about', 'services', 'teams', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true} offset={-80}
                    duration={500}
                    className="block py-3 text-black dark:text-white cursor-pointer font-semibold text-lg transition-all duration-300 hover:pl-2 hover:text-[#f7bb47]"
                    onClick={handleLinkClick}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Header;