import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="CartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  isCartHidden: state.cart.hidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

