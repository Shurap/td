import React, { Component } from 'react';
import TodayExercise from './TodayExercise';
import { connect } from "react-redux";

class TodayListExercises extends Component {


  render() {

    const array = (this.props.todayExercises)

    const arrayExercises = array.map((element, index) => {

      return (
        <div key={index}>
          <TodayExercise
            label={element}
          />
        </div>
      );
    });


    return (
      <div>
        {arrayExercises}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ todayExercises: state.exercises.todayExercises });

export default connect(mapStateToProps)(TodayListExercises);