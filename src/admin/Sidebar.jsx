import React, { useState, useEffect } from 'react';
import { 
  FiHome, FiBriefcase, FiUsers, FiDollarSign, 
  FiPieChart, FiCalendar, FiSettings, FiLogOut,
  FiMenu, FiX, FiChevronDown, FiChevronRight
} from 'react-icons/fi';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { UserSignOutSuccess } from '../redux/user/userSlice';
import { FaTasks } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";


const MobileFriendlySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const {currentUser} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('loginTime');
    
    // Dispatch logout action
    dispatch(UserSignOutSuccess());
    
    // Redirect to login page
    navigate('/admin/auth/login');
  };


  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true); // Always show on desktop
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when navigating on mobile
  useEffect(() => {
    if (isMobile) setIsOpen(false);
  }, [location, isMobile]);
  const getInitials = (name) => {
    if (!name) return 'US'; // Default if no name
    
    const names = name.split(' ');
    let initials = names[0].charAt(0).toUpperCase(); // First letter of first name
    
    // Add first letter of last name if exists
    if (names.length > 1) {
      initials += names[names.length - 1].charAt(0).toUpperCase();
    }
    
    return initials;
  };

  // Menu items data
  const menuItems = [
    { icon: <FiHome />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FiBriefcase />, label: 'Projects', path: '/projects' },
    { icon: <FiUsers />, label: 'Team', path: '/team' },
    { icon: <FaTasks />, label: 'Task', path: '/Task' },
    { icon: <FiPieChart />, label: 'Reports', path: '/reports' },
    { icon: <FaMessage />, label: 'Enquiry', path: '/message' },
    { icon: <FiCalendar />, label: 'Calendar', path: '/calendar' },

  ];

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-50 bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar with animation */}
      <motion.div
        initial={false}
        animate={{
          width: isOpen ? '16rem' : '0rem',
          opacity: isOpen ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed lg:relative top-0 left-0 h-full z-40 bg-indigo-800 text-white overflow-hidden ${
          !isMobile ? 'w-64' : ''
        }`}
      >
        <div className="w-64 h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-4 flex items-center space-x-3 border-b border-indigo-700">
      {/* Avatar with initials */}
      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
        <span className="text-indigo-800 font-bold text-sm">
          {getInitials(currentUser.name)}
        </span>
      </div>

      {/* User info */}
      <div className="min-w-0">
        {/* Full name */}
        <h2 className="text-white font-medium truncate text-sm">
          {currentUser.name}
        </h2>
        
        {/* Role */}
        <h3 className="text-indigo-200 text-xs truncate">
          {currentUser.role || 'Member'}
        </h3>
      </div>
    </div>
          
          {/* Navigation Items */}
          <nav className="p-4 flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center space-x-2 w-full p-3 rounded-lg mb-2 transition-colors ${
                    isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          
          {/* Bottom Section */}
          <div className="p-4 border-t border-indigo-700">
            <NavLink
              to="/settings"
              className={({ isActive }) => 
                `flex items-center space-x-2 w-full p-3 rounded-lg mb-2 transition-colors ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                }`
              }
            >
              <FiSettings />
              <span>Settings</span>
            </NavLink>
            <button onClick={handleLogout} className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-indigo-700 transition-colors">
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileFriendlySidebar;