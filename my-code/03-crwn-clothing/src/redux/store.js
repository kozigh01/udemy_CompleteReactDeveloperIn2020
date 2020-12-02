import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({ 
  user: userReducer,
  cart: cartReducer 
});

const middlewares = [ logger ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;