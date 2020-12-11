import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout-page.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
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
        
        <div className="test-warning">
          *Please use the following test credit card for payments* 
          <br/>
          4242 4242 4242 4242 - Exp: any date in future, cvv: any 3 digits
        </div>
        <StripeCheckoutButton price={this.props.total} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectorCartItemsTotal
});

export default connect(mapStateToProps, null)(CheckOutPage);