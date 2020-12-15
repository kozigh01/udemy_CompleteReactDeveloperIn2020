import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = props => {
  const { title, routeName, items, history } = props;
  return (
    <div className="CollectionPreview">
      <div className="title" onClick={() => history.push(`shop/${routeName}`)}>{ title }</div>
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

export default withRouter(CollectionPreview);