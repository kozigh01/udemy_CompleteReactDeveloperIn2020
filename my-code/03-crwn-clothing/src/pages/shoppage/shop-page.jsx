import React from 'react';
import './shop-page.scss';

import SHOP_DATA from '../../data/shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';


export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
    console.log(this.state);
  } 

  render() {
    return (
      <div className="ShopPage">
        <h2>Collections</h2>
        <div className="collection-container">
          {
            this.state.collections.map(({ id, ...otherProps }) => 
              <CollectionPreview key={id} { ...otherProps } /> 
            )
          }
        </div>
      </div>
    );    
  }
}