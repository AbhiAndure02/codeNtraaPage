import React from 'react'
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Shubham = () => {
  return (
   
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <FaTools size={100} className="text-[#00AFB9] mb-6 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4">Work in Progress</h1>
        <p className="text-lg text-center max-w-md">
          We're working hard to bring you something amazing! Stay tuned for updates.
        </p>
        <Link to='/'>
        <button className="mt-6 px-6 py-2 bg-[#00AFB9] text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
                Back to Home
              </button>
              </Link>
      </div>    
  )
}

export default Shubham
