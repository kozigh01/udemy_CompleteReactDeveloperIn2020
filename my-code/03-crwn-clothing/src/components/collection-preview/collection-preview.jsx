import React from 'react';
import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="CollectionPreview">
      <div className="title">{ title }</div>
      <div className="collection-container">
        {
          items.slice(0, 4).map(({ id, ...otherProps }) => (
              <div key={id} className="item">
                <CollectionItem {...otherProps} className="item" />
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default CollectionPreview;