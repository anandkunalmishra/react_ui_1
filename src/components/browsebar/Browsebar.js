import React from 'react'
import './Browsebar.css'



function Browsebar({imgsrc, category, categoryCount}) {
  return (
    <div className='imagepart'>
        <img className='imagesec' src={imgsrc} alt='Property type'></img>
        <p>{category}</p>
        <h6>{categoryCount} {category}</h6>
    </div>
  )
}

export default Browsebar