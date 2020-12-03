import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  const isGoogleClass = isGoogleSignIn ? 'google-sign-in' : '';
  const invertedClass = inverted ? 'inverted' : '';

  return (
    <button type="button" className={`${isGoogleClass} ${invertedClass} CustomButton`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;