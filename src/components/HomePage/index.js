import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import BlockListExercises from '../BlockListExercises';
import TrainingList from '../TrainingList';


class HomePage extends Component {

  render() {

    return (
      <div>
        <h2>Home Page</h2>
        <BlockListExercises />
        <TrainingList />
      </div>
    );
  }
}
export default withFirebase(HomePage);