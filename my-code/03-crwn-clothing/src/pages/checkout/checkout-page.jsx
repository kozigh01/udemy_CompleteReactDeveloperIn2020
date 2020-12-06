import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout-page.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import { selectCartItems, selectorCartItemsTotal } from '../../redux/cart/cart.selectors';


class CheckOutPage extends React.Component {
  render() {
    return (
      <div className="CheckOutPage">
        <div className="header">
          <div className="header-block">
            <span>product</span>
          </div>
          <div className="header-block">
            <span>description</span>
          </div>
          <div className="header-block">
            <span>quantity</span>
          </div>
          <div className="header-block">
            <span>price</span>
          </div>
          <div className="header-block">
            <span>remove</span>
          </div>
        </div>

        {this.props.items.map(item => (
            <CheckoutItem key={item.id} item={item} />
        ))}
        <div className="total">
          <span>Total: ${this.props.total}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectorCartItemsTotal
});

export default connect(mapStateToProps, null)(CheckOutPage);