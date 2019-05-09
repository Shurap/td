import React, {Component} from 'react';
import styles from './Exercise.module.css';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { addAllExercisesToStore } from '../../actions';
import { bindActionCreators } from 'redux';

class Exercise extends Component {

  state = {
    // active: false,
    error: null
  }

  onDelete = async (e) => {
    try {
      e.preventDefault();
      await this.props.firebase.deleteExerciseFromBase(this.props.label);
      const allExercise = await this.props.firebase.getAllExercisesToStore();
      this.props.addAllExercisesToStore(allExercise);
    }
    catch (error) {
      this.setState({error});
    }
  }

  render() {

    const {label} = this.props;
    const {error} = this.state;

    return (
      // <div className={(this.state.active) ? styles.exercise_selected : styles.exercise_default}>
      <div className={styles.exercise}>
        <p>Exercise</p>
        {label}  
        <button onClick={this.onDelete}>Del</button>
        <button onClick={() => this.props.onSentExercise(label)}>Set</button>
        {error && <p>{error.message}</p>}
      </div>
    );
  }  
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addAllExercisesToStore }, dispatch);

export default withFirebase(connect(null, mapDispatchToProps)(Exercise));