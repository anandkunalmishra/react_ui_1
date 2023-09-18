import React from 'react';
import './Searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';

function Searchbox() {
  return (
    <div className='searchbox'>
      <div className='location'>
        <FontAwesomeIcon icon={faBed} />
        <h5>Where are you going?</h5>
      </div>

      <div className='duration'>
        <FontAwesomeIcon icon={faCalendarDays} />
        <h5>04/22/2022 to 04/22/2022</h5>
      </div>

      <div className='persondetails'>
        <FontAwesomeIcon icon={faPerson} />
        <h5>1 adult . 0 children . 1 room</h5>
      </div>

      <div className='searchbtn'>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Searchbox;
