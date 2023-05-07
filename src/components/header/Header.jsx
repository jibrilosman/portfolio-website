import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dev1.png'
import HeaderSocial from './HeaderSocials'

const Header = (props) => {
  return (
    
    <header className={props.darkMode ? "light" : ""}>
      <div  className="container header__container">
        <h5>Hello There, I'm</h5>
        <h1>Jibril Omar</h1>
        <h2>Fullstack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="avatar" /> 
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
      
    </header>
    
  )
}

export default Header