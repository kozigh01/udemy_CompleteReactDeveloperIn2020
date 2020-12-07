import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, adjustItemCount } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.INCREMENT_ITEM_COUNT:
      return {
        ...state,
        cartItems: adjustItemCount(state.cartItems, action.payload, 1)
      }
    case CartActionTypes.DECREMENT_ITEM_COUNT:
      return {
        ...state,
        cartItems: adjustItemCount(state.cartItems, action.payload, -1)
      }
    default:
      return state;
  }
};

export default cartReducer;