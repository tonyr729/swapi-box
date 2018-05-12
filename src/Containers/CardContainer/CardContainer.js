import React from 'react';
import Card from '../../Components/Stateless/Card/Card'
import './CardContainer.css'

const CardContainer = ({data, setFavorites, favorites}) => {
  const cards = data.displayed.map((personObject, index)=> {
    return <Card key={index} data={personObject} setFavorites={setFavorites} favorites={ favorites }/>
  })

  return(
    <div className="card-container">
      {cards}
    </div>
  )
}

export default CardContainer;