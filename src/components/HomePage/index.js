import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {
  
  

  render() {

    console.log('email - ', this.props.firebase.auth.currentUser.email);
    //console.log('uid - ', this.props.firebase.user(authUser.user.uid));
        //(authUser.user.uid))

    return (
      <div>
        <h2>Home Page</h2>
        <Exercises/>
        <TrainingList/>
      </div>
    );
  }
}
export default withFirebase(HomePage);