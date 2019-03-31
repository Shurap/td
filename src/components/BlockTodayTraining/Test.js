import React, {Component} from 'react';
import { withFirebase } from '../Firebase';

class Test extends Component {

  testFunction = () => {
    this.props.firebase.setData('exercises', ['test1']);
  }
  
  render(){
  
    return(
      <div>
        <button onClick={this.testFunction}>Press test</button>
      </div>
    )
  }
}

export default withFirebase(Test);