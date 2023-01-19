import React from 'react'
import heroFoodOne from '../../assets/heroFoodOne.svg'
import "./Hero.css"
import boy from "../../assets/boy.svg"

const Hero = () => {
  return (
    <div className="hero">
      <h3>Hi, <span><img src={boy} alt="" /></span></h3>
       <div className="hero-card">
            <img src={heroFoodOne} alt=" " />
        </div>
    </div>
  )
}

export default Hero