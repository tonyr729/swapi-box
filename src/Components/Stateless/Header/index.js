import React from 'react';
import './index.css';
import FavButton from '../FavButton/FavButton';
import PropTypes from 'prop-types';


const Header = ({setPeopleData, setPlanetData, setVehicleData, setDisplayedData, favorites}) =>{

  return (
    <div className="header">
      <h1 className="header-title">SWAPI-Box</h1>
      <FavButton favorites={ favorites } setDisplayedData={ setDisplayedData } />
      <div className="button-container">
        <button onClick={ setPeopleData }>People</button>
        <button onClick={ setPlanetData }>Planets</button>
        <button onClick={ setVehicleData }>Vehicles</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  setPeopleData: PropTypes.func,
  setPlanetData: PropTypes.func,
  setVehicleData: PropTypes.func,
};

export default Header;