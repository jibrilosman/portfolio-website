
import CV from "../../assets/C.V.pdf";

import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary" >Contact Me</a>
    </div>
  )
}

export default CTA