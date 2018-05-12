import React from 'react';
import './FavButton.css'

const FavButton =({favorites, setDisplayedData}) => {

  return (
    <div onClick={() => setDisplayedData('favorites')}>
      <p className='favorite-text'>Favorites</p>
      <div>
        <p className='favorite-count'>
          {favorites}
        </p>
      </div>
    </div>
  )
}

export default FavButton;