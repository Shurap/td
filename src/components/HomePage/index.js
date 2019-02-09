import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {
 
  test = () => {
    console.log(this.props.firebase.authUser);
  }

  render() {

    // console.log('email - ', this.props.firebase.auth.currentUser.email);

    return (
      <div>
        <h2>Home Page</h2>
        <Exercises/>
        <TrainingList/>
        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}
export default withFirebase(HomePage);