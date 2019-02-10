import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { bindActionCreators } from 'redux';
import { userOut } from '../../actions';
import { connect } from 'react-redux';

class SignOutPage extends Component {
  render() {
    return (
      <div>
        <h2>Sign Out Page</h2>
        <button type="button" onClick={() => {
          this.props.userOut();
          this.props.firebase.doSignOut();
        }}>
          Sign Out
    </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ userOut }, dispatch);

export default withFirebase(connect(null, mapDispatchToProps)(SignOutPage));