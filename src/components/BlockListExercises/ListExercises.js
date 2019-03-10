import React, { Component } from 'react';
import Exercise from './Exercise';
import { connect } from "react-redux";
import styles from './ListExercises.module.css';

class ListExercise extends Component {

  render() {

    const label = (this.props.currentListExercises) ? this.props.currentListExercises : [];

    const arrayExercises = label.map((element, index) => {
      return (
        <div key={index}>
          <Exercise
            label={element}
            selected
          />
        </div>
      );
    });

    return (
      <div className={styles.fieldListExercises}>
        <p>ListExercises</p>
        {arrayExercises}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentListExercises: state.main.currentUser.exercises, currentUser: state.main.currentUser});

export default connect(mapStateToProps)(ListExercise);
