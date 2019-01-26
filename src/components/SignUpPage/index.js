import React, {Component} from 'react';

class SignUpFormBase extends Component {

  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  };

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return (
      <form>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          autoComplete="on"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          autoComplete="on"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          autoComplete="on"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          autoComplete="on"
        />
        <button type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpPage = () => (
  <div>
    <h2>Sign Up</h2>
    <SignUpFormBase/>
  </div>
);


export default SignUpPage;