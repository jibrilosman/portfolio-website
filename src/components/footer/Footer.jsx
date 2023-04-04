import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Logo from '../../assets/myLogo.jpg'

const Footer = () => {
  const CurrentYear = new Date().getFullYear()
  return (
    <>
        <footer className='footer__container'> 
          <div className="footer__logo">
            <a href='#'><img src={Logo} alt="" className='footer__logo' /></a>
          </div>
          <div className="footer__links">
              <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">EXPERIENCE</a></li>
                  <li><a href="#services">SERVICES</a></li>
                  <li><a href="#portfolio">PORTFOLIO</a></li>
                  <li><a href="#contact">CONTACT</a></li>
              </ul>
          </div>

          <div className="footer__socials">
            <a href="https://facebook.com/jibrilo1" target='_blank' rel="noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com/jibrilo1/" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
            <a href="https://twitter.com/jibrilosman10" target='_blank' rel="noreferrer"><AiFillTwitterCircle /></a>
          </div>
          <p>&copy; {CurrentYear} Jibril Omar</p>
            
        </footer>
          <div className='flowicon'> Icons made by <a href="https://www.flaticon.com/authors/flowicon" title="Flowicon"> Flowicon </a> 
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
    </>
  )
}
export default Footer



// <img src={Logo} alt="" className='footer__logo' />
      

//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div className="footer__socials">
//         <a href="https://facebook.com"><BsFacebook /></a>
//         <a href="https://instagram.com"><AiFillInstagram /></a>
//         <a href="https://twitter.com"><AiFillTwitterCircle /></a>
//       </div>