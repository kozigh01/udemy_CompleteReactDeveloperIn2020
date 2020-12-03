import React from 'react';
import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="CollectionPreview">
      <div className="title">{ title }</div>
      <div className="collection-container">
        {
          items.slice(0, 4).map(item => (
              <div key={item.id} className="item">
                <CollectionItem item={item} className="item" />
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default CollectionPreview;