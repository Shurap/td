import React, { Component } from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';
import { withFirebase } from '../Firebase';
import { connect } from "react-redux";

class TrainingExercise extends Component {

  onSaveAllEditsToBase = (exercise, dateOfDay) =>
    this.props.firebase.updateDataToBase(`schedule/${dateOfDay}/${exercise}`, this.props.arrayEdits);

  render() {

    const { exercise, dateOfDay } = this.props;

    return (
      <div className={styles.trainingExercise}>
        {/* <p>TrainingExercise</p> */}
        <div className={styles.wrappingUp}>
          {exercise}
          <button className={styles.buttonDel}></button>
        </div>
        <div className={styles.wrappingDown}>
          <ListEdit
            dateOfDay={dateOfDay}
            exercise={exercise}
          />
          <div className={styles.wrappingButton}>
            <button
              className={styles.buttonAdd}
              onClick={() => this.props.onAddEdit(exercise, dateOfDay)}
            ></button>
            <button
              className={styles.buttonSave}
              onClick={() => this.onSaveAllEditsToBase(exercise, dateOfDay)}
            ></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { exercise, dateOfDay } = ownProps;
  return { arrayEdits: state.main.currentUser.schedule[dateOfDay][exercise] };
};

export default connect(mapStateToProps)(withFirebase(TrainingExercise));