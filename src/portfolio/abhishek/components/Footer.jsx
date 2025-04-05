import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/AbhiAndure02",
      color: "hover:text-gray-300"
    },
    {
      icon: <FiLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-andure-228567228/",
      color: "hover:text-blue-400"
    },
    {
      icon: <FiX size={20} />,
      name: "X",
      url: "https://x.com/aa_abhiandure2?t=m05WTOPjxLRPuE_jHqhp0Q&s=09",
      color: "hover:text-sky-400"
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Intagram",
      url: "https://www.instagram.com/abhishek.andure.02/",
      color: "hover:text-pink-400"
    }
  ];

  const footerLinks = [
    { name: "Home", url: "home1" },
    { name: "Skills", url: "skill1" },
    { name: "Projects", url: "project1" },
    { name: "About", url: "about1" },
    { name: "Contact", url: "contact1" }
  ];

  return (
    <footer className="bg-gray-900 backdrop-blur-sm border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link to='home1' smooth={true} offset={-80} className="text-2xl font-bold text-black hover:text-indigo-400 transition-colors">
              <span className="text-indigo-400">Port</span>folio
            </Link>
          
           
          </motion.div>

          {/* Footer links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Link smooth={true} to={link.url} className="hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-medium mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-gray-800 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-2 pt-2 border-t border-gray-800 text-center text-sm"
        >
          <p>Built with React</p>
          <p className="mt-1"> <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved</p></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;