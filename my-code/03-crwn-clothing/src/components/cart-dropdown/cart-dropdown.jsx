import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropdown = ({ items }) => {
  return (
    <div className="CartDropdown">
      <div className="items">
        {items.map(item => (<CartItem key={item.id} item={item} />))}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state)
  }
}

export default connect(mapStateToProps, null)(CartDropdown);