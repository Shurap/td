import React, { Component } from 'react';
import styles from './AddExercise.module.css';
import { addAuthUserData } from '../../actions';
import { addExerciseToStoreExercise } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';

class AddExercise extends Component {

  state = {
    label: '',
    error: null
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.currentUser.exercises !== prevProps.currentUser.exercises) {
  //     console.log('didupdate!');
  //   }
  // }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = async (e) => {

    // const data = (this.props.currentUser.exercises) ? this.props.currentUser.exercises.concat(this.state.label) : [this.state.label];
    const data = {
      [this.state.label]: {
        date: (new Date()).toString(),
        // name: this.state.label,
        data: ''
      }
    }

    try {
      e.preventDefault();
      // await this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, data);
      await this.props.firebase.setDataToBase('exercises', data);

      //-----------------
      const newExercise = await this.props.firebase.getDataToStoreExercise(this.state.label);
      this.props.addExerciseToStoreExercise(newExercise);
      //------------------

      // const user = await this.props.firebase.getUserById();
      // this.props.addAuthUserData(user);
    }
    catch (error) {
      this.setState({ error });
    }
  }

  render() {

    const { error } = this.state;

    return (
      <form className={styles.fieldAddExercise}
        onSubmit={this.onSubmit}>
        <p>AddExercise</p>
        <input type="text"
          onChange={this.onChange}
          value={this.state.label} />
        <button>Add</button>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addAuthUserData, addExerciseToStoreExercise }, dispatch);
const mapStateToProps = (state) => ({ currentUser: state.main.currentUser });

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(AddExercise));