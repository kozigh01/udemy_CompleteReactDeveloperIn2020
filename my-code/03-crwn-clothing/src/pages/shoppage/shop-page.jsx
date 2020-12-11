import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './shop-page.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collectionpage/collection-page';

const ShopPage = ({ match }) => {
  return (
    <div className="ShopPage">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Switch>
      
    </div>
  );
};

export default ShopPage;
