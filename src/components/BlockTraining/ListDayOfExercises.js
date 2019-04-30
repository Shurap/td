import React, { Component } from 'react';
import DayOfExercises from './DayOfExercises';
import { connect } from "react-redux";
import styles from './ListDayOfExercises.module.css';

class ListDayOfExercises extends Component {

  render() {

    const daysExercises = (this.props.dayExercises) ? this.props.dayExercises : {};
    const daysExercisesDates = Object.keys(daysExercises)

    const arrayDays = daysExercisesDates.map((element, index) => {
      return (
        <div key={index}>
          <DayOfExercises dateOfDay={element}
          />
        </div>
      );
    });

    return (
      <div className={styles.listDayOfExercises}>
        {arrayDays}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ dayExercises: state.main.currentUser.schedule });

export default connect(mapStateToProps)(ListDayOfExercises);