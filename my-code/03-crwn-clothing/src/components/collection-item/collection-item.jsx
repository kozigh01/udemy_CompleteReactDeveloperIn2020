import React from 'react';
import './collection-item.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="CollectionItem">
      <div className="image" style={ { backgroundImage: `Url(${imageUrl})`} }></div>
      <div className="footer">
        <div>{name}</div>
        <div>${price}</div>
      </div>
    </div>
  );

};

export default CollectionItem;