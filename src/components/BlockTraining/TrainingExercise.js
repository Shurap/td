import React, {Component} from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';
import { withFirebase } from '../Firebase';
import { connect } from "react-redux";

class TrainingExercise extends Component {

  onSaveAllEditsToBase = (exercise, dateOfDay) => 
    this.props.firebase.updateDataToBase(`schedule/${dateOfDay}/${exercise}`, this.props.arrayEdits);
  
  render(){
  
    const {exercise, dateOfDay} = this.props;

    return(
      <div className = {styles.trainingExercise} onClick={(e) => {console.log('TrainingExercise'); e.stopPropagation()}}>
        <p>TrainingExercise</p>
        <button>Del</button>
        {exercise}
        <ListEdit 
          dateOfDay={dateOfDay}
          exercise={exercise}
        />
        <button onClick = {() => this.props.onAddEdit(exercise, dateOfDay)}>Add</button>
        <button onClick = {() => this.onSaveAllEditsToBase(exercise, dateOfDay)}>Save Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {exercise, dateOfDay} = ownProps;
  return {arrayEdits: state.main.currentUser.schedule[dateOfDay][exercise]};
};

export default connect(mapStateToProps)(withFirebase(TrainingExercise));