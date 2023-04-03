import React from 'react'
import './about.css'
import Image from '../../assets/dev2.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = (props) => {
  // const styles = {
  //   color: props.darkMode ? "#000" : "#fff" 
  // }
  return (
    
    <section id='about' className={props.darkMode ? "light": ""}>
        <br /><br /><br />
      <h3>Get To Know</h3>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__card-icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
          Junior Web Developer with a Diploma in <strong>Enterprise Web & Mobile Developer</strong> and a passion with coding and creating websites. Organized, strong ability to communicate efficiently. Ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About