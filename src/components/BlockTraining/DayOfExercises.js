import React, { Component } from 'react';
import TrainingExercise from './TrainingExercise';
// import EditCount from './EditCount';
import { connect } from "react-redux";
import styles from './DayOfExercises.module.css';

class DayOfExercises extends Component {



  render() {

    // const daysExercises = (this.props.dayExercises) ? this.props.dayExercises : {};
    // const daysExercisesDates = Object.keys(daysExercises)
    
    // const arrayExercises = daysExercisesDates.map((element, index) => {
    //   return (
    //     <div key={index}>
    //       <DayOfExercises dateOfDay={element}
    //       />
    //     </div>
    //   );
    // });



    const { dateOfDay } = this.props;

    const exercises = Object.keys(this.props.todayExercises[dateOfDay]);

    const arrayExercises = exercises.map((element, index) => {
      return (
        <div key={index}>
          <TrainingExercise exercise={element}/>
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

const mapStateToProps = (state) => ({ todayExercises: state.main.currentUser.shedule });

export default connect(mapStateToProps)(DayOfExercises);