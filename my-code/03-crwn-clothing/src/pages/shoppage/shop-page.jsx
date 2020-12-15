import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import './shop-page.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collectionpage/collection-page';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewwithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="ShopPage">
        <Switch>
          <Route exact path={`${match.path}`} render={props => <CollectionOverviewwithSpinner isLoading={isFetching} {...props}/> }/>
          <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/> } />
        </Switch>
      </div>
    );
  };
} 

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
