import React, { Component } from 'react';
import TrainingExercise from './TrainingExercise';
// import EditCount from './EditCount';
import { connect } from "react-redux";
import styles from './DayOfExercises.module.css';

class DayOfExercises extends Component {

  onAddEdit = () => {
    console.log('Click');
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
        <p>DayOfExercises</p>
        {dateOfDay}
        {arrayExercises}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ todayExercises: state.main.currentUser.schedule });

export default connect(mapStateToProps)(DayOfExercises);