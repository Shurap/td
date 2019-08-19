import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryBox extends Component {


  render() {

    console.log(this.props.threeExercises);

    return (
      <div>
        HistoryBox
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  threeExercises: state.main.currentUser.schedule
});

export default connect(mapStateToProps)(HistoryBox);
