import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';

import { removeItem, incrementItemCount, decrementItemCount } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem, incrementItemCount, decrementItemCount}) => {
  if (!item) { return null; }

  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt='item' />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItemCount(item)}>&#10094;</div>
        <div className="value">{quantity}</div>        
        <div className="arrow" onClick={() => incrementItemCount(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>&#10005;</div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   items: selectCartItems
// });

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  incrementItemCount: item => dispatch(incrementItemCount(item)),
  decrementItemCount: item => dispatch(decrementItemCount(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

