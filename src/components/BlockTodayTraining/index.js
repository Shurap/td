import React, { Component } from 'react';
import TodayListExercises from './TodayListExercises'
import styles from './indexBlockTodayTraining.module.css';

export default class BlockTodayTraining extends Component {

  render() {
    return (
      <div className={styles.block}>
        <p>BlockTodayTraining</p>
        <TodayListExercises/>
      </div>
    )

  }

}