import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import imag from '../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#024950] p-5 px-6'>
      <div className= 'container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='home' smooth= {true}>
          <img src={imag} alt='logo' className='h-14' />
        
        </Link>
   
        {/* Desktop Navigation */}
        <nav className='hidden md:flex'>
          <ul className='flex space-x-6'>
            <li>
              <Link 
                to='home' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-3 hover:translate-y-1'
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to='about' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:-rotate-3 hover:translate-y-1'
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to='services' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-6 hover:translate-y-1'
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to='projects' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-6 hover:translate-y-1'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to='teams' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:rotate-6 hover:translate-y-1'
              >
                Teams
              </Link>
            </li>
            <li>
              <Link 
                to='contact' 
                smooth={true} 
                className='text-white cursor-pointer font-semibold text-xl transition duration-300 transform hover:scale-105 hover:text-[#f7bb47] hover:-rotate-6 hover:translate-y-1'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-white text-3xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='md:hidden bg-black p-5 absolute w-full left-0 top-[60px] shadow-lg'>
          <ul className='flex flex-col space-y-4 text-center'>
            <li>
              <Link 
                to='home' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:rotate-3 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to='about' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:-rotate-3 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to='services' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:rotate-6 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to='projects' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:rotate-6 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to='teams' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:rotate-6 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                Teams
              </Link>
            </li>
            <li>
              <Link 
                to='contact' 
                smooth={true} 
                className='text-white text-lg transition transform hover:scale-105 hover:-rotate-6 hover:translate-y-1' 
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;