import React from 'react'
import './experience.css'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'


const Experiences = (props) => {  
  return (
    <section id='experience' className={props.darkMode ? "light": ""}>
      <br /><br /><br />
      <h3>My Skills</h3>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article  className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>   
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>Bootsrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>                  
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon' />
                <div>
                  <h4>SQl</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon' />
                <div>
                  <h4>MYSQL</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience__details'>
                <RiCheckboxBlankCircleFill className='experience__details-icon' />
                <div>
                  <h4>.NET</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences