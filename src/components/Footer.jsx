import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b  from-[#0FA4AF]  to-[#024950] py-10">
      {/* Gradient Line at the Top */}
  

      {/* Footer Container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo Section */}
        <div className="flex flex-col">
          <img className="w-[320px] h-auto p-3 md:m-12" src={logo} alt="Codentraa Logo" />
        </div>

        {/* Contact Details */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-slate-200  mb-2">Get in Touch!</h1>
          <ul className="space-y-3 text-white">
            <li>📞 +91-7558200619 | 8484957731</li>
            <li>📧 business@codentraa.com</li>
            <li>📧 tech@codentraa.com</li>

          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg text-slate-200  font-semibold mb-2">Quick Links</h1>
          <ul className="space-y-2">
            <li className="text-white hover:text-gray-400 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-400 cursor-pointer">About</li>
            <li className="text-white hover:text-gray-400 cursor-pointer">Service</li>
            <li className="text-white hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col">
          <h1 className="text-lg text-slate-200 font-semibold mb-2">Follow Us</h1>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-400 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 text-blue-600 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="w-8 h-8 text-white hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
