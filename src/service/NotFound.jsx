import React from 'react';
import { FiAlertTriangle, FiHome, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 sm:p-10">
        <div className="flex justify-center text-yellow-500 mb-6">
          <FiAlertTriangle className="text-6xl" />
        </div>
        
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Please check the URL or try one of these options:
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
          >
            <FiArrowLeft />
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FiHome />
            Return Home
          </button>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at 
            <a href="mailto:support@codentraa.com" className="text-indigo-600 hover:underline ml-1">
              tech@codentraa.com
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;