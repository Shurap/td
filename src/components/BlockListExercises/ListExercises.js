import React, { Component } from 'react';
import Exercise from './Exercise';
import { connect } from "react-redux";
import styles from './ListExercises.module.css';
import {addToTodayExercises} from '../../actions';
import { bindActionCreators } from 'redux';
import { withFirebase } from '../Firebase';

class ListExercise extends Component {

  onSearch = (enterArray) => {
    if (this.props.searchLabel.length === 0) {
      return enterArray;
    }
    const exitArray = enterArray.filter ((element) => {
      return element.toLowerCase().indexOf(this.props.searchLabel.toLowerCase()) > -1;
    });
    return exitArray;
  }
  
  onSentExercise = (label) => {
 
    const today = new Date().toISOString().split('T')[0];
    const data = {[label]:''};
    this.props.firebase.setDataToBase(`shedule/${today}/`, data);
    
    const arrTodayExercises = [...this.props.todayExercises];
    const index = arrTodayExercises.findIndex(element => label === element);
    index !== -1 ? arrTodayExercises.splice(index, 1) : arrTodayExercises.push(label);
    this.props.addToTodayExercises(arrTodayExercises);
    
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
  todayExercises: state.exercises.todayExercises,
  searchLabel: state.search.searchLabel
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ addToTodayExercises }, dispatch);

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(ListExercise));
