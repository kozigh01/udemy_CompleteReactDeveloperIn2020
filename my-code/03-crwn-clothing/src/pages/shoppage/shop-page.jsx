import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './shop-page.scss';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collectionpage/collection-page.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="ShopPage">
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </Switch>
      </div>
    );
  };
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
