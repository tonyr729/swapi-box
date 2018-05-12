import React, { Component } from 'react';
import './index.css'
import FavButton from '../FavButton/FavButton'


const Header = ({setPeopleData, setPlanetData, setVehicleData, setDisplayedData, favorites}) =>{
 
  return (
    <div>
      <h1 className="header-title">SWAPI-Box</h1>
      <FavButton favorites={ favorites } setDisplayedData={ setDisplayedData } />
      <button onClick={ setPeopleData }>People</button>
      <button onClick={ setPlanetData }>Planets</button>
      <button onClick={ setVehicleData }>Vehicles</button>
    </div>
  )
}


export default Header;