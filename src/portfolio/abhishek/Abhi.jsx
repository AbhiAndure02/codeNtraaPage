import React from 'react'
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PortfolioHeader from './components/PortfolioHeader';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';

const Abhi = () => {
  return (
   <>
   <PortfolioHeader />
   <HomePage />
   <SkillsPage />
   </>
  )
}

export default Abhi
