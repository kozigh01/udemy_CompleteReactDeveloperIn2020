import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionOverview from './collections-overview';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
