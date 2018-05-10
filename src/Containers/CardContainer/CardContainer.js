import React from 'react';
import Card from '../../Components/Stateless/Card/Card'
import './CardContainer.css'

const CardContainer = ({data}) => {
  
  const cards = data.map(personObject => {
    return <Card data={personObject} />
  })

  return(
    <div className="card-container">
      {cards}
    </div>
  )
}

export default CardContainer;