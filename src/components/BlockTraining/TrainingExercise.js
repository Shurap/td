import React, {Component} from 'react';
import EditCount from './EditCount';
import styles from './TrainingExercise.module.css';

export default class TrainingExercise extends Component {
  
  render(){
  
    const {exercise} = this.props;

    return(
      <div className = {styles.trainingExercise}>
        <p>TrainingExercise</p>
        {exercise}
        <EditCount/>
      </div>
    )
  }
}