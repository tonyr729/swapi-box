import React from 'react';
import Card from '../../Components/Stateless/Card/';
import './index.css';
import PropTypes from 'prop-types';

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

CardContainer.propTypes = {
  data: PropTypes.object
};

export default CardContainer;