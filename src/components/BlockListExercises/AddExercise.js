import React, { Component } from 'react';
import styles from './AddExercise.module.css';
import { addAuthUserData } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';

class AddExercise extends Component {

  state = {
    label: '',
    error: null
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
    
    const data = (this.props.currentUser.exercises) ? this.props.currentUser.exercises.concat(this.state.label) : [this.state.label];  
    
    try {
      e.preventDefault();
      await this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, data);
      const user = await this.props.firebase.getUserById(this.props.firebase.auth.currentUser.uid);
      this.props.addAuthUserData(user);
    }
    catch (error) {
      this.setState({error});
    }

    // Promises:
    // this.props.firebase.setExercisesData(this.props.firebase.auth.currentUser.uid, this.props.currentUser.exercises.concat(this.state.label))
    //   .then (() => this.props.firebase.getUserById(this.props.firebase.auth.currentUser.uid))
    //   .then ((res) => console.log('!!!!!!!!!!!!!!!!!!!',res));    
  }

  render() {

    const {error} = this.state;

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

const mapDispatchToProps = (dispatch) => bindActionCreators({ addAuthUserData }, dispatch);
const mapStateToProps = (state) => ({ currentUser: state.main.currentUser });

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(AddExercise));