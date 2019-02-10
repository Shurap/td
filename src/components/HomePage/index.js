import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {

  getData = () => {
    //console.log('function', this.props.firebase.getUserData('email', 'sss@sss.com'));

    this.props.firebase.getUserData('email', this.props.firebase.auth.currentUser.email)
      .then((resolve) => console.log('component', resolve));

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