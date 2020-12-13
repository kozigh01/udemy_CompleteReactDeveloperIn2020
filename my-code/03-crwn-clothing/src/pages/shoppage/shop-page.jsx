import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './shop-page.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collectionpage/collection-page';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase-utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unsubscribeFromShopData = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const data = convertCollectionSnapshotToMap(snapshot);
      updateCollections(data);
    });

  }

  render() {
    const { match } = this.props;
    return (
      <div className="ShopPage">
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Switch>
        
      </div>
    );
  };
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
