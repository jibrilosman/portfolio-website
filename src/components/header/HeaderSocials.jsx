import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jibril-omar-25bb98216/" target="_blank"  rel="noreferrer"> <BsLinkedin /> </a>
        <a href="https://github.com/jibrilosman" target="_blank"  rel="noreferrer"> <FaGithub /> </a>
        <a href="https://www.frontendmentor.io/profile/jibrilosman" target="_blank"  rel="noreferrer">< SiFrontendmentor/></a>
    </div>
  )
}

export default HeaderSocials