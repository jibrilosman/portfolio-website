import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkCheck} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {VscProject} from 'react-icons/vsc'
import {AiOutlineContacts} from 'react-icons/ai'
import {FiSun} from 'react-icons/fi'
import {MdOutlineNightlight} from 'react-icons/md'
import { useState } from 'react'


const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className={props.darkMode ? "light": ""}>
      <a href="#" title='Home' 
        onClick={()=> setActiveNav("#")} 
        className={activeNav === "#" ? "active" : ""}> <AiOutlineHome /> 
      </a>

      <a href="#about" title='About' 
        onClick={()=> setActiveNav("#about")} 
        className={activeNav === "#about" ? "active" : ""}> <AiOutlineUser /> 
      </a>

      <a href="#experience" title='Experience'
        onClick={()=> setActiveNav("#Experience")} 
        className={activeNav === "#Experience" ? "active" : ""}> <BsBookmarkCheck /> 
      </a>

      <a href="#services" title='Services'
        onClick={()=> setActiveNav("#Services")}
        className={activeNav === "#Services" ? "active" : ""}><RiServiceLine /> 
      </a>

      <a href="#portfolio" title='Projects'
        onClick={()=> setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}> <VscProject /> 
      </a>

      <a href="#contact" title='Contact'
        onClick={()=> setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}> <AiOutlineContacts /> 
      </a>
      <a href={"#activeNav"} title="Toggle Dark Mode"     
       onClick={props.toggleDarkMode}>{props.darkMode ? <MdOutlineNightlight /> : <FiSun /> }</a>
    </nav>
  )
}

export default Nav


// `
// switch (activeNav) {
//   case 1:
//     setActiveNav("#")
//     break;
//   case 2:
//     setActiveNav("#about")
//     break;
//   case 3:
//     setActiveNav("#experience")
//     break;
//   case 4:
//     setActiveNav("#services")
//     break;
//   case 5:
//     setActiveNav("#portfolio")
//     break;
//   case 6:
//     setActiveNav("#contact")
//     break;
//   default:
//     break;
// }
// `