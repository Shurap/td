import React, { Component } from 'react';
import Exercise from './Exercise';
import { connect } from "react-redux";
import styles from './ListExercises.module.css';
import {addToTodayExercises} from '../../actions';
import { bindActionCreators } from 'redux';

class ListExercise extends Component {

  onSentExercise = (label) => {
    const arrTodayExercises = [...this.props.todayExercises];
    const index = arrTodayExercises.findIndex(element => label === element);
    index !== -1 ? arrTodayExercises.splice(index, 1) : arrTodayExercises.push(label);
    this.props.addToTodayExercises(arrTodayExercises);
  } 
  
  render() {

    const label = (this.props.currentListExercises) ? this.props.currentListExercises : [];

    const arrayExercises = label.map((element, index) => {
      return (
        <div key={index}>
          <Exercise
            label={element}
            onSentExercise={this.onSentExercise}
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

const mapStateToProps = (state) => ({ 
  currentListExercises: state.main.currentUser.exercises,
  currentUser: state.main.currentUser,
  todayExercises: state.exercises.todayExercises
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ addToTodayExercises }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListExercise);
