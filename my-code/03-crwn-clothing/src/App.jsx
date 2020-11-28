import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop-page';
import SigninPage from './pages/signin-page/signin-page';
import { auth } from './firebase/firebase-utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('unsubscribing');
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage}  />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </div>
    );
  }
}

export default App;