import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from './History'

class HistoryBox extends Component {

  getThreeExercises = () => {

    let result = [];

    if (this.props.allExercises) {

      const array = []
      for (const prop in this.props.allExercises) {
        for (const nextProp in this.props.allExercises[prop]) {
          if (nextProp === this.props.findExercise) {
            const arrayProps = [];
            this.props.allExercises[prop][nextProp].forEach(element => {
              arrayProps.push(element);
            });
            array.push({ [prop]: arrayProps });
          }
        }
      }
      result = [
        array[array.length - 3],
        array[array.length - 2],
        array[array.length - 1]
      ];
      return result;
    }
    return result = [];
  }



  render() {

    const result = this.getThreeExercises();
    const threeExercises = result.map((element, index) => {
      if (element) {
        return (
          <div key={index}>
            <History
              name={Object.keys(element)[0]}
              data={Object.values(element)[0]}
            />
          </div>
        )
      }
    })


    return (
      <div>
        HistoryBox
        {threeExercises}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allExercises: state.main.currentUser.schedule,
  findExercise: state.showModal.exerciseName
});

export default connect(mapStateToProps)(HistoryBox);