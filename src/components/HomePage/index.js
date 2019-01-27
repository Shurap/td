import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class HomePage extends Component {
  
  

  render() {

    console.log('auth - ', this.props.firebase.auth);
    console.log('users - ', this.props.firebase.users);
        //(authUser.user.uid))

    return (
      <div>
        <h2>Home Page</h2>
      </div>
    );
  }
}
export default withFirebase(HomePage);