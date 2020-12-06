import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './checkout-item.scss';

// import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutItem = ({item}) => {
  if (!item) { return null; }

  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt='item' />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   items: selectCartItems
// });

export default connect(null, null)(CheckoutItem);

