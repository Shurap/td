import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { bindActionCreators } from 'redux';
import { userOut } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './indexSignOutPage.module.css';

class SignOutPage extends Component {

  onOut = () => {
    this.props.history.push('/signin');
  }

  render() {
    return (
      <div className={styles.signOut}>
        <div className={styles.wrapperForm}>
          <div className={styles.wrapperText}>
            <p>SignOut</p>
          </div>
          <div className={styles.wrapperButton}>
            <button className={styles.buttonOut} type="button" onClick={() => {
              this.props.userOut();
              this.props.firebase.doSignOut();
              this.onOut();
            }}>
            </button>
          </div>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ userOut }, dispatch);

export default withRouter(withFirebase(connect(null, mapDispatchToProps)(SignOutPage)));