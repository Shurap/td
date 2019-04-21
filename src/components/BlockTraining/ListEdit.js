import React, { Component } from 'react';
import Edit from './Edit';
import { connect } from "react-redux";
import styles from './ListEdit.module.css';

class ListEdit extends Component {

  render() {

    const {dateOfDay, exercise} = this.props;
    const arrayOfEdit = this.props.currentListEdit[dateOfDay][exercise];
    // console.log('array', arrayOfEdit);

    const arrayEdit = arrayOfEdit.map((element, index) => {
      return (
        <div key={index}>
          <Edit
            labelCount={element.count}
            labelWight={element.wight}
            count={index}
            dateOfDay={dateOfDay}
            exercise={exercise}
          />
        </div>
      );
    }); 

    return (
      <div className={styles.listEdit}>
        <p>ListEdit</p>
        {arrayEdit}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({currentListEdit: state.main.currentUser.schedule});

export default connect(mapStateToProps)(ListEdit);
