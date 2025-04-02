import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiLinkedin, FiGithub, FiTwitter, FiX } from 'react-icons/fi';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-indigo-400" size={24} />,
      title: "Email",
      value: "abhiandure123@gmail.com",
      link: "mailto:abhiandure123@gmail.com"
    },
    {
      icon: <FiMapPin className="text-teal-400" size={24} />,
      title: "Location",
      value: "Pune, Mharashtra, India",
      link: "https://www.google.com/maps/place/18%C2%B043'55.3%22N+73%C2%B040'59.1%22E/@18.7320341,73.6805121,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.732029!4d73.683087?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
    },
    {
      icon: <FiPhone className="text-purple-400" size={24} />,
      title: "Phone",
      value: "+917558200679",
      link: "tel:+917558200679"
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="text-blue-400" size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-andure-228567228/"
    },
    {
      icon: <FiGithub className="text-gray-300" size={20} />,
      name: "GitHub",
      url: "https://github.com/AbhiAndure02"
    },
    {
      icon: <FiX className="text-sky-400" size={20} />,
      name: "Twitter",
      url: "https://x.com/aa_abhiandure2?t=m05WTOPjxLRPuE_jHqhp0Q&s=09"
    }
  ];

  return (
    <section id='contact1' className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-2 rounded-lg bg-gray-700/50 group-hover:bg-gradient-to-r from-indigo-500/20 to-teal-500/20 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-400">{method.title}</h4>
                      <p className="text-white">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="font-medium text-gray-400 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-gray-700/50 hover:bg-gradient-to-r from-indigo-500/20 to-teal-500/20 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Send Me a Message
              </h3>
              
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter your Name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter your Email"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <FiSend className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;