import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Header;
