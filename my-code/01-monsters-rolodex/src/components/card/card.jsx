import React from 'react';
import './card.css';

const Card = props => {
  const imgUrl = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`;
  return (
    <div className="card-container">
      <img src={imgUrl} alt="props.monster.name" />
      <h2>{props.monster.name}</h2>
      <p>props.monster.email</p>
    </div>
  )
};

export default Card;