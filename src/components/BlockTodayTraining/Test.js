import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Test extends Component {

  testFunction = () => {
    const data = {
      run3: {
        date: (new Date()).toString(),
        name: 'run',
        data: ''
      }
    }
    this.props.firebase.setData('exercises', data);
  }

  testFunction1 = () => {
    this.props.firebase.getWholeUser();
  }

  render() {

    return (
      <div>
        <button onClick={this.testFunction}>Press test</button>
        <button onClick={this.testFunction1}>Press test1</button>
      </div>
    )
  }
}

export default withFirebase(Test);