import React from 'react';
import './FavButton.css'

const FavButton =({favorites}) => {

  return (
    <div>
      <p>Favorites</p>
      <div>
        <p>
          {favorites}
        </p>
      </div>
    </div>
  )
}

export default FavButton;