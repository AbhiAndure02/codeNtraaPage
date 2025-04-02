import React from "react";
import img from '../assets/aboutimg.png';
import { FaWhatsapp } from "react-icons/fa";


const About = () => {
  return (
    <div id="about" className="text-black dark:text-white dark:bg-gray-800 py-16 px-6">
      <h1 className="text-5xl font-bold text-center text-slate-700 ">
        <span className="text-[#00AFB9] ">About</span>
        <span className="text-slate-900 dark:text-white "> CodeNtraa</span>
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="About CodeNtraa"
            className="object-cover w-[90%] md:w-[750px] h-auto "
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-lg leading-relaxed text-justify">
          <p>
            Welcome to <b>CodeNtraa</b>, where innovation meets technology! We
            specialize in transforming ideas into reality through cutting-edge digital
            solutions. Whether you're a student seeking project guidance or a
            business looking for customized software, we’re committed to delivering
            excellence.
          </p>
          <p className="mt-4">
            Our mission is to empower individuals and businesses with smart, scalable, 
            and efficient technology
          </p>
          <a 
  href="https://wa.me/+918484957731"
  target="_blank"   
  rel="noopener noreferrer"
  className="inline-flex px-4 py-2 mt-6 rounded-md gap-3 bg-[#075e54] text-white font-semibold shadow-lg transition duration-300 transform hover:scale-110 items-center"
>
  <FaWhatsapp className="text-2xl"/>
  <span>Connect Now</span>
</a>



        </div>
      </div>
    </div>
  );
};

export default About;
