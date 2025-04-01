import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Service'
import Team from './components/Team'
import FooterEnd from './components/FooterEnd'
import { ThemeProvider } from './context/ThemeProvider'


const Stack = () => {
  return (
    <ThemeProvider>
    <Header /> 
    <Home />
    <About/>
    <Services/>
    <Team/>
    <Contact/>
    <Footer />
    <FooterEnd />
 
  </ThemeProvider>
  )
}

export default Stack
