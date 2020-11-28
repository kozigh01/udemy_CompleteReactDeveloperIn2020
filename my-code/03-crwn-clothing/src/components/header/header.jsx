import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// import logo from '../../assets/crown.svg'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth }  from '../../firebase/firebase-utils';


const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
