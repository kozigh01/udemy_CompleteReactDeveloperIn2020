import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


// root reducer
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const rootReducer = combineReducers({ 
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


// store
// const middlewares = [ logger ];
const middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
