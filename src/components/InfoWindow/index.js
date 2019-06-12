import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './indexInfoWindow.module.css';
import { bindActionCreators } from 'redux';
import { changeShowStatusModal, addModalData, addAllExercisesToStore } from '../../actions';
import { withFirebase } from '../Firebase';

class InfoWindow extends Component {

  onChange = (e) => {
    this.props.addModalData(e.target.value);
  }

  onCloseModal = async () => {
    this.props.firebase.updateDataToBase(`exercises/${this.props.showModalParent}`, { data: this.props.showModalData });
    this.props.changeShowStatusModal(false);
    const allExercise = await this.props.firebase.getAllExercisesToStore();
    this.props.addAllExercisesToStore(allExercise);
  }

  onExitModal = () => {
    this.props.changeShowStatusModal(false);
  }

  render() {
    return (
      <div className={(this.props.showModal) ? styles.infoWindowTrue : styles.infoWindowFalse}>
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
              <p>{this.props.showModalParent}</p>
            </div>
          </div>
          <textarea
            className={styles.textarea}
            onChange={this.onChange}
            value={this.props.showModalData}>
          </textarea>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeShowStatusModal,
  addModalData,
  addAllExercisesToStore
}, dispatch);

const mapStateToProps = (state) => ({
  showModal: state.showModal.showModal,
  showModalData: state.showModal.data,
  showModalParent: state.showModal.parent
});

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(InfoWindow));