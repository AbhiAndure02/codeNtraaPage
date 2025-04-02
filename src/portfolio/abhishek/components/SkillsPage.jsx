import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiRedux, SiGraphql, SiMongodb, SiPostgresql, SiDocker, SiJest, SiTailwindcss } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';

const SkillsPage = () => {
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="text-[#61DAFB]" size={40} />,
      level: 90,
      description: 'Building interactive UIs with hooks, context, and modern React patterns',
      projects: '20+ projects',
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-[#68A063]" size={40} />,
      level: 85,
      description: 'Creating scalable backend services with Express, REST APIs, and websockets',
      projects: '15+ backend systems',
      color: '#68A063'
    },
    {
      name: 'React Native',
      icon: <TbBrandReactNative className="text-[#61DAFB]" size={40} />,
      level: 80,
      description: 'Developing cross-platform mobile apps with Expo and native modules',
      projects: '10+ mobile apps',
      color: '#61DAFB'
    },
    {
      name: 'Spring Boot',
      icon: <SiSpringboot className="text-[#6DB33F]" size={40} />,
      level: 75,
      description: 'Building Java-based microservices with Spring ecosystem',
      projects: '8+ enterprise systems',
      color: '#6DB33F'
    },
    {
      name: 'Python',
      icon: <FaPython className="text-[#3776AB]" size={40} />,
      level: 85,
      description: 'Scripting, data analysis, and backend development with Django/Flask',
      projects: '12+ automation tools',
      color: '#3776AB'
    },
    {
        name: 'Java',
        icon: <FaJava className="text-[#a12424]" size={40} />,
        level: 85,
        description: 'Scripting, data analysis, and backend development with Django/Flask',
        projects: '12+ automation tools',
        color: '#a12424'
      }
  ];

  const techIcons = {
    'TypeScript': <SiTypescript className="text-[#3178C6]" size={20} />,
    'Redux': <SiRedux className="text-[#764ABC]" size={20} />,
    'GraphQL': <SiGraphql className="text-[#E535AB]" size={20} />,
    'MongoDB': <SiMongodb className="text-[#47A248]" size={20} />,
    'PostgreSQL': <SiPostgresql className="text-[#336791]" size={20} />,
    'Docker': <SiDocker className="text-[#2496ED]" size={20} />,
    'AWS': <SiMongodb className="text-[#FF9900]" size={20} />,
    'Git': <FiGithub className="text-gray-300" size={20} />,
    'Jest': <SiJest className="text-[#C21325]" size={20} />,
    'Tailwind CSS': <SiTailwindcss className="text-[#38B2AC]" size={20} />,
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.7, 0.3, 1]
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.8,
        ease: "anticipate",
        delay: 0.5 + Math.random() * 0.3 // Random delay for more organic feel
      }
    })
  };

  return (
    <section id='skill1' className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-20">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-teal-500/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
           <span className=" bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400"> My Skills</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Technologies I've mastered and my proficiency in each
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 25px 50px -12px ${skill.color}40`
                }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                custom={index}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="mr-4"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{skill.description}</p>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: skill.color }}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>
                  </div>
                  
                 
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-700/50"
            whileHover={{ 
              boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.25)'
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">More Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'TypeScript', 'Redux', 'GraphQL', 
                'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git', 
                'Jest', 'Tailwind CSS'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: `0 10px 15px -3px ${techIcons[tech]?.props?.className?.match(/text-\[(.*?)\]/)?.[1] || '#6366F1'}40`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium flex items-center gap-2"
                >
                  {techIcons[tech] || null}
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;