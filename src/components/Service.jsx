import React from "react";
import { motion } from "framer-motion";

import services from "../service/services"
import { Globe, ClipboardCheck, Monitor } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`bg-white max-w-6xl p-1 shadow-xl rounded-xl overflow-hidden ${className}`}>
    {children}
  </div>
);
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const ServiceCard = ({ title, image, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="lg:w-[350px] p-4"
  >
    <Card>
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <CardContent>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Service = () => {
  return (
    <section id="services" className="py-12 px-4  bg-gradient-to-b via-[#AFDD] to-[#0FA4AF]  from-[#024950] ">
      <h1 className="text-5xl font-bold text-center text-slate-700 mb-10 relative">
  <span className="text-[#FCBF49] stroke-text">Our</span> 
  <span className="text-slate-900 stroke-text"> Services</span>
</h1>      <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1  gap-x-3 justify-center items-center max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="py-8 px-2  text-white text-center mt-8">
      <h1 className="text-5xl font-bold text-center text-slate-700 mb-10 relative">
  <span className="text-[#FCBF49] stroke-text">Why</span> 
  <span className="text-slate-900 stroke-text"> Choose Us</span>
</h1>      <div className="flex flex-wrap justify-center gap-20">
    <div className="w-full black sm:w-[250px] h-[380px] p-8 rounded-[50px] bg-gradient-to-r to-[#0FA4AF]  from-[#024950] shadow-2xl flex flex-col justify-between items-center text-center  hover:shadow-lg cursor-pointer transition-transform hover:scale-110 duration-1000 border-2 border-b-slate-200">
    <h2 className="text-xl font-semibold mt-2 text-white">We are global.</h2>

      <Globe size={80} className="text-black" />
      <p className="text-white text-base">Expert Guidance & Personalized Solutions</p>

    </div>

    <div className="w-full black sm:w-[250px] h-[380px] p-8 rounded-[50px] bg-gradient-to-r to-[#0FA4AF]  from-[#024950]  shadow-2xl flex flex-col justify-between items-center text-center  hover:shadow-lg cursor-pointer transition-transform hover:scale-110 duration-1000 border-2 border-b-slate-200"> 
    <h2 className="text-xl font-semibold mt-2 text-white">We value our clients.</h2>
      <ClipboardCheck size={80} className="text-black" />
      <p className=" text-base text-white">High-Quality Work with On-Time Delivery.</p>
    </div>

    <div className="w-full black sm:w-[250px] h-[380px] p-8 rounded-[50px] bg-gradient-to-r to-[#0FA4AF]  from-[#024950]  shadow-2xl flex flex-col justify-between items-center text-center  hover:shadow-lg cursor-pointer transition-transform hover:scale-110 duration-1000 border-2 border-b-slate-200">
    <h2 className="text-xl font-semibold mt-2 text-white">We use top-rate systems.</h2>
      <Monitor size={80} className="text-black" />
      <p className="text-white text-base">Affordable Pricing & Full Support</p>

    </div>
  </div>
</section>


    </section>
  );
};

export default Service;