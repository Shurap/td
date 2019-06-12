import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import BlockListExercises from '../BlockListExercises';
import BlockTraining from '../BlockTraining';
import styles from './HomePage.module.css';
import withAuth from '../../hocs/withAuth'

class HomePage extends Component {

  render() {

    return (
      <div className={styles.homePage}>
        <BlockListExercises />
        <BlockTraining />
      </div>
    );
  }
}
export default withAuth(withFirebase(HomePage));