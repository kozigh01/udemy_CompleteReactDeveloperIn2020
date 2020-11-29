import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  const className = `${isGoogleSignIn ? 'google-sign-in' : ''} CustomButton`;

  return (
    <button type="button" className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;