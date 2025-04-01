import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import services from '../service/services';
import { Link } from 'react-router-dom';

const ServiceTemplate = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-[#00AFB9]">Our</span> Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of technology solutions
          </p>
        </motion.div>

        {/* Mobile View (flex-col) */}
        <div className="sm:hidden flex flex-col gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <motion.button
                    className="bg-[#00AFB9] text-white px-4 py-2 rounded-lg hover:bg-[#f7bb47] transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Slider (hidden on mobile) */}
        <div className="hidden sm:block relative" ref={containerRef}>
          {/* Slider Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ 
                x: `-${currentIndex * 100}%`,
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
            >
              {Array(totalPages).fill().map((_, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
                >
                  {services
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {service.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                            {service.description}
                          </p>
                          <Link to={service.link}>
                            <motion.button
                              className="bg-[#00AFB9] text-white px-4 py-2 rounded-lg hover:bg-[#f7bb47] transition-colors text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn More
                            </motion.button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md z-10 ml-2 hover:bg-[#00AFB9] hover:text-white transition-colors"
                aria-label="Previous services"
              >
                <FaArrowLeft className="text-gray-800 dark:text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md z-10 mr-2 hover:bg-[#00AFB9] hover:text-white transition-colors"
                aria-label="Next services"
              >
                <FaArrowRight className="text-gray-800 dark:text-white" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator - Only for desktop */}
        {totalPages > 1 && (
          <div className="hidden sm:flex justify-center mt-8 gap-2">
            {Array(totalPages).fill().map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#00AFB9]' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to services ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTemplate;