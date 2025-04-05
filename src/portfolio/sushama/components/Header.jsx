import { Link } from 'react-scroll'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Education', path: 'education' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold cursor-pointer"
        >
          <motion.span 
            className="text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Sushama
          </motion.span>
          <motion.span 
            className="text-blue-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Kalgapure
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FiX className="w-5 h-5 text-gray-700" />
            ) : (
              <FiMenu className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header