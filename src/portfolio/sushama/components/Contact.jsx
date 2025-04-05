import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4 p-4 hover:bg-purple-50 rounded-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-600">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    +91-8080149435
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 p-4 hover:bg-blue-50 rounded-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full text-blue-600">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    sushamakalgapure@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 p-4 hover:bg-indigo-50 rounded-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Location</h4>
                  <p className="text-gray-600">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your message"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
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
            <span className="text-purple-600 font-medium">💌 I typically respond within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact