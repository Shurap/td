import React, { Component } from 'react';
import styles from './Exercise.module.css';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { addAllExercisesToStore, changeShowStatusModal } from '../../actions';
import { bindActionCreators } from 'redux';

class Exercise extends Component {

  state = {
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
      this.setState({ error });
    }
  }

  onShowModal = async () => {
    const data = await this.props.firebase.getDataFromBase(`exercises/${this.props.label}/data`);
    this.props.changeShowStatusModal(true, this.props.label, data);
  }

  render() {

    const { label } = this.props;
    const { error } = this.state;

    return (
      <div className={styles.exercise}>
        <div className={styles.wrappingButtons}>
          <button
            className={styles.buttonInfo}
            onClick={this.onShowModal}>
          </button>
          <button
            className={styles.buttonDel}
            onClick={this.onDelete}>
          </button>
          <button
            className={styles.buttonAdd}
            onClick={() => this.props.onSentExercise(label)}>
          </button>
        </div>
        <div className={styles.wrappingExerciseName}>
          {label}
        </div>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  addAllExercisesToStore,
  changeShowStatusModal 
}, dispatch);

export default withFirebase(connect(null, mapDispatchToProps)(Exercise));