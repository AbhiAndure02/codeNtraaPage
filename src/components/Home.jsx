import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.png";
import ThreeBackground from "./ThreeBackground";


const texts = [
  "Innovative IT & Electronics High-Tech Solutions.",
  "Smart Future Technology for your Growing Business.",
  "Empowering Businesses with Cutting-Edge Tech.",
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
    <div className="relative w-full min-h-screen">
      <ThreeBackground />
      <div className="relative text-white py-16 px-6 min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* Text Section */}
        <div data-aos="fade-up" className=" text-center md:text-left px-4 md:mt-10 m-16">
          <motion.h1
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 1, delay: 2 }}
            className=" stroke-text2 tracking-wide text-5xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg 
              bg-gradient-to-r from-[#004E64] via-[#008B8B] to-[#00A6A6] bg-clip-text text-white"
          >
            {texts[index]}
          </motion.h1>
          <motion.p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg mt-4 text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Elevate your technology experience with cutting-edge solutions tailored for the future.
          </motion.p>
          {/* <button
            // data-aos="fade-up"
            // data-aos-delay="600"
            className="mt-6 px-6 py-3 bg-[#FCBF49] text-slate-900 font-semibold rounded-lg shadow-xl  transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </button> */}
        </div>

        {/* Image Section
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-20">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            glareEnable={true}
            glareMaxOpacity={0.3}
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <motion.img
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1 }}
                src={image2}
                alt="Tech Innovation"
                className="absolute rounded-lg shadow-lg w-[250px] h-[250px] md:w-[350px] md:h-[350px] transform rotate-[-10deg]"
              />
              <motion.img
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                src={image3}
                alt="Smart Solutions"
                className="absolute rounded-lg shadow-xl w-[250px] h-[250px] md:w-[350px] md:h-[350px] transform rotate-[10deg] translate-x-16 translate-y-16 z-10"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute w-full h-full border-4 border-[#00C3FF] rounded-xl animate-pulse shadow-2xl"
              ></motion.div>
            </div>
          </Tilt>
        </div> */}
      </div> 
    </div>
  );
};

export default Home;
