import React from 'react';
import './FavButton.css'
import PropTypes from 'prop-types'

const FavButton =({favorites, setDisplayedData}) => {

  return (
    <div className='favorite-div' onClick={() => setDisplayedData('favorites')}>
      <p className='favorite-text'>Favorites</p>
      <div className='favorite-count'>
        <p>
          {favorites}
        </p>
      </div>
    </div>
  )
}



FavButton.propTypes = {
  favorites: PropTypes.number,
  setDisplayedData: PropTypes.func
};

export default FavButton;