import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Brands from './components/brands/Brands'


const App = () => {
  const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <>
        <Header darkMode={darkMode} />
        
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Brands darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer  />
    </>
  )
}

export default App

