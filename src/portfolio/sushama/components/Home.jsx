import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home' className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sushama Kalgapure
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl mb-8 font-medium text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Director & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 font-bold">Full Stack Developer</span> at{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-bold">CodeNtraa</span>
          </motion.h2>
          
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Transforming businesses through <span className="font-semibold text-purple-600">innovative</span> software solutions and <span className="font-semibold text-blue-600">technical leadership</span>.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="projects" 
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating animated arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default Home