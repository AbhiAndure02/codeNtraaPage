import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaLightbulb, FaDollarSign, FaClock, FaUsers, FaUserShield } from "react-icons/fa";
import services from "../service/services";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const featureVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Card = ({ children, className }) => (
  <motion.div 
    className={`bg-white max-w-6xl p-1 shadow-xl rounded-xl overflow-hidden ${className}`}
    variants={itemVariants}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const ServiceCard = ({ title, image, description, link }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="lg:w-[350px] p-4"
  >
    <Card>
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover"
        whileHover={{ scale: 1.05 }}
      />
      <CardContent>
        <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <motion.button 
          className="text-[#00AFB9] hover:text-[#f7bb47] m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to={link} >see more</Link>
        </motion.button>
      </CardContent>
    </Card>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    whileHover="hover"
    className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
  >
    <motion.div variants={featureVariants}>
      {React.cloneElement(icon, { className: "text-[#00AFB9] mb-4" })}
    </motion.div>
    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </motion.div>
);

const Service = () => {
  const features = [
    {
      icon: <FaUsers size={50} />, 
      title: "Expert Team", 
      description: "Our skilled developers and designers craft high-quality, secure, and scalable solutions."
    },
    {
      icon: <FaDollarSign size={50} />, 
      title: "Affordable Pricing", 
      description: "Get top-notch IT services without breaking the budget."
    },
    {
      icon: <FaClock size={50} />, 
      title: "On-Time Delivery", 
      description: "We value deadlines and ensure timely project completion."
    },
    {
      icon: <FaDesktop size={50} />, 
      title: "User-Friendly Designs", 
      description: "Seamless UI/UX that enhances user engagement and experience."
    },
    {
      icon: <FaUserShield size={50} />, 
      title: "End-to-End Support", 
      description: "From planning to deployment, we provide continuous technical support."
    },
    {
      icon: <FaLightbulb size={50} />, 
      title: "Innovative Solutions", 
      description: "We stay ahead with the latest technology trends to deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="services" className="py-12 px-4 text-black dark:text-white dark:bg-gray-800">
      {/* Services Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold text-center text-slate-700 mb-10 relative dark:text-white"
          variants={itemVariants}
        >
          <span className="text-[#00AFB9]">Our</span> 
          <span className="text-slate-900 dark:text-white"> Services</span>
        </motion.h1>
        
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-x-3 justify-center items-center max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-8 px-4 text-center mt-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-bold text-slate-700 mb-10 dark:text-white"
            variants={itemVariants}
          >
            <span className="text-[#00AFB9]">Why</span>
            <span className="text-slate-900 dark:text-white"> Choose Us</span>
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </section>
  );
};

export default Service;