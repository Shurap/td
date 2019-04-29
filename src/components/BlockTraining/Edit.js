import React, { Component } from 'react';
import styles from './Edit.module.css'
import { withFirebase } from '../Firebase';
import { addArrayEdits } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addNumbersToStore } from '../../actions';

class Edit extends Component {

  onDeleteEdit = async (dateOfDay, exercise, count) => {
    let arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    arrayEdit.splice(count, 1);
    this.props.firebase.setDataToBase(`schedule/${dateOfDay}/${exercise}`, arrayEdit);
    arrayEdit = await this.props.firebase.getArrayEditFromBase(exercise, dateOfDay);
    this.props.addArrayEdits(dateOfDay, exercise, arrayEdit);
  }

  onChange = (e, dateOfDay, exercise, count) => {
    this.props.addNumbersToStore(e.target.value, dateOfDay, exercise, e.target.name, count);
  }

  render() {

    const { labelCount, labelWight, count, dateOfDay, exercise } = this.props

    return (
      <div className={styles.edit} onClick={(e) => { console.log('Edit'); e.stopPropagation() }}>
        {/* <p>Edit</p> */}
        <div className={styles.wrapperButtons}>
          <button className={styles.buttonDel} onClick={() => this.onDeleteEdit(dateOfDay, exercise, count)}></button>
          <button className={styles.buttonZoom}></button>
        </div>
        <p className={styles.textCount}>{count + 1}</p>
        <div className={styles.wrapperText}>
          <p>вес</p>
          <p>раз</p>
        </div>
        <div className={styles.wrapperEdits}>
          <input
            type="text"
            maxLength="3"
            defaultValue={labelCount}
            name={'count'}
            onChange={(e) => this.onChange(e, dateOfDay, exercise, count)}
          ></input>
          {/* <p>/</p> */}
          <input
            type="text"
            defaultValue={labelWight}
            name={'wight'}
            onChange={(e) => this.onChange(e, dateOfDay, exercise, count)}
          ></input>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addArrayEdits, addNumbersToStore }, dispatch);

export default withFirebase(connect(null, mapDispatchToProps)(Edit));