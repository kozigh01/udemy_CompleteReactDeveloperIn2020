import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="CustomButton" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;