import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addAuthUserData, changeAuthStatus } from '../../actions';
import { connect } from 'react-redux';
import styles from './indexSignUpPage.module.css';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {

  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)

      .then(authUser => {

        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            schedule: ''
          });
      })

      .then(() => {
        this.props.firebase.getWholeUser()
          .then((currentUserData) => this.props.addAuthUserData(currentUserData));
        this.setState({ ...INITIAL_STATE });
        this.props.firebase.auth.onAuthStateChanged((authUser) => {
          return (authUser) ? this.props.changeAuthStatus(true) : this.props.changeAuthStatus(false);
        });
        this.props.history.push('/home');
      })

      .catch((error) => {
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
      <div className={styles.signUp}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.wrapperText}>
            <p>Sign up</p>
          </div>
          <div className={styles.wrapperButtons}>
            <button
              className={(isInvalid) ? styles.buttonCheck : styles.buttonCheckActive}
              disabled={isInvalid}
              type="submit">
            </button>
          </div>
          <div className={styles.wrapperInputs}>
            <input
              className={styles.textInput}
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
          </div>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addAuthUserData, 
  changeAuthStatus
}, dispatch);

const SignUpForm = withRouter(withFirebase(connect(null, mapDispatchToProps)(SignUpFormBase)));

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

export default SignUpPage;