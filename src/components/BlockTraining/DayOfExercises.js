import React, { Component } from 'react';
import TrainingExercise from './TrainingExercise';
import { connect } from "react-redux";
import styles from './DayOfExercises.module.css';
import { withFirebase } from '../Firebase';
import { addArrayEdits } from '../../actions';
import { bindActionCreators } from 'redux';

class DayOfExercises extends Component {

  onAddEdit = async (exercise, dateOfDay) => {
    let arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    arrayEdit.push({ wight: '0', count: '0' });
    this.props.firebase.setDataToBase(`schedule/${dateOfDay}/${exercise}`, arrayEdit);

    arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    this.props.addArrayEdits(dateOfDay, exercise, arrayEdit);
  }

  render() {

    const { dateOfDay } = this.props;

    const exercises = Object.keys(this.props.todayExercises[dateOfDay]);

    const arrayExercises = exercises.map((element, index) => {
      return (
        <div key={index}>
          <TrainingExercise
            exercise={element}
            onAddEdit={this.onAddEdit}
            dateOfDay={dateOfDay}
          />
        </div>
      );
    });

    return (
      <div className={styles.dayOfExercises}>
        {/* <p>DayOfExercises</p> */}
        <div className={styles.wrappingUp}>
          {dateOfDay}
          <button></button>
        </div>
        {arrayExercises}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ todayExercises: state.main.currentUser.schedule });
const mapDispatchToProps = (dispatch) => bindActionCreators({ addArrayEdits }, dispatch);

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(DayOfExercises));
