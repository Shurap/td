import React, { Component } from 'react';
import Exercise from './Exercise';
import { connect } from "react-redux";
import styles from './ListExercises.module.css';
import { addToScheduleExercise } from '../../actions';
import { bindActionCreators } from 'redux';
import { withFirebase } from '../Firebase';

class ListExercise extends Component {

  state = {
    error: null
  }

  onSearch = (enterArray) => {
    if (this.props.searchLabel.length === 0) {
      return enterArray;
    }
    const exitArray = enterArray.filter((element) => {
      return element.toLowerCase().indexOf(this.props.searchLabel.toLowerCase()) > -1;
    });
    return exitArray;
  }

  onSentExercise = async (label) => {

    const today = new Date().toISOString().split('T')[0];
    const data = { [label]: '33' };
    try {
      await this.props.firebase.setDataToBase(`schedule/${today}/`, data);
      const exerciseToStore = await this.props.firebase.getTrainingExerciseToStore(label, today);
      this.props.addToScheduleExercise(exerciseToStore, today);
    }
    catch (error) {
      this.setState({ error });
    }
  }

  render() {

    const label = (this.props.currentListExercises) ? this.props.currentListExercises : {};
    const labelBeforeFilter = Object.keys(label);
    const labelAfterFilter = this.onSearch(labelBeforeFilter);

    const arrayExercises = labelAfterFilter.map((element, index) => {
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
  searchLabel: state.search.searchLabel
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ addToScheduleExercise }, dispatch);

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(ListExercise));
