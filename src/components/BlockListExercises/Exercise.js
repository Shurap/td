import React, {Component} from 'react';
import styles from './Exercise.module.css';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { /*addAuthUserData,*/ addAllExercisesToStore } from '../../actions';
import { bindActionCreators } from 'redux';

class Exercise extends Component {

  state = {
    active: false,
    error: null
  }

  /*onSentExercise = () => {
    this.setState({...this.state, active: !this.state.active});
  }*/

  /*
  onDelete = async (e) => {
    const index = this.props.currentUser.exercises.findIndex(element => element === this.props.label);
    const data = [...this.props.currentUser.exercises.slice(0,index), ...this.props.currentUser.exercises.slice(index+1)];
    try {
      e.preventDefault();
      //await this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, data);
      await this.props.firebase.updateDataToBase('exercises', data);
      const user = await this.props.firebase.getWholeUser();
      this.props.addAuthUserData(user);
    }
    catch (error) {
      this.setState({error});
    }
  }
  */

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
      <div className={(this.state.active) ? styles.exercise_selected : styles.exercise_default}>
        <p>Exercise</p>
        {label}  
        <button onClick={this.onDelete}>Del</button>
        <button onClick={() => this.props.onSentExercise(label)}>Set</button>
        {error && <p>{error.message}</p>}
      </div>
    );
  }  
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ /*addAuthUserData,*/ addAllExercisesToStore }, dispatch);
/*const mapStateToProps = (state) => ({ currentUser: state.main.currentUser });*/

export default withFirebase(connect(null/*mapStateToProps*/, mapDispatchToProps)(Exercise));