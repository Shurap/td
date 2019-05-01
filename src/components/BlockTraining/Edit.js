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

  // componentDidMount ()

  render() {

    const { labelCount, labelWight, count, dateOfDay, exercise } = this.props

    return (
      <div className={styles.edit}>
        <div className={styles.wrapperButton}>
          <button className={styles.buttonDel} onClick={() => this.onDeleteEdit(dateOfDay, exercise, count)}></button>
        </div>
        <div className={styles.wrapperCount}>
          <p>set {count + 1}</p>
        </div>
        <div className={styles.wrapperText}>
          <p>weight</p>
          <p>repeat</p>
        </div>
        <div className={styles.wrapperEdits}>
          <input
            type="text"
            maxLength="3"
            defaultValue={labelCount}
            name={'count'}
            onChange={(e) => this.onChange(e, dateOfDay, exercise, count)}
          ></input>
          <input
            type="text"
            maxLength="3"
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