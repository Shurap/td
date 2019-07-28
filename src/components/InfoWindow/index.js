import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './indexInfoWindow.module.css';
import { bindActionCreators } from 'redux';
import { changeShowStatusModal, addModalInfoData, addAllExercisesToStore, addModalExerciseName, addAuthUserData } from '../../actions';
import { withFirebase } from '../Firebase';

class InfoWindow extends Component {

  state = {
    oldNameExercise: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.oldNameExercise !== this.state.oldNameExercise) this.setState({ oldNameExercise: this.props.exerciseNameModal });
  }

  onChangeData = (e) => {
    this.props.addModalInfoData(e.target.value);
  }

  onChangeExerciseName = (e) => {
    this.props.addModalExerciseName(e.target.value);
  }

  onCloseModal = async () => {

    this.props.firebase.updateDataToBase(`exercises/${this.props.exerciseNameModal}`, { data: this.props.infoDataModal });

    if (this.props.exerciseNameModal !== this.props.exerciseNewNameModal) {
      await this.props.firebase.findAndReplace(this.props.exerciseNameModal, this.props.exerciseNewNameModal);
    }
    console.log('--------------------------------------');
    // const allExercise = await this.props.firebase.getAllExercisesToStore();
    // tis.props.addAllExercisesToStore(allExercise);


    this.props.firebase.getWholeUser()
      .then((currentUserData) => this.props.addAuthUserData(currentUserData));
    this.props.changeShowStatusModal(false);
  }

  onExitModal = () => {
    this.props.changeShowStatusModal(false);
  }

  render() {

    return (
      <div className={(this.props.statusShowModal) ? styles.infoWindowTrue : styles.infoWindowFalse}>
        <div className={styles.window}>
          <div className={styles.up}>
            <p>Additional information to the exercise</p>
          </div>
          <div className={styles.middle}>
            <div className={styles.wrappingButtons}>


              <button
                className={styles.buttonSave}
                onClick={this.onCloseModal}>
              </button>


              <button
                className={styles.buttonDel}
                onClick={this.onExitModal}>
              </button>
            </div>
            <div className={styles.wrappingExerciseName}>

              <textarea
                className={styles.textarea}
                onChange={this.onChangeExerciseName}
                value={this.props.exerciseNewNameModal}>

              </textarea>
            </div>
          </div>
          <textarea
            className={styles.textarea}
            onChange={this.onChangeData}
            value={this.props.infoDataModal}>
          </textarea>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeShowStatusModal,
  addModalInfoData,
  addAllExercisesToStore,
  addModalExerciseName,
  addAuthUserData
}, dispatch);

const mapStateToProps = (state) => ({
  statusShowModal: state.showModal.showModal,
  exerciseNameModal: state.showModal.exerciseName,
  exerciseNewNameModal: state.showModal.exerciseNewName,
  infoDataModal: state.showModal.infoData,
});

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(InfoWindow));