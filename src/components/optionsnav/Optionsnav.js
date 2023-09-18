import React from 'react';
import './Optionsnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faCab } from '@fortawesome/free-solid-svg-icons';

function Optionsnav() {
  return (
    <div className="options-container">
      <div className="option1">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
      </div>

      <div className="option2">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
      </div>

      <div className="option3">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
      </div>

      <div className="option4">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
      </div>

      <div className="option5">
        <FontAwesomeIcon icon={faCab} />
        <span>Airport taxis</span>
      </div>
    </div>
  );
}

export default Optionsnav;
