import React, {Component} from 'react';
import EditCount from './EditCount';
import styles from './TodayExercise.module.css';

export default class TodayExercise extends Component {
  
  render(){
  
    const {label} = this.props;

    return(
      <div className={styles.todayExercise}>
        <p>Exercise...</p>
        {label}
        <EditCount/>
      </div>
    )
  }
}

