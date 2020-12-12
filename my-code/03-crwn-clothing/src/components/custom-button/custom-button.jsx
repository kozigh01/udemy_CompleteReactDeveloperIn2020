import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer type="button" {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;