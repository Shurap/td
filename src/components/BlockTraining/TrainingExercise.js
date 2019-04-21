import React, {Component} from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';

export default class TrainingExercise extends Component {
  
  render(){
  
    const {exercise, dateOfDay} = this.props;

    return(
      <div className = {styles.trainingExercise}>
        <p>TrainingExercise</p>
        <button>Del</button>
        {exercise}
        <ListEdit 
          dateOfDay={dateOfDay}
          exercise={exercise}
        />
        <button onClick = {() => this.props.onAddEdit(exercise, dateOfDay)}>Add</button>
        <button>Save Data</button>
      </div>
    )
  }
}