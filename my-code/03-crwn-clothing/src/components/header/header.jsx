import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.scss';
// import logo from '../../assets/crown.svg'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth }  from '../../firebase/firebase-utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({ currentUser, hidden }) => {
  const authLink = currentUser 
    ? <a className="option" onClick={() => auth.signOut()}>sign out</a>
    : <Link to="/signin">sign in</Link>;

  return (
    <div className="Header">
      <Link to="/">
        {/* <img src={logo} alt="main logo" className="logo"/> */}
        <Logo />
      </Link>

      <div className="menu-item-container">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">contact</Link>
        {authLink}
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  );
};


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    hidden
  }
};

export default connect(mapStateToProps)(Header);
