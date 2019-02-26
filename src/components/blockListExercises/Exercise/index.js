import React, {Component} from 'react';

export default class Exercise extends Component {
 
  render() {
    
    const {label} = this.props;

    return (
      <div>
        {label}  
      </div>
    );
  }  
}