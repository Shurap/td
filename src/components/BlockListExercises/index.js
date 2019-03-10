import React, { Component } from 'react';
import ListExercises from './ListExercises';
import AddExercise from './AddExercise';
import styles from './indexBlockListExercises.module.css';

class BlockListExercises extends Component {

  state = {
    visible: true
  }

  onToggleVisible = () => {
    this.setState({...this.state, visible: !this.state.visible});
  }

  render() {

    return (
      <div className={(this.state.visible) ? styles.block : styles.block_hidden} >
        <div className={styles.button}
          onClick={this.onToggleVisible}></div>
        <p>BlockListExercises</p>
        <AddExercise />
        <ListExercises />
      </div>
    )
  }
}

export default BlockListExercises;

