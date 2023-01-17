import React from 'react'
import f2 from "../../assets/f2.svg"
import f3 from "../../assets/f3.svg"
import f4 from "../../assets/f4.svg"
import pin from "../../assets/pin.jpg"
import "./Review.css"

const Review = () => {
  return (
    <div className='review'>
        <h3>Pinned Review <span><img src={pin} alt="" /></span></h3>
        <div className='reviews' >
            <img src={f2} alt="" />
            <img src={f3} alt="" />
            <img src={f4} alt="" />
        </div>
    </div>
  )
}

export default Review