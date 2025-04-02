import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import img from '../../../assets/profile/abhi2.png'

const AboutPage = () => {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading a team to build scalable web applications using React, Node.js, and cloud technologies."
    }
  ];

  const education = [
    {
      year: "2020-2024",
      degree: "B.E Information Technology",
      university: "SPPU University, Pune",
      description: "Specialized in Software Engineering and Web Technologies"
    }
  ];

  return (
    <section id='about1' className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 flex flex-col items-center"
          >
            
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.img
                src={img} // Replace with your image
                alt="Profile"
                className="relative z-10 w-64 h-64 rounded-full object-fit border-4 border-gray-800 "
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">Abhishek Andure</h3>
            <p className="text-gray-400 mb-6 text-center">Full Stack Developer | Tech Enthusiast | Problem Solver</p>
            
            <div className="flex space-x-4 mb-8">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <FiTwitter size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <FiMail size={24} />
              </motion.a>
            </div>

           
          </motion.div>

          {/* Right Column - Bio and Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                My Story
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate full-stack developer with {new Date().getFullYear() - 2022}+ years of experience creating digital solutions. My journey in tech began when I built my first website in college, and I've been hooked ever since.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in JavaScript technologies across the stack, with expertise in React, Node.js, and modern web development practices. I love solving complex problems and creating seamless user experiences.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies. I believe in continuous learning and pushing the boundaries of what's possible with code.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Experience
              </h3>
              <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b from-indigo-500 to-teal-500">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-teal-600 flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <span className="text-indigo-400 text-sm">{exp.year}</span>
                      <h4 className="text-xl font-bold mt-1 mb-2">{exp.role} • {exp.company}</h4>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <span className="text-indigo-400 text-sm">{edu.year}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2">{edu.degree}</h4>
                  <p className="text-gray-400 mb-1">{edu.university}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;