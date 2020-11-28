import React from 'react';
import './sign-in.scss';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = { email: '', password: '' }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: "" });
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState( { [name]: value });
  };

  render() {
    return (
      <div className="SignIn">
        <h2>I alread have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            label="Email" 
            handleChange={this.handleChange}
          />
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            label="Password"
            handleChange={this.handleChange} 
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;