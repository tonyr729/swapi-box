import React from 'react';
import cardFormat from '../../../Helpers/cardFormat/cardFormat'
import './Card.css'

const Card =({data}) => {
  const cardContents = cardFormat(data);

  return (
    <div className="card">
      { cardContents }
      <button>★</button>
    </div>
  )
}

export default Card;