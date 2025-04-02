import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import teamMembers from '../service/teamMember';

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

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Teams = () => {
    return (
        <div id="teams" className="text-black dark:text-white dark:bg-gray-800 min-h-screen py-16">
            <motion.h1 
                className="text-5xl font-bold text-center text-slate-700 mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-[#00AFB9]">Meet</span> <span className="text-slate-900 dark:text-white">Our Team</span>
            </motion.h1>

            <motion.div 
                className="max-w-[90%] mx-auto flex flex-wrap justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {teamMembers.map((member, i) => (
                    <motion.div 
                        key={i} 
                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full">
                            <motion.img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-36 h-36 object-fit rounded-full border-4 border-[#00AFB9] shadow-md"
                                variants={imageVariants}
                                whileHover="hover"
                            />
                            <motion.h2 
                                className="text-xl font-semibold mt-4 dark:text-white text-gray-900"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {member.name}
                            </motion.h2>
                            <motion.p 
                                className="text-gray-600 dark:text-gray-400 text-sm mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {member.role}
                            </motion.p>
                            
                            <motion.div 
                                className="flex gap-4 text-[#00AFB9] text-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a 
                                    href={member.linkedinLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-[#f7bb47] transition-colors"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href={member.githubLink}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-[#f7bb47] transition-colors"
                                >
                                    <FaGithub />
                                </a>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to={`/portfolio${member.id}`}>
                                    <motion.button 
                                        className="mt-6 bg-[#00AFB9] text-white px-6 py-2 rounded-lg hover:bg-[#f7bb47] transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        View Profile
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Teams;