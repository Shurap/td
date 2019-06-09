import React, { Component } from 'react';
import ListEdit from './ListEdit';
import styles from './TrainingExercise.module.css';
import { withFirebase } from '../Firebase';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeShowStatusModal } from '../../actions';

class TrainingExercise extends Component {

  state = {
    status: 'saved' //'saved''ready'
  }

  onSetStatusButtonSave = (statusValue) => { this.setState({ ...this.state, status: statusValue }) };

  onShowModal = async () => {
    const data = await this.props.firebase.getDataFromBase(`exercises/${this.props.exercise}/data`);
    this.props.changeShowStatusModal(true, this.props.exercise, data);
  }

  render() {

    const { exercise, dateOfDay } = this.props;

    return (
      <div className={styles.trainingExercise}>
        <div className={styles.wrappingExercise}>
          <div className={styles.wrappingButtons}>
            <button
              className={styles.buttonInfo}
              onClick={this.onShowModal}>
            </button>
            <button
              className={styles.buttonAdd}
              onClick={() => {
                this.props.onAddEdit(exercise, dateOfDay, this.props.arrayEdits);
                this.onSetStatusButtonSave('saved');
              }}
            ></button>
            <button
              className={(this.state.status === 'saved') ? styles.buttonSaved : styles.buttonReady}
              onClick={() => {
                this.props.onSaveAllEditsToBase(exercise, dateOfDay, this.props.arrayEdits);
                this.onSetStatusButtonSave('saved');
              }}
            ></button>
            <button className={styles.buttonDel}></button>
          </div>
          <div className={styles.wrappingExerciseName}>
            {exercise}
          </div>
        </div>
        <div className={styles.wrappingSets}>
          <ListEdit
            dateOfDay={dateOfDay}
            exercise={exercise}
            onSetStatusButtonSave={this.onSetStatusButtonSave}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { exercise, dateOfDay } = ownProps;
  return { arrayEdits: state.main.currentUser.schedule[dateOfDay][exercise] };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeShowStatusModal }, dispatch);

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(TrainingExercise));