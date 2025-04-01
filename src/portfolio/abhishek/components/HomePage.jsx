import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-20">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-teal-500/20 blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Main content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left column - Text content */}
          <div className="lg:w-1/2">
            <motion.p 
              className="text-indigo-400 mb-4 font-mono"
              variants={itemVariants}
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                ABHISHEK ANDURE
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-6 text-gray-300"
              variants={itemVariants}
            >
              I build things for the web.
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I'm a passionate frontend developer specializing in modern JavaScript frameworks. 
              I create beautiful, responsive, and user-friendly web applications.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                View my work
                <motion.span
                  animate={{
                    x: isHovered ? 8 : 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15
                  }}
                  className="ml-2"
                >
                  <FiArrowRight size={20} />
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Right column - Animated illustration */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Replace with your image or illustration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-500 shadow-2xl flex items-center justify-center">
                <span className="text-4xl font-bold">👨‍💻</span>
              </div>
              
              {/* Floating elements around the main image */}
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-indigo-400/30 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-xs">React</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-teal-400/30 backdrop-blur-sm border border-teal-500/30 flex items-center justify-center"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-xs">Tailwind</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div 
          className="fixed left-8 bottom-8 hidden lg:flex flex-col space-y-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 1.5 }
          }}
        >
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FiTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FiMail size={20} />
          </a>
          <div className="w-px h-16 bg-gray-600 mt-2"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="fixed right-8 bottom-8 hidden lg:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 1.5 }
          }}
        >
          <motion.div
            className="w-px h-16 bg-gray-600"
            animate={{
              height: [16, 32, 16],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-gray-400 text-xs mt-2 rotate-90 tracking-widest">
            SCROLL DOWN
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;