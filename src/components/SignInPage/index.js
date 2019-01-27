import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends Component {

  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      // .then(() => {
      //   this.setState({...INITIAL_STATE});
      //   this.props.history.push(ROUTES.HOME);
      // })
      .catch((error) => {
        this.setState({error});
      });
  };
  
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {

    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          autoComplete="on"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          autoComplete="on"
        />
        <button disabled={isInvalid} type="submit">Sign In</button>

        {error && <p>{error.message}</p>}
      </form>
    );

  }
}

const SignInForm = withFirebase(SignInFormBase);

const SignInPage = () => (
  <div>
    <h2>Sign In Page</h2>
    <SignInForm/>
  </div>
);

export default SignInPage;