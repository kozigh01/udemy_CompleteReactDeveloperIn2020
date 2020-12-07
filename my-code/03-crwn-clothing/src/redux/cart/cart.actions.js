import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const incrementItemCount = item => ({
  type: CartActionTypes.INCREMENT_ITEM_COUNT,
  payload: item
});

export const decrementItemCount = item => ({
  type: CartActionTypes.DECREMENT_ITEM_COUNT,
  payload: item
});