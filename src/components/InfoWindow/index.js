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
    this.props.firebase.updateDataToBase(`exercises/${this.props.showModalParent}`, {data: this.props.showModalData});
    this.props.changeShowStatusModal(false);
    const allExercise = await this.props.firebase.getAllExercisesToStore();
    this.props.addAllExercisesToStore(allExercise);
  }

  render() {
    return(
      <div className={(this.props.showModal) ? styles.infoWindowTrue : styles.infoWindowFalse}>
        <h1>Info</h1>
        <textarea 
          onChange={this.onChange}
          value={this.props.showModalData}>
        </textarea>
        <button onClick={this.onCloseModal}>Close</button>
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