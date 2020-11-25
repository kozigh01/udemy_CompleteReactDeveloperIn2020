import React from 'react'
import './card-list.css';
import Card from '../card/card';

const CardList = props => {
  return (
    <div>
      <div className="CardList">
          {props.monsters.map((monster, indx) =>
            <Card key={monster.id} monster={monster} />
          )}
        </div>
    </div>
  );
}

export default CardList;