import React, { Component } from 'react';
import './index.css'


const Header = ({setPeopleData, setPlanetData, setVehicleData}) =>{
 
  return (
    <div>
      <h1 className="header-title">SWAPI-Box</h1>
      <button>View Favorites 0</button>
      <button onClick={ setPeopleData }>People</button>
      <button onClick={ setPlanetData }>Planets</button>
      <button onClick={ setVehicleData }>Vehicles</button>
    </div>
  )
}


export default Header;