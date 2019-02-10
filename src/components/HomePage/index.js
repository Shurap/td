import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {

  render() {

    return (
      <div>
        <h2>Home Page</h2>
        <Exercises />
        <TrainingList />
      </div>
    );
  }
}
export default withFirebase(HomePage);