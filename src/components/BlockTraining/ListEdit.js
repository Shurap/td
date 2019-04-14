import React, { Component } from 'react';
import Edit from './Edit';
import { connect } from "react-redux";
import styles from './ListEdit.module.css';

class ListEdit extends Component {

  render() {

    const {dateOfDay, exercise} = this.props;
    const arrayOfEdit = this.props.currentListEdit[dateOfDay][exercise];

    const arrayEdit = arrayOfEdit.map((element, index) => {
      return (
        <div key={index}>
          <Edit
            labelCount={element.count}
            labelWight={element.wight}
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
// const mapDispatchToProps = (dispatch) => bindActionCreators({ addToScheduleExercise }, dispatch);

// export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(ListExercise));

export default connect(mapStateToProps)(ListEdit);
