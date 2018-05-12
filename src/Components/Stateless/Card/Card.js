import React from 'react';
import './Card.css'

const Card =({data, setFavorites, favorites}) => {
  
  const keys = Object.keys(data)
  const cardContents = keys.map((keyname, index) => {
    let key = keyname;
    if(key === "vehicleClass") {
      key = "class"
    } 
    if (key === 'favorite'){
      return <p></p>
    }
    return (
      <p key={index} >{ key.charAt(0).toUpperCase() + key.slice(1) }: { data[keyname] }</p>
    )
  })

  const classValue = (data) => {
    let favs = favorites || [1, 2]
    let match = favs.find(favorite => favorite.name === data.name)

    return match ? "card-button active" : "card-button";
  }

  
    
  return (
    <div className="card">
      <button className={classValue(data)} onClick={() => setFavorites(data)}>★</button>
      <div className='card-text'>
        { cardContents }
      </div>
    </div>
  )
}

export default Card;