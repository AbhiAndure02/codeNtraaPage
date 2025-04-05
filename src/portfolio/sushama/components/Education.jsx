import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      degree: 'BE (E&TC)',
      university: 'SPPU',
      year: '2023',
      score: '8.83 CGPA',
      icon: '🎓',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'HSC',
      university: 'Maharashtra State Board',
      year: '2019',
      score: '84.31%',
      icon: '📚',
      color: 'from-blue-500 to-teal-400'
    },
    {
      degree: 'SSC',
      university: 'Maharashtra State Board',
      year: '2017',
      score: '79.40%',
      icon: '📖',
      color: 'from-indigo-500 to-purple-400'
    }
  ]

  return (
    <section id='education' className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`text-5xl mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${item.color} text-white shadow-md`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.degree}</h3>
              
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {item.university}
                </p>
                
                <p className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Year: {item.year}
                </p>
                
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <p className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                    {item.score}
                  </p>
                </div>
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
            <span className="text-purple-600 font-medium">🎯 Continuous Learner</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education