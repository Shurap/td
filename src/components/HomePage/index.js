import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {

  getData = () => {
    //console.log('function', this.props.firebase.getUserData('email', 'sss@sss.com'));
    const result = this.props.firebase.getUserData('email', 'sss@sss.com');
    console.log('component - ', result);
  }

  render() {

    // console.log('email - ', this.props.firebase.auth.currentUser.email);

    return (
      <div>
        <h2>Home Page</h2>
        <Exercises />
        <TrainingList />
        <button onClick={this.getData}>get data</button>
      </div>
    );
  }
}
export default withFirebase(HomePage);