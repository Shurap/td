import React, {Component} from 'react';
import Exercise from '../Exercise';
import { connect } from "react-redux";

class ListExercise extends Component {
 
  render() {
    
    
    //STUB
    // const label = this.props.currentListExercises ? this.props.currentListExercises : [1,2,3];
    const label = this.props.currentListExercises;

    const arrayExercises = label.map (element => {
      return(
        <div key={element.id}>
          <Exercise label={element}/>
        </div>  
      );
    });

    return (
      <div>  
        {arrayExercises}  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({currentListExercises: state.main.currentUser.exercises});

export default connect(mapStateToProps)(ListExercise);
