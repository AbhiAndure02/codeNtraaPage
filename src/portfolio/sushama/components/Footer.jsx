import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/SushamaKalgapure",
      label: "GitHub",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sushama-kalgapure/",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:sushamakalgapure@gmail.com",
      label: "Email",
      color: "from-red-500 to-pink-600"
    },
   
  ]

  return (
    <footer className="relative py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden border-t border-gray-200">
      {/* Animated floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Sushama</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Kalagapure</span>
            </h2>
            <p className="text-lg mt-2 text-gray-600">
              Innovation & Excellence in Software Development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${link.color} text-white shadow-lg hover:shadow-xl transition-all`}
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                viewport={{ once: true }}
              >
                <span className="text-xl">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">CodeNtraa</span>. All rights reserved.
          </p>
          
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 shadow-inner border border-purple-200 flex items-center"
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
              <span className="text-purple-600 font-medium">🚀 Let's build something amazing together</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer