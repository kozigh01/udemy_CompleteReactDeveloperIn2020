import React from 'react';
import { connect } from 'react-redux';
import './collection-item.scss';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="CollectionItem">
      <div className="image" style={ { backgroundImage: `Url(${imageUrl})`} }></div>
      <div className="footer">
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );

};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);