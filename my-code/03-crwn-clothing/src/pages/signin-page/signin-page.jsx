import React from 'react';
import './signin-page.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SigninPage = () => {
  return (
    <div className="SigninPage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninPage;