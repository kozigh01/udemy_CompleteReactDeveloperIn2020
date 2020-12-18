import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop-page';
import SigninPage from './pages/signin-page/signin-page';
import CheckOutPage from './pages/checkout/checkout-page';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase-utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // This was a one-time thing to add the shop data to the Firebase Firestore
    // addCollectionAndDocuments('collections', this.props.shopData.map(({title, items}) => ({title, items})));

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage}  />
          <Route 
            exact 
            path="/signin" 
            render={() => this.props.currentUser 
              ? <Redirect to='/' /> 
              : <SigninPage /> 
            }
            />
          <Route path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // shopData: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);