import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, i) => acc + i.quantity, 0)
);

export const selectorCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0)
);