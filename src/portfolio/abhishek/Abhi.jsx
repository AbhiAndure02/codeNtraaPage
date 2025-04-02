import React, { useEffect } from 'react'
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PortfolioHeader from './components/PortfolioHeader';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectPage';
import Footer from './components/Footer';

const Abhi = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
   <>
   <PortfolioHeader />
   <HomePage />
   <AboutPage />
   <SkillsPage/>
   <ProjectsPage />
   <ContactPage />
   <Footer />
   
   </>
  )
}

export default Abhi
