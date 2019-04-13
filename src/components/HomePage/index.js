import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import BlockListExercises from '../BlockListExercises';
import BlockTraining from '../BlockTraining';
import styles from './HomePage.module.css';


class HomePage extends Component {

  render() {

    return (
      <div className={styles.homePage}>
        {/* <h2>Home Page</h2> */}
        <BlockListExercises />
        <BlockTraining />
      </div>
    );
  }
}
export default withFirebase(HomePage);