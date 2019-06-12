import React, { Component } from 'react';
import ListDayOfExercises from './ListDayOfExercises'
import styles from './indexBlockTraining.module.css';

export default class BlockTraining extends Component {

  render() {
    return (
      <div className={styles.block}>
        <ListDayOfExercises/>
      </div>
    )
  }
}