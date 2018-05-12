import React from 'react';
import './index.css';
import FavButton from '../FavButton/FavButton';
import PropTypes from 'prop-types';


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

Header.propTypes = {
  setPeopleData: PropTypes.func,
  setPlanetData: PropTypes.func,
  setVehicleData: PropTypes.func,
  setDisplayedData: PropTypes.func
};

export default Header;