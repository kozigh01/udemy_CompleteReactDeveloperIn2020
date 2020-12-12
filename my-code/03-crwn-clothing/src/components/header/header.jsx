import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, MenuItemContainer } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth }  from '../../firebase/firebase-utils';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({ currentUser, hidden }) => {
  const authLink = currentUser 
    ? <a href="/#" onClick={() => auth.signOut()}>sign out</a>
    : <Link to="/signin">sign in</Link>;

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      <MenuItemContainer>
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
        {authLink}
        <CartIcon />
      </MenuItemContainer>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  );
};


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
