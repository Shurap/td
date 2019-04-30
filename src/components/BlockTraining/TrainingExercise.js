import React, { Component } from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';
import { withFirebase } from '../Firebase';
import { connect } from "react-redux";

class TrainingExercise extends Component {

  render() {

    const { exercise, dateOfDay } = this.props;

    return (
      <div className={styles.trainingExercise}>
        <div className={styles.wrappingExercise}>
          <div className={styles.wrappingButtons}>
            <button
              className={styles.buttonAdd}
              onClick={() => this.props.onAddEdit(exercise, dateOfDay, this.props.arrayEdits)}
            ></button>
            <button
              className={styles.buttonSave}
              onClick={() => this.props.onSaveAllEditsToBase(exercise, dateOfDay, this.props.arrayEdits)}
            ></button>
            <button className={styles.buttonDel}></button>
          </div>
          <div className={styles.wrappingExerciseName}>
            {exercise}
          </div>
        </div>
        <div className={styles.wrappingSets}>
          <ListEdit
            dateOfDay={dateOfDay}
            exercise={exercise}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { exercise, dateOfDay } = ownProps;
  return { arrayEdits: state.main.currentUser.schedule[dateOfDay][exercise] };
};

export default withFirebase(connect(mapStateToProps)(TrainingExercise));