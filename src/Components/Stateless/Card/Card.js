import React from 'react';
import './Card.css'

const Card =({data}) => {

  return (
    <div className="card">
      { data.name }
      <button>★</button>
    </div>
  )
}

export default Card;