import React, {Component} from 'react';
import {withFirebase} from '../Firebase';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {addAuthUserName} from '../../actions';
import {connect} from 'react-redux';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {

  state = {...INITIAL_STATE};

  onSubmit = event => {
    event.preventDefault();
    const {username, email, passwordOne} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
       
      .then(authUser => {
        
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });

        return this.props.firebase
          .exercises(authUser.user.uid)
          .set({
            one: 1
          });
      })
      
      .then(() => {
        this.props.addAuthUserName(this.state.username);
        this.setState({...INITIAL_STATE});
        this.props.history.push('/home');
      })
      
      .catch((error) => {
        this.setState({error});
      });
  };

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

     const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
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
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addAuthUserName}, dispatch);

const SignUpForm = withRouter(withFirebase(connect(null, mapDispatchToProps)(SignUpFormBase)));

const SignUpPage = () => (
  <div>
    <h2>Sign Up Page</h2>
    <SignUpForm/>
  </div>
);

export default SignUpPage;