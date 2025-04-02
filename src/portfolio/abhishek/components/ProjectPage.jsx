import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'
import img4 from '../assets/project4.jpg'
import img5 from '../assets/project5.jpg'


const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features product catalog, cart functionality, and secure checkout.",
      technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
      githubLink: "#",
      liveLink: "#",
      image: img1 // Replace with your image path
    },
    {
      id: 2,
      title: "Kiharas Finance Software ",
      description: "A productivity application built with React and Firebase. Includes task organization, team collaboration features, and real-time updates.",
      technologies: [<FaReact />, <SiTypescript />],
      githubLink: "#",
      liveLink: "#",
      image: img2
    },
    {
      id: 3,
      title: "AI-Powered Chatbot",
      description: "Natural language processing chatbot using Python and TensorFlow. Integrates with websites and messaging platforms for customer support.",
      technologies: [<FaPython />],
      githubLink: "#",
      liveLink: "#",
      image: img3
    },
    {
      id: 4,
      title: "Tech Home Application",
      description: "React Native Application for Tech Home Applications",
      technologies: [<SiSpringboot />],
      githubLink: "#",
      liveLink: "#",
      image: img4
    },
    {
      id: 5,
      title: "CodeNtraa",
      description: "Modern responsive portfolio website built with React and Tailwind CSS. Features animations and dark/light mode toggle.",
      technologies: [<FaReact />, <SiTailwindcss />],
      githubLink: "#",
      liveLink: "/www.codentraa.com",
      image: img5
    }
  ];

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

  const projectVariants = {
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
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  return (
    <section id='project1' className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm flex items-center gap-1">
                      {tech} {tech.type?.displayName || tech.type?.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-lg text-sm font-medium"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;