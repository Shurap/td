import React, { Component } from 'react';
import TodayListExercises from './TodayListExercises'
import Test from './Test';
import styles from './indexBlockTodayTraining.module.css';

export default class BlockTodayTraining extends Component {

  render() {
    return (
      <div className={styles.block}>
        <p>BlockTodayTraining</p>
        <Test/>
        <TodayListExercises/>
      </div>
    )

  }

}