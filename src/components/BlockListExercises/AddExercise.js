import React, { Component } from 'react';
import styles from './AddExercise.module.css';
import { addAuthUserData } from '../../actions';
import { addAllExercisesToStore } from '../../actions';
import { addSearchLabel } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';

class AddExercise extends Component {

  state = {
    error: null
  }

  onChange = (e) => {
    this.props.addSearchLabel(e.target.value);
  }

  onCancel = () => {
    this.props.addSearchLabel('');
  }

  onSubmit = async (e) => {
    const data = {
      [this.props.searchLabel]: {
        date: (new Date()).toString(),
        data: ''
      }
    }

    try {
      e.preventDefault();
      await this.props.firebase.updateDataToBase('exercises', data);
      const allExercise = await this.props.firebase.getAllExercisesToStore();
      this.props.addAllExercisesToStore(allExercise);
    }

    catch (error) {
      this.setState({ error });
    }
  }

  render() {

    const { error } = this.state;

    return (
      <div className={styles.fieldAddExercise}>
        <form className={styles.wrapperForm}
          onSubmit={this.onSubmit}>
          {/* <p>AddExercise</p> */}
          <button className={styles.buttonOnForm}></button>
          <input type="text"
            onChange={this.onChange}
            value={this.props.searchLabel} />
          <span className={styles.underEdit}></span>  
          {error && <p>{error.message}</p>}
        </form>
        <button 
          className={styles.buttonCansel} 
          onClick={this.onCancel}>
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addAuthUserData,
  addAllExercisesToStore,
  addSearchLabel
}, dispatch);

const mapStateToProps = (state) => ({ searchLabel: state.search.searchLabel });

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(AddExercise));