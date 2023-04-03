import React, {useState} from 'react'
import './portfolio.css'
import File from '../../assets/ProjectPrototype.pdf'
import SportShop from '../../assets/sportshop.png'
import data from './Data'



const Portfolio = (props) => {
  
  
  const [numToShow, setNumToShow] = useState(2);

  const handleShowMore = () => {
    setNumToShow(numToShow + 3);
  };
  return (
    <section id='portfolio' className={props.darkMode ? "light" : ""}>
      <br/> <br/> <br/>
      <h3>My Recent Work</h3>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article  className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={SportShop} alt="" />
            </div>
            <h3>E-commerce website using C# and .NET 6 MVC framework</h3>
            <div className="portfolio__item-cta">
              <a href={File} className='btn' target={'_blank'} rel="noreferrer" >Open Prototype</a>
              <a href="https://github.com/jibrilosman/SportShop.git" className='btn ' target={'_blank'}  rel="noreferrer">Github Link</a>
            </div>
        </article> 
        {
          data.slice(0, numToShow).map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target={'_blank'}  rel="noreferrer">Github Link</a>
                    <a href={demo} className='btn' target={'_blank'}  rel="noreferrer">Live Demo</a>
                  </div>
              </article> 
            )
          })
        }
        {numToShow < data.length && (
        <button className='btn btn-primary' onClick={handleShowMore}>Show More</button>
      )}
      </div>
      
    </section>
  )
}
export default Portfolio
