import React from 'react'
import './services.css'

const Services = (props) => {
  return (
    <section id='services' className={props.darkMode ? "light" : ""}>
      <br /> <br /> <br />
      <h2>Services</h2>

      <div className="container services__container">

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__body">
            <small>create the user interface for an app, website</small>
          </div>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <div className="service__body">
            <small>Designing, Building, or Maintaining Websites and software applications </small>
          </div>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <div className="service__body">
            <small>Designing, Building, or Maintaining Websites and software applications </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services