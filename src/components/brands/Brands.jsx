import React from 'react'
import './brands.css'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Js from '../../assets/js.png'
import Bootstrap from '../../assets/bootstrap.png'
import Reactjs from '../../assets/react.png'
import Nodejs from '../../assets/nodejs.png'
import Php from '../../assets/php.png'
import Dotnet from '../../assets/.net.png'

const Brands = (props) => {

  return (
    <section className={props.darkMode ? "light": ""}>
         <br /><br /><br />
        <div className='brands-logo'>
        <img src={Css} alt="" />
        <img src={Html} alt="" />
        <img src={Js} alt="" />
        <img src={Bootstrap} alt="" />
        <img src={Reactjs} alt="" />
        <img src={Nodejs} alt="" />
        <img src={Php} alt="" />
        <img src={Dotnet} alt="" />
        </div>
    </section>
  )
}

export default Brands