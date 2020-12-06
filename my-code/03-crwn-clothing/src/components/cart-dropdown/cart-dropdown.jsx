import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropdown = ({ items, history, toggleHidden }) => {
  const clickHandler = () => {
    history.push('/checkout');
    toggleHidden();
  };

  return (
    <div className="CartDropdown">
      {
        items.length > 0
        ? <div className="items">
            {items.map(item => (<CartItem key={item.id} item={item} />))}
          </div>
        : <span className="empty-message">your cart is empty</span>
      }
      <CustomButton onClick={clickHandler}>go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));