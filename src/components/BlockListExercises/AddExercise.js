import React, { Component } from 'react';
import styles from './AddExercise.module.css';
import { addAuthUserData } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';

class AddExercise extends Component {

  state = {
    label: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser.exercises !== prevProps.currentUser.exercises) {
      console.log('didupdate!');
    }
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      await this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, this.props.currentUser.exercises.concat(this.state.label));
      const user = await this.props.firebase.getUserById(this.props.firebase.auth.currentUser.uid);
      this.props.addAuthUserData(user);
    }
    catch (error) {
      //--------------
    }
    // Promises:
    // this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, this.props.currentUser.exercises.concat(this.state.label))
    //   .then (() => this.props.firebase.getUserById(this.props.firebase.auth.currentUser.uid))
    //   .then ((res) => console.log('!!!!!!!!!!!!!!!!!!!',res));    
  }

  render() {
    return (
      <form className={styles.fieldAddExercise}
        onSubmit={this.onSubmit}>
        <p>AddExercise</p>
        <input type="text"
          onChange={this.onChange}
          value={this.state.label} />
        <button>Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addAuthUserData }, dispatch);
const mapStateToProps = (state) => ({ currentUser: state.main.currentUser });

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(AddExercise));