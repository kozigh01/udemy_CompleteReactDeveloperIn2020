import React from 'react-redux';


import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  if (isLoading) {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
  }

  return (
    <WrappedComponent {...otherProps} />
  )
};

export default WithSpinner;