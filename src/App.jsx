import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Service'
import Team from './components/Team'


const App = () => {
  return (
    <div className='w-full'>
      <Header /> 
      <Home />
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer />
   
    </div>
    
    
  )
}

export default App;