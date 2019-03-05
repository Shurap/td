import React, {Component} from 'react';
import Exercise from './Exercise';
import { connect } from "react-redux";
import styles from './ListExercises.module.css';

class ListExercise extends Component {
 
  render() {
    
    
    //STUB
    // const label = this.props.currentListExercises ? this.props.currentListExercises : [1,2,3];
    const label = this.props.currentListExercises;

    const arrayExercises = label.map ((element, index)  => {
      return(
        <div className={styles.fieldListExercises} 
             key={index}>
          <Exercise 
            label={element}
            selected
          />
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
