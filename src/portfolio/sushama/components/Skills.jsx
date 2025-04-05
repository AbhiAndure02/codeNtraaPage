import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: "Java", level: 90, color: "from-purple-600 to-pink-600" },
    { name: "Spring Framework", level: 85, color: "from-blue-600 to-teal-500" },
    { name: "Hibernate", level: 80, color: "from-indigo-600 to-purple-500" },
    { name: "MySQL", level: 85, color: "from-amber-500 to-orange-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-500 to-amber-500" },
    { name: "React", level: 70, color: "from-cyan-500 to-blue-500" },
    { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
    { name: "Git", level: 80, color: "from-red-500 to-pink-500" }
  ]

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
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
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-gray-500 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.15,
                    type: 'spring',
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.15 }}
                    viewport={{ once: true }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white"
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
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
            <span className="text-purple-600 font-medium">💡 Always learning new technologies</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills