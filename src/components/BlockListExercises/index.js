import React, { Component } from 'react';
import ListExercises from './ListExercises';
import AddExercise from './AddExercise';
import styles from './indexBlockListExercises.module.css';

class BlockListExercises extends Component {

  state = {
    visible: true
  }

  onToggleVisible = () => {
    this.setState({ ...this.state, visible: !this.state.visible });
  }

  render() {

    return (
      <div className={styles.block}>
        <div className={(this.state.visible) ? styles.wrapperExercise : styles.wrapperExercise_hidden}>
          <div className={styles.up}>
          <p>Search / Add exercise</p>
          </div>
          <AddExercise />
          <div className={styles.down}>
          <p>List of exercises</p>
          </div>
          <ListExercises />
        </div>
        <div className={styles.wrapperButton}>
          <button
            className={(this.state.visible) ? styles.buttonToggle : styles.buttonToggle_hidden}
            onClick={this.onToggleVisible}>
          </button>
        </div>
      </div>
    )
  }
}

export default BlockListExercises;

