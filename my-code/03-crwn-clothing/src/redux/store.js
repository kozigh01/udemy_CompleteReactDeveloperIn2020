import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'

import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shop.sagas';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { fetchCollectionStart } from './shop/shop.sagas';


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

const sagaMiddleware = createSagaMiddleware();

// store
const middlewares = [ thunk, sagaMiddleware ];
// if(ProcessingInstruction.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

function* rootSaga() {
  yield all([
    call(fetchCollectionStart)
  ]);
}
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
