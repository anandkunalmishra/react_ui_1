import React from 'react';
import './App.css';

// Components
import Navbar from './components/navbar/Navbar';
import Optionsnav from './components/optionsnav/Optionsnav';
import Intronav from './components/intronav/Intronav';
import Searchbox from './components/searchbox/Searchbox';
import Locationcard from './components/locationcard/Locationcard';
import Browsebar from './components/browsebar/Browsebar';

// Images
import europe from "./asset/europe.jpg";
import fall from "./asset/fall.jpg";
import mountain from "./asset/mountain.jpg";
import cabin from "./asset/cabin.jpg";
import apartment from "./asset/apartment.jpg"
import villa from "./asset/villa.jpg"
import hotel from "./asset/hotel.jpg"
import resort from "./asset/resort.jpg"


const locationCardsData = [
  { location: "Dublin", propertiesCount: 123, imgsrc: mountain },
  { location: "Argentina", propertiesCount: 533, imgsrc: fall },
  { location: "Europe", propertiesCount: 532, imgsrc: europe }
];

const browseBarData = [
  {category: "Hotels",categoryCount: 5896,imgsrc: hotel},
  {category: "Apartments",categoryCount: 4753,imgsrc: apartment},
  {category: "Resorts",categoryCount: 629,imgsrc: resort},
  {category: "Villas",categoryCount: 318,imgsrc: villa},
  {category: "Cabins",categoryCount: 112,imgsrc: cabin}
];

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Navbar />
        <Optionsnav />
        <Intronav />
      </div>
      <div className='body'>
        <Searchbox />
        <div className='horizontal'>
          {locationCardsData.map((data, index) => (
            <Locationcard key={index} {...data} />
          ))}
        </div>
        <span className='Titlecat'>Browse your choice</span>
        <div className='horizontal'>
          {browseBarData.map((data, index) => (
            <Browsebar key={index} {...data} />
          ))}
        </div>
        <span className='Titlecat'>Home guest love</span>
      </div>
    </div>
  );
}

export default App;
