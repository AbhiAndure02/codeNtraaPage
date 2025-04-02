import React, { useEffect, useState } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import darkLogo from "../assets/darklogo.svg";
import lightLogo from "../assets/lightlogo.svg";
import { useTheme } from '../context/ThemeProvider';
import { Link } from "react-scroll";


const Footer = () => {
  const { darkMode } = useTheme();


  return (
    <footer className="w-full text-black dark:text-white dark:bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center">
        <img src={darkMode ? lightLogo : darkLogo} alt="logo" className="md:h-16 h-10 transition-all duration-300 hover:scale-105 mx-5" />
        {/* Theme Toggle Button */}
        
        </div>

        {/* Contact Details */}
        <div className="flex flex-col mx-5 md:mx-0">
          <h1 className="text-lg font-semibold dark:text-slate-200 mb-2">Get in Touch!</h1>
          <ul className="space-y-3 dark:text-white">
            <li>📞 +91-7558200619 | +91-8484957731</li>
            <li>📧 business@codentraa.com</li>
            <li>📧 tech@codentraa.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center mx-5 md:mx-0">
          <h1 className="text-lg darktext-slate-200 font-semibold mb-2">Quick Links</h1>
          <ul className="space-y-2">
            <li>
            <Link  smooth={true} offset={-80} to='home' className="dark:text-white hover:text-gray-400 cursor-pointer">Home</Link>
              </li>
              <li>
              <Link  smooth={true} offset={-80} to='about' className="dark:text-white hover:text-gray-400 cursor-pointer">About</Link>
              </li>
              <li>
              <Link  smooth={true} offset={-80} to='services' className="dark:text-white hover:text-gray-400 cursor-pointer">Service</Link>

              </li>
              <li>
              <Link  smooth={true} offset={-80} to='contact' className="dark:text-white hover:text-gray-400 cursor-pointer">Contact</Link>
              </li>
              <li>

            <Link  smooth={true} offset={-80} to='teams' className="dark:text-white hover:text-gray-400 cursor-pointer">Team</Link>
              </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col mx-5 md:mx-3">
          <h1 className="text-lg dark:text-slate-200 font-semibold mb-2 ">Follow Us</h1>
          <div className="flex space-x-4 ">
            <a href="https://www.instagram.com/codentraa/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-blue-600 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="w-8 h-8 dark:text-white hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
