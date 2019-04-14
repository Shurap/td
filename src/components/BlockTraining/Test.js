import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Test extends Component {

  testFunction = () => {
    const data = {
      user: {
        schedule: {
          1: '11',
          2: '22',
          3: '33'
        },
      }
    }
    const newData = {4: '44'}
    console.log('1 - ', data);
    // console.log('2 - ', {...data, user: {...data.user, schedule: {...data.user.schedule, ...newData}}});
    console.log('2 - ', data.user.schedule);
    console.log('3 - ', {...data.user.schedule, ...newData})
    // console.log('4 - ', {...data, ...data.user: {}});
    


  }

  testFunction1 = () => {
    this.props.firebase.getWholeUser();
  }

  testFunction2 = () => {
    this.props.firebase.getDataToStore('exercises/z1');
  }

  testFunction3 = () => {
    this.props.firebase.getData();
  }

  render() {

    return (
      <div>
        <button onClick={this.testFunction}>Press test</button>
        <button onClick={this.testFunction1}>Press test1</button>
        <button onClick={this.testFunction2}>Press test2</button>
        <button onClick={this.testFunction3}>Press to get data from bass</button>
      </div>
    )
  }
}

export default withFirebase(Test);