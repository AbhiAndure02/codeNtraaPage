import { motion } from 'framer-motion'
import profile from '../assets/sush.png'

const About = () => {
  return (
    <section id='about' className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated floating bubbles background (matches Home) */}
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo Section - Enhanced with more animations */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 transform group-hover:-rotate-3 transition-transform duration-300">
                <img 
                  src={profile}
                  alt="Sushama Kalgapure"
                  className="pl-7 w-[80%] h-full "
                />
              </div>
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-purple-400 opacity-70"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
              <div className="absolute -inset-6 rounded-full border border-pink-300 opacity-50 animate-spin-slow" />
            </div>
          </motion.div>

          {/* Content Section - Enhanced with animations and matching colors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3 space-y-8"
          >
            <motion.p
              className="text-xl leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              As the Director of <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">CodeNtraa</span>, I lead our team in delivering cutting-edge software solutions that drive business transformation.
            </motion.p>
            
            <motion.p
              className="text-xl leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              With expertise in <span className="font-bold text-blue-600">Full Stack Java Development</span> and a passion for innovative problem-solving, I bridge the gap between technical excellence and business objectives.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Mission</h3>
                <p className="text-gray-600">To create technology that empowers businesses and simplifies lives through elegant, efficient solutions.</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Vision</h3>
                <p className="text-gray-600">A world where technology seamlessly enhances every aspect of business operations and customer experiences.</p>
              </motion.div>
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              {['Java', 'Leadership', 'Innovation', 'Strategy'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 1 + i * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About