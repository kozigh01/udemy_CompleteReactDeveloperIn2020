import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// import logo from '../../assets/crown.svg'
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        {/* <img src={logo} alt="main logo" className="logo"/> */}
        <Logo />
      </Link>

      <div className="menu-item-container">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">contact</Link>
        <Link to="/signin">sign in</Link>
      </div>
    </div>
  );
};

export default Header;
