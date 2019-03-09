import React, { Component } from 'react';
import styles from './AddExercise.module.css';
import {addNewExercise} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withFirebase} from '../Firebase';

class AddExercise extends Component {

  state = {
    label:''
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewExercise(this.state.label);
    // console.log('currentUser - ', this.props.currentUser);
    this.props.firebase.setUserData(this.props.firebase.auth.currentUser.uid, this.props.currentUser);
  }

  render() {
    return (
      <form className={styles.fieldAddExercise} 
            onSubmit={this.onSubmit }>
        <input type="text"
               onChange={this.onChange}
               value={this.state.label} />
        <button>Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addNewExercise}, dispatch);
const mapStateToProps = (state) => ({ currentUser: state.main.currentUser });

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(AddExercise));