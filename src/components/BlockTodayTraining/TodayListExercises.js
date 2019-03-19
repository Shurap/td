import React, {Component} from 'react';
import TodayExercise from './TodayExercise';
import { connect } from "react-redux";

class TodayListExercises extends Component {
  
  

  render(){
  
    return(
      <div>
        <TodayExercise/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ sentExercise: state.exercises.sentExercise});

export default connect(mapStateToProps)(TodayListExercises);