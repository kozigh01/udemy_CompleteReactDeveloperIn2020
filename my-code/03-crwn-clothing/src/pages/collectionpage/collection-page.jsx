import React from 'react';
import { connect } from 'react-redux';

import './collection-page.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
  return (
    <div className="CollectionPage">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        { collection.items.map(item =>
          <CollectionItem key={item.id} item={item} />
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);