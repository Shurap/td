import React, { Component } from 'react';
import TrainingExercise from './TrainingExercise';
import { connect } from "react-redux";
import styles from './DayOfExercises.module.css';
import { withFirebase } from '../Firebase';
import { addArrayEdits } from '../../actions';
import { bindActionCreators } from 'redux';

class DayOfExercises extends Component {

  state = {
    visible: false
  }

  onToggleVisible = () => {
    this.setState({ ...this.state, visible: !this.state.visible });
  }

  onAddEdit = async (exercise, dateOfDay, arrayEdits) => {
    this.onSaveAllEditsToBase(exercise, dateOfDay, arrayEdits);
    let arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    const id = arrayEdit[arrayEdit.length - 1].id
    arrayEdit.push({ wight: '0', count: '0', id: id + 1 });
    this.props.firebase.setDataToBase(`schedule/${dateOfDay}/${exercise}`, arrayEdit);

    arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    this.props.addArrayEdits(dateOfDay, exercise, arrayEdit);
  }

  onSaveAllEditsToBase = (exercise, dateOfDay, arrayEdits) =>
    this.props.firebase.updateDataToBase(`schedule/${dateOfDay}/${exercise}`, arrayEdits);

  render() {

    const { dateOfDay } = this.props;

    const exercises = Object.keys(this.props.todayExercises[dateOfDay]);

    const arrayExercises = exercises.map((element, index) => {
      return (
        <div key={index}>
          <TrainingExercise
            exercise={element}
            onAddEdit={this.onAddEdit}
            onSaveAllEditsToBase={this.onSaveAllEditsToBase}
            dateOfDay={dateOfDay}
          />
        </div>
      );
    });

    return (
      <div className={styles.dayOfExercises}>
        <div className={styles.wrappingDate}>
          {dateOfDay}
          <div>
            <button
              className={(this.state.visible) ? styles.buttonToggleUp : styles.buttonToggleDown}
              onClick={this.onToggleVisible}>
            </button>
          </div>
        </div>
        <div className={(this.state.visible) ? styles.wrappingExercisesVisible : styles.wrappingExercisesHidden}>
          {arrayExercises}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ todayExercises: state.main.currentUser.schedule });
const mapDispatchToProps = (dispatch) => bindActionCreators({ addArrayEdits }, dispatch);

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(DayOfExercises));