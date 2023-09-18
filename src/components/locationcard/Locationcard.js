import React from 'react'
import "./Locationcard.css"

function Locationcard({ location, propertiesCount, imgsrc }) { 

  return (
    <div className="locationcard">
      <div className="image">
        <img className="testing" src={imgsrc} alt="Place" />
      </div>
      <div className="name">
        <h2>{location}</h2>
        <p>{propertiesCount} properties</p>
      </div>
    </div>
  );
}

export default Locationcard;