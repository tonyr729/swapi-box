import React from 'react';
import './Card.css'

const Card =({data, setFavorites}) => {
  const keys = Object.keys(data)
  const cardContents = keys.map((keyname, index) => {
    let key = keyname;
    if(key === "vehicleClass") {
      key = "class"
    } 
    return (
      <p key={index} >{ key.charAt(0).toUpperCase() + key.slice(1) }: { data[keyname] }</p>
    )
  })

  
    
  return (
    <div className="card">
      { cardContents }
      <button onClick={() => setFavorites(data)}>★</button>
    </div>
  )
}

export default Card;