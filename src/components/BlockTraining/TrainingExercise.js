import React, { Component } from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';
import { withFirebase } from '../Firebase';
import { connect } from "react-redux";

class TrainingExercise extends Component {

  state = {
    status: 'saved' //'saved''ready'
  }

  onSetStatusButtonSave = (statusValue) => {this.setState({...this.state, status: statusValue})};

  render() {

    const { exercise, dateOfDay } = this.props;

    return (
      <div className={styles.trainingExercise}>
        <div className={styles.wrappingExercise}>
          <div className={styles.wrappingButtons}>
            <button
              className={styles.buttonAdd}
              onClick={() => {
                this.props.onAddEdit(exercise, dateOfDay, this.props.arrayEdits);
                this.onSetStatusButtonSave('saved');
              }}
            ></button>
            <button
              className={(this.state.status === 'saved') ? styles.buttonSaved : styles.buttonReady}
              onClick={() => {
                this.props.onSaveAllEditsToBase(exercise, dateOfDay, this.props.arrayEdits);
                this.onSetStatusButtonSave('saved');
              }}
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
            onSetStatusButtonSave = {this.onSetStatusButtonSave}
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