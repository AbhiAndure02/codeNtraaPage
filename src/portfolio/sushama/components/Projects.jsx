import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Alumni Event Management System",
      description: "Web application for managing alumni registrations and events with Spring MVC and MySQL",
      technologies: ["Spring MVC", "Spring JDBC", "MySQL", "Bootstrap"],
      date: "Aug 2024",
      links: [
        { icon: <FaExternalLinkAlt />, url: "https://alumnieventconnect.in/", label: "Live Demo" },
        { icon: <FaGithub />, url: "#", label: "Source Code" }
      ],
      accent: "from-purple-500 to-pink-500"
    },
    {
      title: "Restaurant Billing Application",
      description: "OOP-based application for managing customer orders and generating bills",
      technologies: ["Core Java", "Collections Framework"],
      date: "Apr 2024",
      links: [
        { icon: <FaExternalLinkAlt />, url: "#", label: "Live Demo" },
        { icon: <FaGithub />, url: "#", label: "Source Code" }
      ],
      accent: "from-blue-500 to-teal-400"
    },
    {
      title: "House Price Prediction",
      description: "ML application for real estate price estimation with Python and Flask",
      technologies: ["Python", "Flask", "Machine Learning"],
      date: "2023",
      links: [
        { icon: <FaExternalLinkAlt />, url: "#", label: "Live Demo" },
        { icon: <FaGithub />, url: "#", label: "Source Code" }
      ],
      accent: "from-indigo-500 to-purple-400"
    },
    {
        title: "Modern Portfolio",
        description: "I have Developed the modern portfolio using the react and taiwind css",
        technologies: ["React", "Tailwindcss"   ],
        date: "2025",
        links: [
          { icon: <FaExternalLinkAlt />, url: "https://codentraa.com/portfolio2", label: "Live Demo" },
          { icon: <FaGithub />, url: "#", label: "Source Code" }
        ],
        accent: "from-indigo-500 to-purple-400"
      }
  ]

  return (
    <section id='projects' className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-300/20 to-purple-300/20"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              opacity: 0.3
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.accent}`} />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {project.date}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      i === 0 
                        ? `bg-gradient-to-r ${project.accent} text-white shadow-md`
                        : 'bg-gray-100 text-gray-700'
                    } hover:shadow-lg transition-all`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative animated element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 shadow-inner border border-purple-200 flex items-center"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 4px 6px -1px rgba(192, 132, 252, 0.1), 0 2px 4px -1px rgba(192, 132, 252, 0.06)',
                '0 10px 15px -3px rgba(192, 132, 252, 0.2), 0 4px 6px -2px rgba(192, 132, 252, 0.05)',
                '0 4px 6px -1px rgba(192, 132, 252, 0.1), 0 2px 4px -1px rgba(192, 132, 252, 0.06)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <span className="text-purple-600 font-medium">🚀 More Projects Coming Soon</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects