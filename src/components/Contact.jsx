import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      id="contact" 
      className="text-black dark:text-white dark:bg-gray-800 min-h-screen flex items-center justify-center relative border-b-2 border-gray-500 py-12 px-4"
    >
      {/* Glassmorphism Card */}
      <motion.div 
        className="relative w-full max-w-6xl bg-black/20 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ 
          scale: 0.98,
          transition: { duration: 0.5 }
        }}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Section - Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
              variants={itemVariants}
            >
              <span className="text-[#00AFB9]">Let's</span> Connect
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-900 dark:text-white"
              variants={itemVariants}
            >
              We are here to help you grow your business. Reach out for collaborations, inquiries, or just to say hello!
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={hoverVariants}
              >
                <FaPhoneAlt className="text-[#00AFB9] text-2xl flex-shrink-0" />
                <p className="text-lg dark:text-white text-slate-900">+91 9371635526 / 8484957731</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={hoverVariants}
              >
                <FaEnvelope className="text-[#00AFB9] text-2xl flex-shrink-0" />
                <p className="text-lg dark:text-white text-slate-900">business@codentraa.com</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={hoverVariants}
              >
                <FaEnvelope className="text-[#00AFB9] text-2xl flex-shrink-0" />
                <p className="text-lg dark:text-white text-slate-900">tech@codentraa.com</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={hoverVariants}
              >
                <FaMapMarkerAlt className="text-[#00AFB9] text-2xl flex-shrink-0" />
                <p className="text-lg dark:text-white text-slate-900">Pune, Maharashtra, India</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            className="bg-black/10 p-6 md:p-8 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold dark:text-white text-black mb-6"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h3>
            
            <motion.form 
              className="space-y-5"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AFB9] text-black placeholder-gray-500 dark:text-white dark:placeholder-gray-300 transition-all hover:shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AFB9] text-black placeholder-gray-500 dark:text-white dark:placeholder-gray-300 transition-all hover:shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FCBF49] text-black placeholder-gray-500 dark:text-white dark:placeholder-gray-300 transition-all hover:shadow-lg"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#00AFB9] text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-[#f8d77d]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;