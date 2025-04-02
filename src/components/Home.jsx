import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/homeimg.png";
import { Link } from 'react-scroll';

const texts = [
  "Innovative IT & Electronics High-Tech Solutions.",
  "Smart Future Technology for your Growing Business.",
  "Empowering Businesses with Cutting-Edge Technology.",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 100,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home" className="">

    <div className=" flex flex-col-reverse md:flex-row w-full min-h-screen  dark:bg-gray-800 items-center ">
      {/* Image Section (Appears first on mobile, second on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 ">
        <motion.img 
          src={img} 
          alt="img" 
          className="w-full max-w-md md:max-w-lg object-contain"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Text Section (Appears second on mobile, first on desktop) */}
      <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 lg:px-16 py-12 md:py-0 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <div data-aos="fade-right" className="max-w-2xl">
          <motion.h1
            key={index}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg bg-gradient-to-r from-[#004E64] via-[#008B8B] to-[#00A6A6] dark:bg-gradient-to-r dark:to-[#00AFB9] dark:via-white dark:from-[#00AFB9] bg-clip-text text-transparent"
          >
            {texts[index]}
          </motion.h1>
          <motion.p
            className="text-lg  mt-4 text-gray-700 dark:text-white text-justify"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Elevate your technology experience with cutting-edge solutions tailored for the future. Our innovative products and services bring efficiency, automation, and intelligence to your business, ensuring growth and success in the digital era.
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-[#00AFB9] text-slate-900 font-semibold rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <Link 
            smooth={true}
            offset={-80}
            to = "about">
            Learn More
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
    </main>

  );
};

export default Home;
