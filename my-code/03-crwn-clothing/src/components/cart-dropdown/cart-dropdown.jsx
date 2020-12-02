import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';

const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="item">
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hidden: state.cart.hidden
  }
}

export default connect(null, null)(CartDropdown);