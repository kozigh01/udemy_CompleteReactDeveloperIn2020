import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop-page';
import SigninPage from './pages/signin-page/signin-page';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage}  />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
};

export default App;