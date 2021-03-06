import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addAuthUserData, changeAuthStatus } from '../../actions';
import { connect } from 'react-redux';
import styles from './indexSignInPage.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {

  state = { ...INITIAL_STATE };

  onRedirect = () => {
    this.props.history.push('/signup');
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)

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
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className={styles.signIn}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.wrapperText}>
            <p>Sign in</p>
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
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
          </div>
          {error && <p>{error.message}</p>}
          <div className={styles.wrapperButtonDown}>
          <div>
            <p>SignUp</p>
          </div>
          <button
            className={styles.buttonOut}
            onClick={this.onRedirect}>
          </button>
        </div>
        </form>
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  addAuthUserData,
  changeAuthStatus
}, dispatch);

const SignInForm = withRouter(withFirebase(connect(null, mapDispatchToProps)(SignInFormBase)));

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

export default SignInPage;