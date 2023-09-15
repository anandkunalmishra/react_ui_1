import React from 'react'
import "./Locationcard.css"
import imgsrc from "../../asset/fall.jpg"

function Locationcard() {
  return (
    <div className="locationcard">
        <div className="image">
            <img src={imgsrc} alt="Place"></img>
        </div>
        <div className="name">
          <h2>Location</h2>
          <p> properties</p>
        </div>
    </div>
  )
}

export default Locationcard