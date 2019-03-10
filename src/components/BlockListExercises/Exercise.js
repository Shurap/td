import React, {Component} from 'react';
import styles from './Exercise.module.css';

export default class Exercise extends Component {

  state = {
    active: false
  }

  onToggleSelected = () => {
    this.setState({...this.state, active: !this.state.active});
  }

  render() {

    const {label} = this.props;

    return (
      <div 
        className={(this.state.active) ? styles.exercise_selected : styles.exercise_default} 
        onClick={this.onToggleSelected}>
        <p>Exercise</p>
        {label}  
      </div>
    );
  }  
}