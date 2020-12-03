import React from 'react';
import './cart-item.scss';

const CartItem = ({ item: {name, price, imageUrl, quantity} }) => {
  return (
    <div className="CartItem">
      <img src={imageUrl} alt={name}/>
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
}

export default CartItem;