import React, { Component } from 'react';

export default class History extends Component {

  render() {
    
    const dataIn = this.props.data.map((element, index) => {
      return (
        <div key={index}>
          {`count: ${element.count} wight: ${element.wight}`}
        </div>
      )
    });

    return (
      <div>
        History
        {this.props.name}
        {dataIn}

      </div>
    )
  }
}