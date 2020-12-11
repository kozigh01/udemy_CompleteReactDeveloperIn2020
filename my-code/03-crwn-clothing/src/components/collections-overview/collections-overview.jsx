import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.scss';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="CollectionOverview">
      <h2>Collections</h2>
      { collections.map(({ id, ...otherProps }) => 
          <CollectionPreview key={id} {...otherProps} />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, null)(CollectionsOverview);
